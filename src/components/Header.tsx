import { Link } from "react-router-dom";
import { ShoppingCart, User } from "lucide-react";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="bg-cream/95 shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="font-serif text-2xl text-brown">
            Live Abroad, Think Home
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/buy-lath-vouchers" className="text-brown hover:text-brown-light transition-colors">
              Buy Lath Vouchers
            </Link>
            <Link to="/gift-cards" className="text-brown hover:text-brown-light transition-colors">
              Gift Cards
            </Link>
            <Link to="/my-events-calendar" className="text-brown hover:text-brown-light transition-colors">
              My Events Calendar
            </Link>
            <Link to="/holiday-packages" className="text-brown hover:text-brown-light transition-colors">
              Holiday Packages
            </Link>
            <Link to="/my-gift-shop" className="text-brown hover:text-brown-light transition-colors">
              My Gift Shop
            </Link>
            <Link to="/lath-newsletter" className="text-brown hover:text-brown-light transition-colors">
              Lath Newsletter
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5 text-brown" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5 text-brown" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;