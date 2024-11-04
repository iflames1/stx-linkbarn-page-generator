import React from "react";
import { Zap, Shield, Coins, Gift } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function Features() {
  const features = [
    {
      icon: Coins,
      title: "Staking Rewards",
      description:
        "Earn passive income by staking your MINGMANG tokens in our yield farming pools",
    },
    {
      icon: Gift,
      title: "NFT Integration",
      description:
        "Exclusive NFT collections with unique utilities and benefits for holders",
    },
    {
      icon: Shield,
      title: "DAO Governance",
      description:
        "Community-driven decision making through decentralized voting mechanisms",
    },
    {
      icon: Zap,
      title: "Flash Minting",
      description:
        "Innovative minting mechanism for instant liquidity provision",
    },
  ];

  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-purple-900/10 backdrop-blur-sm"></div>
      <div className="relative container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text mb-16">
          Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-purple-900/30 border-purple-500 transform hover:scale-105 transition-all"
            >
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-purple-500/20 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-purple-400" />
                </div>
                <CardTitle className="text-xl text-purple-200">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-purple-300">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
