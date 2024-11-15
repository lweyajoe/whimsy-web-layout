import { Facebook, Instagram, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-brown text-cream py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="font-serif text-xl mb-4">About LATH</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-cream/80">About Us</Link></li>
              <li><Link to="/careers" className="hover:text-cream/80">Careers</Link></li>
              <li><Link to="/privacy" className="hover:text-cream/80">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-cream/80">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-xl mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:support@lath.com" className="hover:text-cream/80">support@lath.com</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <a href="tel:+1234567890" className="hover:text-cream/80">+1 (234) 567-890</a>
              </li>
              <li className="flex items-center gap-2">
                <Facebook size={16} />
                <a href="#" className="hover:text-cream/80">@lathofficial</a>
              </li>
              <li className="flex items-center gap-2">
                <Instagram size={16} />
                <a href="#" className="hover:text-cream/80">@lathofficial</a>
              </li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="font-serif text-xl mb-4">Stay Updated</h3>
            <p className="mb-4">Subscribe to our newsletter for updates and offers.</p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded bg-brown-light text-cream placeholder:text-cream/60"
              />
              <button className="w-full px-4 py-2 bg-cream text-brown rounded hover:bg-cream/90 transition-colors">
                Subscribe
              </button>
            </form>
          </div>

          {/* Payment Methods */}
          <div>
            <h3 className="font-serif text-xl mb-4">Payment Methods</h3>
            <div className="grid grid-cols-2 gap-4">
              <img src="https://raw.githubusercontent.com/lweyajoe/whimsy-web-layout/main/public/visa.png" alt="Visa" className="h-8 object-contain" />
              <img src="https://raw.githubusercontent.com/lweyajoe/whimsy-web-layout/main/public/mastercard.png" alt="Mastercard" className="h-8 object-contain" />
              <img src="https://raw.githubusercontent.com/lweyajoe/whimsy-web-layout/main/public/paypal.png" alt="PayPal" className="h-8 object-contain" />
              <img src="https://raw.githubusercontent.com/lweyajoe/whimsy-web-layout/main/public/mpesa.png" alt="M-Pesa" className="h-8 object-contain" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;