import { Brain, MessageSquare, Target, BarChart3 } from "lucide-react";

export const AIFeaturesSection = () => {
  return (
    <section id="ai" className="py-24 bg-gradient-to-b from-white to-slate-50 dark:from-slate-800 dark:to-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-slate-800 dark:text-slate-100">
            AI-Powered Features
          </h2>
          <p className="text-xl text-slate-500 dark:text-slate-300 max-w-3xl mx-auto">
            Experience the future of couple finance management with our advanced AI.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div className="text-center p-6">
            <Brain className="mx-auto text-4xl text-blue-600 dark:text-blue-400 mb-4" />
            <h3 className="text-xl font-bold mb-2">Smart Insights</h3>
            <p className="text-slate-500 dark:text-slate-400">AI-powered recommendations for better financial decisions.</p>
          </div>
          <div className="text-center p-6">
            <MessageSquare className="mx-auto text-4xl text-purple-600 dark:text-purple-400 mb-4" />
            <h3 className="text-xl font-bold mb-2">AI Chat</h3>
            <p className="text-slate-500 dark:text-slate-400">Get personalized advice and answers to your financial questions.</p>
          </div>
          <div className="text-center p-6">
            <Target className="mx-auto text-4xl text-green-600 dark:text-green-400 mb-4" />
            <h3 className="text-xl font-bold mb-2">Goal Optimization</h3>
            <p className="text-slate-500 dark:text-slate-400">AI helps you reach your financial goals faster and smarter.</p>
          </div>
          <div className="text-center p-6">
            <BarChart3 className="mx-auto text-4xl text-orange-600 dark:text-orange-400 mb-4" />
            <h3 className="text-xl font-bold mb-2">Predictive Analytics</h3>
            <p className="text-slate-500 dark:text-slate-400">Forecast your spending patterns and plan accordingly.</p>
          </div>
        </div>
      </div>
    </section>
  );
}; 