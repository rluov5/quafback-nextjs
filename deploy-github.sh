#!/bin/bash

echo "=== 部署到 GitHub Pages ==="

# 检查 Git
if ! command -v git &> /dev/null; then
  echo "❌ 未安装 Git，请先安装"
  exit 1
fi

# 初始化 Git 仓库（如果还没有）
if [ ! -d .git ]; then
  echo "📦 初始化 Git 仓库..."
  git init
  git add .
  git commit -m "Initial commit: QuafBack Admin v2.0"
fi

# 检查是否已有 remote
if ! git remote | grep -q origin; then
  echo ""
  echo "请先在 GitHub 创建仓库:"
  echo "https://github.com/new"
  echo ""
  read -p "输入仓库URL (如: https://github.com/username/quafback-admin.git): " repo_url
  git remote add origin $repo_url
fi

# 推送到 GitHub
echo ""
echo "📤 推送到 GitHub..."
git push -u origin main || git push -u origin master

# 创建 GitHub Actions workflow
mkdir -p .github/workflows
cat > .github/workflows/deploy.yml << 'WORKFLOW'
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main, master ]

permissions:
  contents: read
  pages: write
  id: token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Setup Pages
        uses: actions/configure-pages@v4

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v4
        with:
          path: './out'

      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
WORKFLOW

# 提交 workflow
git add .github/workflows/deploy.yml
git commit -m "Add GitHub Pages deployment workflow"
git push

echo ""
echo "=== 部署完成 ==="
echo "1. 等待 GitHub Actions 完成（约 2-3 分钟）"
echo "2. 访问仓库 Settings > Pages 查看部署状态"
echo "3. 访问地址: https://your-username.github.io/quafback-admin/"
