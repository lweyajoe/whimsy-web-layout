import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
  };

  return (
    <div className="min-h-screen bg-cream">
      <div className="container mx-auto py-12">
        <h1 className="text-4xl font-serif text-brown text-center mb-8">Contact Us</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
              <h2 className="text-2xl font-serif text-brown mb-4">Get in Touch</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input placeholder="Your Name" required />
                <Input type="email" placeholder="Your Email" required />
                <Input placeholder="Subject" required />
                <Textarea placeholder="Your Message" className="h-32" required />
                <Button type="submit" className="w-full bg-brown text-cream hover:bg-brown-light">
                  Send Message
                </Button>
              </form>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-brown">
                <Mail size={20} />
                <a href="mailto:support@lath.com">support@lath.com</a>
              </div>
              <div className="flex items-center gap-3 text-brown">
                <Phone size={20} />
                <a href="tel:+1234567890">+1 (234) 567-890</a>
              </div>
              <div className="flex items-center gap-3 text-brown">
                <MapPin size={20} />
                <p>123 LATH Street, Digital City, DC 12345</p>
              </div>
            </div>
          </div>

          <div className="h-[500px] rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.819917806043!2d36.81963641475396!3d-1.2841924990663518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d62d4fccdd%3A0x59d8ff00ee9f5317!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2sus!4v1647856687721!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;