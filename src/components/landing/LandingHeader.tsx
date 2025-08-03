"use client";

import { useRef } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const LandingHeader = () => {
  const logoRef = useRef<HTMLImageElement>(null);

  return (
    <header className="sticky top-0 z-50 w-full border-b-0 bg-gradient-to-b from-white via-slate-50 to-slate-100 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 shadow-md/10 backdrop-blur supports-[backdrop-filter]:bg-background/60" style={{ paddingTop: 'max(4px, env(safe-area-inset-top))' }}>
      {/* Soft shadow border */}
      <div className="absolute left-0 right-0 bottom-0 h-px bg-slate-200 dark:bg-slate-800 opacity-70" />
      <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-4 relative">
        <div className="flex items-center space-x-2 group">
          <img 
            ref={logoRef}
            src="/lovable-uploads/4713a158-4845-48b6-ba98-7b2445ec39e7.png" 
            alt="TwoCents Logo" 
            className="h-8 w-8 transition-transform duration-300 group-hover:scale-110"
          />
          <h1 className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-400 bg-clip-text text-transparent">
            TwoCents
          </h1>
        </div>
        
        <div className="flex items-center space-x-12">
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#features" className="nav-link">Features</a>
            <Link href="/pricing" className="nav-link">Pricing</Link>
            <a href="#mobile" className="nav-link">Mobile Apps</a>
            <a href="#ai" className="nav-link">AI Features</a>
          </nav>
          <div className="flex items-center space-x-4">
            <Link href="/auth">
              <Button variant="outline">Sign In</Button>
            </Link>
            <Link href="/auth">
              <Button className="bg-blue-600 dark:bg-blue-500 text-white shadow hover:bg-blue-700 dark:hover:bg-blue-400 transition-colors">
                Get Started Free
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <style>{`
        .nav-link {
          position: relative;
          color: #64748b;
          transition: color 0.2s;
          font-weight: 500;
        }
        .nav-link:hover {
          color: #2563eb;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          left: 0; right: 0; bottom: -2px;
          height: 2px;
          background: #2563eb;
          border-radius: 2px;
          opacity: 0;
          transform: scaleX(0);
          transition: opacity 0.3s, transform 0.3s;
        }
        .nav-link:hover::after {
          opacity: 1;
          transform: scaleX(1);
        }
      `}</style>
    </header>
  );
}; 