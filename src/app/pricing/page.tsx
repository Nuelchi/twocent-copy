"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Shield, Users, Crown, Star, Zap, ArrowRight, Check } from "lucide-react";
import Link from "next/link";

const pricingPlans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for couples just starting out",
    features: [
      "20 expenses per month",
      "50/50 split only",
      "1 shared goal",
      "2 budgets",
      "7-day activity history",
      "5 notes per month",
      "Basic badges",
      "Community support"
    ],
    limitations: ["Ads included", "Limited features"],
    buttonText: "Get Started Free",
    popular: false,
    icon: Heart,
    accent: "from-blue-500/10 to-purple-500/10"
  },
  {
    name: "Premium",
    price: "$19.99",
    period: "per month",
    description: "Enhanced features for serious couples",
    features: [
      "Unlimited expenses",
      "Custom split ratios",
      "5 category budgets",
      "Full history with filters",
      "Unlimited notes & disputes",
      "10 shared goals",
      "Unlimited PDF reports",
      "Advanced badges",
      "Priority email support",
      "No ads"
    ],
    buttonText: "Start Premium",
    popular: true,
    icon: Crown,
    accent: "from-primary/10 to-secondary/10"
  },
  {
    name: "Ultimate",
    price: "$39.99",
    period: "per month",
    description: "Complete solution with AI and advanced features",
    features: [
      "Everything in Premium",
      "Unlimited shared goals",
      "Bulk upload & auto-categorization",
      "Predictive budgeting",
      "Advanced analytics & insights",
      "AI conflict avoidance",
      "Savings optimization",
      "Custom PDF/Excel reports",
      "Tax-friendly reports",
      "Bank sync & integrations",
      "Exclusive themes & milestones",
      "Live chat support",
      "Enhanced privacy"
    ],
    buttonText: "Go Ultimate",
    popular: false,
    icon: Zap,
    accent: "from-accent/10 to-yellow-500/10"
  }
];

export default function PricingPage() {
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
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-20">
          <Badge variant="outline" className="mb-6 bg-background/80 backdrop-blur">
            <Star className="w-4 h-4 mr-2 text-yellow-500" />
            Choose Your Perfect Plan
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-secondary bg-clip-text text-transparent">
            Pricing Built for Love
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Start free and grow with us. Every plan is designed to strengthen your financial relationship, 
            with features that scale as your love story evolves.
          </p>
          <p className="text-lg text-primary font-semibold mt-4">
            💕 One payment covers both partners - no hidden fees!
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {pricingPlans.map((plan, index) => (
            <Card key={index} className={`relative group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${plan.popular ? 'ring-2 ring-primary/50 scale-105 lg:scale-110' : ''} bg-gradient-to-br ${plan.accent} backdrop-blur border-0 shadow-xl`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="gradient-primary text-white px-6 py-2 text-sm font-semibold shadow-lg">
                    <Crown className="w-4 h-4 mr-2" />
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-4 pt-8">
                <div className="flex justify-center mb-4">
                  <div className={`h-16 w-16 rounded-2xl bg-gradient-to-br ${plan.popular ? 'from-primary to-secondary' : 'from-muted to-accent'} flex items-center justify-center shadow-lg`}>
                    <plan.icon className={`h-8 w-8 ${plan.popular ? 'text-white' : 'text-primary'}`} />
                  </div>
                </div>
                
                <CardTitle className="text-2xl font-bold mb-2">{plan.name}</CardTitle>
                
                <div className="mb-4">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-5xl font-bold text-foreground">
                      {plan.price}
                    </span>
                    <span className="text-lg font-medium text-muted-foreground">
                      /{plan.period}
                    </span>
                  </div>
                </div>
                
                <p className="text-muted-foreground text-lg leading-relaxed">{plan.description}</p>
              </CardHeader>
              
              <CardContent className="space-y-6 px-8 pb-8">
                <div className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3 group-hover:translate-x-1 transition-transform duration-300">
                      <div className="flex-shrink-0 mt-0.5">
                        <Check className="h-5 w-5 text-green-600 bg-green-100 rounded-full p-0.5" />
                      </div>
                      <span className="text-sm font-medium leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Link href="/auth" className="block">
                  <Button 
                    className="w-full py-6 text-lg font-semibold transition-all duration-300 gradient-primary text-white shadow-lg hover:shadow-xl transform hover:scale-105"
                    size="lg"
                  >
                    <span className="text-white font-bold">{plan.buttonText}</span>
                    <ArrowRight className="ml-2 h-5 w-5 text-white" />
                  </Button>
                </Link>
                
                {plan.name === "Free" && (
                  <p className="text-center text-xs text-muted-foreground mt-4">
                    No credit card required • Cancel anytime
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <p className="text-muted-foreground mb-6">
            Need a custom plan for your organization? 
            <Link href="/contact" className="text-primary hover:underline ml-1 font-semibold">
              Contact our team
            </Link>
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Heart className="h-4 w-4 text-red-500" />
              <span>Cancel anytime</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-blue-600" />
              <span>24/7 support</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 