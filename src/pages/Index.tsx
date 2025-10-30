import { lazy, Suspense } from "react";
import { Globe, Gamepad2, Youtube, Archive, Wrench, Sparkles } from "lucide-react";
import cosmicBg from "@/assets/cosmic-bg.webp";

const StarField = lazy(() => import("@/components/StarField"));
const PortalCard = lazy(() => import("@/components/PortalCard"));

const Index = () => {
  const portals = [
    {
      icon: <Globe className="w-full h-full" />,
      title: "Main Site",
      description: "Explore the complete Nextup Studio experience",
      href: "https://nextup-studio.vercel.app/",
      gradient: "from-cyan-500/20 to-blue-500/20",
    },
    {
      icon: <Gamepad2 className="w-full h-full" />,
      title: "Minecraft World",
      description: "Dive into creative builds and adventures",
      href: "https://nextup-hub-mc.vercel.app/",
      gradient: "from-green-500/20 to-emerald-500/20",
    },
    {
      icon: <Youtube className="w-full h-full" />,
      title: "YouTube Zone",
      description: "Latest shorts, videos, and creative content",
      href: "https://myyoutube-cyan.vercel.app/",
      gradient: "from-red-500/20 to-pink-500/20",
    },
    {
      icon: <Archive className="w-full h-full" />,
      title: "Premium Vault",
      description: "Exclusive archives and premium collections",
      href: "https://nextup-archive.vercel.app/",
      gradient: "from-purple-500/20 to-violet-500/20",
    },
    {
      icon: <Wrench className="w-full h-full" />,
      title: "Web Tools",
      description: "Powerful utilities and creative instruments",
      href: "https://nextuptool.vercel.app/",
      gradient: "from-orange-500/20 to-amber-500/20",
    },
    {
      icon: <Sparkles className="w-full h-full" />,
      title: "More Webtools",
      description: "Additional utilities and creative instruments",
      href: "https://nextuptool2.vercel.app/",
      gradient: "from-fuchsia-500/20 to-pink-500/20",
    },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Professional Animated Background */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${cosmicBg})`,
          backgroundAttachment: 'fixed'
        }}
      />
      <div className="fixed inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/90" />
      <Suspense fallback={null}>
        <StarField />
      </Suspense>
      
      {/* Refined Ambient Glow Effects */}
      <div className="fixed top-1/3 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] animate-glow pointer-events-none" />
      <div className="fixed bottom-1/3 right-1/4 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[150px] animate-glow pointer-events-none" style={{ animationDelay: "2s" }} />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
        {/* Hero Section */}
        <header className="text-center mb-20 md:mb-28 max-w-5xl mx-auto">
          <div className="mb-8 animate-float">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full scale-110" />
              <h1 className="relative text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight">
                <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                  Nextup Multiverse
                </span>
              </h1>
            </div>
          </div>
          
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-foreground mb-6 font-light tracking-wide leading-relaxed">
            Where Music, Gaming & Creativity Collide
          </p>
          
          <p className="text-base md:text-lg text-muted-foreground/90 max-w-3xl mx-auto leading-relaxed px-4">
            Welcome to the official digital hub of <span className="text-primary font-semibold">Nextup Studio</span> by Vanshu. 
            Explore six interconnected creative worlds through our multiverse portals.
          </p>
        </header>

        {/* Portal Grid with improved spacing */}
        <section 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 max-w-7xl mx-auto px-4"
          aria-label="Nextup Multiverse Portal Navigation"
        >
          <Suspense fallback={<div className="min-h-[200px]" />}>
            {portals.map((portal, index) => (
              <article
                key={portal.title}
                className="animate-fade-in"
                style={{ 
                  animationDelay: `${index * 0.1}s`, 
                  animationFillMode: "both" 
                }}
              >
                <PortalCard {...portal} />
              </article>
            ))}
          </Suspense>
        </section>

        {/* Premium iOS-style Footer */}
        <footer className="mt-24 md:mt-32 text-center space-y-3">
          <div className="inline-flex items-center gap-3 text-muted-foreground">
            <Sparkles className="w-4 h-4 text-primary animate-twinkle" />
            <p className="text-sm md:text-base">
              Crafted by{" "}
              <span className="text-primary font-semibold">Vanshu</span>
            </p>
            <Sparkles className="w-4 h-4 text-secondary animate-twinkle" style={{ animationDelay: "1.5s" }} />
          </div>
          
          <p className="text-xs text-muted-foreground/70 font-medium tracking-wide">
            © 2025 Nextup Studio. All rights reserved.
          </p>
        </footer>
      </div>
    </main>
  );
};

export default Index;

