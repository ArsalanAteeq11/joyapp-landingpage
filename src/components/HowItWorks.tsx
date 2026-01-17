import { motion } from "framer-motion";
import { Send, UserCheck, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Send,
    step: "01",
    title: "Tenant Submits Request",
    description: "Tenants easily submit maintenance requests through the mobile app or web portal.",
  },
  {
    icon: UserCheck,
    step: "02",
    title: "Manager Assigns Task",
    description: "Property managers receive notifications and assign tasks to the right team members.",
  },
  {
    icon: CheckCircle,
    step: "03",
    title: "Issue Resolved & Rated",
    description: "Tasks are completed, tracked, and tenants provide feedback for continuous improvement.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section-padding bg-background overflow-hidden">
      <div className="container-narrow mx-auto overflow-hidden">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-orange-light text-primary font-semibold text-sm mb-6">
            How It Works
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Simple Process,{" "}
            <span className="text-gradient-orange">Powerful Results</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Get started in minutes with our streamlined workflow designed for efficiency.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-24 left-1/4 right-1/4 h-0.5 bg-border overflow-hidden" />
          
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative text-center"
            >
              {/* Step Number */}
              <div className="relative inline-flex mb-6">
                <div className="w-20 h-20 rounded-2xl bg-primary flex items-center justify-center shadow-orange">
                  <step.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-foreground text-background text-sm font-bold flex items-center justify-center">
                  {step.step}
                </span>
              </div>
              
              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
