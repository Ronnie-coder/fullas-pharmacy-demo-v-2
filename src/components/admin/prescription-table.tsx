import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PrescriptionRequest } from "@/types";
import { cn } from "@/lib/utils";
import { MoreHorizontal } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Mock Data
const mockPrescriptions: PrescriptionRequest[] = [
  { id: 'FP98765', patientName: 'John Doe', contact: '0821234567', date: '2023-10-27', status: 'Pending', fileUrl: '#' },
  { id: 'FP98764', patientName: 'Jane Smith', contact: '0739876543', date: '2023-10-26', status: 'Approved', fileUrl: '#' },
  { id: 'FP98763', patientName: 'Sipho Moyo', contact: '0612345678', date: '2023-10-26', status: 'Approved', fileUrl: '#' },
  { id: 'FP98762', patientName: 'Aisha Patel', contact: '0847654321', date: '2023-10-25', status: 'Rejected', fileUrl: '#' },
];

export function PrescriptionTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Order ID</TableHead>
          <TableHead>Patient Name</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {mockPrescriptions.map((req) => (
          <TableRow key={req.id}>
            <TableCell className="font-medium">{req.id}</TableCell>
            <TableCell>{req.patientName}</TableCell>
            <TableCell>{req.date}</TableCell>
            <TableCell>
              <Badge
                className={cn({
                  "bg-yellow-500 hover:bg-yellow-500/80": req.status === "Pending",
                  "bg-green-600 hover:bg-green-600/80": req.status === "Approved",
                  "bg-red-600 hover:bg-red-600/80": req.status === "Rejected",
                })}
              >
                {req.status}
              </Badge>
            </TableCell>
            <TableCell className="text-right">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem>View Details</DropdownMenuItem>
                        <DropdownMenuItem>Mark as Approved</DropdownMenuItem>
                        <DropdownMenuItem>Mark as Rejected</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
