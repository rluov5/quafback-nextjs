"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.location.href = "/login";
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="text-center space-y-4">
        <h1 className="text-2xl font-bold">QuafBack Admin</h1>
        <p className="text-gray-600">正在跳转到登录页面...</p>
      </div>
    </div>
  );
}
