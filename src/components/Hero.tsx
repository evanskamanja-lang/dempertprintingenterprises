import { ArrowRight, Phone, Truck, Shield, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-paper-warehouse.jpg";

const Hero = () => {
  const features = [
    { icon: Truck, label: "Fast Delivery" },
    { icon: Shield, label: "Quality Guaranteed" },
    { icon: Tag, label: "Wholesale Prices" },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Wholesale printing paper warehouse with stacks of quality paper"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-hero-overlay/85" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          {/* Badge */}
          <div 
            className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-4 py-2 mb-6 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="w-2 h-2 bg-accent rounded-full" />
            <span className="text-primary-foreground text-sm">
              Kenya's Trusted Paper Supplier Since 2015
            </span>
          </div>

          {/* Heading */}
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground leading-tight mb-6 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            Wholesale Printing
            <br />
            <span className="text-primary-foreground">Paper & Office Supplies</span>
          </h1>

          {/* Description */}
          <p 
            className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl opacity-0 animate-fade-in"
            style={{ animationDelay: "0.5s" }}
          >
            Premium quality photocopy paper, printing supplies, and office stationery at
            competitive wholesale prices. Fast delivery across Kenya – Nyeri & Nairobi.
          </p>

          {/* CTA Buttons */}
          <div 
            className="flex flex-wrap gap-4 mb-12 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.7s" }}
          >
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2"
            >
              Browse Products
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button 
              size="lg" 
              variant="heroOutline"
              className="gap-2"
            >
              <Phone className="w-4 h-4" />
              Get a Quote
            </Button>
          </div>

          {/* Feature Pills */}
          <div 
            className="flex flex-wrap gap-3 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.9s" }}
          >
            {features.map((feature, index) => (
              <div
                key={feature.label}
                className="flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-lg px-4 py-3"
              >
                <feature.icon className="w-5 h-5 text-primary-foreground/70" />
                <span className="text-primary-foreground text-sm font-medium">
                  {feature.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
