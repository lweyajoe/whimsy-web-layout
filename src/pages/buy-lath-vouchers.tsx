import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { MinusCircle, PlusCircle } from "lucide-react";

const vouchers = [
  {
    id: 1,
    title: "Discount Voucher",
    description: "Get 20% off on your next purchase",
    price: 50,
  },
  {
    id: 2,
    title: "My Luck Voucher",
    description: "Try your luck for amazing prizes",
    price: 30,
  },
  {
    id: 3,
    title: "Shopping Voucher",
    description: "Shop with extra benefits",
    price: 100,
  },
];

const BuyLathVouchers = () => {
  const [quantities, setQuantities] = useState<{ [key: number]: number }>(
    vouchers.reduce((acc, voucher) => ({ ...acc, [voucher.id]: 1 }), {})
  );

  const updateQuantity = (id: number, increment: boolean) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(1, prev[id] + (increment ? 1 : -1)),
    }));
  };

  return (
    <div className="min-h-screen bg-cream p-8">
      <motion.h1
        className="text-4xl md:text-5xl font-serif text-brown text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Buy Lath Vouchers
      </motion.h1>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {vouchers.map((voucher) => (
          <motion.div
            key={voucher.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: voucher.id * 0.2 }}
          >
            <Card className="h-full flex flex-col">
              <CardHeader>
                <CardTitle className="text-2xl font-serif">{voucher.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="relative w-full h-0 pt-[70.9459%] mb-4 overflow-hidden rounded-lg">
                  <iframe
                    loading="lazy"
                    className="absolute w-full h-full top-0 left-0 border-none"
                    src="https://www.canva.com/design/DAGWZCMF98E/uuE2TCVprTTV3-olnssH-Q/view?embed"
                    allowFullScreen
                  />
                </div>
                <p className="text-gray-600">{voucher.description}</p>
                <p className="text-2xl font-semibold mt-4">${voucher.price}</p>
              </CardContent>
              <CardFooter className="flex flex-col space-y-4">
                <div className="flex items-center justify-center space-x-4">
                  <button
                    onClick={() => updateQuantity(voucher.id, false)}
                    className="text-brown hover:text-brown-light transition-colors"
                  >
                    <MinusCircle size={24} />
                  </button>
                  <span className="text-xl font-medium w-12 text-center">
                    {quantities[voucher.id]}
                  </span>
                  <button
                    onClick={() => updateQuantity(voucher.id, true)}
                    className="text-brown hover:text-brown-light transition-colors"
                  >
                    <PlusCircle size={24} />
                  </button>
                </div>
                <Button className="w-full bg-brown text-cream hover:bg-brown-light">
                  Add to Cart - ${voucher.price * quantities[voucher.id]}
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BuyLathVouchers;