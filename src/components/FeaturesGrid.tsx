import { motion } from "framer-motion";
import {
  TrendingUp,
  Users,
  Eye,
  DollarSign,
  Shield,
  Sparkles
} from "lucide-react";

const features = [
  {
    icon: TrendingUp,
    title: "Predict Tenant Issues Early",
    description: "Identify dissatisfaction trends before tenants decide to leave, using smart insights from real data.",
  },
  {
    icon: Users,
    title: "Get More Done with the Same Team",
    description: "Assign tasks faster, track progress easily, and reduce staff downtime.",
  },
  {
    icon: Eye,
    title: "Full Visibility for Tenants",
    description: "Tenants can see request status, updates, and responses — no more endless follow-ups.",
  },
  {
    icon: DollarSign,
    title: "Control Maintenance Costs",
    description: "Track expenses, reduce unnecessary repairs, and make smarter maintenance decisions.",
  },
  {
    icon: Shield,
    title: "Structured Complaint Handling",
    description: "Every issue follows a clear workflow — logged, assigned, resolved, and reviewed.",
  },
  {
    icon: Sparkles,
    title: "Designed for Non-Technical Users",
    description: "Simple, clean interface that anyone can use without training.",
  },
];

const FeaturesGrid = () => {
  return (
    <section id="features" className="section-padding bg-secondary/30 overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white via-transparent to-transparent opacity-50 pointer-events-none"></div>

      <div className="container-narrow mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-orange-light text-primary font-semibold text-sm mb-6">
            Features
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Built for Real Property{" "}
            <span className="text-gradient-orange">Challenges</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to manage properties smoothly — without spreadsheets, long follow-ups, or confusion.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-orange-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>

              <div className="w-14 h-14 rounded-xl bg-orange-50 flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors duration-300">
                <feature.icon className="w-7 h-7 text-orange-500 group-hover:text-white transition-colors duration-300" />
              </div>

              <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-orange-600 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed group-hover:text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
