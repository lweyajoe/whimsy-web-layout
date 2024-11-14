import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search } from "lucide-react";

const categories = {
  "Personal Milestones": ["Birthdays", "Weddings", "Anniversaries", "Graduations", "Baby Showers", "Housewarming", "Engagements", "Retirement", "First Job"],
  "Seasonal and Holiday": ["Christmas", "New Year", "Valentine's Day", "Easter", "Mother's Day", "Father's Day", "Thanksgiving", "Halloween", "Hanukkah", "Diwali"],
  "Special Acknowledgments": ["Thank You", "Employee Appreciation", "Volunteer Recognition", "Teacher Appreciation", "Customer Appreciation"],
  "General Events": ["Get Well Soon", "Thinking of You", "Congratulations", "Sympathy", "Friendship Day", "Seasonal"],
  "Corporate": ["Corporate Gifts", "Conference", "Referral Rewards", "Holiday Bonuses", "Networking"],
  "Creative": ["Sports Events", "Religious Milestones", "Back-to-School", "Farewell"]
};

const GiftCards = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("Personal Milestones");

  const filteredCards = categories[activeCategory as keyof typeof categories].filter(
    card => card.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto py-8">
      <div className="flex items-center gap-4 mb-8">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            type="search"
            placeholder="Search gift cards..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <Tabs defaultValue="Personal Milestones" className="space-y-8">
        <TabsList className="flex flex-wrap gap-2">
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

        {Object.entries(categories).map(([category, cards]) => (
          <TabsContent key={category} value={category} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCards.map((card, index) => (
                <motion.div
                  key={card}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                    <CardHeader className="p-0">
                      <div className="relative w-full h-0 pt-[70.9459%] overflow-hidden">
                        <iframe
                          loading="lazy"
                          className="absolute w-full h-full top-0 left-0 border-none"
                          src="https://www.canva.com/design/DAGWalt1zNw/c-KH6MCTb9nPqrjsyrXFtA/view?embed"
                          allowFullScreen
                        />
                      </div>
                    </CardHeader>
                    <CardContent className="p-6">
                      <CardTitle className="text-xl mb-2">{card}</CardTitle>
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

export default GiftCards;