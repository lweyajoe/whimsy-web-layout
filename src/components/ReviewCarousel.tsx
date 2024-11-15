import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const reviews = [
  {
    id: 1,
    name: "Sarah Kamau",
    title: "Finding Home Away From Home",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    text: "Moving from Kenya to Adelaide for my masters was a huge step. LATH has been a game-changer in keeping me connected with my loved ones back home."
  },
  {
    id: 2,
    name: "Michael Chen",
    title: "Bridging Distances",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    text: "Studying in Canada while my family is in Singapore, LATH helps me maintain strong connections despite the time difference."
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    title: "Always Connected",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    text: "Working in Dubai but keeping close ties with family in Spain. LATH makes it feel like I never left home."
  }
];

const ReviewCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full overflow-hidden bg-cream/95 py-12">
      <div className="container mx-auto">
        <motion.div
          className="flex gap-6"
          animate={{ x: `-${currentIndex * 100}%` }}
          transition={{ duration: 0.5 }}
        >
          {reviews.map((review) => (
            <div
              key={review.id}
              className="min-w-full md:min-w-[calc(33.333%-1rem)] p-6"
            >
              <div className="flex flex-col items-center text-brown">
                <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-brown">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-serif mb-2">{review.name}</h3>
                <p className="text-lg italic mb-4">{review.title}</p>
                <p className="text-gray-700 leading-relaxed text-center">
                  {review.text}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ReviewCarousel;