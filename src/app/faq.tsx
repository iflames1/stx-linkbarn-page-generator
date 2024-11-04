import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Faq() {
  const faqItems = [
    {
      question: "What is Ming Mang?",
      answer:
        "Ming Mang is a revolutionary meme token built on cutting-edge blockchain technology, combining the fun of meme culture with real utility and community governance.",
    },
    {
      question: "How can I buy MINGMANG tokens?",
      answer:
        "You can purchase MINGMANG tokens through our partner DEX platforms. Simply connect your wallet, swap your preferred cryptocurrency for MINGMANG, and join our community.",
    },
    {
      question: "What makes Ming Mang unique?",
      answer:
        "Ming Mang stands out through its innovative tokenomics, strong community focus, and real utility features including staking, NFTs, and DAO governance.",
    },
    {
      question: "Is the smart contract audited?",
      answer:
        "Yes, our smart contract has been thoroughly audited by leading blockchain security firms to ensure the safety of our holders' investments.",
    },
    {
      question: "How can I participate in governance?",
      answer:
        "MINGMANG token holders can participate in governance by voting on proposals through our DAO platform, helping shape the future of the project.",
    },
  ];

  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-purple-900/10 backdrop-blur-sm"></div>
      <div className="relative container mx-auto px-4 max-w-4xl">
        <h2 className="text-5xl font-bold text-center bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text mb-16">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="space-y-4">
          {faqItems.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-purple-900/30 border border-purple-500 rounded-lg overflow-hidden"
            >
              <AccordionTrigger className="px-6 py-4 hover:bg-purple-900/50 text-purple-200 hover:text-purple-100">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 text-purple-300">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
