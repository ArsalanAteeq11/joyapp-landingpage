import { motion } from "framer-motion";

// const partners = [
//   { name: "PropertyCo", width: "w-28" },
//   { name: "RealEstate+", width: "w-32" },
//   { name: "HomeGuard", width: "w-28" },
//   { name: "BuildTech", width: "w-24" },
//   { name: "UrbanLiving", width: "w-30" },
//   { name: "EstateFlow", width: "w-28" },
// ];
const partners = [
  { name: "EFS", logo: "/client-1.png" },
  { name: "Betterhomes", logo: "/client-2.png" },
  { name: "UDC", logo: "/client-3.png" },
  { name: "Al Sraiya", logo: "/client-4.png" },
  { name: "Durat Al Doha", logo: "/client-5.png" },
  { name: "Qatar Foundation", logo: "/client-6.png" },
];

const TrustedBy = () => {
  return (
    <section className="py-16 bg-background relative overflow-hidden">
      <div className="container-custom px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-primary">Partners</span>
          </h3>
        </motion.div>

        {/* Logo Carousel */}
        <div className="relative">
          <div className="flex overflow-hidden w-full h-full">
            <motion.div
              className="flex gap-12 md:gap-20"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {[...partners, ...partners].map((partner, index) => (
                <div key={index} className="shrink-0 w-40 md:w-55 h-20 md:h-28">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Fade edges */}
          <div className="absolute top-0 left-0 h-full w-20 bg-linear-to-r from-background to-transparent pointer-events-none" />
          <div className="absolute top-0 right-0 h-full w-20 bg-linear-to-l from-background to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
    // <section className="py-16 bg-background border-y border-border overflow-hidden">
    //   <div className="container-narrow mx-auto px-4 sm:px-6 lg:px-8">
    //     <motion.div
    //       initial={{ opacity: 0, y: 20 }}
    //       whileInView={{ opacity: 1, y: 0 }}
    //       viewport={{ once: true }}
    //       transition={{ duration: 0.6 }}
    //       className="text-center mb-10"
    //     >
    //       <p className="text-muted-foreground font-medium uppercase tracking-wider text-sm">
    //         Trusted by leading property companies
    //       </p>
    //     </motion.div>

    //     <motion.div
    //       initial={{ opacity: 0 }}
    //       whileInView={{ opacity: 1 }}
    //       viewport={{ once: true }}
    //       transition={{ duration: 0.8, delay: 0.2 }}
    //       className="flex flex-wrap justify-center items-center gap-8 lg:gap-16"
    //     >
    //       {partners.map((partner, index) => (
    //         <motion.div
    //           key={partner.name}
    //           initial={{ opacity: 0, y: 10 }}
    //           whileInView={{ opacity: 1, y: 0 }}
    //           viewport={{ once: true }}
    //           transition={{ delay: index * 0.1 }}
    //           className={`w-8 h-8 bg-muted-foreground/20 rounded-lg flex items-center justify-center text-muted-foreground/60 font-semibold text-sm hover:bg-muted-foreground/30 transition-colors cursor-default`}
    //         >
    //           {partner.name}
    //         </motion.div>
    //       ))}
    //     </motion.div>

    //     {/* Built in Qatar Badge */}
    //     <motion.div
    //       initial={{ opacity: 0, y: 20 }}
    //       whileInView={{ opacity: 1, y: 0 }}
    //       viewport={{ once: true }}
    //       transition={{ duration: 0.6, delay: 0.4 }}
    //       className="flex justify-center mt-10"
    //     >
    //       <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border">
    //         <span className="text-2xl">🇶🇦</span>
    //         <span className="text-sm font-medium text-muted-foreground">
    //           Proudly Built in Qatar
    //         </span>
    //       </div>
    //     </motion.div>
    //   </div>
    // </section>
  );
};

export default TrustedBy;
