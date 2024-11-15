"use client";
import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import Link from "next/link";
import CopyCA from "./copy-ca";
import { TOKEN } from "@/lib/types";
import { motion } from "framer-motion";

interface HeroProps {
  tokenData: TOKEN;
}

export default function Hero({ tokenData }: HeroProps) {
  return (
    <section className="pt-20 px-4 h-screen">
      <motion.div
        className="absolute inset-0 bg-[url('/token.jpg')] bg-center bg-cover opacity-20 blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 10 }}
      ></motion.div>
      <div className="relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          <motion.div
            initial={{
              scale: 1,
              width: "100%",
              height: "100%",
              top: 5,
              left: 5,
              x: 5,
              y: 5,
            }}
            animate={{
              scale: 1,
              width: "12rem", // 48px * 4 = 192px (tailwind w-48)
              height: "12rem",
              top: 0,
              left: 0,
              x: 0,
              y: 0,
            }}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-48 h-48 rounded-full bg-purple-500/20 p-2 mb-8"
          >
            <Image
              width={192}
              height={192}
              src={tokenData.tokenImage}
              alt="Sui Rekt Logo"
              className="w-full h-full rounded-full object-cover"
            />
          </motion.div>
          <motion.h1
            className="text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            {tokenData.tokenName}
          </motion.h1>
          <motion.p
            className="text-2xl mb-8 text-purple-200 max-w-2xl text-center"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.5 }}
          >
            {tokenData.tokenDescription}
          </motion.p>
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 2 }}
          >
            <Button
              size="lg"
              className="bg-purple-500 hover:bg-purple-600 transform hover:scale-105 transition-all"
              asChild
            >
              <Link href={tokenData.dexLink ?? "#"} target="_blank">
                Buy Now <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-purple-500 text-purple-500 hover:bg-purple-900 transform hover:scale-105 transition-all"
            >
              <Link href={"#socials"}>Join Community</Link>
            </Button>
          </motion.div>

          <Alert className="bg-purple-900/50 border-purple-500 max-w-2xl glow-on-hover">
            <AlertDescription className="flex items-center justify-between">
              <CopyCA tokenCA={tokenData.tokenCA} />
            </AlertDescription>
          </Alert>
        </div>
      </div>
    </section>
  );
}
