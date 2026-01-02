import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Dempert Printing Enterprises | Wholesale Paper Supplier Kenya</title>
        <meta
          name="description"
          content="Kenya's trusted wholesale supplier of premium printing paper and office supplies since 2015. Fast delivery across Nairobi & Nyeri. Quality products at competitive prices."
        />
        <meta
          name="keywords"
          content="printing paper Kenya, wholesale paper supplier, office supplies Nairobi, photocopy paper wholesale, Dempert Printing"
        />
        <link rel="canonical" href="https://dempert.co.ke" />
      </Helmet>

      <div className="min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <Products />
          <WhyChooseUs />
          <Testimonials />
          <CTA />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
