import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { CartProvider } from "./contexts/CartContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import BuyLathVouchers from "./pages/buy-lath-vouchers";
import GiftCards from "./pages/gift-cards";
import MyEventsCalendar from "./pages/my-events-calendar";
import HolidayPackages from "./pages/holiday-packages";
import MyGiftShop from "./pages/my-gift-shop";
import LathNewsletter from "./pages/lath-newsletter";
import ProductDetail from "./pages/product-detail";
import NewsletterDetail from "./pages/newsletter-detail";
import About from "./pages/about";
import Contact from "./pages/contact";
import Auth from "./pages/auth";

// Admin Pages
import AddProduct from "./pages/admin/add-product";
import AddNewsletter from "./pages/admin/add-newsletter";
import AddVoucher from "./pages/admin/add-voucher";
import AddHolidayPackage from "./pages/admin/add-holiday-package";
import Profile from "./pages/admin/profile";

const queryClient = new QueryClient();

// Wrapper component to conditionally render header
const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isAuthPage = location.pathname === "/auth";
  const isAdminPage = location.pathname.startsWith("/admin");
  
  return (
    <>
      {!isHomePage && !isAuthPage && !isAdminPage && <Header />}
      <main className={!isHomePage && !isAuthPage && !isAdminPage ? "pt-16" : ""}>{children}</main>
      {!isAdminPage && <Footer />}
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <CartProvider>
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
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/newsletter/:id" element={<NewsletterDetail />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/auth" element={<Auth />} />
              
              {/* Admin Routes */}
              <Route path="/admin/add-product" element={<AddProduct />} />
              <Route path="/admin/add-newsletter" element={<AddNewsletter />} />
              <Route path="/admin/add-voucher" element={<AddVoucher />} />
              <Route path="/admin/add-holiday-package" element={<AddHolidayPackage />} />
              <Route path="/admin/profile" element={<Profile />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </CartProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;