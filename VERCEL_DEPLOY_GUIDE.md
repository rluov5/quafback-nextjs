# QuafBack Admin Vercel 部署指南

## 🌟 方法一：通过 Vercel Dashboard 部署（最简单）

### 步骤 1：准备项目代码

在服务器上运行：

```bash
cd /root/.openclaw/workspace/quafback-nextjs

# 初始化 Git 仓库（如果还没有）
git init
git add .
git commit -m "Initial commit: QuafBack Admin v2.0"
```

### 步骤 2：推送到 GitHub

1. 在 GitHub 创建新仓库：https://github.com/new
2. 仓库名称：`quafback-admin`
3. 创建后，复制仓库地址
4. 在服务器运行：

```bash
git remote add origin https://github.com/你的用户名/quafback-admin.git
git branch -M main
git push -u origin main
```

### 步骤 3：在 Vercel 导入项目

1. 访问 Vercel：https://vercel.com
2. 注册/登录账号（支持 GitHub、Google、Email）
3. 点击 "New Project" 或 "Add New Project"
4. 选择 "Continue with GitHub"
5. 授权 Vercel 访问你的 GitHub 仓库
6. 找到并选择 `quafback-admin` 仓库
7. 点击 "Import"

### 步骤 4：配置项目

Vercel 会自动检测 Next.js 项目，配置：

```
Framework Preset: Next.js
Root Directory: ./
Build Command: npm run build
Output Directory: .next
Install Command: npm install
```

点击 "Deploy" 开始部署！

### 步骤 5：等待部署完成

- 部署时间：约 1-3 分钟
- 可以在 Dashboard 查看实时日志
- 部署成功后会自动分配域名：`https://quafback-admin-xxx.vercel.app`

### 步骤 6：配置自定义域名（可选）

1. 在 Vercel Dashboard 点击你的项目
2. 进入 "Settings" > "Domains"
3. 添加你的域名（如 `quafback.yourdomain.com`）
4. 按提示配置 DNS 记录
5. Vercel 会自动签发 SSL 证书

---

## 🌟 方法二：使用 Vercel CLI 部署（更快速）

### 步骤 1：登录 Vercel

```bash
vercel login
```

这会打开浏览器进行授权。

### 步骤 2：部署项目

```bash
cd /root/.openclaw/workspace/quafback-nextjs
vercel --prod
```

按照提示操作：
- 设置项目名称
- 选择是否关联已有项目
- 配置构建命令（保持默认）

### 步骤 3：自动部署完成

Vercel 会自动：
- 检测 Next.js 项目
- 安装依赖
- 构建项目
- 部署到全球 CDN
- 分配域名

---

## 🔧 环境变量配置（可选）

如果需要配置环境变量，在 Vercel Dashboard：

1. 进入项目 "Settings" > "Environment Variables"
2. 添加变量：
   - `DATABASE_URL`: 数据库连接字符串
   - `NEXTAUTH_SECRET`: 认证密钥
   - `NEXTAUTH_URL`: 应用 URL

---

## 📦 生产构建优化

Vercel 会自动优化，但你也可以调整：

**在 `vercel.json` 中配置：**

```json
{
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "nextjs"
}
```

---

## 🔄 自动持续部署

推送到 GitHub 主分支后，Vercel 会自动重新部署：

```bash
# 在本地修改代码
git add .
git commit -m "更新功能"
git push

# Vercel 会自动检测并重新部署！
```

---

## 📊 部署后检查清单

- ✅ 访问分配的域名，确保页面正常加载
- ✅ 测试登录功能（使用测试账号）
- ✅ 检查所有页面路由
- ✅ 测试移动端响应式布局
- ✅ 配置（如果需要）自定义域名
- ✅ 设置（如果需要）环境变量

---

## 🌐 访问地址

部署成功后，你可以通过以下地址访问：

- **Vercel 分配域名**：`https://quafback-admin-xxx.vercel.app`
- **自定义域名**：`https://quafback.yourdomain.com`（配置后）

---

## 💡 常见问题

**Q: 部署失败怎么办？**
A: 在 Vercel Dashboard 查看部署日志，错误信息会显示具体原因

**Q: 如何回滚到上一个版本？**
A: 在 Dashboard > Deployments，点击之前的版本并点击 "Promote to Production"

**Q: 如何设置自定义域名？**
A: 在 Dashboard > Settings > Domains，添加域名并配置 DNS

**Q: 如何查看分析数据？**
A: Vercel Dashboard 提供访问分析、性能监控等数据

---

## 🎉 完成！

部署完成后，你的应用将：
- ✅ 拥有全球 CDN 加速
- ✅ 自动 HTTPS 证书
- ✅ 持续自动部署
- ✅ 完全免费

享受你的现代化质量反馈管理系统吧！🚀
