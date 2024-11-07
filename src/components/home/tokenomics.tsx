"use client";
import React from "react";
import { ArrowRight, Percent, Wallet, Users, Lock, Rocket } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { TOKENOMICS } from "@/lib/types";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

interface TokenomicsProps {
  tokenomics: TOKENOMICS;
  tokenTicker: string;
}

export default function Tokenomics({
  tokenomics,
  tokenTicker,
}: TokenomicsProps) {
  const icons = {
    "Liquidity Pool": Wallet,
    "Community Rewards": Users,
    Development: Rocket,
    Team: Lock,
    "Security Features": Lock,
    "Tax Structure": Percent,
  };

  const { ref, inView } = useInView({
    threshold: 0.01,
  });

  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-purple-900/10 backdrop-blur-sm"></div>
      <div className="relative container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text mb-4">
            Tokenomics
          </h2>
          <p className="text-xl text-purple-200 max-w-2xl mx-auto">
            Total Supply: {tokenomics.totalSupply} {tokenTicker}
          </p>
        </div>

        {/* Supply Distribution Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {tokenomics.distribution.map((item, index) => {
            const IconComponent = icons[item.title as keyof typeof icons];

            return (
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
                <Card className="bg-purple-900/30 border-purple-500 overflow-hidden relative transform hover:scale-105 transition-all ">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-400"></div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      {React.createElement(IconComponent, {
                        className: "h-8 w-8 text-purple-400",
                      })}
                      <span className="text-3xl font-bold text-purple-200">
                        {item.percentage}%
                      </span>
                    </div>
                    <CardTitle className="text-xl text-purple-200">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Tokenomics Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {tokenomics.features.map((feature, index) => {
            const IconComponent = icons[feature.title as keyof typeof icons];

            return (
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
                  className="bg-purple-900/30 border-purple-500 transform hover:scale-105 transition-all"
                >
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-white">
                      {React.createElement(IconComponent, {
                        className: "h-5 w-5 text-purple-400",
                      })}
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    {feature.content.map((content, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <ArrowRight className="h-4 w-4 text-purple-400" />
                        <span className="text-purple-200">{content}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
