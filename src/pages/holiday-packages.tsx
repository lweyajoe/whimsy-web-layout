import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const packages = [
  {
    title: "Weekend Getaway",
    description: "Perfect for a quick escape",
    price: "$299",
    features: ["2 nights accommodation", "Breakfast included", "Local tours"],
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d"
  },
  {
    title: "Family Adventure",
    description: "Create lasting memories",
    price: "$799",
    features: ["5 nights accommodation", "All meals included", "Activities for kids"],
    image: "https://images.unsplash.com/photo-1602002418082-a4443e081dd1"
  },
  {
    title: "Luxury Retreat",
    description: "Indulge in premium experiences",
    price: "$1299",
    features: ["7 nights luxury stay", "Spa treatments", "Private tours"],
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d"
  }
];

const HolidayPackages = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="container mx-auto py-8 flex-grow">
        <motion.h1 
          className="text-4xl font-serif text-brown text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Holiday Packages
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col">
                <CardHeader className="p-0">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </CardHeader>
                <CardContent className="p-6 flex-grow">
                  <CardTitle className="text-2xl mb-2">{pkg.title}</CardTitle>
                  <CardDescription className="mb-4">{pkg.description}</CardDescription>
                  <p className="text-3xl font-bold text-brown mb-4">{pkg.price}</p>
                  <ul className="space-y-2 mb-6">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <span className="mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-brown text-cream hover:bg-brown-light">
                    Book Now
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HolidayPackages;
