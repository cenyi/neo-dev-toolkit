# JSON 格式化与多格式转换工具

<div align="center">

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Astro](https://img.shields.io/badge/Astro-4.15-FF5D01.svg)

**终极 JSON 工具包 - 20+ 种格式转换与代码生成**

[功能特性](#-核心功能) • [快速开始](#-快速开始) • [在线演示](https://tojsons.com)

</div>

---

## ✨ 项目概述

一个强大的浏览器端 JSON 工具包，支持 20+ 种格式转换、代码生成和高级 JSON 操作。100% 客户端处理 - 您的数据永远不会离开浏览器！

### 🌟 核心特性

- 🎯 **智能输入检测**：自动检测 JSON、URL 参数、XML、YAML 等 15+ 种格式
- 🔄 **20+ 种转换**：JSON ↔ YAML/XML/CSV/HTML/PDF/表格 等
- 💻 **代码生成**：TypeScript、Dart、Go、Rust、Python、C、JSON Schema
- 🔍 **高级工具**：JSON 比较、差异高亮、字段提取、验证
- 🌐 **多语言支持**：完整的英文与中文界面
- 📱 **移动端优化**：完美适配所有设备
- 🔒 **隐私优先**：100% 浏览器端处理，无服务器上传
- ⚡ **极速性能**：轻松处理 10MB+ JSON 文件

---

## 🚀 快速开始

### 安装

```bash
# 克隆仓库
git clone https://github.com/cenyi/neo-dev-toolkit.git

# 进入项目目录
cd neo-dev-toolkit

# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览生产构建
npm run preview
```

### 快速体验

1. 在浏览器中打开 `http://localhost:4321`
2. 将任意 JSON 粘贴到编辑器中
3. 即时查看自动格式化和验证结果
4. 点击任意转换按钮来转换数据

---

## 🎯 核心功能

### JSON 基础操作

#### 1. 智能输入检测 🧠
自动检测和解析：
- ✅ 标准 JSON
- ✅ URL 参数（查询字符串）
- ✅ XML 文档
- ✅ YAML 文件
- ✅ 带注释的 JSON
- ✅ 压缩的 JSON

#### 2. JSON 格式化与验证 ✨
- 实时语法高亮
- 带行号的错误检测
- 粘贴时自动格式化
- 可折叠的树状视图
- 行号导航

#### 3. JSON 比较与差异 🔄
- 并排比较
- 可视化差异高亮：
  - 🟢 绿色：新增
  - 🔴 红色：删除
  - 🟡 黄色：修改

#### 4. 字段提取 🔍
使用 JavaScript 表达式提取数据：
```javascript
// 提取嵌套字段
obj => obj.user.name

// 从数组中提取
obj => obj.items[0].id

// 转换数据
obj => obj.users.map(u => u.email)
```

---

### 🔄 数据格式转换

- **JSON 转 YAML**：保持正确缩进的 YAML 格式
- **JSON 转 XML**：生成结构和转义正确的 XML
- **JSON 转 CSV/Excel**：处理嵌套对象，Excel 兼容输出
- **JSON 转 HTML**：生成带语法高亮的格式化 HTML
- **JSON 转 PDF**：通过浏览器打印导出 PDF
- **JSON 转 表格**：将 JSON 数据可视化为漂亮的 HTML 表格

---

### 💻 代码生成

#### TypeScript 接口
```typescript
interface UserData {
  name: string;
  email: string;
  age: number;
}
```

#### Go 结构体
```go
type UserData struct {
    Name  string `json:"name"`
    Email string `json:"email"`
    Age   int    `json:"age"`
}
```

#### Rust 结构体
```rust
#[derive(Serialize, Deserialize)]
struct UserData {
    name: String,
    email: String,
    age: i64,
}
```

---

### 🛠️ 实用工具

- **JSON 压缩**：移除所有空白，压缩为单行
- **JSON 转义**：转义特殊字符，安全嵌入字符串
- **注释移除**：移除 JSON5 风格注释
- **历史记录**：本地存储持久化，快速访问最近的 JSON

---

## 📖 使用示例

### 示例 1：API 响应处理

输入：
```json
{
  "status": "success",
  "data": {
    "users": [
      {"id": 1, "name": "Alice", "email": "alice@example.com"}
    ]
  }
}
```

**提取所有邮箱**：
```javascript
obj => obj.data.users.map(u => u.email)
```

结果：`["alice@example.com"]`

### 示例 2：URL 参数解析

**输入**：`?search=json&page=1&limit=10`

**自动转换为**：
```json
{
  "search": "json",
  "page": 1,
  "limit": 10
}
```

---

## 🎨 界面特性

### 响应式设计
- 🖥️ **桌面端**：多列布局，并排编辑器
- 📱 **平板**：优化的双列网格
- 📲 **移动端**：单列，触摸友好按钮

### 智能功能
- 🎨 **语法高亮**：Monaco Editor（VS Code 引擎）
- 🌓 **主题支持**：自动深色/浅色模式
- 📏 **字体大小控制**：11px - 16px 可调
- 🔤 **多语言界面**：即时英文/中文切换

---

## 🔧 技术细节

### 技术栈

| 组件 | 技术 | 版本 |
|------|------|------|
| 框架 | Astro | 4.15+ |
| 编辑器 | Monaco Editor | 最新 |
| 样式 | 原生 CSS | - |
| 语言 | JavaScript | ES6+ |
| 部署 | Cloudflare Pages/Workers | - |

### 性能优化

- **懒加载**：按需加载 Monaco Editor
- **防抖**：智能输入处理
- **虚拟滚动**：处理大型 JSON 文件
- **本地存储**：即时历史访问
- **CSS 硬件加速**：流畅动画

---

## 🚢 部署

### Cloudflare Pages（推荐）

```bash
# 构建项目
npm run build

# 使用 Wrangler CLI 部署
npm install -g wrangler
wrangler pages deploy dist
```

---

## 🔒 隐私与安全

- ✅ **无服务器上传**：全部在浏览器中处理
- ✅ **无分析代码**：不跟踪用户
- ✅ **无 Cookie**：不追踪用户行为
- ✅ **HTTPS**：安全连接
- ✅ **开源**：完全可审计的代码
- ✅ **本地存储**：历史记录保留在您的设备上

---

## 📝 许可证

MIT License - 详见 [LICENSE](LICENSE) 文件

---

## 🙏 致谢

- [Astro](https://astro.build) - 出色的 Web 框架
- [Monaco Editor](https://microsoft.github.io/monaco-editor/) - 强大的代码编辑器
- [Cloudflare](https://cloudflare.com) - 托管与 CDN

---

## 📞 支持

- 📧 邮箱：support@tojsons.com
- 🐛 问题反馈：[GitHub Issues](https://github.com/cenyi/neo-dev-toolkit/issues)
- 💬 讨论：[GitHub Discussions](https://github.com/cenyi/neo-dev-toolkit/discussions)

---

<div align="center">

**用 ❤️ 制作 by JSON Tools Team**

⭐ 在 GitHub 上给我们星标 —— 这对我们很有帮助！

🔗 [在线演示](https://tojsons.com) • 📖 [文档](https://tojsons.com/docs) • 🐛 [问题反馈](https://github.com/cenyi/neo-dev-toolkit/issues)

</div>