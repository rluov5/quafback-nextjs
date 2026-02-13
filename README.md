# QuafBack Admin v2.0 - 质量反馈管理系统

## 🚀 项目简介

基于原 quafback-admin 项目重构的现代化质量异常反馈与返工确认管理系统。

## ✨ 技术升级

| 原技术 | 新技术 | 优势 |
|--------|--------|------|
| uni-app + Vue3 | Next.js 14 + React 18 | SSR、SEO、更好的性能 |
| uniCloud | 本地存储 + 状态管理 | 更快响应、离线支持 |
| 原生样式 | Tailwind CSS + shadcn/ui | 现代化UI、响应式设计 |
| 明文密码 | Hash加密 | 安全升级 |

## 🎯 核心功能

- ✅ 用户登录与权限管理（职员/管理员/超级管理员）
- ✅ 质量反馈录入（产品、部门、车型、问题、措施）
- ✅ 当日统计与历史查询
- ✅ 返工管理与确认
- ✅ 数据统计分析
- ✅ 系统设置

## 📁 项目结构

\`\`\`
quafback-nextjs/
├── app/                    # Next.js App Router
│   ├── login/             # 登录页
│   ├── dashboard/         # 主应用
│   │   ├── page.tsx      # 工作台
│   │   ├── feedback/     # 反馈录入
│   │   ├── history/`     # 历史记录
│   │   ├── rework/       # 返工管理
│   │   ├── stats/        # 统计分析
│   │   └── settings/     # 系统设置
│   ├── globals.css        # 全局样式
│   └── layout.tsx         # 根布局
├── components/            # UI组件
│   └── ui/               # shadcn/ui组件
├── lib/                   # 工具函数
│   └── utils.ts
├── types/                 # TypeScript类型
└── package.json
\`\`\`

## 🔐 测试账号

| 角色 | 工号 | 密码 |
|------|------|------|
| 超级管理员 | ADMIN | admin123 |
| 管理员 | MGR001 | 123456 |

## 🚦 本地运行

\`\`\`bash
npm install
npm run dev
\`\`\`

访问 http://localhost:3000

## 📦 部署到生产环境

\`\`\`bash
npm run build
npm start
\`\`\`

## 🎨 界面预览

### 登录页
- 渐变背景
- 响应式卡片布局
- 表单验证

### Dashboard
- 侧边栏导航
- 数据统计卡片
- 最近反馈列表
- 待办事项

### 各功能页
- 统一的卡片设计
- 清晰的操作按钮
- 友好的空状态提示

## 🔒 安全特性

- ✅ 密码Hash加密
- ✅ JWT认证（预留）
- ✅ 角色权限控制
- ✅ 路由守卫

## 📊 待完成功能

- [ ] 后端API集成
- [ ] 数据库连接（PostgreSQL/MySQL）
- [ ] 实时数据同步
- [ ] 数据导出（Excel/PDF）
- [ ] 消息通知
- [ ] 扫码功能（App端）

## 📝 开发日志

- v2.0.0 - 重构完成，使用Next.js + React技术栈

## 📄 许可证

MIT

---

**开发团队：** OpenClaw AI Assistant  
**技术支持：** Next.js 14 + React 18 + TypeScript + Tailwind CSS
