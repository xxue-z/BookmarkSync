# bookmarkhub-v1 — BookmarkHub v1.0.3 还原工程

本目录是把**官方商店版 BookmarkHub v1.0.3（编译产物，源自 `.temp/1.0.3_0`）**还原为「可读、可编辑、可重新打包」的源码形态工程。

## 诚实边界（重要）

- 编译产物**不含 source map**，原始 TypeScript / 组件拆分 / 注释 / 命名**无法无损恢复**；本工程是"美化 + 逆向标注"出的可维护基线，不是原作者源码。
- `assets/bookmarkhub_core_bg-*.wasm` 是 Rust 同步核心（287KB），**二进制保留、不可还原为 Rust 源码**，通过 `chunks/hash-Cx2ffm9Z.js` 的胶水代码调用。
- 代码变量名多被压缩为单字母（`s/t/e/a`），但**类名、方法名、i18n key、字符串全部保留**，行为与 v1.0.3 完全一致。

## 目录结构

```
bookmarkhub-v1/
├─ original/          # 1.0.3 原始编译产物备份（含 _metadata 已移除）
├─ src/               # 可编辑源码形态（美化后的 JS + 资源）
│  ├─ background.js   # 后台：SyncEngine（class L）、SyncSafetyError（class P）、同步/自动同步/强制同步、安全阈值、通知、告警调度
│  ├─ popup/popup.js  # 弹窗 UI：注册对话框 Ve、主界面 Xe
│  ├─ options/options.js # 设置页：主设置页 Kr + 分区组件（存储/历史/日志/工具箱/关于）
│  ├─ chunks/
│  │  ├─ hash-Cx2ffm9Z.js          # 同步核心/wasm 胶水 + 存储适配器（GitHub/WebDAV 等）
│  │  ├─ I18nProvider-bZ79bPbq.js  # i18next 国际化
│  │  ├─ vendor-ui-Piys8gOI.js     # shadcn/Radix/Tailwind UI 库
│  │  ├─ vendor-utils-bU8bXqsc.js  # 工具函数
│  │  ├─ vendor-sentry-*.js / sentry--tCLaZao.js  # Sentry
│  │  └─ vendor-react-l0sNRNKZ.js  # 空文件（占位）
│  ├─ assets/bookmarkhub_core_bg-*.wasm  # Rust 核心（二进制）
│  ├─ icons/  locales/  _locales/  # 图标 + 30 种语言
│  └─ src/popup|options/index.html # 两个入口页
└─ manifest.json       # MV3 清单（含 identity、memoload.com、sentry.io 等权限）
```

## 重新打包

```powershell
cd bookmarkhub-v1
npm run repack
# 或直接: powershell -ExecutionPolicy Bypass -File scripts/repack.ps1
```

产出：`dist/`（未压缩版）+ `bookmarkhub-1.0.3.zip`（可加载到 Chrome `chrome://extensions` 开发者模式）。

## 登录态 / Pro 订阅门禁位置（下一步"开放本地功能"的靶点）

| 文件 | 位置 | 逻辑 |
|---|---|---|
| `src/background.js` | 函数 `ot()`（自动同步包装） | 无 `userId`（未注册）→ 提示"Auto-sync requires user registration"，**禁用自动同步** |
| `src/background.js` | 函数 `ct()`（鉴权清理） | `user.type !== "pro"` → 清理同步告警并**关闭 enableAutoSync** |
| `src/popup/popup.js` | 组件 `Ve`（注册对话框）+ upgradeCard/upgradeDialog 相关 JSX | 引导登录官网 memoload.com 注册、升级 Pro |
| `src/options/options.js` | Pro 分区（Time Machine 历史、自动备份、更多存储节点）解锁提示 | 订阅后才开放 |

## 与仓库旧版的关系

仓库根目录的 `src/`（旧 v0.0.6 WXT 源码版）与本目录**并列、互不影响**；两份历史都保留在 git 中。
## 本地解锁（去除登录态/订阅态，开放全部功能）

运行 `node scripts/patch-unlock.mjs`（幂等，已应用会自动跳过），然后 `npm run repack` 重新打包。
改动点（均为"行为不变、门禁放行"的最小补丁）：

| # | 文件 | 改动 | 效果 |
|---|---|---|---|
| 1-2 | `src/chunks/sentry--tCLaZao.js` | `register` 记录本地 handler 映射；`trigger` 直接分发，不再依赖远程许可 token / WASM 校验 | 自动同步、强制推送/拉取、Time Machine、同步配置等事件本地放行 |
| 3 | 同上 | `hasPermission` 恒返回 `true` | 所有功能权限检查通过 |
| 4 | 同上 | `is()` 恒返回 `{type:"pro", userId:"local-user"}` | 后台 `ot()`/`ct()` 的"需注册/非 Pro"检查直接通过，自动同步不再被禁用 |
| 5 | `src/chunks/I18nProvider-bZ79bPbq.js` | LicenseContext 的 `isPro`/`hasPermission` 恒为 `true` | popup/options 全部 UI 门禁（升级对话框、Pro 分区、历史/备份解锁提示）隐藏 |
| 6-8 | `src/popup/popup.js` | 用户区恒走"已登录"分支；Dashboard、登出菜单项改为无操作 | 界面不再出现登录按钮/注册对话框/订阅入口 |
| 9 | `src/manifest.json` | 移除 `optional_permissions: ["identity"]` | 去掉 OAuth 登录态相关权限 |

说明：
- `memoload.com` 主机权限**保留**：WASM 同步核心（`bookmarkhub_core`）做合并/统计时需要一个匿名许可 token（`/api/license`，不登录也签发），去掉会导致同步失败；其作用只是基础许可，不含订阅判定。
- Sentry（`sentry.io` 遥测）与各同步适配器（GitHub/Gitee/GitLab/微软）未改动，仅移除"登录/订阅"本身。
- 校验方式：`node --check src/chunks/sentry--tCLaZao.js src/chunks/I18nProvider-bZ79bPbq.js src/popup/popup.js`；manifest 用 `JSON.parse` 检查。
- 验证成品：在 `chrome://extensions` 开发者模式加载 `dist/`（或用 `bookmarkhub-1.0.3.zip` 解压后加载），确认：无登录/升级入口、自动同步开关可直接打开、设置页 Pro 分区（历史/备份/存储节点）全部可用。