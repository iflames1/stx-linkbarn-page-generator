import React from "react";
import { CardContent, CardDescription } from "@/components/ui/card";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { MessageCircle, Globe, MessageSquare } from "lucide-react";
import { RiTwitterXLine } from "react-icons/ri";
import { FORMFIELD, SOCIALFIELDPATH } from "@/lib/types";
import { Input } from "@/components/ui/input";

export default function SocialField({ form }: FORMFIELD) {
  const socialFields = [
    {
      name: "twitter" as const,
      path: "socials.twitter" as SOCIALFIELDPATH,
      icon: <RiTwitterXLine className="h-4 w-4" />,
      placeholder: "https://twitter.com/...",
      pattern: /^https?:\/\/(twitter\.com|x\.com)\/\w+$/,
      errorMessage:
        "Please enter a valid Twitter/X profile URL (e.g., https://twitter.com/username)",
    },
    {
      name: "telegram" as const,
      path: "socials.telegram" as SOCIALFIELDPATH,
      icon: <MessageCircle className="h-4 w-4" />,
      placeholder: "https://t.me/...",
      pattern: /^https?:\/\/t\.me\/\w+$/,
      errorMessage:
        "Please enter a valid Telegram URL (e.g., https://t.me/username)",
    },
    {
      name: "discord" as const,
      path: "socials.discord" as SOCIALFIELDPATH,
      icon: <MessageSquare className="h-4 w-4" />,
      placeholder: "https://discord.gg/...",
      pattern: /^https?:\/\/discord\.gg\/\w+$/,
      errorMessage:
        "Please enter a valid Discord invite URL (e.g., https://discord.gg/invite)",
    },
    {
      name: "website" as const,
      path: "socials.website" as SOCIALFIELDPATH,
      icon: <Globe className="h-4 w-4" />,
      placeholder: "https://...",
      pattern: /^https?:\/\/[a-zA-Z0-9-_.]+\.[a-zA-Z]{2,}(?:\/[^\s]*)?$/,
      errorMessage:
        "Please enter a valid website URL (e.g., https://example.com)",
    },
  ] as const;

  return (
    <CardContent>
      <div className="space-y-6 rounded-lg border border-border p-4 bg-muted/50">
        <CardDescription className="text-lg font-semibold">
          Socials
        </CardDescription>
        <div className="space-y-4">
          {socialFields.map((social) => (
            <FormField
              key={social.name}
              control={form.control}
              name={social.path}
              rules={{
                pattern: {
                  value: social.pattern,
                  message: social.errorMessage,
                },
                validate: (value: string) => {
                  if (value) {
                    try {
                      new URL(value);
                      return true;
                    } catch {
                      return "Please enter a valid URL";
                    }
                  }
                  return true;
                },
              }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2">
                    {social.icon}
                    {social.name.charAt(0).toUpperCase() + social.name.slice(1)}
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder={social.placeholder}
                      onChange={(e) => {
                        let value = e.target.value;
                        // Add https:// if not present and field is not empty
                        if (
                          value &&
                          !value.startsWith("http://") &&
                          !value.startsWith("https://")
                        ) {
                          value = `https://${value}`;
                        }
                        field.onChange(value);
                      }}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          ))}
        </div>
      </div>
    </CardContent>
  );
}
