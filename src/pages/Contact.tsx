import { Helmet } from "react-helmet-async";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us | Dempert Printing Enterprises</title>
        <meta
          name="description"
          content="Contact Dempert Printing Enterprises for wholesale printing paper and office supplies. Call +254 722 148 262 or visit us in Nyeri & Nairobi, Kenya."
        />
      </Helmet>

      <div className="min-h-screen">
        <Navbar />
        <main className="pt-20">
          {/* Contact Hero */}
          <section className="py-20 bg-primary">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-6">
                Contact Us
              </h1>
              <p className="text-primary-foreground/80 max-w-2xl mx-auto text-lg">
                Get in touch with us for wholesale pricing, quotes, or any questions about our products.
              </p>
            </div>
          </section>

          {/* Contact Info */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                <div className="text-center p-6 rounded-xl bg-secondary">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-semibold text-primary mb-2">Phone</h3>
                  <a href="tel:+254722148262" className="text-muted-foreground hover:text-accent transition-colors">
                    +254 722 148 262
                  </a>
                </div>

                <div className="text-center p-6 rounded-xl bg-secondary">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-semibold text-primary mb-2">Email</h3>
                  <a href="mailto:info@dempert.co.ke" className="text-muted-foreground hover:text-accent transition-colors">
                    info@dempert.co.ke
                  </a>
                </div>

                <div className="text-center p-6 rounded-xl bg-secondary">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-semibold text-primary mb-2">Locations</h3>
                  <p className="text-muted-foreground">Nyeri & Nairobi, Kenya</p>
                </div>

                <div className="text-center p-6 rounded-xl bg-secondary">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-semibold text-primary mb-2">Hours</h3>
                  <p className="text-muted-foreground">Mon - Sat: 8am - 6pm</p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="text-center">
                <h2 className="text-2xl font-display font-bold text-primary mb-6">
                  Ready to Order?
                </h2>
                <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                  Contact us today for a custom quote tailored to your business needs. We offer competitive wholesale prices and fast delivery.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button
                    size="lg"
                    className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2"
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
                  <Button
                    size="lg"
                    variant="outline"
                    className="gap-2"
                    asChild
                  >
                    <a href="mailto:info@dempert.co.ke">
                      <Mail className="w-4 h-4" />
                      Send Email
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Contact;
