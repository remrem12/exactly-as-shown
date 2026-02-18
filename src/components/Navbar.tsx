import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Coffee } from "lucide-react";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/coffee-shops", label: "Coffee Shops" },
  { to: "/coffee-beans", label: "Coffee Beans" },
  { to: "/brewing-guide", label: "Brewing Guide" },
  { to: "/types-of-coffee", label: "Types of Coffee" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm">
      <nav className="container mx-auto flex items-center justify-between py-4 px-4">
        <Link to="/" className="flex items-center gap-2 text-primary-foreground">
          <Coffee className="h-6 w-6" />
          <span className="font-display text-xl font-bold tracking-wide">Kape ta Iloilo</span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                className={`text-sm font-medium tracking-wide transition-colors hover:text-warm-gold ${
                  location.pathname === item.to
                    ? "text-warm-gold"
                    : "text-primary-foreground/80"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-primary-foreground"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-primary border-t border-primary-foreground/10">
          <ul className="flex flex-col py-4 px-4 gap-1">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  onClick={() => setIsOpen(false)}
                  className={`block py-3 px-4 rounded-md text-sm font-medium transition-colors ${
                    location.pathname === item.to
                      ? "bg-primary-foreground/10 text-warm-gold"
                      : "text-primary-foreground/80 hover:bg-primary-foreground/5"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
