# JSON Formatter

强大的 JSON 格式化、验证和转换工具。

## 功能特性

- ✨ JSON 格式化和验证
- 🌲 树形查看器（支持折叠/展开）
- 🔍 字段提取（使用 JavaScript 函数）
- 🔄 多格式转换（JSON ↔ XML/YAML）
- 📋 一键复制（压缩/转义/TypeScript 接口）
- 🎨 现代化 UI 设计
- 🌐 中英文支持

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览生产构建
npm run preview
```

## 部署到 Cloudflare Pages

### 方法 1：通过 Git 仓库部署

1. 将代码推送到 GitHub/GitLab
2. 在 Cloudflare Pages 控制台创建新项目
3. 连接你的 Git 仓库
4. 配置构建设置：

```
框架预设：Astro
构建命令：npm run build
构建输出目录：dist
Node.js 版本：18 或 20
环境变量：（无需配置）
```

5. 点击"保存并部署"

### 方法 2：通过 Wrangler CLI 部署

```bash
# 安装 Wrangler CLI
npm install -g wrangler

# 登录 Cloudflare
wrangler login

# 构建项目
npm run build

# 部署到 Cloudflare Pages
wrangler pages deploy dist
```

## 技术栈

- **框架**: Astro 4.15
- **样式**: 原生 CSS
- **语言**: JavaScript (ES6+)
- **部署**: Cloudflare Pages

## 许可证

MIT
