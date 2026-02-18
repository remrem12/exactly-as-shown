import { useState } from "react";
import { MapPin, Clock, Star, Search } from "lucide-react";
import Layout from "@/components/Layout";
import { coffeeShops, districts } from "@/data/coffeeShops";

const CoffeeShops = () => {
  const [search, setSearch] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("All");

  const filtered = coffeeShops.filter((shop) => {
    const matchSearch =
      shop.name.toLowerCase().includes(search.toLowerCase()) ||
      shop.description.toLowerCase().includes(search.toLowerCase());
    const matchDistrict = selectedDistrict === "All" || shop.district === selectedDistrict;
    return matchSearch && matchDistrict;
  });

  return (
    <Layout>
      {/* Header */}
      <section className="bg-primary py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Coffee Shops in Iloilo
          </h1>
          <p className="text-primary-foreground/70 max-w-xl mx-auto">
            Find your next favorite café across the city's vibrant districts.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-card border-b border-border">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row gap-4 items-center">
          <div className="relative flex-1 w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search shops..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-md border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            {["All", ...districts].map((d) => (
              <button
                key={d}
                onClick={() => setSelectedDistrict(d)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  selectedDistrict === d
                    ? "bg-accent text-accent-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-accent/20"
                }`}
              >
                {d}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Shop cards */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          {filtered.length === 0 ? (
            <p className="text-center text-muted-foreground py-12">No shops found matching your criteria.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((shop) => (
                <div
                  key={shop.id}
                  className="bg-card rounded-lg border border-border p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-display text-xl font-semibold text-card-foreground">{shop.name}</h3>
                    <span className="flex items-center gap-1 text-warm-gold text-sm font-medium">
                      <Star className="h-4 w-4 fill-current" /> {shop.rating}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground text-sm mb-2">
                    <MapPin className="h-3.5 w-3.5" /> {shop.address}
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground text-sm mb-4">
                    <Clock className="h-3.5 w-3.5" /> {shop.hours} · {shop.priceRange}
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{shop.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {shop.specialties.map((s) => (
                      <span key={s} className="bg-secondary text-secondary-foreground text-xs px-3 py-1 rounded-full">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default CoffeeShops;
