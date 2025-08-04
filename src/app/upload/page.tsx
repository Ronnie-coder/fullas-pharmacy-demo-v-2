"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Upload, CheckCircle } from 'lucide-react';
import { toast } from "sonner"; // <-- CORRECT IMPORT

export default function UploadPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  // const { toast } = useToast(); // No longer need this hook

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // The new, simpler toast call
    toast.success("Submission Successful!", {
      description: "We've received your prescription and will contact you shortly.",
    });
    // In a real app, you'd handle file upload and form data here.
  };

  return (
    // No need for a <Toaster /> component here anymore, it's in the root layout
    <div className="container mx-auto max-w-2xl py-12 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-3xl">Upload Your Prescription</CardTitle>
            <CardDescription>
              Submit your script in a few easy steps. We'll handle the rest.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {isSubmitted ? (
              <div className="text-center p-8">
                <CheckCircle className="mx-auto h-16 w-16 text-green-500" />
                <h3 className="mt-4 text-2xl font-semibold">Thank You!</h3>
                <p className="mt-2 text-muted-foreground">
                  Your prescription has been submitted successfully. A pharmacist will be in touch with you soon to confirm the details.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="file-upload">Prescription File (PDF, JPG, PNG)</Label>
                  <Input id="file-upload" type="file" required />
                  <p className="text-sm text-muted-foreground">
                    This is a demo. No file will actually be uploaded.
                  </p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="e.g. John Doe" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="e.g. 082 123 4567" required />
                </div>
                <Button type="submit" className="w-full" size="lg">
                  <Upload className="mr-2 h-4 w-4" />
                  Submit Prescription
                </Button>
              </form>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}