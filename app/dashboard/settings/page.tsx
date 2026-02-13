"use client";

import { useRouter } from "next/navigation";

export default function SettingsPage() {
  const router = useRouter();
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">系统设置</h1>
      <button 
        onClick={() => {
          localStorage.removeItem("user");
          localStorage.removeItem("isAuthenticated");
          router.push("/login");
        }}
        className="px-4 py-2 bg-red-500 text-white rounded"
      >
        退出登录
      </button>
    </div>
  );
}
