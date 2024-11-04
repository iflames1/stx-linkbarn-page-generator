import Image from "next/image";
import React from "react";

export default function Partners() {
  const partners = [
    {
      name: "CryptoExchange Alpha",
      logo: "/token.jpg",
    },
    {
      name: "DeFi Platform Beta",
      logo: "/token.jpg",
    },
    {
      name: "Blockchain Network Gamma",
      logo: "/token.jpg",
    },
    {
      name: "NFT Marketplace Delta",
      logo: "/token.jpg",
    },
  ];

  return (
    <section className="py-24 relative bg-black/50">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text mb-16">
          Our Partners
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
          {partners.map((partner, index) => (
            <div
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
