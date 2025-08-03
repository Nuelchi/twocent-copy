export const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-slate-800 dark:text-slate-100">
            What Couples Say
          </h2>
          <p className="text-xl text-slate-500 dark:text-slate-300 max-w-3xl mx-auto">
            Hear from real couples who have transformed their financial relationship with TwoCents.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mr-4">
                <span className="text-blue-600 dark:text-blue-400 font-bold">S</span>
              </div>
              <div>
                <h4 className="font-bold">Sarah & Mike</h4>
                <p className="text-sm text-slate-500 dark:text-slate-400">Married 3 years</p>
              </div>
            </div>
            <p className="text-slate-600 dark:text-slate-300">
              "TwoCents has completely changed how we handle money. No more awkward conversations about who owes what!"
            </p>
          </div>
          <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mr-4">
                <span className="text-purple-600 dark:text-purple-400 font-bold">J</span>
              </div>
              <div>
                <h4 className="font-bold">Jessica & Alex</h4>
                <p className="text-sm text-slate-500 dark:text-slate-400">Engaged</p>
              </div>
            </div>
            <p className="text-slate-600 dark:text-slate-300">
              "The AI features are incredible. It's like having a financial advisor who really understands couples."
            </p>
          </div>
          <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mr-4">
                <span className="text-green-600 dark:text-green-400 font-bold">D</span>
              </div>
              <div>
                <h4 className="font-bold">David & Lisa</h4>
                <p className="text-sm text-slate-500 dark:text-slate-400">Married 8 years</p>
              </div>
            </div>
            <p className="text-slate-600 dark:text-slate-300">
              "We've saved more money in 6 months with TwoCents than we did in the previous 2 years combined."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}; 