"use client";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { ROADMAP } from "@/lib/types";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

export default function Roadmap({ roadmap }: { roadmap: ROADMAP[] }) {
  const { ref, inView } = useInView({
    threshold: 0.01,
  });

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-purple-900/10 backdrop-blur-sm"></div>
      <div className="relative">
        <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
          Roadmap
        </h2>
        <div className="container mx-auto max-w-4xl">
          {roadmap.map((phase, index) => (
            <div
              key={index}
              className="mb-12 transform hover:scale-102 transition-all"
            >
              <h3 className="text-2xl font-bold mb-4 text-purple-400">
                Phase {index + 1}: {phase.phase}
              </h3>
              <motion.div
                ref={ref}
                initial={{ opacity: 0, x: 100, scale: 0.9 }} // Start off-screen to the right
                animate={{
                  opacity: inView ? 1 : 0,
                  x: inView ? 0 : 100,
                  scale: inView ? 1 : 0.99,
                }} // Animate to final position
                transition={{
                  duration: 1.2,
                  ease: "easeIn",
                  delay: index * 0.5,
                }} // Adjust duration and easing as needed
              >
                <Card className="bg-purple-900/30 border-purple-500 hover:bg-purple-900/40 transform hover:scale-105 transition-all">
                  <CardContent className="pt-6">
                    <ul className="space-y-3">
                      {phase.items.map((item, idx) => (
                        <li key={idx} className="flex items-center">
                          <ArrowRight className="mr-2 h-4 w-4 text-purple-400" />
                          <span className="text-purple-200">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
