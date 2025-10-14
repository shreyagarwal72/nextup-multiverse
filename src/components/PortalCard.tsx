import { ReactNode } from "react";
import { Card } from "@/components/ui/card";

interface PortalCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  href: string;
  gradient: string;
}

const PortalCard = ({ icon, title, description, href, gradient }: PortalCardProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block transition-all duration-300 hover:-translate-y-1 focus:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded-2xl"
      aria-label={`Visit ${title}: ${description}`}
    >
      <Card className="relative overflow-hidden border border-white/10 bg-card/70 backdrop-blur-glass hover:border-white/20 hover:shadow-premium transition-all duration-300 h-full rounded-2xl">
        {/* Glassmorphism overlay */}
        <div className="absolute inset-0 bg-glass opacity-60" />
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
        
        <div className="relative p-7 md:p-8 flex flex-col items-center text-center space-y-5 h-full">
          {/* Icon with soft glow */}
          <div className="relative flex-shrink-0">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl group-hover:blur-2xl group-hover:bg-primary/30 transition-all duration-300" />
            <div className="relative w-16 h-16 md:w-20 md:h-20 flex items-center justify-center text-primary group-hover:text-secondary group-hover:scale-105 transition-all duration-300">
              {icon}
            </div>
          </div>

          {/* Content */}
          <div className="space-y-2.5 flex-grow flex flex-col justify-center">
            <h3 className="text-lg md:text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300 leading-tight tracking-tight">
              {title}
            </h3>
            <p className="text-sm text-muted-foreground/90 group-hover:text-foreground/80 transition-colors duration-300 leading-relaxed">
              {description}
            </p>
          </div>

          {/* Minimal call to action */}
          <div className="pt-2 text-xs font-medium text-primary/60 group-hover:text-primary transition-all duration-300 flex items-center gap-1.5">
            <span className="tracking-wide">Enter</span>
            <span className="inline-block transform group-hover:translate-x-0.5 transition-transform duration-300">→</span>
          </div>
        </div>
      </Card>
    </a>
  );
};

export default PortalCard;
