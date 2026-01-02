import { Award, Tag, Truck, HeadphonesIcon, Building2, Package } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Premium Quality",
    description:
      "We source only the finest quality printing paper from trusted manufacturers worldwide.",
  },
  {
    icon: Tag,
    title: "Wholesale Prices",
    description:
      "Competitive bulk pricing that helps your business save money without compromising quality.",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description:
      "Reliable delivery across Nairobi, Nyeri, and other regions in Kenya within 24-48 hours.",
  },
  {
    icon: HeadphonesIcon,
    title: "Expert Support",
    description:
      "Our knowledgeable team is always ready to help you find the right products for your needs.",
  },
  {
    icon: Building2,
    title: "Trusted Supplier",
    description:
      "Serving businesses, schools, and government institutions with excellence since 2015.",
  },
  {
    icon: Package,
    title: "Always In Stock",
    description:
      "We maintain large inventories to ensure your orders are fulfilled promptly every time.",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            Why Dempert?
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mt-2 mb-4">
            Why Choose Us
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Dempert Printing Enterprises is committed to delivering excellence,
            affordability, and reliability.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-6 rounded-xl bg-secondary hover:bg-primary transition-colors duration-300 opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <feature.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-semibold text-primary group-hover:text-primary-foreground text-lg mb-2 transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground group-hover:text-primary-foreground/70 text-sm leading-relaxed transition-colors">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
