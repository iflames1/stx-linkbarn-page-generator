import React from "react";
import Hero from "./hero";
import Roadmap from "./roadmap";
import Socials from "./socials";
import Tokenomics from "./tokenomics";
import Features from "./features";
import Partners from "./partners";
import Faq from "./faq";

const LandingPage = () => {
  //const copyToClipboard = () => {
  //  navigator.clipboard.writeText(tokenCA);
  //};

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-black to-purple-900 text-white">
      <Hero />

      {/*<Stats />*/}

      <Tokenomics />

      <Features />

      <Roadmap />

      <Socials />

      <Partners />

      <Faq />

      <footer className="py-8 text-center text-sm text-purple-400 bg-black/30">
        <p>© 2024 Ming Mang. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
