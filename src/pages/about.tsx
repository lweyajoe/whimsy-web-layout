import PartnersCarousel from "@/components/PartnersCarousel";
import ReviewCarousel from "@/components/ReviewCarousel";

const About = () => {
  return (
    <div className="min-h-screen bg-cream">
      <div className="container mx-auto py-12">
        <h1 className="text-4xl font-serif text-brown text-center mb-8">About LATH</h1>
        
        <div className="prose prose-lg mx-auto text-brown mb-12">
          <p className="text-center mb-8">
            Live Abroad, Think Home (LATH) is a revolutionary platform designed to bridge the gap between international students, 
            expatriates, and their loved ones back home. Our mission is to make distance feel smaller and connections stronger.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="text-2xl font-serif mb-4">Our Mission</h2>
              <p>
                To create meaningful connections across borders, making it easier for people living abroad 
                to maintain strong ties with their homes and loved ones.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-serif mb-4">Our Vision</h2>
              <p>
                A world where distance doesn't diminish relationships, and where technology brings 
                families closer together, no matter where they are.
              </p>
            </div>
          </div>
        </div>

        <PartnersCarousel />
        <ReviewCarousel />
      </div>
    </div>
  );
};

export default About;