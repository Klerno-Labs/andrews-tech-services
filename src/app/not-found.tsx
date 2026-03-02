import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Terminal } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-terminal-bg text-terminal-text font-mono p-6">
      <Terminal className="w-16 h-16 text-terminal-primary mb-6" />
      <h1 className="text-4xl font-bold mb-4">404 ERROR</h1>
      <p className="text-terminal-muted mb-8 text-center max-w-md">
        The requested sector data could not be found. The system may have experienced a critical failure.
      </p>
      <Link href="/">
        <Button variant="primary">Return to Base</Button>
      </Link>
    </div>
  );
}