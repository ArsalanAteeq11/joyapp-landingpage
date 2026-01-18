import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

const footerLinks = {
  Product: ["Features", "Pricing", "Integrations", "Updates"],
  Company: ["About Us", "Careers", "Press", "Blog"],
  Resources: ["Documentation", "Help Center", "Webinars", "API"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
};

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-dark-gray text-muted pt-12 pb-6">
      <div className="container-narrow mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8 mb-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <img src="/logo.png" alt="" className="h-12 w-auto mb-4" />
            <p className="text-muted mb-6 max-w-xs text-sm">
              Transforming property management with smart technology and exceptional user experience.
            </p>

            {/* Newsletter */}
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-muted-foreground/10 border border-muted-foreground/20 rounded-xl px-4 py-2 text-sm text-primary-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="btn-primary px-5 py-2 text-sm">
                Subscribe
              </button>
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-display font-semibold text-primary-foreground mb-3 text-sm">
                {title}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-muted hover:text-white transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-muted-foreground/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-center text-xs">
            © 2024 Joy App. All rights reserved. Built with ❤️ in Qatar 🇶🇦
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
