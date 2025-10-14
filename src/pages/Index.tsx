import StarField from "@/components/StarField";
import PortalCard from "@/components/PortalCard";
import { Globe, Gamepad2, Youtube, Archive, Wrench, Sparkles } from "lucide-react";

const Index = () => {
  const portals = [
    {
      icon: <Globe className="w-full h-full" />,
      title: "Main Site",
      description: "Explore the complete Nextup Studio experience",
      href: "https://vanshubhai.vercel.app/",
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
      title: "Extended Hub",
      description: "Advanced tools and expanded features",
      href: "https://nextuptool2.vercel.app/",
      gradient: "from-fuchsia-500/20 to-pink-500/20",
    },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 bg-gradient-cosmic" />
      <StarField />
      
      {/* Ambient Glow Effects */}
      <div className="fixed top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-glow" />
      <div className="fixed bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] animate-glow" style={{ animationDelay: "1s" }} />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-12 md:py-20">
        {/* Hero Section */}
        <header className="text-center mb-16 md:mb-24">
          <div className="inline-block mb-6 animate-float">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/30 blur-2xl rounded-full" />
              <h1 className="relative text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-glow">
                Nextup Universe
              </h1>
            </div>
          </div>
          
          <p className="text-xl md:text-2xl lg:text-3xl text-foreground/90 mb-4 font-light tracking-wide">
            Where Music, Gaming & Creativity Collide
          </p>
          
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
            Welcome to the official digital hub of Nextup Studio by Vanshu. 
            Choose your portal and explore infinite creative possibilities.
          </p>
        </header>

        {/* Portal Grid */}
        <section 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto"
          aria-label="Nextup Universe Portals"
        >
          {portals.map((portal, index) => (
            <div
              key={portal.title}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s`, animationFillMode: "both" }}
            >
              <PortalCard {...portal} />
            </div>
          ))}
        </section>

        {/* Footer */}
        <footer className="mt-20 text-center">
          <div className="inline-flex items-center gap-2 text-muted-foreground text-sm">
            <Sparkles className="w-4 h-4 text-primary animate-twinkle" />
            <p>
              Crafted with creativity by{" "}
              <span className="text-primary font-semibold">Vanshu</span> - Nextup Studio
            </p>
            <Sparkles className="w-4 h-4 text-secondary animate-twinkle" style={{ animationDelay: "1.5s" }} />
          </div>
        </footer>
      </div>
    </main>
  );
};

export default Index;
