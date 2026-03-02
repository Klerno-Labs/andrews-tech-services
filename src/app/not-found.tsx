import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center bg-background">
      <div className="w-16 h-16 bg-[#1a1a1a] rounded-full flex items-center justify-center mb-6">
        <AlertTriangle className="w-8 h-8 text-primary" />
      </div>
      <h1 className="font-sans text-4xl font-bold text-text mb-2">404 Error</h1>
      <p className="font-mono text-text-muted mb-8 max-w-md">
        The requested sector does not exist or has been moved. Check your coordinates and try again.
      </p>
      <Button variant="secondary" asChild>
        <Link href="/">Return to Base</Link>
      </Button>
    </div>
  );
}