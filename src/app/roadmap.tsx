import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Roadmap() {
  const roadmapData = [
    {
      phase: "Phase 1: Launch",
      items: [
        "Website Launch",
        "Social Media Presence",
        "Community Building",
        "Initial Meme Collection Release",
      ],
    },
    {
      phase: "Phase 2: Growth",
      items: [
        "Token Launch",
        "NFT Collection",
        "Partnership Announcements",
        "Community Events",
      ],
    },
    {
      phase: "Phase 3: Expansion",
      items: [
        "DAO Formation",
        "Ming Mang Marketplace",
        "Mobile App Development",
        "International Marketing",
      ],
    },
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-purple-900/10 backdrop-blur-sm"></div>
      <div className="relative">
        <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
          Roadmap
        </h2>
        <div className="container mx-auto max-w-4xl">
          {roadmapData.map((phase, index) => (
            <div
              key={index}
              className="mb-12 transform hover:scale-102 transition-all"
            >
              <h3 className="text-2xl font-bold mb-4 text-purple-400">
                {phase.phase}
              </h3>
              <Card className="bg-purple-900/30 border-purple-500 hover:bg-purple-900/40 transition-all">
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    {phase.items.map((item, idx) => (
                      <li key={idx} className="flex items-center">
                        <ArrowRight className="mr-2 h-4 w-4 text-purple-400" />
                        <span className="text-purple-200">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
