"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { PackageSearch, Package, PackageCheck } from 'lucide-react';

type Status = 'idle' | 'processing' | 'out_for_delivery' | 'delivered' | 'not_found';

const statusMap = {
    processing: {
        icon: <Package className="h-12 w-12 text-blue-500" />,
        title: "Order Processing",
        description: "Your order #FP12345 has been received and is being prepared by our team.",
    },
    out_for_delivery: {
        icon: <PackageSearch className="h-12 w-12 text-orange-500" />,
        title: "Out for Delivery",
        description: "Your order is on its way! Our driver will be arriving shortly.",
    },
    delivered: {
        icon: <PackageCheck className="h-12 w-12 text-green-500" />,
        title: "Delivered",
        description: "Your order has been successfully delivered. Thank you!",
    },
    not_found: {
        icon: <PackageSearch className="h-12 w-12 text-red-500" />,
        title: "Order Not Found",
        description: "We couldn't find an order with that number. Please check and try again.",
    },
};

export default function DeliveryPage() {
    const [orderNumber, setOrderNumber] = useState('');
    const [status, setStatus] = useState<Status>('idle');

    const handleTrackOrder = (e: React.FormEvent) => {
        e.preventDefault();
        // Mock logic: different order numbers give different statuses
        if (orderNumber.includes('1')) setStatus('processing');
        else if (orderNumber.includes('2')) setStatus('out_for_delivery');
        else if (orderNumber.includes('3')) setStatus('delivered');
        else setStatus('not_found');
    };

    return (
        <div className="container mx-auto max-w-2xl py-12 md:py-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
                <Card>
                    <CardHeader className="text-center">
                        <CardTitle className="text-3xl">Track Your Delivery</CardTitle>
                        <CardDescription>Enter your order number to see its current status.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleTrackOrder} className="flex gap-2">
                            <Input 
                                placeholder="Enter order number (e.g., FP12345)" 
                                value={orderNumber}
                                onChange={(e) => setOrderNumber(e.target.value)}
                                required
                            />
                            <Button type="submit">Track</Button>
                        </form>

                        {status !== 'idle' && (
                            <motion.div 
                                key={status}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="mt-8 p-6 border rounded-lg flex items-center gap-6"
                            >
                                {statusMap[status].icon}
                                <div>
                                    <h3 className="text-xl font-semibold">{statusMap[status].title}</h3>
                                    <p className="text-muted-foreground">{statusMap[status].description}</p>
                                </div>
                            </motion.div>
                        )}
                    </CardContent>
                </Card>
            </motion.div>
        </div>
    );
}