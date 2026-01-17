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
    <footer className="bg-dark-gray text-muted pt-16 pb-8">
      <div className="container-narrow mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <img src="/logo.png" alt="" className="h-16 w-auto mb-4" />
            <p className="text-muted-foreground mb-6 max-w-xs">
              Transforming property management with smart technology and exceptional user experience.
            </p>
            
            {/* Newsletter */}
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-muted-foreground/10 border border-muted-foreground/20 rounded-xl px-4 py-3 text-primary-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="btn-primary  px-6">
                Subscribe
              </button>
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-display font-semibold text-primary-foreground mb-4">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-primary-foreground transition-colors"
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
        <div className="border-t border-muted-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2024 Joy App. All rights reserved. Built with ❤️ in Qatar 🇶🇦
          </p>
          
          {/* Back to Top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -3 }}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-muted-foreground/10 hover:bg-primary text-muted-foreground hover:text-primary-foreground transition-colors"
          >
            <ArrowUp className="w-4 h-4" />
            <span className="text-sm font-medium">Back to Top</span>
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
