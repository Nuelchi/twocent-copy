import { Heart, Shield, Users, Zap } from "lucide-react";

export const BenefitsSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50 dark:from-slate-800 dark:to-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-slate-800 dark:text-slate-100">
            Why Choose TwoCents?
          </h2>
          <p className="text-xl text-slate-500 dark:text-slate-300 max-w-3xl mx-auto">
            Built specifically for couples who want to manage money together.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div className="text-center p-6">
            <Heart className="mx-auto text-4xl text-red-600 dark:text-red-400 mb-4" />
            <h3 className="text-xl font-bold mb-2">Built for Love</h3>
            <p className="text-slate-500 dark:text-slate-400">Designed specifically for couples, not just roommates.</p>
          </div>
          <div className="text-center p-6">
            <Shield className="mx-auto text-4xl text-green-600 dark:text-green-400 mb-4" />
            <h3 className="text-xl font-bold mb-2">Privacy First</h3>
            <p className="text-slate-500 dark:text-slate-400">Your financial data is secure and never shared.</p>
          </div>
          <div className="text-center p-6">
            <Users className="mx-auto text-4xl text-blue-600 dark:text-blue-400 mb-4" />
            <h3 className="text-xl font-bold mb-2">Real-time Sync</h3>
            <p className="text-slate-500 dark:text-slate-400">Both partners see updates instantly across all devices.</p>
          </div>
          <div className="text-center p-6">
            <Zap className="mx-auto text-4xl text-yellow-600 dark:text-yellow-400 mb-4" />
            <h3 className="text-xl font-bold mb-2">Lightning Fast</h3>
            <p className="text-slate-500 dark:text-slate-400">Quick and intuitive interface for busy couples.</p>
          </div>
        </div>
      </div>
    </section>
  );
}; 