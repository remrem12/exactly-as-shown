import { Coffee } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Coffee className="h-5 w-5" />
              <span className="font-display text-lg font-bold">Kape ta Iloilo</span>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Your guide to the best coffee experiences in Iloilo City. Discover local shops, beans, and brewing traditions.
            </p>
          </div>
          <div>
            <h4 className="font-display font-semibold mb-4">Explore</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><Link to="/coffee-shops" className="hover:text-warm-gold transition-colors">Coffee Shops</Link></li>
              <li><Link to="/coffee-beans" className="hover:text-warm-gold transition-colors">Local Beans</Link></li>
              <li><Link to="/brewing-guide" className="hover:text-warm-gold transition-colors">Brewing Guide</Link></li>
              <li><Link to="/types-of-coffee" className="hover:text-warm-gold transition-colors">Types of Coffee</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-semibold mb-4">About</h4>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              A project celebrating Iloilo's growing coffee culture. Supporting local farmers, roasters, and baristas.
            </p>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-primary-foreground/10 text-center text-xs text-primary-foreground/50">
          © 2026 Kape ta Iloilo. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
