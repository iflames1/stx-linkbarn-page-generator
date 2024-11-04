import React from "react";
import { ArrowRight, Percent, Wallet, Users, Lock, Rocket } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function Tokenomics() {
  const tokenomicsData = [
    {
      title: "Liquidity Pool",
      percentage: 40,
      icon: Wallet,
      color: "from-blue-400 to-purple-400",
      description: "Locked for 1 year to ensure trading stability",
    },
    {
      title: "Community Rewards",
      percentage: 30,
      icon: Users,
      color: "from-purple-400 to-pink-400",
      description: "Distributed to active community members",
    },
    {
      title: "Development",
      percentage: 20,
      icon: Rocket,
      color: "from-pink-400 to-red-400",
      description: "Future development and marketing",
    },
    {
      title: "Team",
      percentage: 10,
      icon: Lock,
      color: "from-red-400 to-orange-400",
      description: "Vested over 12 months",
    },
  ];

  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-purple-900/10 backdrop-blur-sm"></div>
      <div className="relative container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text mb-4">
            Tokenomics
          </h2>
          <p className="text-xl text-purple-200 max-w-2xl mx-auto">
            Total Supply: 1,000,000,000 MINGMANG
          </p>
        </div>

        {/* Supply Distribution Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {tokenomicsData.map((item, index) => (
            <Card
              key={index}
              className="bg-purple-900/30 border-purple-500 overflow-hidden relative transform hover:scale-105 transition-all duration-300"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${item.color}"></div>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <item.icon className="h-8 w-8 text-purple-400" />
                  <span className="text-3xl font-bold text-purple-200">
                    {item.percentage}%
                  </span>
                </div>
                <CardTitle className="text-xl text-purple-200">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-purple-300">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tokenomics Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="bg-purple-900/30 border-purple-500 transform hover:scale-105 transition-all">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lock className="h-5 w-5 text-purple-400" />
                Security Features
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex items-center gap-2">
                <ArrowRight className="h-4 w-4 text-purple-400" />
                <span className="text-purple-200">
                  Liquidity Locked for 12 Months
                </span>
              </div>
              <div className="flex items-center gap-2">
                <ArrowRight className="h-4 w-4 text-purple-400" />
                <span className="text-purple-200">Ownership Renounced</span>
              </div>
              <div className="flex items-center gap-2">
                <ArrowRight className="h-4 w-4 text-purple-400" />
                <span className="text-purple-200">Smart Contract Audited</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-purple-900/30 border-purple-500 transform hover:scale-105 transition-all">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Percent className="h-5 w-5 text-purple-400" />
                Tax Structure
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex items-center gap-2">
                <ArrowRight className="h-4 w-4 text-purple-400" />
                <span className="text-purple-200">2% Marketing</span>
              </div>
              <div className="flex items-center gap-2">
                <ArrowRight className="h-4 w-4 text-purple-400" />
                <span className="text-purple-200">1% Development</span>
              </div>
              <div className="flex items-center gap-2">
                <ArrowRight className="h-4 w-4 text-purple-400" />
                <span className="text-purple-200">1% Liquidity Pool</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
