import Link from "next/link";

export const LandingFooter = () => {
  return (
    <footer className="border-t-0 bg-gradient-to-b from-white via-slate-50 to-slate-100 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 py-12 relative overflow-hidden animate-footer-glow shadow-inner">
      {/* Soft shadow border on top */}
      <div className="absolute left-0 right-0 top-0 h-px bg-slate-200 dark:bg-slate-800 opacity-70" />
      {/* Subtle animated background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-10 left-1/3 w-24 h-24 bg-blue-200 dark:bg-blue-900 rounded-full blur-2xl opacity-10" />
        <div className="absolute bottom-10 right-1/4 w-16 h-16 bg-blue-100 dark:bg-blue-800 rounded-full blur-2xl opacity-10" />
        <div className="absolute top-1/2 right-1/2 w-10 h-10 bg-gray-100 dark:bg-slate-800 rounded-full blur-xl opacity-10" />
      </div>
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 dark:bg-blue-500">
                <span className="text-xs font-bold text-white">♡</span>
              </div>
              <span className="font-bold text-blue-600 dark:text-blue-400">TwoCents</span>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-300">
              AI-powered expense tracking for couples who want to build a future together.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-slate-700 dark:text-slate-200">Product</h4>
            <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-300">
              <li><a href="#features">Features</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#ai">AI Features</a></li>
              <li><a href="#mobile">Mobile Apps</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-slate-700 dark:text-slate-200">Support</h4>
            <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-300">
              <li><Link href="/contact" className="hover:underline">Contact Us</Link></li>
              <li><Link href="/privacy" className="hover:underline">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:underline">Terms of Service</Link></li>
              <li><Link href="/terms#refund-policy" className="hover:underline">Refund Policy</Link></li>
              <li><Link href="/data-retention" className="hover:underline">Data Retention</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-slate-700 dark:text-slate-200">Company</h4>
            <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-300">
              <li><Link href="/about" className="hover:underline">About</Link></li>
              <li>Blog</li>
              <li>Press</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 text-center text-sm text-slate-400 dark:text-slate-500">
          © 2025 TwoCents. All rights reserved. • Made with <span className="animate-heart-beat inline-block text-blue-600 dark:text-blue-400">♡</span> & AI
        </div>
      </div>
    </footer>
  );
}; 