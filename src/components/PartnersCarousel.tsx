import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const partners = [
  {
    id: 1,
    name: "Gift Shop Partner",
    logo: "https://raw.githubusercontent.com/lweyajoe/whimsy-web-layout/main/public/partner1.png"
  },
  {
    id: 2,
    name: "Holiday Package Partner",
    logo: "https://raw.githubusercontent.com/lweyajoe/whimsy-web-layout/main/public/partner2.png"
  },
  {
    id: 3,
    name: "Travel Partner",
    logo: "https://raw.githubusercontent.com/lweyajoe/whimsy-web-layout/main/public/partner3.png"
  }
];

const PartnersCarousel = () => {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => (prev + 1) % partners.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-cream/95 py-8">
      <div className="container mx-auto">
        <h2 className="text-2xl font-serif text-brown text-center mb-8">Our Partners</h2>
        <motion.div
          className="flex justify-center items-center gap-8"
          animate={{ x: `-${position * 100}%` }}
          transition={{ duration: 0.5 }}
        >
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="min-w-[200px] h-20 flex items-center justify-center"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-full object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default PartnersCarousel;