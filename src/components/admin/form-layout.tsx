"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ScrollText, ArrowUp, ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAVITEM } from "@/lib/types";

const navItems: NAVITEM[] = [
  { label: "Required Info", sectionId: "required-section" },
  { label: "DEX", sectionId: "dex-section" },
  { label: "Roadmap", sectionId: "roadmap-section" },
  { label: "Features", sectionId: "features-section" },
  { label: "Tokenomics", sectionId: "tokenomics-section" },
  { label: "Socials", sectionId: "socials-section" },
  { label: "Partners", sectionId: "partners-section" },
  { label: "FAQ", sectionId: "faq-section" },
];

export default function FormLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showScrollUp, setShowScrollUp] = useState(false);
  const [activeSection, setActiveSection] = useState<string>(
    navItems[0].sectionId
  );
  const [showFullNav, setShowFullNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setShowScrollUp(scrollPosition > 200);

      // Update active section based on scroll position
      const sections = navItems.map((item) =>
        document.getElementById(item.sectionId)
      );
      const currentSection = sections.reduce((nearest, section) => {
        if (!section) return nearest;
        const distance = Math.abs(section.getBoundingClientRect().top);
        return !nearest ||
          distance < Math.abs(nearest.getBoundingClientRect().top)
          ? section
          : nearest;
      }, null as HTMLElement | null);

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const navHeight = 100; // Adjust based on your nav height
      const sectionPosition = section.offsetTop - navHeight;
      window.scrollTo({
        top: sectionPosition,
        behavior: "smooth",
      });
    }
    setShowFullNav(false);
  };

  const scrollToEdge = () => {
    window.scrollTo({
      top: showScrollUp ? 0 : document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };
  return (
    <div className="container mx-auto py-8 px-4 max-w-3xl relative">
      {/* Navigation Bar */}
      <div className="sticky top-4 z-50 mb-8">
        <div className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 rounded-lg shadow-lg border p-2">
          <div className="flex items-center justify-between lg:hidden">
            <Button
              variant="ghost"
              onClick={() => setShowFullNav(!showFullNav)}
              className="w-full justify-between"
            >
              <div className="flex items-center gap-2">
                <ScrollText className="h-4 w-4" />
                <span>
                  {
                    navItems.find((item) => item.sectionId === activeSection)
                      ?.label
                  }
                </span>
              </div>
              <span className="text-xs text-muted-foreground">
                {showFullNav ? "↑ Close" : "↓ View All"}
              </span>
            </Button>
          </div>

          <nav
            className={cn(
              "flex flex-col lg:flex-row gap-2 mt-2 lg:mt-0",
              !showFullNav && "hidden lg:flex"
            )}
          >
            {navItems.map((item) => (
              <Button
                key={item.sectionId}
                variant={activeSection === item.sectionId ? "default" : "ghost"}
                size="sm"
                onClick={() => scrollToSection(item.sectionId)}
                className="justify-start lg:flex-1"
              >
                {item.label}
              </Button>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            ...child.props, // spread the existing props
            className: cn(child.props.className || "", "scroll-mt-32"),
          });
        }
        return child;
      })}

      {/* Scroll Button */}
      <Button
        variant="outline"
        size="icon"
        className={cn(
          "fixed bottom-4 right-4 z-50 rounded-full transition-all duration-300",
          !showScrollUp && "translate-y-[calc(100%+16px)]"
        )}
        onClick={scrollToEdge}
      >
        {showScrollUp ? (
          <ArrowUp className="h-4 w-4" />
        ) : (
          <ArrowDown className="h-4 w-4" />
        )}
      </Button>
    </div>
  );
}
