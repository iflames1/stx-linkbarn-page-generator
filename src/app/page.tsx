import React from "react";
import Hero from "@/components/home/hero";
import Roadmap from "@/components/home/roadmap";
import Socials from "@/components/home/socials";
import Tokenomics from "@/components/home/tokenomics";
import Features from "@/components/home/features";
import Partners from "@/components/home/partners";
import Faq from "@/components/home/faq";
import { fetchData } from "@/lib/utils";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const data = await fetchData();

  return {
    title: data?.tokenName,
    description: data?.tokenDescription || "",
    openGraph: {
      images: "/token.jpg",
    },
  };
}

export default async function LandingPage() {
  const data = await fetchData();
  if (data === null) {
    return <div>Failed to fetch data, check console for more information.</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F3A80A] via-[#FEFE68] to-[#B27F1F] text-white">
      <Hero tokenData={data} />

      {/*<Stats />*/}

      {data.tokenomics && (
        <Tokenomics
          tokenomics={data.tokenomics}
          tokenTicker={data.tokenTicker}
        />
      )}

      {data.features && <Features features={data.features} />}

      {data.roadmap && <Roadmap roadmap={data.roadmap} />}

      {data.partners && <Partners partners={data.partners} />}

      {data.faq && <Faq faqItems={data.faq} />}

      {data.socials && <Socials socials={data.socials} />}

      <footer className="py-8 text-center text-sm text-orange-400 bg-black/30">
        <p>© 2024 {data.tokenName}. All rights reserved.</p>
      </footer>
    </div>
  );
}
