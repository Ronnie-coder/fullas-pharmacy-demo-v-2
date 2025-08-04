import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MessageSquare } from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="container mx-auto max-w-4xl py-12 md:py-24">
       <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Get In Touch</h1>
        <p className="mt-4 text-muted-foreground md:text-xl">
          We&apos;re here to help. Send us a message or use one of the options below.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
            <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
            <div className="space-y-4">
                <div className="flex items-center gap-4">
                    <Phone className="h-6 w-6 text-brand-primary"/>
                    <Link href="tel:+27678184898" className="hover:underline">(067) 818-4898 (Demo)</Link>
                </div>
                <div className="flex items-center gap-4">
                    <Mail className="h-6 w-6 text-brand-primary"/>
                    <Link href="mailto:contact@fullaspharmacy.co.za" className="hover:underline">contact@fullaspharmacy.co.za (Demo)</Link>
                </div>
                <div className="flex items-center gap-4">
                    <MessageSquare className="h-6 w-6 text-brand-primary"/>
                    <Link href="https://wa.me/27678184898" target="_blank" className="hover:underline">Chat on WhatsApp</Link>
                </div>
            </div>
        </div>
        <div>
            <Card>
                <CardHeader>
                    <CardTitle>Send us a Message</CardTitle>
                    <CardDescription>We&apos;ll get back to you as soon as possible.</CardDescription>
                </CardHeader>
                <CardContent>
                    {/* For a real form, you'd wrap this in a <form> and handle submission */}
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="name">Name</Label>
                            <Input id="name" placeholder="Your Name" />
                        </div>
                         <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" placeholder="your@email.com" />
                        </div>
                         <div className="space-y-2">
                            <Label htmlFor="message">Message</Label>
                            <Textarea id="message" placeholder="How can we help?" />
                        </div>
                        <Button className="w-full">Send Message</Button>
                    </div>
                </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
}
