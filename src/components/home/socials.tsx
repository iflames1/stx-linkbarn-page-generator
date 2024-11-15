import { Globe } from "lucide-react";
import { FaDiscord } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { Button } from "@/components/ui/button";
import { SOCIAL } from "@/lib/types";
import Link from "next/link";
import React from "react";

export default function Socials({ socials }: { socials: SOCIAL }) {
  const icons = {
    twitter: RiTwitterXLine,
    telegram: FaTelegramPlane,
    discord: FaDiscord,
    website: Globe,
  };
  return (
    <section id="socials" className="py-16 bg-black/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-orange-400 to-pink-400 text-transparent bg-clip-text">
          Join Our Community
        </h2>
        {socials && (
          <div className="flex flex-wrap justify-center gap-6">
            {Object.entries(socials).map(([name, url], index) => {
              const IconComponent = icons[name as keyof typeof icons];
              return (
                <Button
                  key={index}
                  variant="ghost"
                  className="hover:bg-orange-900 transform hover:scale-105 transition-all"
                  asChild
                >
                  <Link href={url as unknown as string}>
                    {React.createElement(IconComponent, {
                      className: "mr-2 h-5 w-5",
                    })}
                    {name}
                  </Link>
                </Button>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
