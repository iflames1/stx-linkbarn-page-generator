"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";

export default function CopyButton() {
  const tokenCA =
    "0x0bcd4e7f827b01c2c3200dfbf446c5da358d43a623214613394131b2e10c6b9b::mingmang::MINGMANG";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(tokenCA);
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      className="ml-2 hover:bg-purple-800/50"
      onClick={copyToClipboard}
    >
      <Copy className="h-4 w-4" />
    </Button>
  );
}
