import React from "react";
import {
  //Card,
  //CardHeader,
  //CardTitle,
  CardContent,
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
import { UseFormReturn } from "react-hook-form";
import { TOKEN } from "@/lib/types";

interface DEXFIELD {
  form: UseFormReturn<TOKEN>;
}
export default function DexField({ form }: DEXFIELD) {
  return (
    <CardContent>
      <div className="space-y-6 rounded-lg border border-border p-4 bg-muted/50">
        <FormField
          control={form.control}
          name="tokenCA"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Contract Address</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="dexLink"
          render={({ field }) => (
            <FormItem>
              <FormLabel>DEX Link</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </CardContent>
  );
}
