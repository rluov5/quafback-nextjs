#!/bin/bash

echo "=== QuafBack Admin v2.0 部署脚本 ==="

# 构建项目
echo "📦 正在构建项目..."
npm run build

# 创建部署目录
echo mkdir_deploy="/var/www/quafback-admin"
if [ ! -d "$mkdir_deploy" ]; then
  sudo mkdir -p "$mkdir_deploy"
  sudo chown -R $USER:$USER "$mkdir_deploy"
  echo "✅ 创建部署目录: $mkdir_deploy"
fi

# 复制构建文件
echo "📋 复制文件到部署目录..."
cp -r .next out package.json "$mkdir_deploy"

# 启动生产服务器
echo "🚀 启动生产服务器..."
cd "$mkdir_deploy"
pm2 start npm --name "quafback-admin" -- start
pm2 save

echo ""
echo "=== 部署完成 ==="
echo "访问地址: http://localhost:3000"
echo ""
echo "PM2 命令:"
echo "  查看状态: pm2 status"
echo "  查看日志: pm2 logs quafback-admin"
echo "  重启: pm2 restart quafback-admin"
echo "  停止: pm2 stop quafback-admin"
