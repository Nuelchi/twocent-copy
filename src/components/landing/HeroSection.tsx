"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Smartphone, Brain, Lock, Heart, DollarSign, Sliders } from "lucide-react";
import Link from "next/link";

const aiTexts = [
  "AI says: Love is best split 50/50… or 60/40, we don't judge!",
  "Smart tips for couples, every time you visit.",
  "Your relationship, your rules—AI just helps.",
  "Predicting your next date night budget…",
  "No more awkward money talks—AI's got you.",
  "AI: The only third wheel you'll ever need!"
];

export const HeroSection = () => {
  // Rotating AI-generated text
  const [aiIndex, setAiIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setAiIndex((prev) => (prev + 1) % aiTexts.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden min-h-[80vh] flex flex-col justify-center items-center">
      {/* Subtle background shapes */}
      <div className="absolute -top-32 -left-32 w-[320px] h-[320px] bg-gray-200 dark:bg-slate-800 rounded-full blur-2xl opacity-20 z-0" />
      <div className="absolute top-1/2 right-0 w-[220px] h-[220px] bg-gray-300 dark:bg-slate-700 rounded-full blur-2xl opacity-10 z-0" />
      <div className="absolute bottom-0 left-1/2 w-[180px] h-[180px] bg-gray-100 dark:bg-slate-800 rounded-full blur-2xl opacity-10 z-0" />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 pt-16 md:pt-24 pb-2 md:pb-4 text-center">
        <Badge variant="secondary" className="mb-8 text-xs md:text-sm px-4 py-2 shadow bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-200 font-semibold">
          <span className="mr-2">✨</span> Now with AI-Powered Insights
        </Badge>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight tracking-tight">
          <span className="block text-slate-800 dark:text-slate-100">AI-Powered <span className="text-blue-600 dark:text-blue-400">Expense</span></span>
          <span className="block text-slate-700 dark:text-slate-200">Tracking</span>
          <span className="block mt-2 text-slate-600 dark:text-slate-300">That <span className="text-indigo-600 dark:text-indigo-400">Strengthens</span></span>
          <span className="block mt-2 text-slate-700 dark:text-slate-200">Your <span className="text-blue-500 dark:text-blue-300">Relationship</span> <span className="inline-block align-middle text-4xl md:text-6xl text-indigo-400 dark:text-indigo-300 font-bold" style={{verticalAlign: 'middle', lineHeight: 1}} aria-label="heart">♡</span></span>
        </h1>

        {/* Rotating AI-generated text */}
        <div className="relative mt-4">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gray-200 dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-semibold shadow animate-rotate-in min-h-[2.5rem]">
            <span className="inline-block animate-rotate-text" key={aiIndex}>{aiTexts[aiIndex]}</span>
            <span className="ml-2 text-blue-400 dark:text-blue-300">🤖</span>
          </div>
        </div>

        <p className="text-base sm:text-lg md:text-xl text-slate-500 dark:text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          Stop fighting about money. <span className="font-bold text-blue-600 dark:text-blue-400">TwoCents</span> uses AI to help couples track expenses, split bills fairly, and save together for the future you're building.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link href="/auth" className="w-full sm:w-auto">
            <Button size="lg" className="bg-blue-600 dark:bg-blue-500 text-white px-8 py-4 w-full sm:w-auto text-lg font-bold shadow hover:bg-blue-700 dark:hover:bg-blue-400 transition-colors animate-pulse-soft">
              Start Your Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Link href="/demo" className="w-full sm:w-auto">
            <Button 
              size="lg" 
              variant="outline" 
              className="w-full sm:w-auto text-lg font-bold border-2 border-slate-200 dark:border-slate-700 hover:border-blue-400 shadow hover:scale-105 transition-transform"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mr-2 h-5 w-5">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" fill="none" />
                <polygon points="10,8 16,12 10,16" fill="currentColor" />
              </svg>
              Watch Demo
            </Button>
          </Link>
        </div>

        {/* Honest, beautiful highlights grid (exact stat size, icon as stat, color matched) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 text-center max-w-4xl mx-auto mt-8">
          <div className="p-4 rounded-xl bg-white/80 dark:bg-slate-900/70 shadow" style={{minHeight: '96px'}}>
            <Brain className="mx-auto text-3xl md:text-4xl font-extrabold text-blue-600 dark:text-blue-400 mb-1" />
            <div className="text-sm md:text-base font-bold text-blue-600 dark:text-blue-400 mb-1">AI-Powered</div>
            <div className="text-xs md:text-sm text-slate-500 dark:text-slate-400">Smart insights for couples, powered by advanced AI</div>
          </div>
          <div className="p-4 rounded-xl bg-white/80 dark:bg-slate-900/70 shadow" style={{minHeight: '96px'}}>
            <Lock className="mx-auto text-3xl md:text-4xl font-extrabold text-blue-600 dark:text-blue-400 mb-1" />
            <div className="text-sm md:text-base font-bold text-blue-600 dark:text-blue-400 mb-1">Privacy First</div>
            <div className="text-xs md:text-sm text-slate-500 dark:text-slate-400">Your data is always secure and never shared</div>
          </div>
          <div className="p-4 rounded-xl bg-white/80 dark:bg-slate-900/70 shadow" style={{minHeight: '96px'}}>
            <Heart className="mx-auto text-3xl md:text-4xl font-extrabold text-purple-600 dark:text-purple-400 mb-1" />
            <div className="text-sm md:text-base font-bold text-purple-600 dark:text-purple-400 mb-1">Built for Couples</div>
            <div className="text-xs md:text-sm text-slate-500 dark:text-slate-400">Designed for real relationships, not just roommates</div>
          </div>
          <div className="p-4 rounded-xl bg-white/80 dark:bg-slate-900/70 shadow" style={{minHeight: '96px'}}>
            <Sliders className="mx-auto text-3xl md:text-4xl font-extrabold text-slate-700 dark:text-slate-200 mb-1" />
            <div className="text-sm md:text-base font-bold text-slate-700 dark:text-slate-200 mb-1">Customizable</div>
            <div className="text-xs md:text-sm text-slate-500 dark:text-slate-400">Tailor categories, splits, and reminders to your needs</div>
          </div>
        </div>

      </div>
      <style>{`
        @keyframes rotate-in {
          0% { opacity: 0; transform: translateY(16px) scale(0.95); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-rotate-in { animation: rotate-in 0.7s cubic-bezier(.68,-0.55,.27,1.55); }
        @keyframes rotate-text {
          0% { opacity: 0; transform: translateY(12px); }
          10% { opacity: 1; transform: translateY(0); }
          90% { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(-12px); }
        }
        .animate-rotate-text { animation: rotate-text 3.2s cubic-bezier(.68,-0.55,.27,1.55); display: inline-block; }
        @keyframes pulse-soft {
          0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(59,130,246,0.3); }
          50% { transform: scale(1.045); box-shadow: 0 0 0 8px rgba(59,130,246,0.12); }
        }
        .animate-pulse-soft { animation: pulse-soft 1.8s infinite cubic-bezier(.4,0,.6,1); }
      `}</style>
    </section>
  );
}; 