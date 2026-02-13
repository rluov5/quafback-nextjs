# 方案二：使用 Nginx 部署到公网

如果你有公网服务器，可以使用 Nginx 反向代理将 Next.js 应用暴露到公网。

## 📋 前提条件

1. 服务器有公网 IP
2. 有域名（可选，否则使用 IP）
3. 已安装或能安装 Nginx
4. 已正确配置 DNS（如果使用域名）

## 🚀 部署步骤

### 1. 安装 Nginx

\`\`\`bash
# Ubuntu/Debian
sudo apt update
sudo apt install nginx

# CentOS/RHEL
sudo yum install nginx
\`\`\`

### 2. 配置 NPM 生产模式运行

\`\`\`bash
cd /root/.openclaw/workspace/quafback-nextjs

# 安装 PM2（进程管理器）
sudo npm install -g pm2

# 创建生产配置
cat > ecosystem.config.js << 'ECO'
module.exports = {
  apps: [{
    name: 'quafback-admin',
    script: 'npm',
    args: 'start',
    cwd: '/root/.openclaw/workspace/quafback-nextjs',
    instances: 2,
    exec_mode: 'cluster',
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    }
  }]
}
ECO

# 使用 PM2 启动
pm2 start ecosystem.config.js
pm2 save
\`\`\`

### 3. 配置 Nginx

\`\`\`bash
# 创建 Nginx 配置
sudo tee /etc/nginx/sites-available/quafback-admin > /dev/null << 'NGINX'
upstream quafback_backend {
    server 127.0.0.1:3000;
    keepalive 64;
}

server {
    listen 80;
    listen [::]:80;
    
    server_name your-domain.com;  # 替换为你的域名或公网IP
    
    # 日志
    access_log /var/log/nginx/quafback-admin-access.log;
    error_log /var/log/nginx/quafback-admin-error.log;
    
    # 最大上传大小
    client_max_body_size 10M;
    
    # Gzip 压缩
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript
               application/x-javascript application/xml+rss
               application/json application/javascript;
    
    location / {
        proxy_pass http://quafback_backend;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
        
        proxy_cache_bypass \$http_upgrade;
        proxy_read_timeout 300s;
        proxy_connect_timeout 75s;
    }
}
NGINX

# 启用配置
sudo ln -sf /etc/nginx/sites-available/quafback-admin /etc/nginx/sites-enabled/

# 测试配置
sudo nginx -t

# 重启 Nginx
sudo systemctl restart nginx
\`\`\`

### 4. 配置 SSL（推荐）

使用 Let's Encrypt 免费 SSL：

\`\`\`bash
# 安装 Certbot
sudo apt install certbot python3-certbot-nginx

# 自动配置 SSL
sudo certbot --nginx -d your-domain.com

# Certbot 会自动更新 Nginx 配置
# 访问 https://your-domain.com
\`\`\`

### 5. 设置防火墙

\`\`\`bash
# Ubuntu (UFW)
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw enable

# CentOS (firewalld)
sudo firewall-cmd --permanent --add-service=http
sudo firewall-cmd --permanent --add-service=https
sudo firewall-cmd --reload
\`\`\`

## 🎯 访问地址

部署完成后，通过以下地址访问：

- **HTTP:** `http://your-domain.com`
- **HTTPS:** `https://your-domain.com`（配置 SSL 后）
- **IP 直接访问:** `http://your-public-ip`

## 🔄 管理命令

\`\`\`bash
# PM2 管理
pm2 status              # 查看状态
pm2 logs quafback-admin # 查看日志
pm2 restart quafback   # 重启
pm2 stop quafback-admin   # 停止
pm2 delete quafback   # 删除

# Nginx 管理
sudo nginx -t           # 测试配置
sudo systemctl reload nginx  # 重载配置
sudo systemctl restart nginx  # 重启
sudo nginx -s reload       # 优雅重载

# 查看日志
sudo tail -f /var/log/nginx/quafback-admin-access.log
sudo tail -f /var/log/nginx/quafback-admin-error.log
\`\`\`

## 🔐 安全加固

1. **禁用未使用的 Nginx 模块**
2. **配置安全响应头**
3. **启用 Fail2Ban 防止暴力破解**
4. **定期更新系统和 Nginx**

## 📊 性能优化

1. **启用 Nginx 缓存**
2. **配置 CDN（可选）**
3. **启用 HTTP/2**
4. **压缩静态资源**

---

## ⚠️ 注意事项

- 确保服务器安全组允许 80/443 端口
- 定期备份数据库（如果使用）
- 监控服务器资源使用
- 配置日志轮转防止磁盘占满
