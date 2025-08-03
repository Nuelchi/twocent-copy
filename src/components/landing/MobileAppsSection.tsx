"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Smartphone, Receipt, Bell } from "lucide-react";
import { toast } from "sonner";

export const MobileAppsSection = () => {
  const [showComingSoon, setShowComingSoon] = useState(false);
  return (
    <section id="mobile" className="bg-muted/30 py-12 md:py-20 relative overflow-hidden">
      {/* Animated playful background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-10 left-1/3 w-24 h-24 bg-green-400/20 rounded-full blur-2xl" />
        <div className="absolute bottom-10 right-1/4 w-16 h-16 bg-primary/20 rounded-full blur-2xl" />
        <div className="absolute top-1/2 right-1/2 w-10 h-10 bg-secondary/30 rounded-full blur-xl" />
      </div>
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Take TwoCents Everywhere
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Available on iOS and Android with full synchronization across all devices
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-4 md:space-y-6 order-2 lg:order-1">
            <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 p-4 rounded-lg bg-background/50 backdrop-blur">
              <Smartphone className="h-6 w-6 md:h-8 md:w-8 text-primary flex-shrink-0" />
              <div className="text-center sm:text-left">
                <h3 className="text-lg md:text-xl font-semibold mb-1">Native Mobile Experience</h3>
                <p className="text-sm md:text-base text-muted-foreground">Fully featured mobile apps with offline support and push notifications</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 p-4 rounded-lg bg-background/50 backdrop-blur">
              <Receipt className="h-6 w-6 md:h-8 md:w-8 text-primary flex-shrink-0" />
              <div className="text-center sm:text-left">
                <h3 className="text-lg md:text-xl font-semibold mb-1">Camera Receipt Capture</h3>
                <p className="text-sm md:text-base text-muted-foreground">Snap photos of receipts on-the-go with instant AI processing</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 p-4 rounded-lg bg-background/50 backdrop-blur">
              <Bell className="h-6 w-6 md:h-8 md:w-8 text-primary flex-shrink-0" />
              <div className="text-center sm:text-left">
                <h3 className="text-lg md:text-xl font-semibold mb-1">Real-time Notifications</h3>
                <p className="text-sm md:text-base text-muted-foreground">Stay in sync with instant updates when your partner adds expenses</p>
              </div>
            </div>
          </div>
          <div className="text-center space-y-4 md:space-y-6 order-1 lg:order-2">
            <img 
              src="/lovable-uploads/ac1429e3-bd56-4d41-adfc-8d1fcefb84c1.png" 
              alt="Mobile App Screenshots showing couple managing finances together" 
              className="mx-auto rounded-2xl shadow-2xl max-w-full w-full md:max-w-md lg:max-w-lg h-auto object-contain"
            />
            <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4 px-4">
              <Button className="bg-black text-white hover:bg-gray-800 flex items-center justify-center px-4 md:px-6 py-2 md:py-3 rounded-lg text-sm md:text-base w-full sm:w-auto" onClick={() => toast("Mobile app coming soon! Awaiting App Store and Google Play approval.")}>
                <span className="mr-2 flex items-center">
                  {/* App Store SVG */}
                  <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.564 13.09c.01-2.14 1.75-3.16 1.83-3.21-1-1.47-2.56-1.67-3.11-1.7-1.32-.13-2.58.77-3.25.77-.67 0-1.7-.75-2.8-.73-1.44.02-2.77.84-3.51 2.13-1.5 2.6-.38 6.45 1.08 8.56.72 1.04 1.58 2.2 2.71 2.16 1.09-.04 1.5-.7 2.81-.7 1.31 0 1.67.7 2.81.68 1.16-.02 1.89-1.06 2.6-2.1.82-1.19 1.16-2.34 1.18-2.4-.03-.01-2.26-.87-2.28-3.45zm-2.68-6.3c.6-.73 1-1.75.89-2.77-.86.03-1.89.57-2.5 1.3-.55.65-1.04 1.7-.86 2.7.95.07 1.93-.48 2.47-1.23z" fill="#fff"/>
                  </svg>
                </span>
                <span className="hidden sm:inline">Download on App Store</span>
                <span className="sm:hidden">App Store</span>
              </Button>
              <Button className="bg-green-600 text-white hover:bg-green-700 flex items-center justify-center px-4 md:px-6 py-2 md:py-3 rounded-lg text-sm md:text-base w-full sm:w-auto" onClick={() => toast("Mobile app coming soon! We're awaiting App Store and Google Play approval.")}>
                <span className="mr-2 flex items-center">
                  {/* Google Play SVG */}
                  <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M325.3 234.3L104.7 13.7C99.2 8.2 91.2 6.7 84.1 10.2C77 13.7 72 21.1 72 29.1V482.9C72 490.9 77 498.3 84.1 501.8C87.1 503.3 90.2 504 93.3 504C97.7 504 102.1 502.3 105.3 498.3L325.3 277.7L406.6 358.9L325.3 234.3ZM440.6 232.1L370.7 162.2L325.3 206.6L406.6 287.9L440.6 232.1ZM370.7 349.8L440.6 279.9L406.6 224.1L325.3 305.4L370.7 349.8Z" fill="#fff"/>
                  </svg>
                </span>
                <span className="hidden sm:inline">Get it on Google Play</span>
                <span className="sm:hidden">Google Play</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Dialog open={showComingSoon} onOpenChange={setShowComingSoon}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-center">
              Mobile App Coming Soon
            </DialogTitle>
            <DialogDescription className="text-center text-slate-600">
              We're still working hard to launch our mobile app!<br />
              It will be available on the App Store and Google Play as soon as we receive approval.<br />
              Thank you for your patience and excitement!
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </section>
  );
}; 