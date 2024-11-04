import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import Link from "next/link";
import CopyCA from "./copy-ca";
import { TOKEN } from "@/lib/types";

interface HeroProps {
  tokenData: TOKEN;
}

export default function Hero({ tokenData }: HeroProps) {
  return (
    <section className="relative pt-20 pb-32 px-4">
      <div className="absolute inset-0 bg-[url('/token.jpg')] bg-center bg-cover opacity-20 blur-sm"></div>
      <div className="relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          <div className="w-48 h-48 rounded-full bg-purple-500/20 p-2 mb-8">
            <Image
              width={192}
              height={192}
              src="/token.jpg"
              alt="Ming Mang Logo"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <h1 className="text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
            {tokenData.tokenName}
          </h1>
          <p className="text-2xl mb-8 text-purple-200 max-w-2xl text-center">
            {tokenData.tokenDescription}
          </p>
          <div className="flex justify-center gap-4 mb-12">
            <Button
              size="lg"
              className="bg-purple-500 hover:bg-purple-600 transform hover:scale-105 transition-all"
              asChild
            >
              <Link href={tokenData.dexLink ?? "#"}>
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
          </div>

          <Alert className="bg-purple-900/50 border-purple-500 max-w-2xl">
            <AlertDescription className="flex items-center justify-between">
              <CopyCA tokenCA={tokenData.tokenCA} />
            </AlertDescription>
          </Alert>
        </div>
      </div>
    </section>
  );
}
