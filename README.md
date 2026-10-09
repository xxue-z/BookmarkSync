# BookmarkSync — BookmarkHub v1.0.3 还原工程（本地解锁版）

本仓库（BookmarkSync）是把**官方商店版 BookmarkHub v1.0.3（编译产物，源自 `.temp/1.0.3_0`）**还原为「可读、可编辑、可重新打包」的源码形态工程，并已做**本地解锁**：移除登录/订阅门禁，开放全部功能。项目更名记录见 `scripts/rename-bookmarksync.mjs`（幂等）。

## 诚实边界（重要）

- 编译产物**不含 source map**，原始 TypeScript / 组件拆分 / 注释 / 命名**无法无损恢复**；本工程是「美化 + 逆向标注」出的可维护基线，不是原作者源码。
- `src/assets/bookmarksync_core_bg-*.wasm` 是 Rust 同步核心（287KB），**二进制保留、不可还原为 Rust 源码**，通过 `src/chunks/hash-Cx2ffm9Z.js` 的胶水代码调用。
- 变量名多被压缩为单字母（`s/t/e/a`），但**类名、方法名、i18n key、字符串全部保留**，行为与官方 v1.0.3 一致。

## 目录结构

```
├─ src/               # 可编辑源码形态（美化后的 JS + 资源）
│  ├─ background.js   # 后台：SyncEngine（class L）、SyncSafetyError（class P）、同步/自动同步/强制同步、安全阈值、通知、告警调度
│  ├─ popup/popup.js  # 弹窗 UI：主界面 Xe 等
│  ├─ options/options.js # 设置页：主设置页 Kr + 各分区组件（存储/历史/日志/工具箱/关于）
│  ├─ chunks/         # 库分包
│  │  ├─ hash-Cx2ffm9Z.js          # 同步核心/wasm 胶水 + 存储适配器（GitHub/WebDAV 等）
│  │  ├─ I18nProvider-bZ79bPbq.js  # i18next 国际化 + LicenseContext（UI 权限）
│  │  ├─ sentry--tCLaZao.js        # 许可/鉴权核心（is/hasPermission/trigger）
│  │  └─ vendor-*.js               # UI/工具/Sentry 库分包
│  ├─ assets/bookmarksync_core_bg-*.wasm  # Rust 核心（二进制）
│  ├─ icons/  locales/  _locales/  # 图标 + 30 种语言
│  └─ src/popup|options/index.html # 两个入口页
├─ scripts/
│  ├─ patch-unlock.mjs             # 本地解锁补丁（幂等）
│  ├─ rename-bookmarksync.mjs      # 项目更名 BookmarkSync（幂等）
│  └─ repack.ps1                   # 重新打包
└─ manifest.json   # MV3 清单（已移除 identity；保留 memoload.com 供 WASM 许可 token、sentry.io 遥测）
```

## 重新打包

```powershell
npm run repack
# 或: powershell -ExecutionPolicy Bypass -File scripts/repack.ps1
```

产出：`dist/`（未压缩版）+ `bookmarksync-1.0.3.zip`（可加载到 Chrome `chrome://extensions` 开发者模式）。

## 登录态 / Pro 订阅门禁（已被解锁补丁放行）

| 文件 | 位置 | 原逻辑 |
|---|---|---|
| `src/background.js` | `ot()`（自动同步包装） | 无 `userId`（未注册）→ 提示需注册，禁用自动同步 |
| `src/background.js` | `ct()`（鉴权清理） | `user.type !== "pro"` → 清理同步告警并关闭 enableAutoSync |
| `src/popup/popup.js` | 注册对话框 / 登录按钮 | 引导登录官网注册、升级 Pro |
| `src/options/options.js` | Pro 分区（历史/自动备份/存储节点） | 订阅后才开放 |

## 与上游 / 旧版本的关系

- 上游官方：`https://github.com/dudor/bookmarkhub`（本仓库为其 v1.0.3 编译产物的还原工程）
- 旧版 v0.0.6 WXT 源码已存档于 git 标签 **`v0.0.6`**（迁移提交前打标）

## 本地解锁（去除登录态/订阅态，开放全部功能）

`node scripts/patch-unlock.mjs`（幂等，已应用自动跳过）→ `npm run repack`。改动点均为「行为不变、门禁放行」的最小补丁：

