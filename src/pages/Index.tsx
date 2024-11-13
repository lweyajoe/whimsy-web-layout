import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const menuItems = [
  "Regular Menu",
  "Weekly Specials",
  "How to Order",
  "About Us",
  "Testimonials",
  "Watch Us Bake"
];

const Index = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-brown/40"></div>
      </div>

      {/* Content Container */}
      <div className="relative flex-grow flex flex-col md:flex-row items-start justify-between p-8 md:p-16">
        {/* Left Side - Title and Auth */}
        <div className="text-cream mb-8 md:mb-0 flex flex-col items-start mt-14 h-full justify-between">
          <div>
            <motion.h1 
              className="font-serif text-5xl md:text-7xl mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Loaf & Leaven Co.
            </motion.h1>
            <motion.p 
              className="font-sans text-xl md:text-2xl tracking-wide"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              SOURDOUGH BREAD, CHEESECAKES, AND MORE!
            </motion.p>
          </div>

          {/* Auth Buttons Section */}
          <motion.div 
            className="space-y-4 w-full max-w-md mt-auto pt-32"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {/* Google Sign In Button */}
            <button
              className="w-full bg-white text-gray-700 px-6 py-3 rounded-lg font-sans text-lg flex items-center justify-center space-x-3 hover:bg-gray-100 transition-colors border border-gray-300"
            >
              <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" className="w-6 h-6" />
              <span>Sign in with Google</span>
            </button>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-cream/30"></span>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-transparent px-2 text-cream">Or continue with</span>
              </div>
            </div>

            <Button
              className="w-full bg-cream text-brown hover:bg-cream/90 px-6 py-6 text-lg font-medium"
            >
              Sign In
            </Button>
            
            <Button
              variant="outline"
              className="w-full border-cream text-cream hover:bg-cream/10 px-6 py-6 text-lg font-medium"
            >
              Sign Up
            </Button>

            <button className="text-cream/80 hover:text-cream text-sm mt-2 transition-colors">
              Forgot password?
            </button>
          </motion.div>
        </div>

        {/* Right Side - Menu */}
        <motion.div 
          className="bg-cream/95 p-10 md:p-14 rounded-lg shadow-xl w-full md:w-[500px] h-[85vh] flex flex-col justify-center"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <nav className="space-y-6">
            {menuItems.map((item) => (
              <motion.button
                key={item}
                className={`w-full text-center py-4 px-8 border-2 border-brown/20 rounded-lg
                  font-sans text-xl md:text-2xl transition-all duration-300
                  ${hoveredItem === item ? 'bg-brown text-cream' : 'bg-transparent text-brown hover:bg-brown/5'}`}
                onHoverStart={() => setHoveredItem(item)}
                onHoverEnd={() => setHoveredItem(null)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {item}
              </motion.button>
            ))}
          </nav>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.footer 
        className="relative bg-cream/95 text-brown py-6 px-8 mt-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="mb-2 md:mb-0">© 2024 Loaf & Leaven Co. | Developed by John Smith</p>
          <div className="flex flex-col md:flex-row gap-4 md:gap-8">
            <a href="mailto:contact@loafandleaven.com" className="hover:text-brown-light transition-colors">
              contact@loafandleaven.com
            </a>
            <a href="tel:+1234567890" className="hover:text-brown-light transition-colors">
              (123) 456-7890
            </a>
          </div>
        </div>
      </motion.footer>
    </div>
  );
};

export default Index;