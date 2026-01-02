import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import ProductsSection from "@/components/Products";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Products = () => {
  return (
    <>
      <Helmet>
        <title>Products | Dempert Printing Enterprises</title>
        <meta
          name="description"
          content="Browse our complete range of printing paper, photocopy paper, and office supplies at wholesale prices. Quality products for businesses across Kenya."
        />
      </Helmet>

      <div className="min-h-screen">
        <Navbar />
        <main className="pt-20">
          <ProductsSection showAll={true} />
          <CTA />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Products;
