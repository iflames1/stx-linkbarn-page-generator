import React from "react";
import {
  //Card,
  //CardHeader,
  //CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import {
  //Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { UseFormReturn } from "react-hook-form";
import { TOKEN } from "@/lib/types";

interface REQUIREDFIELD {
  form: UseFormReturn<TOKEN>;
}
export default function RequiredField({ form }: REQUIREDFIELD) {
  return (
    <CardContent className="space-y-6">
      {/* Required Fields Group */}
      <div className="space-y-6 rounded-lg border border-border p-4 bg-muted/50">
        <div className="flex items-center">
          <CardDescription>Required Fields</CardDescription>
          <span className="ml-2 text-sm text-destructive">*</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="tokenName"
            rules={{ required: "Token name is required" }}
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Token Name
                  <span className="text-destructive ml-1">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Enter token name"
                    className="bg-background"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="tokenTicker"
            rules={{ required: "Token ticker is required" }}
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Token Ticker
                  <span className="text-destructive ml-1">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Enter token ticker"
                    className="bg-background"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="tokenImage"
          rules={{ required: "Token image URL is required" }}
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Token Image URL
                <span className="text-destructive ml-1">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="Enter token image URL"
                  className="bg-background"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="tokenDescription"
          rules={{ required: "Token description is required" }}
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Token Description
                <span className="text-destructive ml-1">*</span>
              </FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  placeholder="Enter token description"
                  className="bg-background min-h-[100px]"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </CardContent>
  );
}
