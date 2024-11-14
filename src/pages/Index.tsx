import { motion } from "framer-motion";

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
      <div className="relative flex-grow flex flex-col md:flex-row items-start justify-between p-8 md:p-16">
        {/* Left Side - Title and Experience Card */}
        <div className="text-cream mb-8 md:mb-0 flex flex-col items-start mt-14">
          <motion.h1 
            className="font-serif text-5xl md:text-7xl mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Live Abroad, Think Home
          </motion.h1>
          <motion.p 
            className="font-sans text-xl md:text-2xl tracking-wide mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            The app where you keep your loved ones thinking about you across borders
          </motion.p>

          {/* Experience Card */}
          <motion.div
            className="bg-cream/95 rounded-lg p-8 shadow-xl max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <div className="flex flex-col items-center text-brown">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-brown">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
                  alt="Sarah Kamau"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-serif mb-2">Sarah Kamau</h3>
              <p className="text-lg italic mb-4">"Finding Home Away From Home"</p>
              <p className="text-gray-700 leading-relaxed">
                Moving from Kenya to Adelaide for my masters was a huge step. While the opportunity was exciting, 
                the distance from family was challenging. LATH has been a game-changer in keeping me connected 
                with my loved ones back home. Through the app's thoughtful features, I can share my journey and 
                ensure my presence is felt despite the physical distance. From sending surprise gift cards to 
                organizing virtual family gatherings, LATH has made my experience in Adelaide feel more like 
                an extension of home rather than a separation from it.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Right Side - Menu */}
        <motion.div 
          className="bg-cream/95 p-10 md:p-14 rounded-lg shadow-xl w-full md:w-[600px] h-[85vh] flex flex-col justify-center"
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
              "Lath Newsletter"
            ].map((item) => (
              <motion.a
                href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
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
    </div>
  );
};

export default Index;