import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section id="contact" className="py-20 bg-primary">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-4">
          Ready to Order?
        </h2>
        <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8 text-lg">
          Get wholesale prices on quality printing paper and office supplies. Contact us
          today for a custom quote tailored to your business needs.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2"
          >
            Get a Quote
          </Button>
          <Button
            size="lg"
            variant="heroOutline"
            className="gap-2"
            asChild
          >
            <a href="tel:+254722148262">
              <Phone className="w-4 h-4" />
              Call Us Now
            </a>
          </Button>
          <Button
            size="lg"
            variant="whatsapp"
            className="gap-2"
            asChild
          >
            <a
              href="https://wa.me/254722148262?text=Hello%2C%20I%27m%20interested%20in%20your%20printing%20paper%20products"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