| # | 文件 | 改动 | 效果 |
|---|---|---|---|
| 1-2 | `src/chunks/sentry--tCLaZao.js` | `register` 记录本地 handler；`trigger` 直接分发，不再依赖远程许可 token / WASM 校验 | 自动同步、强制推送/拉取、Time Machine、同步配置等事件本地放行 |
| 3 | 同上 | `hasPermission` 恒返回 `true` | 所有功能权限检查通过 |
| 4 | 同上 | `is()` 恒返回 `{type:"pro", userId:"local-user"}` | 后台 `ot()`/`ct()` 通过，自动同步不再被禁用 |
| 5 | `src/chunks/I18nProvider-bZ79bPbq.js` | LicenseContext 的 `isPro`/`hasPermission` 恒为 `true` | 升级对话框、Pro 分区、历史/备份解锁提示全部隐藏 |
| 6-8 | `src/popup/popup.js` | 用户区恒走已登录分支；Dashboard、登出改为无操作 | 界面无登录按钮/注册对话框/订阅入口 |
| 9 | `src/manifest.json` | 移除 `optional_permissions: ["identity"]` | 去掉登录态相关权限 |

说明：
- `memoload.com` 主机权限**保留**：WASM 同步核心做合并/统计时需要一枚匿名许可 token（`/api/license`，不登录也签发），去掉会导致同步失败；其作用仅是基础许可，不含订阅判定。
- Sentry（`sentry.io` 遥测）与各同步适配器（GitHub/Gitee/GitLab/微软）未改动。
- 校验：`node --check` 修改过的 JS；manifest 用 `JSON.parse`；改完跑 `npm run repack`。
- 验证成品：`chrome://extensions` 开发者模式加载 `dist/`（或解压 `bookmarksync-1.0.3.zip`），确认无登录/升级入口、自动同步可开、Pro 分区全部可用。
## 扩展 ID

- 本仓库使用**自生成的扩展 ID**（manifest `key` 已轮换，不再使用官方商店密钥对应的 `fdnmfpogadcljhecfhdikdecbkggfmgk`）。
- 当前 ID：`fmhcbgfpcgbijngkiamciiikeanhbjaf`（由 `scripts/rotate-extension-id.mjs` 生成）。
- 私钥保存于 `.keys/extension-private-key.pem`（已被 gitignore，勿提交）；重新生成 ID 请运行 `node scripts/rotate-extension-id.mjs`（每次运行会生成新 ID）。> 2026-10 更新：已完成完全去品牌化与去订阅化——扩展名 BookmarkSync；数据文件默认名 `bookmarksync.json`、IndexedDB 存储名 `BookmarkSync_SyncRecords`、WASM 核心 `bookmarksync_core_bg.wasm`；专业版（Pro/升级/订阅/登录）文字与样式已全部移除。仅保留两处**上游功能 URL**（`github.com/dudor/bookmarkhub` 活动公告 json、About 页 GitHub 链接），因为它们是功能依赖而非品牌。> 2026-10-09 更新：**书签时光机**已改为基于同步存储的版本历史——gist 走 GitHub Gist commits API、github 走仓库 commits API，直接拉取/恢复版本，无需登录，并移除 30 天过期限制；设置云备份改为本地 `storage.local` 备份（不再访问登录服务器）。相关脚本：`scripts/patch-timemachine-gist.mjs`。> 2026-10-09 更新：移除「使用教程」「问题反馈」入口（options 侧栏外链、About 反馈卡片、popup 菜单项）及首次安装自动打开 getting-started 页面跳转；相关脚本 `scripts/remove-tutorial-feedback.mjs`。> 2026-10-09 更新：popup「更多」菜单移除「捐赠」「社区」外链项；相关脚本 `scripts/remove-donate-community.mjs`。> 2026-10-09 更新：移除 popup「更多」菜单（含官网/支持/条款外链）与 About 页脚外链行（条款/隐私/官网）；相关脚本 `scripts/remove-website-menu.mjs`。> 2026-10-09 更新：书签时光机现已支持全部五种存储后端（gist / github / gitee / gitlab / onedrive）的版本历史，不再出现 "This storage type does not support version history"；`scripts/patch-timemachine-gist.mjs` 已同步。> 2026-10-09 更新：图标重绘为 BookmarkSync 品牌——渐变圆角底 + 书签 + 同步环；SVG 源见 `src/icons/bookmarksync-{dark,light}[-compact].svg`，用 `scripts/render-icons.mjs`（Playwright 无头 Chromium）栅格化为 16/32/48/64/128/256 × 明暗两版；小尺寸（≤32px）使用无环简化版保证清晰。