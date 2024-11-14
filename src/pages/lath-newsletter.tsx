import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

const newsletters = [
  {
    id: 1,
    issueNumber: "Issue #1",
    date: "March 2024",
    title: "Connecting Hearts Across Borders",
    preview: "Discover how international students are maintaining strong family bonds through LATH, featuring success stories and tips for meaningful long-distance relationships.",
  },
  {
    id: 2,
    issueNumber: "Issue #2",
    date: "February 2024",
    title: "Cultural Celebrations Away from Home",
    preview: "Learn how expatriates are celebrating their traditional festivals abroad while creating new cultural experiences in their host countries.",
  },
  {
    id: 3,
    issueNumber: "Issue #3",
    date: "January 2024",
    title: "Building Global Communities",
    preview: "Explore how LATH users are creating lasting connections and support networks in their new homes while staying connected to their roots.",
  },
];

const LathNewsletter = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-serif text-brown mb-8">LATH Newsletter Archive</h1>
      <ScrollArea className="h-[calc(100vh-200px)]">
        <div className="space-y-6">
          {newsletters.map((newsletter, index) => (
            <motion.div
              key={newsletter.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <div>
                      <CardTitle className="text-2xl text-brown">{newsletter.title}</CardTitle>
                      <CardDescription className="text-sm text-brown-light">
                        {newsletter.issueNumber} • {newsletter.date}
                      </CardDescription>
                    </div>
                    <Button variant="outline" className="text-brown hover:text-brown-light">
                      Read this issue
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-brown-light">{newsletter.preview}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default LathNewsletter;