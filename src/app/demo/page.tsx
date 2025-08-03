"use client";

import { useState } from "react";
import Link from "next/link";

const steps = [
  {
    title: "Sign Up & Create Your Profile",
    description: "Get started by creating your account and setting up your profile."
  },
  {
    title: "Invite Your Partner",
    description: "Easily invite your partner to join and collaborate on your finances."
  },
  {
    title: "Create Budgets",
    description: "Set up budgets to manage your spending and stay on track together."
  },
  {
    title: "Connect Bank",
    description: "Securely link your bank accounts to automatically sync transactions and get real-time insights."
  },
  {
    title: "Create Shared Goals",
    description: "Set financial goals together and track your progress as a team."
  },
  {
    title: "Track Expenses & Split Bills",
    description: "Log expenses, split bills fairly, and keep your finances transparent."
  },
  {
    title: "Get AI Insights & Recommendations",
    description: "Leverage AI-powered insights to optimize your spending and saving."
  },
  {
    title: "Stay In Sync on Mobile & Web",
    description: "Access your finances anywhere, anytime, on any device."
  }
];

export default function DemoPage() {
  const [expandedImg, setExpandedImg] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-accent/10 pt-safe px-4 pb-16 flex flex-col items-center">
      <div className="w-full max-w-3xl mx-auto mt-8 mb-4 flex justify-start">
        <Link href="/" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/80 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-semibold transition">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
          Home
        </Link>
      </div>
      <div className="max-w-3xl w-full mx-auto mt-4 mb-8 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-slate-800 dark:text-slate-100">See TwoCents in Action</h1>
        <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">Watch our quick demo and discover how easy it is to manage your finances as a couple with TwoCents.</p>
        {/* Video Embed Placeholder */}
        <div className="w-full aspect-video rounded-xl overflow-hidden shadow-lg border border-slate-200 bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-4">
          <iframe
            src="https://www.loom.com/embed/d4c21ff479124a91ba126c37fc7ca200?sid=526b3fbe-7b33-4479-88fb-e437e64cb841"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="TwoCents Demo Video"
            className="w-full h-full"
          ></iframe>
        </div>
        <p className="text-center text-slate-500 dark:text-slate-400 text-sm mb-10">Watch a quick walkthrough of TwoCents features and see how it works in real life.</p>
      </div>
      <div className="max-w-2xl w-full mx-auto mb-12">
        <h2 className="text-2xl font-bold mb-6 text-slate-800 dark:text-slate-100 text-center">How to Use TwoCents</h2>
        <ol className="space-y-6">
          {steps.map((step, idx) => (
            <li key={idx} className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-300 font-bold text-xl shadow">
                {idx + 1}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-1">{step.title}</h3>
                <p className="text-slate-600 dark:text-slate-300">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
      <div className="max-w-4xl w-full mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-slate-800 dark:text-slate-100 text-center">Screenshots</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Gamification */}
          <div className="flex flex-col items-center">
            <div className="relative aspect-video bg-slate-200 dark:bg-slate-700 rounded-xl flex items-center justify-center w-full overflow-hidden">
              <img src="/shots/gamifications.png" alt="Gamification" className="object-cover w-full h-full" />
              <button
                className="absolute bottom-2 right-2 bg-white/80 hover:bg-white text-primary rounded-full p-2 shadow transition"
                onClick={() => setExpandedImg('/shots/gamifications.png')}
                aria-label="Expand Gamification Screenshot"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 3h6m0 0v6m0-6L10 14m-1 7H3m0 0v-6m0 6l11-11" />
                </svg>
              </button>
            </div>
            <span className="mt-4 text-base font-semibold text-primary text-center">Have Fun with Gamification</span>
            <span className="text-sm text-slate-600 dark:text-slate-400 text-center">Turn your financial journey into a game—earn rewards, celebrate milestones, and stay motivated!</span>
          </div>
          
          {/* Split and Owe Balanced */}
          <div className="flex flex-col items-center">
            <div className="relative aspect-video bg-slate-200 dark:bg-slate-700 rounded-xl flex items-center justify-center w-full overflow-hidden">
              <img src="/shots/expense%20split.png" alt="Split and Owe Balanced" className="object-cover w-full h-full" />
              <button
                className="absolute bottom-2 right-2 bg-white/80 hover:bg-white text-primary rounded-full p-2 shadow transition"
                onClick={() => setExpandedImg('/shots/expense%20split.png')}
                aria-label="Expand Split and Owe Balanced Screenshot"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 3h6m0 0v6m0-6L10 14m-1 7H3m0 0v-6m0 6l11-11" />
                </svg>
              </button>
            </div>
            <span className="mt-4 text-base font-semibold text-primary text-center">Split Expenses Effortlessly</span>
            <span className="text-sm text-slate-600 dark:text-slate-400 text-center">Keep things fair and transparent with smart bill splitting and balance tracking.</span>
          </div>
          
          {/* Recurring Bills */}
          <div className="flex flex-col items-center">
            <div className="relative aspect-video bg-slate-200 dark:bg-slate-700 rounded-xl flex items-center justify-center w-full overflow-hidden">
              <img src="/shots/goals.png" alt="Recurring Bills" className="object-cover w-full h-full" />
              <button
                className="absolute bottom-2 right-2 bg-white/80 hover:bg-white text-primary rounded-full p-2 shadow transition"
                onClick={() => setExpandedImg('/shots/goals.png')}
                aria-label="Expand Recurring Bills Screenshot"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 3h6m0 0v6m0-6L10 14m-1 7H3m0 0v-6m0 6l11-11" />
                </svg>
              </button>
            </div>
            <span className="mt-4 text-base font-semibold text-primary text-center">Create Amazing Goals</span>
            <span className="text-sm text-slate-600 dark:text-slate-400 text-center">Dream big together and track your progress as a team with shared financial goals.</span>
          </div>
        </div>
      </div>

      {/* Expanded Image Modal */}
      {expandedImg && (
        <div 
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setExpandedImg(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <img 
              src={expandedImg} 
              alt="Expanded Screenshot" 
              className="w-full h-auto rounded-lg shadow-2xl"
            />
            <button
              className="absolute top-4 right-4 bg-white/80 hover:bg-white text-black rounded-full p-2 shadow transition"
              onClick={() => setExpandedImg(null)}
              aria-label="Close expanded image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
} 