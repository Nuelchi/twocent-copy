import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-accent/10">
      <div className="w-full max-w-3xl mx-auto mt-8 mb-4 flex justify-start">
        <Link href="/" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/80 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-semibold transition">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
          Home
        </Link>
      </div>
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">About TwoCents</h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground mb-8 text-center">
              We're on a mission to help couples build stronger financial relationships through AI-powered tools and insights.
            </p>
            
            <div className="grid md:grid-cols-2 gap-12 mt-16">
              <div>
                <h2 className="text-2xl font-bold mb-4">Our Story</h2>
                <p className="text-muted-foreground mb-4">
                  TwoCents was born from a simple observation: couples often struggle with money conversations, 
                  leading to stress and conflict in relationships.
                </p>
                <p className="text-muted-foreground">
                  We believe that financial harmony is key to relationship success, and we've built the tools 
                  to make that harmony achievable for every couple.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                <p className="text-muted-foreground mb-4">
                  To empower couples with AI-driven insights and tools that make financial management 
                  transparent, fair, and even enjoyable.
                </p>
                <p className="text-muted-foreground">
                  We're committed to privacy, security, and building features that truly serve the needs 
                  of modern couples.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 