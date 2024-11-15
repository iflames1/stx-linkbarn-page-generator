import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ } from "@/lib/types";

export default function Faq({ faqItems }: { faqItems: FAQ[] }) {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-orange-900/10 backdrop-blur-sm"></div>
      <div className="relative container mx-auto px-4 max-w-4xl">
        <h2 className="text-5xl font-bold text-center bg-gradient-to-r from-orange-400 to-pink-400 text-transparent bg-clip-text mb-16">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="space-y-4">
          {faqItems.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-orange-900/30 border border-orange-500 rounded-lg overflow-hidden"
            >
              <AccordionTrigger className="px-6 py-4 hover:bg-orange-900/50 text-orange-200 hover:text-orange-100">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 text-orange-300">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
