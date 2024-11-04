import { PARTNERS } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Partners({ partners }: { partners: PARTNERS[] }) {
  return (
    <section className="py-24 relative bg-black/50">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text mb-16">
          Our Partners
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
          {partners.map((partner, index) => (
            <Link
              href={partner.link}
              target="_blank"
              key={index}
              className="bg-purple-900/30 p-6 rounded-lg border border-purple-500/50 w-full max-w-[200px] transform hover:scale-105 transition-all"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={60}
                height={60}
                className="w-full h-auto object-contain filter brightness-90 hover:brightness-100 transition-all"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
