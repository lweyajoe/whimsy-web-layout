import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Index from "./pages/Index";
import BuyLathVouchers from "./pages/buy-lath-vouchers";
import GiftCards from "./pages/gift-cards";
import MyEventsCalendar from "./pages/my-events-calendar";
import HolidayPackages from "./pages/holiday-packages";
import MyGiftShop from "./pages/my-gift-shop";
import LathNewsletter from "./pages/lath-newsletter";

const queryClient = new QueryClient();

// Wrapper component to conditionally render header
const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  
  return (
    <>
      {!isHomePage && <Header />}
      <main className={!isHomePage ? "pt-16" : ""}>{children}</main>
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/buy-lath-vouchers" element={<BuyLathVouchers />} />
            <Route path="/gift-cards" element={<GiftCards />} />
            <Route path="/my-events-calendar" element={<MyEventsCalendar />} />
            <Route path="/holiday-packages" element={<HolidayPackages />} />
            <Route path="/my-gift-shop" element={<MyGiftShop />} />
            <Route path="/lath-newsletter" element={<LathNewsletter />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;