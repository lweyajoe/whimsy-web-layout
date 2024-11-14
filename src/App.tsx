import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Index from "./pages/Index";
import BuyLathVouchers from "./pages/buy-lath-vouchers";
import GiftCards from "./pages/gift-cards";
import MyEventsCalendar from "./pages/my-events-calendar";
import HolidayPackages from "./pages/holiday-packages";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Header />
        <main className="pt-16"> {/* Add padding-top to account for fixed header */}
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/buy-lath-vouchers" element={<BuyLathVouchers />} />
            <Route path="/gift-cards" element={<GiftCards />} />
            <Route path="/my-events-calendar" element={<MyEventsCalendar />} />
            <Route path="/holiday-packages" element={<HolidayPackages />} />
          </Routes>
        </main>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;