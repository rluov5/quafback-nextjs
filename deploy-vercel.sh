#!/bin/bash

echo "=== 部署到 Vercel ==="

# 检查是否安装 Vercel CLI
if ! command -v vercel &> /dev/null; then
  echo "📦 安装 Vercel CLI..."
  npm install -g vercel
fi

# 登录 Vercel
echo ""
echo "请访问以下链接登录 Vercel:"
echo "https://vercel.com/login"
echo ""
read -p "登录完成后按回车继续..."

# 部署
echo "🚀 开始部署..."
vercel --prod

echo ""
echo "=== 部署完成 ==="
echo "你的应用已部署到 Vercel"
echo "访问 Vercel Dashboard 查看域名"
