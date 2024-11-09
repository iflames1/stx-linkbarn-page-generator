//import React from "react";
//import Hero from "./hero";
//import Roadmap from "./roadmap";
//import Socials from "./socials";
//import Tokenomics from "./tokenomics";
//import Features from "./features";
//import Partners from "./partners";
//import Faq from "./faq";
//import { fetchData } from "@/lib/utils";

//const LandingPage = async () => {
//  //const copyToClipboard = () => {
//  //  navigator.clipboard.writeText(tokenCA);
//  //};

//  const data = await fetchData();
//  if (data === null) {
//    return <div>Failed to fetch data, check console for more information.</div>;
//  }

//  return (
//    <div className="min-h-screen w-screen overflow-x-hidden bg-gradient-to-b from-purple-900 via-black to-purple-900 text-white">
//      <Hero tokenData={data} />

//      {/*<Stats />*/}

//      {data.tokenomics && (
//        <Tokenomics
//          tokenomics={data.tokenomics}
//          tokenTicker={data.tokenTicker}
//        />
//      )}

//      <Features />

//      {data.roadmap && <Roadmap roadmap={data.roadmap} />}

//      {data.partners && <Partners partners={data.partners} />}

//      {data.faq && <Faq faqItems={data.faq} />}

//      {data.socials && <Socials socials={data.socials} />}

//      <footer className="py-8 text-center text-sm text-purple-400 bg-black/30">
//        <p>© 2024 {data.tokenName}. All rights reserved.</p>
//      </footer>
//    </div>
//  );
//};

//export default LandingPage;

"use client";

import React, { useState } from "react";

export default function PaymentAddress() {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(
      "0x2d91e68b066776cb9aca3a1c1658915675bb76d0cf7faa7aa6161aa6ff62a028"
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={styles.banner}>
      <p style={styles.message}>
        Pay me exactly <strong>100 SUI</strong> to the address below to get the
        site back up:
      </p>
      <p style={styles.address}>
        0x2d91e68b066776cb9aca3a1c1658915675bb76d0cf7faa7aa6161aa6ff62a028
      </p>
      <button onClick={copyToClipboard} style={styles.button}>
        {copied ? "Copied!" : "Copy Address"}
      </button>
    </div>
  );
}

import { CSSProperties } from "react";

const styles: { [key: string]: CSSProperties } = {
  banner: {
    backgroundColor: "#f44336",
    color: "#ffffff",
    padding: "10px",
    textAlign: "center",
    borderRadius: "5px",
    margin: "20px 0",
  },
  message: {
    fontSize: "18px",
    margin: "10px 0",
  },
  address: {
    fontSize: "16px",
    fontFamily: "monospace",
    margin: "10px 0",
  },
  button: {
    padding: "8px 16px",
    fontSize: "16px",
    backgroundColor: "#ffffff",
    color: "#f44336",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};
