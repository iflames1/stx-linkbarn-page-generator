"use client";
import { Button } from "@/components/ui/button";
import { Check, Copy } from "lucide-react";
import { useState } from "react";

export default function CopyCA({ tokenCA }: { tokenCA?: string }) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(tokenCA ? tokenCA : "");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <div className="flex-1 overflow-hidden">
        <p className="text-sm text-purple-200 mb-1">Token Contract Address:</p>
        <p
          className="text-xs text-purple-300 truncate font-mono cursor-pointer"
          onClick={copyToClipboard}
        >
          {tokenCA ?? ""}
        </p>
      </div>
      <Button
        variant="ghost"
        size="sm"
        disabled={!tokenCA}
        className="ml-2 hover:bg-purple-800/50"
        onClick={copyToClipboard}
      >
        {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
      </Button>
    </>
  );
}
