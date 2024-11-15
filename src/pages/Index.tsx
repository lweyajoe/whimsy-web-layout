import { motion } from "framer-motion";
import PartnersCarousel from "@/components/PartnersCarousel";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col">
      {/* Video Background with Overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute min-w-full min-h-full object-cover"
        >
          <source src="https://videos.pexels.com/video-files/9448994/9448994-uhd_2560_1440_30fps.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-brown/40"></div>
      </div>

      {/* Content Container */}
      <div className="relative flex-grow flex flex-col md:flex-row items-center justify-between p-8 md:p-16">
        {/* Left Side - Title and Logo */}
        <div className="text-cream mb-8 md:mb-0 flex flex-col items-center md:items-start">
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="https://github.com/lweyajoe/whimsy-web-layout/blob/main/public/lath.PNG?raw=true"
              alt="LATH Logo"
              className="w-32 h-32 rounded-full border-4 border-cream/20"
            />
          </motion.div>
          <motion.h1 
            className="font-serif text-5xl md:text-7xl mb-6 text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Live Abroad, Think Home
          </motion.h1>
          <motion.p 
            className="font-sans text-xl md:text-2xl tracking-wide text-center md:text-left"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            The app where you keep your loved ones thinking about you across borders
          </motion.p>
        </div>

        {/* Right Side - Menu */}
        <motion.div 
          className="bg-cream/95 p-10 md:p-14 rounded-lg shadow-xl w-full md:w-[600px] flex flex-col justify-center"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <nav className="space-y-6">
            {[
              "Buy Lath Vouchers",
              "Gift Cards",
              "My Events Calendar",
              "Holiday Packages",
              "My Gift Shop",
              "Lath Newsletter",
              "Sign in/Sign up (My Dashboard)"
            ].map((item) => (
              <motion.a
                href={item === "Sign in/Sign up (My Dashboard)" ? "/auth" : `/${item.toLowerCase().replace(/\s+/g, '-')}`}
                key={item}
                className="block w-full text-center py-6 px-10 border-2 border-brown/20 rounded-lg
                  font-sans text-2xl md:text-3xl transition-all duration-300 bg-transparent 
                  text-brown hover:bg-brown hover:text-cream"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {item}
              </motion.a>
            ))}
          </nav>
        </motion.div>
      </div>

      {/* Partners Section */}
      <div className="relative">
        <PartnersCarousel />
      </div>

      <Footer />
    </div>
  );
};

export default Index;