import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import CopyButton from "./copy-button";
import Link from "next/link";

interface HeroProps {
  tokenName: string;
  tokenCA?: string;
  dexLink?: string;
  tokenDescription: string;
}

export default function Hero({
  tokenCA,
  tokenName,
  tokenDescription,
  dexLink,
}: HeroProps) {
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
            {tokenName}
          </h1>
          <p className="text-2xl mb-8 text-purple-200 max-w-2xl text-center">
            {tokenDescription}
          </p>
          <div className="flex justify-center gap-4 mb-12">
            <Button
              size="lg"
              className="bg-purple-500 hover:bg-purple-600 transform hover:scale-105 transition-all"
              asChild
            >
              <Link href={dexLink ?? "#"}>
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
              <div className="flex-1 overflow-hidden">
                <p className="text-sm text-purple-200 mb-1">
                  Token Contract Address:
                </p>
                <p className="text-xs text-purple-300 truncate font-mono">
                  {tokenCA ?? "coming soon..."}
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
  );
}
