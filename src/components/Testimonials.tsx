import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Al-Thani",
    role: "Property Manager",
    company: "Qatar Estates",
    rating: 5,
    quote: "Joy App transformed how we manage our 150+ properties. Tenant satisfaction increased by 40% in just 3 months. The AI predictions are incredibly accurate.",
    avatar: "SA",
  },
  {
    name: "Mohammed Hassan",
    role: "CEO",
    company: "Gulf Property Group",
    rating: 5,
    quote: "The best investment we've made for our operations. Response times dropped from days to hours, and our team productivity doubled.",
    avatar: "MH",
  },
  {
    name: "Fatima Al-Mahmoud",
    role: "Operations Director",
    company: "Doha Living",
    rating: 5,
    quote: "Finally, a property management solution that understands the Qatar market. The Arabic support and local compliance features are exceptional.",
    avatar: "FA",
  },
  {
    name: "James Wilson",
    role: "Facility Manager",
    company: "Pearl Residences",
    rating: 5,
    quote: "We reduced maintenance costs by 35% using Joy App's predictive analytics. The ROI was visible within the first quarter.",
    avatar: "JW",
  },
  {
    name: "Noura Al-Kubaisi",
    role: "Managing Partner",
    company: "Lusail Properties",
    rating: 5,
    quote: "Our tenants love the transparency. They can track everything in real-time, which has significantly reduced complaint calls.",
    avatar: "NA",
  },
  {
    name: "Ahmed Rashid",
    role: "Head of Real Estate",
    company: "Investment Holdings",
    rating: 5,
    quote: "Joy App's reporting dashboard gives us insights we never had before. Decision-making is now data-driven and confident.",
    avatar: "AR",
  },
];

const Testimonials = () => {
  return (
    <section className="section-padding bg-background overflow-hidden">
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
            Testimonials
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Loved by Property{" "}
            <span className="text-gradient-orange">Managers</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Join hundreds of property companies across Qatar who trust Joy App to streamline their operations.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-secondary rounded-2xl p-6 lg:p-8 card-hover relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-12 h-12 text-primary" />
              </div>

              {/* Star Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-primary text-primary"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground mb-6 leading-relaxed relative z-10">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-semibold">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 bg-foreground rounded-2xl p-8 lg:p-12"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: "500+", label: "Properties Managed" },
              { value: "98%", label: "Customer Satisfaction" },
              { value: "45%", label: "Cost Reduction" },
              { value: "24/7", label: "Support Available" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
              >
                <p className="font-display text-3xl lg:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </p>
                <p className="text-muted text-sm lg:text-base">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
