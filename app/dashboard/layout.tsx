"use client";

import { useRouter } from "next/navigation";
import type { User } from "@/types";

const menuItems = [
  { href: "/dashboard", label: "工作台" },
  { href: "/dashboard/feedback", label: "反馈" },
  { href: "/dashboard/rework", label: "返工" },
  { href: "/dashboard/history", label: "历史" },
  { href: "/dashboard/stats", label: "统计" },
  { href: "/dashboard/settings", label: "设置" },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [user, setUser] = React.useState<User | null>(null);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    const userData = localStorage.getItem("user");
    const auth = localStorage.getItem("isAuthenticated");
    
    if (!auth || !userData) {
      router.push("/login");
      return;
    }
    
    setUser(JSON.parse(userData));
    setMounted(true);
  }, [router]);

  if (!mounted || !user) return null;

  return (
    <div className="flex min-h-screen bg-gray-50">
      <aside className="w-64 bg-white border-r border-gray-200 p-4">
        <h1 className="text-xs font-bold mb-4">QA</h1>
        <nav className="space-y-2">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block text-xs py-2 hover:bg-gray-100 rounded"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </aside>
      <main className="flex-1">{children}</main>
    </div>
  );
}
