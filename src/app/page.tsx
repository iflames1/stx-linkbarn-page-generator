import React from "react";
import Hero from "./hero";
import Roadmap from "./roadmap";
import Socials from "./socials";
import Tokenomics from "./tokenomics";
import Features from "./features";
import Partners from "./partners";
import Faq from "./faq";
import { fetchData } from "@/lib/utils";

const LandingPage = async () => {
  //const copyToClipboard = () => {
  //  navigator.clipboard.writeText(tokenCA);
  //};

  const data = await fetchData();
  if (data === null) {
    return <div>Failed to fetch data, check console for more information.</div>;
  }

  return (
    <div className="min-h-screen w-screen overflow-x-hidden bg-gradient-to-b from-purple-900 via-black to-purple-900 text-white">
      <Hero tokenData={data} />

      {/*<Stats />*/}

      {data.tokenomics && (
        <Tokenomics
          tokenomics={data.tokenomics}
          tokenTicker={data.tokenTicker}
        />
      )}

      <Features />

      {data.roadmap && <Roadmap roadmap={data.roadmap} />}

      {data.partners && <Partners partners={data.partners} />}

      {data.faq && <Faq faqItems={data.faq} />}

      {data.socials && <Socials socials={data.socials} />}

      <footer className="py-8 text-center text-sm text-purple-400 bg-black/30">
        <p>© 2024 {data.tokenName}. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
