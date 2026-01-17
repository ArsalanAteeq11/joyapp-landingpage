import { motion } from "framer-motion";
import { Shield, Lock, Eye, Server, CheckCircle } from "lucide-react";

const trustFeatures = [
  { icon: Shield, text: "Bank-level encryption" },
  { icon: Lock, text: "Two-factor authentication" },
  { icon: Eye, text: "Complete audit trails" },
  { icon: Server, text: "99.9% uptime guarantee" },
];

const SafeReliable = () => {
  return (
    <section className="section-padding bg-background overflow-hidden">
      <div className="container-narrow mx-auto">
        <div className="flex md:flex-row flex-col gap-12 lg:gap-20 items-center md:items-start overflow-hidden">
          {/* Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 order-2 lg:order-1"
          >
            <img src="./feature-2.png" alt="" />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2 flex-1"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-orange-light text-primary font-semibold text-sm mb-6">
              Safe & Reliable
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Your Data is{" "}
              <span className="text-gradient-orange">Protected</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We take security seriously. Joy App is built with enterprise-grade security 
              features to keep your property data safe and compliant.
            </p>

            {/* Trust Features */}
            <div className="grid grid-cols-2 gap-4">
              {trustFeatures.map((feature, index) => (
                <motion.div
                  key={feature.text}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-medium text-foreground">{feature.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SafeReliable;
