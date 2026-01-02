import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-primary py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Dempert Printing Enterprises" className="h-12 w-auto bg-primary-foreground rounded p-1" />
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-4 max-w-md">
              Kenya's trusted wholesale supplier of printing paper and office supplies since
              2015. We serve businesses, schools, and government institutions with quality
              products and reliable delivery.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+254722148262"
                  className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  +254 722 148 262
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@dempert.co.ke"
                  className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  info@dempert.co.ke
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2 text-primary-foreground/70 text-sm">
                  <MapPin className="w-4 h-4 mt-0.5" />
                  <span>Nyeri & Nairobi, Kenya</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-primary-foreground/10">
          <p className="text-primary-foreground/50 text-sm text-center">
            © {new Date().getFullYear()} Dempert Printing Enterprises. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
