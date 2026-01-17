import { motion } from "framer-motion";
import { Check } from "lucide-react";

const pricingPlans = [
  {
    title: "Free Trial",
    subtitle: "(30 Days)",
    price: "0.00",
    period: "/MO.",
    per: "Per Tenant",
    features_title: "Free Trial Includes:",
    features: [
      "Tenant Database",
      "Communicate via Notice Board",
      "Limited Support",
    ],
    button: "Get Free",
    highlight: false,
  },
  {
    title: "Lite",
    subtitle: "",
    price: "0.99",
    period: "/MO.",
    per: "Per Tenant",
    features_title: "Joy Free plus the following:",
    features: [
      "Reactive Maintenance Manager",
      "Task Assignment",
      "Staff Database",
      "Parts Database",
      "Stock Indicators",
    ],
    button: "Register Now",
    highlight: false,
  },
  {
    title: "Pro",
    subtitle: "(Best Value)",
    price: "1.49",
    period: "/MO.",
    per: "Per Tenant",
    features_title: "Joy Lite plus the following:",
    features: [
      "Unlimited Upgrades",
      "Productivity Indicators",
      "Retention Indicators",
      "Unlimited Support",
    ],
    button: "Register Now",
    highlight: true,
  },
  {
    title: "Premium",
    subtitle: "",
    price: "2.99",
    period: "/MO.",
    per: "Per Tenant",
    features_title: "Joy Pro plus the following:",
    features: [
      "24/7 Support",
      "Unlimited Features",
      "Advanced Analytics",
      "Value Management",
    ],
    button: "Register Now",
    highlight: false,
  },
];

const PricingSection = () => {
  return (
    <section
      id="pricing"
      className="section-padding bg-secondary/50 overflow-x-hidden"
    >
      <div className="container-narrow mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-orange-light text-primary font-semibold text-sm mb-6">
            Pricing
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Simple, Transparent{" "}
            <span className="text-gradient-orange">Pricing</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Choose the plan that fits your portfolio. All plans include a 14-day
            free trial.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative bg-background rounded-2xl p-6 lg:p-8 card-hover ${
                plan.highlight ? "ring-2 ring-primary" : ""
              }`}
            >
              {/* Highlight Badge */}
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-block px-4 py-1 rounded-full bg-primary text-primary-foreground text-sm font-semibold shadow-orange">
                    Best Value
                  </span>
                </div>
              )}

              {/* Header */}
              <div className="text-center mb-6">
                <h3 className="font-display text-xl font-bold text-foreground">
                  {plan.title}
                </h3>
                {plan.subtitle && (
                  <p className="text-sm text-primary font-medium">
                    {plan.subtitle}
                  </p>
                )}
              </div>

              {/* Price */}
              <div className="text-center mb-6">
                <div className="flex justify-center items-end gap-1">
                  <span className="font-display text-4xl font-bold text-foreground">
                    ${plan.price}
                  </span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">{plan.per}</p>
              </div>

              {/* Features */}
              <div className="mb-6">
                <p className="font-semibold text-foreground mb-3">
                  {plan.features_title}
                </p>
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-orange-light flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <button
                className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 ${
                  plan.highlight
                    ? "btn-primary"
                    : "bg-secondary text-foreground hover:bg-muted"
                }`}
              >
                {plan.button}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
