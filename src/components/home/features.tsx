"use client";
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaStar } from "react-icons/fa6";
import { FEATURES } from "@/lib/types";

export default function Features({ features }: { features: FEATURES[] }) {
  const { ref, inView } = useInView({
    threshold: 0.01,
  });

  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-orange-900/10 backdrop-blur-sm"></div>
      <div className="relative container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center bg-gradient-to-r from-orange-400 to-pink-400 text-transparent bg-clip-text mb-16">
          Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              ref={ref}
              initial={{ opacity: 0, y: 0, scale: 0.9 }}
              animate={{
                opacity: inView && 1,
                y: inView ? 0 : 50,
                scale: inView ? 1 : 0.99,
              }}
              transition={{
                duration: 0.8,
                delay: index * 0.3, // Adjust the delay multiplier as needed
              }}
            >
              <Card
                key={index}
                className="bg-orange-900/30 border-orange-500 transform hover:scale-105 transition-all"
              >
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-orange-500/20 flex items-center justify-center mb-4">
                    <FaStar className="h-6 w-6 text-yellow-500" />
                  </div>
                  <CardTitle className="text-xl text-orange-200">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-orange-300">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
