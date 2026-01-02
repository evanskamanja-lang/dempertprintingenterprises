import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import ecoPaper from "@/assets/eco-paper.png";
import ultimaPaper from "@/assets/ultima-paper.jpg";
import aonePaper from "@/assets/aone-paper.jpeg";
import jkPaper from "@/assets/jk-paper.png";

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
];

const Products = () => {
  return (
    <section id="products" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            Top Products
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mt-2 mb-4">
            Best Selling Products
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our most popular printing paper and office supplies, trusted by
            businesses across Kenya.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
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

        {/* View All Button */}
        <div className="text-center">
          <Button variant="outline" className="gap-2">
            View All Products
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;
