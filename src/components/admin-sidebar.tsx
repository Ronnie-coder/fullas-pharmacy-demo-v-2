"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Pill, LayoutDashboard, FileText } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
    { href: "/admin", icon: LayoutDashboard, label: "Dashboard" },
    { href: "/admin/prescriptions", icon: FileText, label: "Prescriptions" },
    // Add more links here later (e.g., Stock, Deliveries)
];

export function AdminSidebar() {
    const pathname = usePathname();

    return (
        <aside className="hidden md:flex flex-col w-64 border-r bg-background">
            <div className="p-4 border-b">
                <Link href="/admin" className="flex items-center gap-2 font-bold text-lg">
                    <Pill className="h-6 w-6 text-brand-primary" />
                    <span>Fullas Admin</span>
                </Link>
            </div>
            <nav className="flex-1 p-4 space-y-2">
                {navItems.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={cn(
                            "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary",
                            pathname === item.href && "bg-muted text-primary"
                        )}
                    >
                        <item.icon className="h-4 w-4" />
                        {item.label}
                    </Link>
                ))}
            </nav>
        </aside>
    );
}