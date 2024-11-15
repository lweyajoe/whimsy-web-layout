import { useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const NewsletterDetail = () => {
  const { id } = useParams();
  const [currentPage, setCurrentPage] = useState(0);

  // Mock newsletter data (replace with actual data)
  const newsletter = {
    id,
    title: "Connecting Hearts Across Borders",
    issueNumber: "Issue #1",
    date: "March 2024",
    coverImage: "https://images.unsplash.com/photo-1516383740770-fbcc5ccbece0",
    pages: [
      {
        type: "cover",
        content: {
          title: "Connecting Hearts Across Borders",
          subtitle: "Stories of Global Connections",
          image: "https://images.unsplash.com/photo-1516383740770-fbcc5ccbece0",
        },
      },
      {
        type: "content",
        content: {
          title: "Contents",
          items: [
            "Editor's Note - Page 3",
            "Feature Story: Building Bridges - Page 4",
            "Community Spotlight - Page 8",
            "Tech Corner - Page 12",
          ],
        },
      },
      {
        type: "article",
        content: {
          title: "Editor's Note",
          text: "Welcome to our first issue of the LATH Newsletter...",
          image: "https://images.unsplash.com/photo-1516383740770-fbcc5ccbece0",
        },
      },
      // Add more pages as needed
    ],
  };

  const handlePageChange = (increment: boolean) => {
    setCurrentPage(prev => 
      increment 
        ? Math.min(prev + 1, newsletter.pages.length - 1)
        : Math.max(prev - 1, 0)
    );
  };

  const renderPage = (page: typeof newsletter.pages[0]) => {
    switch (page.type) {
      case "cover":
        return (
          <div className="relative h-full">
            <img
              src={page.content.image}
              alt="Cover"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h1 className="text-4xl font-serif mb-4">{page.content.title}</h1>
              <p className="text-xl">{page.content.subtitle}</p>
            </div>
          </div>
        );
      case "content":
        return (
          <div className="p-8">
            <h2 className="text-3xl font-serif mb-6">{page.content.title}</h2>
            <ul className="space-y-4">
              {page.content.items.map((item, index) => (
                <li key={index} className="text-lg text-gray-700">{item}</li>
              ))}
            </ul>
          </div>
        );
      case "article":
        return (
          <div className="p-8 grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-serif mb-4">{page.content.title}</h2>
              <p className="text-gray-700">{page.content.text}</p>
            </div>
            <div>
              <img
                src={page.content.image}
                alt={page.content.title}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-4xl mx-auto"
      >
        {/* Newsletter Viewer */}
        <div className="aspect-[3/4] bg-white rounded-lg shadow-xl overflow-hidden mb-4">
          {renderPage(newsletter.pages[currentPage])}
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-between items-center">
          <Button
            variant="outline"
            onClick={() => handlePageChange(false)}
            disabled={currentPage === 0}
          >
            <ChevronLeft className="mr-2 h-4 w-4" />
            Previous Page
          </Button>
          <span className="text-gray-600">
            Page {currentPage + 1} of {newsletter.pages.length}
          </span>
          <Button
            variant="outline"
            onClick={() => handlePageChange(true)}
            disabled={currentPage === newsletter.pages.length - 1}
          >
            Next Page
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default NewsletterDetail;