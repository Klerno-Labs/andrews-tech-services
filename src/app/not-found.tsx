import Link from "next/link";
import { Terminal } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-text p-4">
      <Terminal className="w-16 h-16 text-primary mb-4" />
      <h1 className="text-4xl font-mono font-bold text-primary mb-2">404 ERROR</h1>
      <p className="text-muted font-mono mb-8">PAGE NOT FOUND IN SYSTEM DIRECTORY</p>
      <Link 
        href="/" 
        className="px-6 py-3 border border-primary text-primary font-mono text-sm hover:bg-primary hover:text-black transition-colors"
      >
        RETURN TO ROOT
      </Link>
    </div>
  );
}