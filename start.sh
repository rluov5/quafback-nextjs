#!/bin/bash

echo "=== 启动 QuafBack Admin v2.0 ==="

# 检查是否已经在运行
if [ -f /tmp/nextjs-server.pid ]; then
  pid=$(cat /tmp/nextjs-server.pid)
  if ps -p $pid > /dev/null 2>&1; then
    echo "⚠️  服务器已在运行 (PID: $pid)"
    echo "访问地址: http://localhost:3000"
    echo ""
    echo "查看日志: tail -f /tmp/nextjs-server.log"
    exit 0
  fi
fi

# 启动开发服务器
nohup npm run dev > /tmp/nextjs-server.log 2>&1 &
echo $! > /tmp/nextjs-server.pid

echo "✅ 服务器启动中..."
sleep 3

# 检查启动状态
if [ -f /tmp/nextjs-server.pid ]; then
  pid=$(cat /tmp/nextjs-server.pid)
  if ps -p $pid > /dev/null 2>&1; then
    echo "✅ 服务器启动成功！"
    echo "PID: $pid"
    echo "访问地址: http://localhost:3000"
    echo ""
    echo "查看日志: tail -f /tmp/nextjs-server.log"
    echo "停止服务器: kill $pid"
  else
    echo "❌ 服务器启动失败，请查看日志:"
    echo "cat /tmp/nextjs-server.log"
  fi
fi
