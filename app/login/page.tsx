"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { verifyPassword, hashPassword } from "@/lib/utils";
import type { User } from "@/types";

export default function LoginPage() {
  const router = useRouter();
  const [jobNo, setJobNo] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // 模拟用户数据库
  const mockUsers: User[] = [
    {
      id: "1",
      jobNo: "ADMIN",
      name: "超级管理员",
      password: hashPassword("admin123"),
      permission: "super_admin",
      createdAt: new Date().toISOString(),
    },
    {
      id: "2",
      jobNo: "MGR001",
      name: "张经理",
      password: hashPassword("123456"),
      permission: "admin",
      department: "质量管理部",
      createdAt: new Date().toISOString(),
    },
  ];

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // 模拟登录延迟
    await new Promise(resolve => setTimeout(resolve, 1000));

    const user = mockUsers.find(u => u.jobNo === jobNo);
    if (user && verifyPassword(password, user.password)) {
      // 保存登录状态
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("isAuthenticated", "true");
      router.push("/dashboard");
    } else {
      setError("工号或密码错误");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            QuafBack Admin
          </CardTitle>
          <CardDescription>
            质量反馈管理系统 v2.0
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">工号</label>
              <input
                type="text"
                value={jobNo}
                onChange={(e) => setJobNo(e.target.value)}
                placeholder="请输入工号"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">密码</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="请输入密码"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            {error && (
              <div className="text-red-500 text-sm text-center">{error}</div>
            )}
            <Button 
              type="submit" 
              className="w-full"
              disabled={loading}
            >
              {loading ? "登录中..." : "登录"}
            </Button>
            <div className="text-xs text-center text-muted-foreground">
              测试账号：ADMIN / admin123
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
