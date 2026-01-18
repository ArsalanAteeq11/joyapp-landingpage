import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-linear-to-b from-background to-secondary/30">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container-narrow mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div className="relative z-10">
            <motion.span
              className="inline-block px-4 py-2 rounded-full bg-orange-light text-primary font-semibold text-sm mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              Property Management Reimagined
            </motion.span>

            <motion.h1
              className="font-display text-5xl sm:text-6xl font-bold text-foreground leading-tight mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Smart{" "}
              <span className="text-gradient-orange">Property Management</span>
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Streamline your operations with AI-powered insights, automation,
              and real-time analytics built for modern property managers.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <a href="#pricing" className="btn-primary group">
                Start Free Trial
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>

          {/* Dashboard Mockup */}
          <motion.div
            className="relative hidden sm:block"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              {/* Main Dashboard Image */}
              <img
                src="./joy-dashboard.png"
                alt="Dashboard"
                className="h-100 w-full shadow-xl rounded-4xl border-2 border-accent"
              />

              {/* Floating Mobile Image */}
              <motion.div
                className="absolute -bottom-8 -left-8 z-30 animate-float"
                style={{ animationDelay: "1s" }}
              >
                <img
                  src="./joy-mobile.png"
                  alt="Mobile App"
                  className="w-40 shadow-xl rounded-3xl"
                />
              </motion.div>

              {/* Notification Card Image */}
              <motion.div
                className="absolute -top-4 -right-4 z-30 animate-float"
                style={{ animationDelay: "2s" }}
              >
                <img
                  src="./joy-notification.png"
                  alt="Notification"
                  className="w-56 shadow-xl rounded-2xl"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
