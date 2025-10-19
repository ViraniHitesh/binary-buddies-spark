import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Brain, Code, Bug, Zap, Shield, Database, Coffee } from "lucide-react";

const problems = [
  { icon: Brain, label: "AI Challenges", color: "primary", angle: 0 },
  { icon: Code, label: "Software Issues", color: "accent", angle: 60 },
  { icon: Bug, label: "Bug Fixes", color: "primary", angle: 120 },
  { icon: Zap, label: "Performance", color: "accent", angle: 180 },
  { icon: Shield, label: "Security", color: "primary", angle: 240 },
  { icon: Database, label: "Data Problems", color: "accent", angle: 300 },
];

export const ProblemSolver = () => {
  const [solving, setSolving] = useState(false);
  const [solved, setSolved] = useState(false);

  useEffect(() => {
    const solvingTimer = setTimeout(() => setSolving(true), 1000);
    const solvedTimer = setTimeout(() => {
      setSolving(false);
      setSolved(true);
    }, 4000);
    const resetTimer = setTimeout(() => {
      setSolved(false);
    }, 7000);

    return () => {
      clearTimeout(solvingTimer);
      clearTimeout(solvedTimer);
      clearTimeout(resetTimer);
    };
  }, [solved]);

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            How <span className="text-gradient">Binary Buddies</span> Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We take your problems, solve them efficiently, and deliver results
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto h-[600px]">
          {/* Problem Icons in Circle */}
          {problems.map((problem, index) => {
            const angle = (problem.angle * Math.PI) / 180;
            const radius = 250;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;

            return (
              <motion.div
                key={index}
                className="absolute top-1/2 left-1/2"
                style={{
                  transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className={`glass p-6 rounded-xl hover-glow relative`}>
                  <problem.icon className={`w-8 h-8 text-${problem.color}`} />
                  <p className="text-xs mt-2 font-medium whitespace-nowrap">{problem.label}</p>
                  
                  {/* Animated Line to Center */}
                  {solving && (
                    <motion.svg
                      className="absolute top-1/2 left-1/2 pointer-events-none"
                      style={{
                        width: Math.abs(x) * 2,
                        height: Math.abs(y) * 2,
                        transform: 'translate(-50%, -50%)',
                      }}
                    >
                      <motion.line
                        x1={x > 0 ? 0 : Math.abs(x) * 2}
                        y1={y > 0 ? 0 : Math.abs(y) * 2}
                        x2={Math.abs(x)}
                        y2={Math.abs(y)}
                        stroke={`hsl(var(--${problem.color}))`}
                        strokeWidth="2"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 1, delay: index * 0.15 }}
                      />
                    </motion.svg>
                  )}
                </div>
              </motion.div>
            );
          })}

          {/* Central Binary Buddies Logo/Icon */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            initial={{ scale: 0 }}
            animate={{ 
              scale: solved ? 1.2 : 1,
              rotate: solving ? 360 : 0,
            }}
            transition={{ 
              scale: { duration: 0.5 },
              rotate: { duration: 2, repeat: solving ? Infinity : 0, ease: "linear" }
            }}
          >
            <div className="glass p-12 rounded-2xl relative">
              {!solved ? (
                <>
                  <div className="text-4xl font-bold text-gradient">BB</div>
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/20 to-accent/20 animate-pulse" />
                  {solving && (
                    <motion.div
                      className="absolute inset-0 rounded-2xl"
                      animate={{
                        boxShadow: [
                          "0 0 20px hsl(var(--primary) / 0.3)",
                          "0 0 60px hsl(var(--primary) / 0.6)",
                          "0 0 20px hsl(var(--primary) / 0.3)",
                        ],
                      }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                  )}
                </>
              ) : (
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  className="flex flex-col items-center gap-4"
                >
                  <Coffee className="w-16 h-16 text-primary" />
                  <span className="text-lg font-semibold text-gradient">Chill Mode</span>
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Status Text */}
          <motion.div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 text-center"
            key={solved ? "solved" : solving ? "solving" : "waiting"}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <p className="text-2xl font-bold text-gradient">
              {solved ? "Problems Solved! ✓" : solving ? "Solving Problems..." : "Ready to Help"}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
    </section>
  );
};
