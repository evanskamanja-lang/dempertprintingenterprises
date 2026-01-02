import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import ecoPaper from "@/assets/eco-paper.png";
import ultimaPaper from "@/assets/ultima-paper.jpg";
import aonePaper from "@/assets/aone-paper.jpeg";
import jkPaper from "@/assets/jk-paper.png";
import doubleAPaper from "@/assets/double-a-paper.png";
import ariaPaper from "@/assets/aria-paper.png";
import casioCalculator from "@/assets/casio-calculator.webp";
import stickerPaper from "@/assets/sticker-paper.png";
import a3MattePaper from "@/assets/a3-matte-paper.jpg";
import sinarlinePaper from "@/assets/sinarline-paper.jpg";
import safqaPaper from "@/assets/safqa-paper.jpeg";
import ePaper from "@/assets/e-paper.jpg";
import spectraPaper from "@/assets/spectra-paper.jpg";
import paperlinePaper from "@/assets/paperline-paper.jpg";
import svetoPaper from "@/assets/sveto-paper.jpg";
import laminatingPouch from "@/assets/laminating-pouch.png";

const products = [
  {
    id: 1,
    name: "Eco Paper (Carton)",
    description: "Carton has 5 reams of paper.",
    price: "KSh 2,250",
    image: ecoPaper,
    badge: "Best Seller",
  },
  {
    id: 2,
    name: "Ultima Paper (Carton)",
    description: "Carton has 5 reams of paper.",
    price: "KSh 2,250",
    image: ultimaPaper,
    badge: "Best Seller",
  },
  {
    id: 3,
    name: "Aone Paper (Carton)",
    description: "Carton has 5 reams of paper.",
    price: "KSh 2,750",
    image: aonePaper,
    badge: "Best Seller",
  },
  {
    id: 4,
    name: "JK Paper (Carton)",
    description: "Carton has 5 reams of paper.",
    price: "KSh 2,750",
    image: jkPaper,
    badge: "Best Seller",
  },
  {
    id: 5,
    name: "Double A (Carton)",
    description: "The carton includes 5 reams of paper.",
    price: "KSh 2,400",
    image: doubleAPaper,
  },
  {
    id: 6,
    name: "Aria Paper (Carton)",
    description: "Carton has 5 reams of paper.",
    price: "KSh 2,300",
    image: ariaPaper,
  },
  {
    id: 7,
    name: "Casio FX-82EX (Carton)",
    description: "Carton has 10 pcs.",
    price: "KSh 8,000",
    image: casioCalculator,
  },
  {
    id: 8,
    name: "A4 Sticker Paper (Ream)",
    description: "Perfect for labels and stickers.",
    price: "KSh 380",
    image: stickerPaper,
  },
  {
    id: 9,
    name: "A3 Matte Paper (Ream)",
    description: "High-quality matte finish.",
    price: "KSh 650",
    image: a3MattePaper,
  },
  {
    id: 10,
    name: "Sinarline Paper (Carton)",
    description: "Carton has 5 reams of paper.",
    price: "KSh 2,650",
    image: sinarlinePaper,
  },
  {
    id: 11,
    name: "Safqa Paper (Carton)",
    description: "Carton has 5 reams of paper.",
    price: "KSh 2,500",
    image: safqaPaper,
  },
  {
    id: 12,
    name: "E Paper (Carton)",
    description: "Carton has 5 reams of paper.",
    price: "KSh 2,450",
    image: ePaper,
  },
  {
    id: 13,
    name: "Spectra Paper (Carton)",
    description: "Carton has 5 reams of paper.",
    price: "KSh 2,600",
    image: spectraPaper,
  },
  {
    id: 14,
    name: "Paperline Paper (Carton)",
    description: "Carton has 5 reams of paper.",
    price: "KSh 2,900",
    image: paperlinePaper,
  },
  {
    id: 15,
    name: "Sveto Paper (Carton)",
    description: "Carton has 5 reams of paper.",
    price: "KSh 2,500",
    image: svetoPaper,
  },
  {
    id: 16,
    name: "A4 Laminating Pouch (Ream)",
    description: "Durable protection for documents.",
    price: "KSh 1,050",
    image: laminatingPouch,
  },
];

interface ProductsProps {
  showAll?: boolean;
}

const Products = ({ showAll = false }: ProductsProps) => {
  const displayProducts = showAll ? products : products.slice(0, 4);

  return (
    <section id="products" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            {showAll ? "All Products" : "Top Products"}
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mt-2 mb-4">
            {showAll ? "Our Products" : "Best Selling Products"}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Browse our complete range of printing paper, photocopy paper, and office supplies at wholesale prices.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {displayProducts.map((product, index) => (
            <div
              key={product.id}
              className="bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${0.05 * (index + 1)}s` }}
            >
              {/* Image */}
              <div className="relative aspect-square bg-muted overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {product.badge && (
                  <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground">
                    {product.badge}
                  </Badge>
                )}
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-semibold text-primary text-lg mb-1">
                  {product.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-3">
                  {product.description}
                </p>
                <p className="text-accent font-bold text-xl">{product.price}</p>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button - only show on home page */}
        {!showAll && (
          <div className="text-center">
            <Button variant="outline" className="gap-2" asChild>
              <Link to="/products">
                View All Products
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;
