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
      className="group block transform transition-all duration-500 hover:scale-105"
    >
      <Card className="relative overflow-hidden border-2 border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 hover:shadow-portal transition-all duration-500">
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
        
        <div className="relative p-6 flex flex-col items-center text-center space-y-4">
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full group-hover:blur-2xl transition-all duration-500" />
            <div className="relative w-16 h-16 flex items-center justify-center text-primary group-hover:text-secondary transition-colors duration-500 animate-float">
              {icon}
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
              {title}
            </h3>
            <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
              {description}
            </p>
          </div>

          <div className="pt-2 text-xs text-primary/60 group-hover:text-primary transition-colors duration-300 flex items-center gap-1">
            <span>Enter Portal</span>
            <span className="inline-block transform group-hover:translate-x-1 transition-transform duration-300">→</span>
          </div>
        </div>
      </Card>
    </a>
  );
};

export default PortalCard;
