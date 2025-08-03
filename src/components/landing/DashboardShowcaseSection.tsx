import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Monitor, Smartphone, TrendingUp, Users2, ArrowRight } from "lucide-react";
import Link from "next/link";

export const DashboardShowcaseSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-20 bg-gradient-to-br from-muted/30 via-background to-accent/10 relative overflow-hidden">
      {/* Animated background glows */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-10 left-1/4 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-1/3 w-24 h-24 bg-pink-400/20 rounded-full blur-2xl" />
        <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-secondary/30 rounded-full blur-xl" />
      </div>
      <div className="text-center mb-16 relative z-10">
        <Badge variant="outline" className="mb-6 bg-primary/10 text-primary border-primary/20">
          <TrendingUp className="w-4 h-4 mr-2" />
          Beautiful Dashboard Experience
        </Badge>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Everything You Need in One Place
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Powerful web dashboard and mobile app designed specifically for couples to manage their finances together
        </p>
      </div>
      <div className="grid lg:grid-cols-2 gap-12 items-center mb-16 relative z-10">
        <div className="space-y-6">
          <div className="flex items-center space-x-3 mb-6">
            <Monitor className="h-6 w-6 text-primary" />
            <h3 className="text-2xl font-bold">Web Dashboard</h3>
          </div>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 rounded-full bg-primary mt-2" />
              <div>
                <h4 className="font-semibold">Comprehensive Overview</h4>
                <p className="text-muted-foreground">See all your expenses, budgets, and balances at a glance</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 rounded-full bg-secondary mt-2" />
              <div>
                <h4 className="font-semibold">Smart Budget Tracking</h4>
                <p className="text-muted-foreground">Visual progress bars and alerts to keep you on track</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 rounded-full bg-accent mt-2" />
              <div>
                <h4 className="font-semibold">Partner Sync</h4>
                <p className="text-muted-foreground">Real-time synchronization with your partner's activities</p>
              </div>
            </div>
          </div>
        </div>
        <Card className="p-2 bg-gradient-to-br from-white to-muted/50 shadow-2xl border-0">
          <img 
            src="/lovable-uploads/04506e4e-a9b4-414b-b446-a2ac5823a67f.png" 
            alt="TwoCents Web Dashboard - James & Frances managing their finances together" 
            className="w-full rounded-lg shadow-xl"
          />
        </Card>
      </div>
      <div className="grid lg:grid-cols-2 gap-12 items-center mb-16 relative z-10">
        <Card className="p-2 bg-gradient-to-br from-white to-muted/50 shadow-2xl border-0 lg:order-1">
          <div className="grid md:grid-cols-2 gap-4">
            <img 
              src="/lovable-uploads/54673b24-6054-4d38-b080-52fbf946cc90.png" 
              alt="TwoCents Mobile App - Navigation Menu" 
              className="w-full rounded-lg shadow-lg"
            />
            <img 
              src="/lovable-uploads/e35589ba-5fe5-4bc7-9ebc-1d592cfbe93c.png" 
              alt="TwoCents Mobile App - Dashboard View" 
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </Card>
        <div className="space-y-6 lg:order-2">
          <div className="flex items-center space-x-3 mb-6">
            <Smartphone className="h-6 w-6 text-primary" />
            <h3 className="text-2xl font-bold">Mobile Experience</h3>
          </div>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 rounded-full bg-green-500 mt-2" />
              <div>
                <h4 className="font-semibold">On-the-Go Tracking</h4>
                <p className="text-muted-foreground">Add expenses instantly while you're out and about</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 rounded-full bg-blue-500 mt-2" />
              <div>
                <h4 className="font-semibold">Touch-Friendly Interface</h4>
                <p className="text-muted-foreground">Optimized for mobile with intuitive navigation</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 rounded-full bg-purple-500 mt-2" />
              <div>
                <h4 className="font-semibold">Offline Support</h4>
                <p className="text-muted-foreground">Works even when you don't have internet connection</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 rounded-2xl p-12 relative z-10">
        <div className="flex items-center justify-center space-x-2 mb-6">
          <Users2 className="h-8 w-8 text-primary" />
          <h3 className="text-2xl font-bold">Built for Couples, Powered by AI</h3>
        </div>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Experience the perfect blend of beautiful design and intelligent features that make managing money as a couple effortless and enjoyable.
        </p>
        <Link href="/auth">
          <Button size="lg" className="gradient-primary text-white px-8 py-4 text-lg animate-pulse-soft">
            Start Your Journey Together
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </div>
      <style>{`
        @keyframes pulse-soft {
          0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(59,130,246,0.3); }
          50% { transform: scale(1.045); box-shadow: 0 0 0 8px rgba(59,130,246,0.12); }
        }
        .animate-pulse-soft { animation: pulse-soft 1.8s infinite cubic-bezier(.4,0,.6,1); }
      `}</style>
    </section>
  );
}; 