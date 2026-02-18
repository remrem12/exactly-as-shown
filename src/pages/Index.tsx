import { Link } from "react-router-dom";
import { MapPin, BookOpen, Coffee, Bean } from "lucide-react";
import Layout from "@/components/Layout";
import heroCoffee from "@/assets/hero-coffee.jpg";

const features = [
  {
    icon: MapPin,
    title: "Coffee Shops",
    desc: "Discover the best cafés across Iloilo's districts.",
    link: "/coffee-shops",
  },
  {
    icon: Bean,
    title: "Local Beans",
    desc: "Explore locally grown and roasted coffee beans.",
    link: "/coffee-beans",
  },
  {
    icon: BookOpen,
    title: "Brewing Guide",
    desc: "Learn how to brew the perfect cup at home.",
    link: "/brewing-guide",
  },
  {
    icon: Coffee,
    title: "Types of Coffee",
    desc: "From espresso to Barako — know your coffee.",
    link: "/types-of-coffee",
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <img
          src={heroCoffee}
          alt="Coffee in a cozy Iloilo café"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <h1 className="font-display text-5xl md:text-7xl font-bold text-primary-foreground mb-6 animate-fade-in-up">
            Kape ta Iloilo
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 font-light leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Your guide to the rich coffee culture of Iloilo City — from local beans to the best café spots.
          </p>
          <Link
            to="/coffee-shops"
            className="inline-block bg-accent text-accent-foreground px-8 py-3 rounded-md font-medium hover:bg-warm-gold transition-colors animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            Explore Coffee Shops
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Discover Iloilo's Coffee Scene
            </h2>
            <div className="section-divider mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => (
              <Link
                key={f.title}
                to={f.link}
                className="group bg-background p-8 rounded-lg border border-border hover:border-accent hover:shadow-lg transition-all duration-300"
              >
                <f.icon className="h-8 w-8 text-accent mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{f.title}</h3>
                <p className="text-muted-foreground text-sm">{f.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="font-display text-3xl font-bold text-secondary-foreground mb-6">
            About Kape ta Iloilo
          </h2>
          <div className="section-divider mx-auto mb-8" />
          <p className="text-muted-foreground leading-relaxed">
            "Kape ta Iloilo" celebrates the vibrant and growing coffee culture in Iloilo City, Western Visayas. 
            From the highlands of Leon and Igbaras where local beans are grown, to the bustling cafés of Smallville 
            and the heritage streets of Molo — this guide connects you with the people, places, and flavors that 
            make Ilonggo coffee special.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
