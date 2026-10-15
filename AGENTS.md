# 仓库指南（Repository Guidelines）

本仓库是 **BookmarkSync** — 基于 [BookmarkHub](https://github.com/dudor/BookmarkHub) v1.0.3 二次开发，已本地解锁：由官方商店版编译产物还原为「可读、可编辑、可重新打包」的源码形态，并已做**本地解锁**（移除登录/订阅门禁，开放全部功能）。旧版 v0.0.6 WXT 源码保留在 git 标签 `v0.0.6`。

> 边界：这是压缩产物还原出的可维护基线（类名、方法名、i18n key 保留，变量名压缩为单字母），并非原始 TS 源码；`assets/bookmarksync_core_bg-*.wasm` 是 Rust 同步核心（二进制，不可还原）。

## 项目结构与模块组织

- `src/` — 可编辑源码形态（美化后 JS + 资源）
  - `background.js` — 后台：同步引擎（class L/SyncEngine）、自动/强制同步、安全阈值、告警调度
  - `popup/popup.js`、`options/options.js` — 弹窗与设置页 UI
  - `chunks/` — 库分包。**登录/订阅门禁补丁位于 `chunks/sentry--tCLaZao.js`（许可核心）与 `chunks/I18nProvider-bZ79bPbq.js`（UI 权限上下文）**
  - `assets/`（WASM）、`icons/`、`locales/`、`_locales/`（30 种语言）、`manifest.json`
- `scripts/patch-unlock.mjs` — 本地解锁补丁（幂等）
- `scripts/repack.ps1` — 重新打包

## 构建与开发命令

- `npm run unlock` — 应用/重申解锁补丁（幂等，可重复执行）
- `npm run repack`（或 `powershell -ExecutionPolicy Bypass -File scripts/repack.ps1`）— 生成 `dist/` 与 `bookmarksync-1.0.3.zip`
- `node --check <file.js>` — 修改 JS 后的语法检查（本工程为 ESM，`package.json` 有 `type: module`）
- 无依赖安装需求；`pnpm install` 仅用于旧工程，已不需要

## 编码风格与命名约定

- 还原代码继续用压缩变量名时，**新增/修改处必须写清晰注释**；能改名的局部变量就改为语义化命名
- 只改 `src/`；`dist/`、zip 均不手工改动
- manifest 修改后必须 `JSON.parse` 校验
- 不要重新引入登录/订阅逻辑；`memoload.com` 权限仅用于 WASM 核心取匿名许可 token，勿动

## 测试指南

无自动化测试。手动验证：`chrome://extensions` 开发者模式加载 `dist/`，覆盖上传/下载/清空/自动同步/强制推送与拉取/历史（Time Machine）/备份/多存储节点；确认界面无登录、升级入口。改动后至少 `node --check` + `npm run repack` 通过再提交。

## 提交与 Pull Request

- 沿用仓库历史风格：简短小写祈使句 + 前缀（`fix ...`、`add ...`、`release`、`feat: ...`），问题可带编号
- 提交前：语法检查、manifest 校验、`npm run repack` 产出 zip
- PR 说明改动内容与手动验证步骤；历史版本见标签 `v0.0.4` / `v0.0.5` / `v0.0.6`