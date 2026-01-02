import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const About = () => {
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
                About Dempert Printing
              </h1>
              <p className="text-primary-foreground/80 max-w-2xl mx-auto text-lg">
                Kenya's trusted wholesale supplier of printing paper and office supplies since 2015.
                We serve businesses, schools, and government institutions with quality products and reliable delivery.
              </p>
            </div>
          </section>

          {/* Our Story */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-display font-bold text-primary mb-6">Our Story</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Founded in 2015, Dempert Printing Enterprises started with a simple mission: to provide
                  Kenyan businesses with high-quality printing paper and office supplies at fair wholesale prices.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Over the years, we have grown from a small operation in Nyeri to serving customers across
                  Kenya, including Nairobi and other major cities. Our commitment to quality, reliability,
                  and customer service has made us a trusted partner for businesses, schools, and government
                  institutions.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Today, we continue to expand our product range and improve our services to meet the
                  evolving needs of our valued customers.
                </p>
              </div>
            </div>
          </section>

          <WhyChooseUs />
          <Testimonials />
          <CTA />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default About;
