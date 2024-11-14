import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Search, Filter } from "lucide-react";

const categories = {
  "Electronics": [
    { id: 1, name: "iPhone 13", price: 999, image: "https://images.unsplash.com/photo-1498936178812-4b2e558d2937" },
    { id: 2, name: "AirPods Pro", price: 249, image: "https://images.unsplash.com/photo-1485833077593-4278bba3f11f" },
  ],
  "Jewelry": [
    { id: 3, name: "Gold Necklace", price: 599, image: "https://images.unsplash.com/photo-1441057206919-63d19fac2369" },
    { id: 4, name: "Silver Bracelet", price: 129, image: "https://images.unsplash.com/photo-1438565434616-3ef039228b15" },
  ],
  "Clothing": [
    { id: 5, name: "Designer T-Shirt", price: 49, image: "https://images.unsplash.com/photo-1501286353178-1ec881214838" },
    { id: 6, name: "Premium Jeans", price: 89, image: "https://images.unsplash.com/photo-1469041797191-50ace28483c3" },
  ],
  "Gaming": [
    { id: 7, name: "PS5 Console", price: 499, image: "https://images.unsplash.com/photo-1452378174528-3090a4bba7b2" },
    { id: 8, name: "Gaming Headset", price: 99, image: "https://images.unsplash.com/photo-1487252665478-49b61b47f302" },
  ],
  "Home Decor": [
    { id: 9, name: "Scented Candles", price: 29, image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04" },
    { id: 10, name: "Wall Art", price: 79, image: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d" },
  ],
};

const MyGiftShop = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("Electronics");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const filteredProducts = categories[activeCategory as keyof typeof categories].filter(
    product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesMinPrice = !minPrice || product.price >= Number(minPrice);
      const matchesMaxPrice = !maxPrice || product.price <= Number(maxPrice);
      return matchesSearch && matchesMinPrice && matchesMaxPrice;
    }
  );

  return (
    <div className="container mx-auto py-8">
      <div className="flex flex-wrap gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            type="search"
            placeholder="Search products..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex gap-2">
          <Input
            type="number"
            placeholder="Min price"
            className="w-24"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
          />
          <Input
            type="number"
            placeholder="Max price"
            className="w-24"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          />
        </div>
      </div>

      <Tabs defaultValue="Electronics" className="space-y-8">
        <ScrollArea className="w-full whitespace-nowrap rounded-md border">
          <TabsList className="inline-flex h-10 items-center justify-start p-1">
            {Object.keys(categories).map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                onClick={() => setActiveCategory(category)}
                className="px-4 py-2"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>

        {Object.entries(categories).map(([category, products]) => (
          <TabsContent key={category} value={category} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                    <CardHeader className="p-0">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-48 object-cover"
                      />
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-center mb-4">
                        <CardTitle className="text-xl">{product.name}</CardTitle>
                        <span className="text-lg font-semibold">${product.price}</span>
                      </div>
                      <Button className="w-full">Add to Cart</Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default MyGiftShop;