#!/bin/bash

# JSON Formatter - Cloudflare Pages 部署脚本

echo "🚀 开始部署到 Cloudflare Pages..."

# 检查是否安装了 wrangler
if ! command -v wrangler &> /dev/null; then
    echo "📦 正在安装 Wrangler CLI..."
    npm install -g wrangler
fi

# 登录 Cloudflare（如果未登录）
echo "🔐 请登录 Cloudflare..."
wrangler login

# 构建项目
echo "🔨 正在构建项目..."
npm run build

# 部署到 Cloudflare Pages
echo "🌐 正在部署到 Cloudflare Pages..."
wrangler pages deploy dist

echo "✅ 部署完成！"
