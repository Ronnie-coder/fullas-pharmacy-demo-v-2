import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PrescriptionTable } from "@/components/admin/prescription-table";
import { Bell, Truck, Package } from "lucide-react";

export default function AdminDashboardPage() {
    return (
        <div className="space-y-8">
            <h1 className="text-3xl font-bold">Dashboard</h1>

            {/* Stat Cards */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">New Prescriptions</CardTitle>
                        <Bell className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">1</div>
                        <p className="text-xs text-muted-foreground">Pending review</p>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Pending Deliveries</CardTitle>
                        <Truck className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">+2</div>
                        <p className="text-xs text-muted-foreground">Ready for dispatch</p>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Low Stock Items</CardTitle>
                        <Package className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">5</div>
                        <p className="text-xs text-muted-foreground">Items needing re-order</p>
                    </CardContent>
                </Card>
            </div>

            {/* Recent Prescriptions Table */}
            <Card>
                <CardHeader>
                    <CardTitle>Recent Prescription Requests</CardTitle>
                </CardHeader>
                <CardContent>
                    <PrescriptionTable />
                </CardContent>
            </Card>
        </div>
    );
}
