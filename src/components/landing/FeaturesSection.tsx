import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Brain, DollarSign, Receipt, MessageSquare, Target, BarChart3 } from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Recommendations",
    description: "Smart suggestions for better splitting models and budget adjustments based on your spending behavior"
  },
  {
    icon: DollarSign,
    title: "Smart Expense Splitting",
    description: "Automatic 50/50, 60/40, 70/30 splits or custom ratios with AI-optimized suggestions"
  },
  {
    icon: MessageSquare,
    title: "TwoCents AI Guidance",
    description: "Unlock personalized, actionable tips and encouragement from TwoCents AI—your smart companion for saving, spending, and growing together as a couple."
  },
  {
    icon: MessageSquare,
    title: "Notes & Conversations",
    description: "Add discussions and mood tracking to each transaction for better communication"
  },
  {
    icon: Target,
    title: "Shared Goals",
    description: "Save together for vacations, homes, and dreams with real-time progress tracking"
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Comprehensive insights with activity timeline and spending pattern analysis"
  }
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="relative pt-2 md:pt-4 pb-24 overflow-hidden bg-gradient-to-b from-white via-slate-50 to-slate-100 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900">
      {/* Subtle background shapes */}
      <div className="absolute top-10 left-1/4 w-16 h-16 bg-blue-200 dark:bg-blue-900 rounded-full blur-2xl opacity-20 z-0" />
      <div className="absolute bottom-20 right-1/3 w-24 h-24 bg-blue-100 dark:bg-blue-800 rounded-full blur-2xl opacity-10 z-0" />
      <div className="absolute top-1/2 left-1/2 w-10 h-10 bg-gray-100 dark:bg-slate-800 rounded-full blur-xl opacity-10 z-0" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <Badge variant="outline" className="mb-6 bg-white/80 dark:bg-slate-900/70 backdrop-blur border-blue-200 dark:border-blue-800">
            <Brain className="w-4 h-4 mr-2 text-blue-400 dark:text-blue-300 animate-spin-slow" />
            Powered by AI
          </Badge>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-slate-800 dark:text-slate-100 tracking-tight leading-tight">
            AI-Enhanced Financial Harmony
          </h2>
          <p className="text-xl text-slate-500 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed font-light">
            Powerful AI features designed specifically for couples who want to manage money together seamlessly
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="group relative overflow-hidden border-0 bg-white/90 dark:bg-slate-900/80 backdrop-blur-sm shadow-xl rounded-2xl hover:shadow-2xl transition-transform hover:scale-105 duration-300">
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-blue-100/20 dark:bg-blue-800/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <CardHeader className="relative z-10 text-center pb-4">
                <div className="relative mx-auto mb-6">
                  <div className="h-14 w-14 mx-auto rounded-full bg-blue-50 dark:bg-blue-900 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                    <div className="absolute inset-0 rounded-full bg-blue-200 dark:bg-blue-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <feature.icon className="h-7 w-7 text-blue-400 dark:text-blue-300 relative z-10 group-hover:text-white transition-colors duration-300">
                    </feature.icon>
                  </div>
                  {/* Floating particles effect */}
                  <div className="absolute -top-2 -right-2 w-3 h-3 bg-blue-200 dark:bg-blue-900 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-300" />
                  <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-blue-100 dark:bg-blue-800 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-500" />
                </div>
                <CardTitle className="text-xl font-bold mb-3 group-hover:text-blue-400 dark:group-hover:text-blue-300 transition-colors duration-300">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10 text-center px-6 pb-8">
                <p className="text-slate-500 dark:text-slate-300 leading-relaxed group-hover:text-slate-700 dark:group-hover:text-slate-100 transition-colors duration-300 font-light">
                  {feature.description}
                </p>
                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-blue-400 dark:bg-blue-300 group-hover:w-20 transition-all duration-500 rounded-full" />
              </CardContent>
            </Card>
          ))}
        </div>
        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 bg-white/80 dark:bg-slate-900/70 backdrop-blur border border-blue-200 dark:border-blue-800 rounded-2xl px-8 py-6 shadow-lg">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full" />
              <span className="text-sm font-medium text-slate-500 dark:text-slate-300">AI Learning Active</span>
            </div>
            <div className="h-6 w-px bg-blue-200 dark:bg-blue-800" />
            <Link href="/auth">
              <Button className="bg-blue-600 dark:bg-blue-500 text-white shadow-lg hover:shadow-xl transition-transform hover:scale-105">
                <Brain className="w-4 h-4 mr-2" />
                Experience AI Features
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}; 