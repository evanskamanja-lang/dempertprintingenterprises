import { Helmet } from "react-helmet-async";
import { Users, Award, MapPin, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const About = () => {
  const stats = [
    { icon: Users, value: "500+", label: "Happy Customers" },
    { icon: Award, value: "9+", label: "Years Experience" },
    { icon: MapPin, value: "2", label: "Locations" },
    { icon: Clock, value: "24/7", label: "Support" },
  ];

  const team = [
    { name: "Quality Assurance", description: "Every product we supply meets strict quality standards to ensure customer satisfaction." },
    { name: "Customer First", description: "Your needs are our priority. We work closely with you to meet your requirements." },
    { name: "Reliable Delivery", description: "Fast and dependable delivery across Nairobi and Nyeri regions." },
  ];

  return (
    <>
      <Helmet>
        <title>About Us | Dempert Printing Enterprises</title>
        <meta
          name="description"
          content="Learn about Dempert Printing Enterprises - Kenya's trusted wholesale supplier of printing paper and office supplies since 2015."
        />
      </Helmet>

      <div className="min-h-screen">
        <Navbar />
        <main className="pt-20">
          {/* About Hero */}
          <section className="py-20 bg-primary">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-6">
                Who We Are
              </h1>
              <p className="text-primary-foreground/80 max-w-2xl mx-auto text-lg">
                A family-owned business dedicated to serving Kenya with premium printing supplies and exceptional service.
              </p>
            </div>
          </section>

          {/* Stats Section */}
          <section className="py-16 bg-secondary">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
                      <stat.icon className="w-8 h-8 text-accent" />
                    </div>
                    <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                    <div className="text-muted-foreground text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Our Journey */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-display font-bold text-primary mb-8 text-center">Our Journey</h2>
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p>
                    <strong className="text-primary">2015:</strong> Dempert Printing Enterprises was born from a vision to make quality printing supplies accessible to businesses across Kenya. What started as a small venture in Nyeri has grown into a trusted name in the industry.
                  </p>
                  <p>
                    <strong className="text-primary">Growth:</strong> Through dedication and commitment to excellence, we expanded our operations to serve customers in Nairobi and beyond. Our product range grew from basic photocopy paper to include specialty papers, office supplies, and more.
                  </p>
                  <p>
                    <strong className="text-primary">Today:</strong> We proudly serve hundreds of businesses, schools, and government institutions. Our team continues to work tirelessly to provide the best products at competitive wholesale prices.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Our Values */}
          <section className="py-16 bg-secondary">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-display font-bold text-primary mb-12 text-center">Our Values</h2>
              <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {team.map((value, index) => (
                  <div key={index} className="bg-card p-6 rounded-xl shadow-sm">
                    <h3 className="text-xl font-semibold text-primary mb-3">{value.name}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <CTA />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default About;
