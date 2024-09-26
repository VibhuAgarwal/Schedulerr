import { Button } from "@/components/ui/button";
import {  ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const features = [
  {
    icon: Calendar,
    title: "Create Events",
    description: "Easily set up and customize your event types",
  },
  {
    icon: Clock,
    title: "Manage Availability",
    description: "Define your availability to streamline scheduling",
  },
  {
    icon: LinkIcon,
    title: "Custom Links",
    description: "Share your personalized scheduling link",
  },
];

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-16">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 mb-24">
        <div className="lg:w-1/2">
          <h1 className="text-7xl font-extrabold pb-6 gradient-title capitalize">Simplify your Scheduling</h1>
          <p className="text-xl text-gray-600 mb-10">Schedulerr is an app that simplifies your scheduling. Create an event, invite your team, and get ready to schedule.</p>
          <Link href="/dashboard">
            <Button size="lg" className="text-lg">Get Started <ArrowRight className="ml-2 h-5 2-5"/></Button>
          </Link>
        </div>
        <div className="lg:w-1/2 flex justify-center">
        <div className="relative w-full max-w-md aspect-square"> 
          <Image src="/poster.png" alt="Scheduling Illustration" layout="fill" objectFit="contain" />
        </div>
        </div>
      </div>
    </main>
  );
}
