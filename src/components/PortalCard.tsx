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
      className="group block transform transition-all duration-500 hover:scale-[1.02] focus:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xl"
      aria-label={`Visit ${title}: ${description}`}
    >
      <Card className="relative overflow-hidden border-2 border-border/40 bg-card/60 backdrop-blur-md hover:border-primary/60 hover:shadow-portal transition-all duration-500 h-full">
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
        
        <div className="relative p-8 flex flex-col items-center text-center space-y-5 h-full">
          {/* Icon with enhanced glow */}
          <div className="relative flex-shrink-0">
            <div className="absolute inset-0 bg-primary/30 blur-2xl rounded-full group-hover:blur-3xl group-hover:bg-primary/40 transition-all duration-500" />
            <div className="relative w-20 h-20 flex items-center justify-center text-primary group-hover:text-secondary group-hover:scale-110 transition-all duration-500 animate-float">
              {icon}
            </div>
          </div>

          {/* Content */}
          <div className="space-y-3 flex-grow flex flex-col justify-center">
            <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 leading-tight">
              {title}
            </h3>
            <p className="text-sm md:text-base text-muted-foreground group-hover:text-foreground/90 transition-colors duration-300 leading-relaxed">
              {description}
            </p>
          </div>

          {/* Call to action */}
          <div className="pt-3 text-sm font-medium text-primary/70 group-hover:text-primary transition-colors duration-300 flex items-center gap-2">
            <span>Enter Portal</span>
            <span className="inline-block transform group-hover:translate-x-1 transition-transform duration-300 text-lg">→</span>
          </div>
        </div>
      </Card>
    </a>
  );
};

export default PortalCard;
