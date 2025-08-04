import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const dummyPosts = [
  {
    title: "5 Tips for Managing Seasonal Allergies in South Africa",
    description: "As the seasons change, so do the pollens in the air. Here are five practical tips to help you breathe easier and manage your allergies effectively...",
    date: "October 26, 2023",
    slug: "/blog/managing-allergies",
  },
  {
    title: "Understanding Your Chronic Medication: Why Consistency is Key",
    description: "Taking chronic medication correctly is vital for managing long-term health conditions. We explore why sticking to your schedule is so important...",
    date: "October 15, 2023",
    slug: "/blog/chronic-medication-tips",
  },
];

export default function BlogPage() {
  return (
    <div className="container mx-auto max-w-4xl py-12 md:py-24">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Health & Wellness Blog</h1>
        <p className="mt-4 text-muted-foreground md:text-xl">
          Your source for trusted health tips from our pharmacists.
        </p>
      </div>
      <div className="grid gap-8">
        {dummyPosts.map((post) => (
          <Card key={post.title}>
            <CardHeader>
              <CardTitle>{post.title}</CardTitle>
              <CardDescription>{post.date}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{post.description}</p>
            </CardContent>
            <CardFooter>
              <Button asChild variant="link" className="px-0">
                <Link href={post.slug}>
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}