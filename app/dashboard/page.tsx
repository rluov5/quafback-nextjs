"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, FileText, CheckCircle, AlertCircle } from "lucide-react";

export default function DashboardPage() {
  const stats = [
    {
      title: "今日反馈",
      value: "12",
      description: "较昨日 +3",
      icon: FileText,
      trend: "up",
    },
    {
      title: "待处理返工",
      value: "5",
      description: "需要尽快处理",
      icon: AlertCircle,
      trend: "down",
    },
    {
      title: "本月合格率",
      value: "94.5%",
      description: "较上月 +2.3%",
      icon: CheckCircle,
      trend: "up",
    },
    {
      title: "问题总数",
      value: "156",
      description: "本月累计",
      icon: TrendingUp,
      trend: "neutral",
    },
  ];

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold">工作台</h1>
        <p className="text-muted-foreground mt-1">
          欢迎回来！这里是您的质量数据总览。
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                {stat.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>最近反馈</CardTitle>
            <CardDescription>
             查看最新的质量异常反馈记录
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center py-8 text-muted-foreground">
              暂无数据
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>待办事项</CardTitle>
            <CardDescription>
              需要您处理的返工确认任务
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center py-8 text-muted-foreground">
              暂无待办事项
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
