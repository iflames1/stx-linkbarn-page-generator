import { MessageCircle, Globe } from "lucide-react";
import { RiTwitterXLine } from "react-icons/ri";
import { Button } from "@/components/ui/button";

export default function Socials() {
  return (
    <section id="socials" className="py-16 bg-black/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
          Join Our Community
        </h2>
        <div className="flex justify-center gap-6">
          <Button
            variant="ghost"
            className="hover:bg-purple-900 transform hover:scale-105 transition-all"
          >
            <RiTwitterXLine className="mr-2 h-5 w-5" />
            Twitter
          </Button>
          <Button
            variant="ghost"
            className="hover:bg-purple-900 transform hover:scale-105 transition-all"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Discord
          </Button>
          <Button
            variant="ghost"
            className="hover:bg-purple-900 transform hover:scale-105 transition-all"
          >
            <Globe className="mr-2 h-5 w-5" />
            Website
          </Button>
        </div>
      </div>
    </section>
  );
}
