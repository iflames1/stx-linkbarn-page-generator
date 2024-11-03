"use client";
import React from "react";
import {
  ArrowRight,
  Twitter,
  MessageCircle,
  Globe,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import Image from "next/image";
import CopyButton from "./copy-button";

const LandingPage = () => {
  const tokenCA =
    "0x0bcd4e7f827b01c2c3200dfbf446c5da358d43a623214613394131b2e10c6b9b::mingmang::MINGMANG";

  //const copyToClipboard = () => {
  //  navigator.clipboard.writeText(tokenCA);
  //};

  const roadmapData = [
    {
      phase: "Phase 1: Launch",
      items: [
        "Website Launch",
        "Social Media Presence",
        "Community Building",
        "Initial Meme Collection Release",
      ],
    },
    {
      phase: "Phase 2: Growth",
      items: [
        "Token Launch",
        "NFT Collection",
        "Partnership Announcements",
        "Community Events",
      ],
    },
    {
      phase: "Phase 3: Expansion",
      items: [
        "DAO Formation",
        "Ming Mang Marketplace",
        "Mobile App Development",
        "International Marketing",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-black to-purple-900 text-white">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-4">
        <div className="absolute inset-0 bg-[url('/api/placeholder/1200/800')] bg-center bg-cover opacity-20 blur-sm"></div>
        <div className="relative z-10">
          <div className="max-w-6xl mx-auto flex flex-col items-center">
            <div className="w-48 h-48 rounded-full bg-purple-500/20 p-2 mb-8">
              <Image
                width={192}
                height={192}
                src="/mingmang.jpg"
                alt="Ming Mang Logo"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <h1 className="text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
              Ming Mang
            </h1>
            <p className="text-2xl mb-8 text-purple-200 max-w-2xl text-center">
              The Next Generation of Meme Culture on the Blockchain
            </p>
            <div className="flex justify-center gap-4 mb-12">
              <Button
                size="lg"
                className="bg-purple-500 hover:bg-purple-600 transform hover:scale-105 transition-all"
              >
                Buy Now <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-purple-500 text-purple-500 hover:bg-purple-900 transform hover:scale-105 transition-all"
              >
                Join Community
              </Button>
            </div>

            {/* Token Contract Address */}
            <Alert className="bg-purple-900/50 border-purple-500 max-w-2xl">
              <AlertDescription className="flex items-center justify-between">
                <div className="flex-1 overflow-hidden">
                  <p className="text-sm text-purple-200 mb-1">
                    Token Contract Address:
                  </p>
                  <p className="text-xs text-purple-300 truncate font-mono">
                    {tokenCA}
                  </p>
                </div>
                <CopyButton />
                {/*<Button
                  variant="ghost"
                  size="sm"
                  className="ml-2 hover:bg-purple-800/50"
                  onClick={copyToClipboard}
                >
                  <Copy className="h-4 w-4" />
                </Button>*/}
              </AlertDescription>
            </Alert>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-black/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-purple-900/50 border-purple-500 transform hover:scale-105 transition-all">
              <CardHeader>
                <CardTitle className="text-center text-4xl bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
                  100K+
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center text-purple-200">
                Community Members
              </CardContent>
            </Card>
            <Card className="bg-purple-900/50 border-purple-500 transform hover:scale-105 transition-all">
              <CardHeader>
                <CardTitle className="text-center text-4xl bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
                  50M+
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center text-purple-200">
                Total Volume
              </CardContent>
            </Card>
            <Card className="bg-purple-900/50 border-purple-500 transform hover:scale-105 transition-all">
              <CardHeader>
                <CardTitle className="text-center text-4xl bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
                  10K+
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center text-purple-200">
                Holders
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-purple-900/10 backdrop-blur-sm"></div>
        <div className="relative">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
            Roadmap
          </h2>
          <div className="container mx-auto max-w-4xl">
            {roadmapData.map((phase, index) => (
              <div
                key={index}
                className="mb-12 transform hover:scale-102 transition-all"
              >
                <h3 className="text-2xl font-bold mb-4 text-purple-400">
                  {phase.phase}
                </h3>
                <Card className="bg-purple-900/30 border-purple-500 hover:bg-purple-900/40 transition-all">
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className="py-16 bg-black/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
            Join Our Community
          </h2>
          <div className="flex justify-center gap-6">
            <Button
              variant="ghost"
              className="hover:bg-purple-900 transform hover:scale-105 transition-all"
            >
              <Twitter className="mr-2 h-5 w-5" />
              Twitter
            </Button>
            <Button
              variant="ghost"
              className="hover:bg-purple-900 transform hover:scale-105 transition-all"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Discord
            </Button>
            <Button
              variant="ghost"
              className="hover:bg-purple-900 transform hover:scale-105 transition-all"
            >
              <Globe className="mr-2 h-5 w-5" />
              Website
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-sm text-purple-400 bg-black/30">
        <p>© 2024 Ming Mang. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
