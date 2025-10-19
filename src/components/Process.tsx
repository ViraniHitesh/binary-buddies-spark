import { motion } from "framer-motion";
import { Search, Lightbulb, Code2, Rocket, Settings, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Discovery & Analysis",
    description: "We dive deep into your business needs, challenges, and goals to understand the full picture.",
    duration: "1-2 weeks",
  },
  {
    icon: Lightbulb,
    title: "Strategy & Planning",
    description: "Our experts design a comprehensive solution tailored to your specific requirements.",
    duration: "1 week",
  },
  {
    icon: Code2,
    title: "Development & Implementation",
    description: "Agile development with regular updates, ensuring transparency and quality at every stage.",
    duration: "4-12 weeks",
  },
  {
    icon: Rocket,
    title: "Testing & Deployment",
    description: "Rigorous testing and smooth deployment with zero downtime and full support.",
    duration: "1-2 weeks",
  },
  {
    icon: Settings,
    title: "Optimization & Training",
    description: "Fine-tuning performance and comprehensive team training for seamless adoption.",
    duration: "1 week",
  },
  {
    icon: CheckCircle,
    title: "Support & Maintenance",
    description: "24/7 ongoing support, updates, and continuous improvement to ensure long-term success.",
    duration: "Ongoing",
  },
];

export const Process = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-background to-background/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Our <span className="text-gradient">Process</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A proven methodology that delivers exceptional results every time
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`relative mb-16 ${
                index % 2 === 0 ? "md:pr-1/2 md:text-right" : "md:pl-1/2 md:ml-auto"
              }`}
            >
              {/* Step Number Circle */}
              <div className="absolute left-4 md:left-1/2 top-0 w-16 h-16 -translate-x-1/2 glass rounded-full flex items-center justify-center z-10 hover-glow">
                <span className="text-2xl font-bold text-gradient">{index + 1}</span>
              </div>

              {/* Content */}
              <div className={`glass p-8 rounded-xl ml-20 md:ml-0 ${
                index % 2 === 0 ? "md:mr-12" : "md:ml-12"
              } group hover-glow cursor-pointer transition-all duration-300 hover:scale-105`}>
                <div className={`flex items-start gap-4 ${
                  index % 2 === 0 ? "md:flex-row-reverse md:text-right" : "md:flex-row md:text-left"
                }`}>
                  <div className={`p-4 rounded-xl bg-${index % 2 === 0 ? 'primary' : 'accent'}/10 group-hover:shadow-glow transition-all duration-300`}>
                    <step.icon className={`w-8 h-8 text-${index % 2 === 0 ? 'primary' : 'accent'}`} />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2 text-foreground group-hover:text-gradient transition-all duration-300">
                      {step.title}
                    </h3>
                    <p className="text-primary font-semibold mb-3">
                      Duration: {step.duration}
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
    </section>
  );
};
