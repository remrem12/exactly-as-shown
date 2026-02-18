import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CoffeeShops from "./pages/CoffeeShops";
import CoffeeBeans from "./pages/CoffeeBeans";
import BrewingGuide from "./pages/BrewingGuide";
import TypesOfCoffee from "./pages/TypesOfCoffee";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/coffee-shops" element={<CoffeeShops />} />
          <Route path="/coffee-beans" element={<CoffeeBeans />} />
          <Route path="/brewing-guide" element={<BrewingGuide />} />
          <Route path="/types-of-coffee" element={<TypesOfCoffee />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
