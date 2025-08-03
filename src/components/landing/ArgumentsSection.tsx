import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Heart } from "lucide-react";
import Link from "next/link";

export const ArgumentsSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50 dark:from-slate-800 dark:to-slate-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-slate-800 dark:text-slate-100">
                Say Goodbye to Money Arguments
              </h2>
              <p className="text-xl text-slate-500 dark:text-slate-300 mb-8 leading-relaxed">
                Our AI-powered platform eliminates the guesswork and awkwardness around shared expenses, so you can focus on what really matters – your relationship.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <Check className="h-6 w-6 text-green-500 flex-shrink-0" />
                  <span className="text-lg text-slate-700 dark:text-slate-200">No more awkward money conversations</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-6 w-6 text-green-500 flex-shrink-0" />
                  <span className="text-lg text-slate-700 dark:text-slate-200">AI-powered spending insights</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-6 w-6 text-green-500 flex-shrink-0" />
                  <span className="text-lg text-slate-700 dark:text-slate-200">Automatically track who owes what</span>
                </div>
              </div>
            </div>

            {/* Right Column - Call to Action Card */}
            <div className="flex justify-center lg:justify-end">
              <Card className="w-full max-w-md bg-white dark:bg-slate-800 shadow-xl border-0">
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-full bg-pink-100 dark:bg-pink-900">
                      <Heart className="h-8 w-8 text-pink-600 dark:text-pink-400" />
                    </div>
                  </div>
                  <CardTitle className="text-2xl font-bold">Ready to Start?</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-6">
                  <p className="text-slate-600 dark:text-slate-300">
                    Join thousands of couples who've transformed their financial relationship with AI
                  </p>
                  <Link href="/auth" className="block">
                    <Button className="w-full bg-blue-600 dark:bg-blue-500 text-white hover:bg-blue-700 dark:hover:bg-blue-400 text-lg font-bold py-3">
                      Create Your Account
                    </Button>
                  </Link>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Free forever • No credit card required • AI-powered insights
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 