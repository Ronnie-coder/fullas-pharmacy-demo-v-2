import { AdminSidebar } from "@/components/admin-sidebar";
import { ReactNode } from "react";

export default function AdminLayout({ children }: { children: ReactNode }) {
    return (
        <div className="flex h-screen overflow-hidden bg-muted/40">
            <AdminSidebar />
            <div className="flex-1 flex flex-col overflow-y-auto">
                {/* A simple header for the admin section could go here */}
                <main className="flex-1 p-4 md:p-8">
                    {children}
                </main>
            </div>
        </div>
    );
}