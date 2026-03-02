import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Terminal } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background p-6 text-center">
      <div className="mb-8 relative">
        <Terminal className="h-24 w-24 text-gray-800 animate-pulse" />
        <div className="absolute inset-0 bg-primary blur-3xl opacity-20" />
      </div>
      
      <h1 className="text-4xl md:text-6xl font-bold mb-4 font-mono text-primary">404</h1>
      <h2 className="text-2xl text-gray-200 mb-6">PAGE NOT FOUND</h2>
      <p className="text-gray-500 font-mono max-w-md mb-8">
        The resource you are looking for has been moved, deleted, or does not exist in the directory structure.
      </p>
      
      <Button variant="primary" asChild>
        <Link href="/">Return to Dashboard</Link>
      </Button>
    </div>
  );
}