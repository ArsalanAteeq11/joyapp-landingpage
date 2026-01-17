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
              <span className="text-gradient-orange">
                Property Management
              </span>
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Streamline your operations with AI-powered insights,
              automation, and real-time analytics built for modern
              property managers.
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
              {/* Main Dashboard */}
              <div className="relative z-20 rounded-2xl overflow-hidden shadow-2xl animate-float-slow">
                <div className="bg-foreground p-1 rounded-t-2xl">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                </div>
                <div className="bg-secondary p-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div className="h-6 w-32 bg-foreground/10 rounded" />
                      <div className="h-8 w-24 bg-primary rounded-lg" />
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="bg-background rounded-xl p-4">
                          <div className="h-3 w-12 bg-muted-foreground/20 rounded mb-2" />
                          <div className="h-6 w-16 bg-primary/20 rounded" />
                        </div>
                      ))}
                    </div>
                    <div className="bg-background rounded-xl p-4 h-32">
                      <div className="flex gap-2 items-end h-full">
                        {[40, 65, 45, 80, 55, 70, 90].map((height, i) => (
                          <div
                            key={i}
                            className="flex-1 bg-primary/80 rounded-t"
                            style={{ height: `${height}%` }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Mobile */}
              <motion.div
                className="absolute -bottom-8 -left-8 z-30 w-40 animate-float"
                style={{ animationDelay: "1s" }}
              >
                <div className="bg-foreground rounded-3xl p-1.5 shadow-xl">
                  <div className="bg-background rounded-2xl p-3 space-y-2">
                    <div className="h-3 w-16 bg-muted-foreground/20 rounded" />
                    <div className="h-8 w-full bg-primary/20 rounded-lg" />
                    <div className="h-3 w-12 bg-muted-foreground/20 rounded" />
                    <div className="h-3 w-20 bg-muted-foreground/10 rounded" />
                  </div>
                </div>
              </motion.div>

              {/* Notification Card */}
              <motion.div
                className="absolute -top-4 -right-4 z-30 bg-background rounded-xl p-4 shadow-xl animate-float"
                style={{ animationDelay: "2s" }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-primary text-lg">✓</span>
                  </div>
                  <div>
                    <div className="h-3 w-24 bg-foreground/80 rounded mb-1" />
                    <div className="h-2 w-16 bg-muted-foreground/30 rounded" />
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
