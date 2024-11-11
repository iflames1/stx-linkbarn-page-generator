import { FORMFIELD } from "@/lib/types";
import React from "react";
import { useFieldArray } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { LinkIcon, Plus, Trash2 } from "lucide-react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { CardContent } from "@/components/ui/card";

export default function PartnersField({ form }: FORMFIELD) {
  const {
    fields: partnerFields,
    append: appendPartner,
    remove: removePartner,
  } = useFieldArray({
    control: form.control,
    name: "partners",
  });

  return (
    <CardContent>
      <div className="space-y-6 rounded-lg border border-border p-4 bg-muted/50">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Partners</h3>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => appendPartner({ name: "", logo: "", link: "" })}
            className="flex items-center gap-2"
          >
            <Plus className="h-4 w-4" />
            Add Partner
          </Button>
        </div>
        <div className="space-y-4">
          {partnerFields.map((field, index) => (
            <div
              key={field.id}
              className="p-4 border rounded-md bg-background space-y-4"
            >
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium">Partner {index + 1}</h4>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={() => removePartner(index)}
                  className="text-destructive"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
              <FormField
                control={form.control}
                name={`partners.${index}.name`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2">
                      Name
                    </FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Enter partner name" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name={`partners.${index}.logo`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2">
                      {/*<Image
                        src={`partners.${index}.logo`}
                        alt="`partners.${index}.name`"
                        width={16}
                        height={16}
                        className="h-4 w-4"
                      />*/}
                      <Image
                        src={`/token.jpg`}
                        alt="`partners.${index}.name`"
                        width={16}
                        height={16}
                        className="h-4 w-4"
                      />
                      Logo URL
                    </FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Enter logo URL" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name={`partners.${index}.link`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2">
                      <LinkIcon className="h-4 w-4" />
                      Website
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Enter partner website URL"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          ))}
          {partnerFields.length === 0 && (
            <div className="text-center py-8 text-muted-foreground border-2 border-dashed rounded-lg">
              No partners added. Click the &quot;Add Partner&quot; button to add
              your first partner.
            </div>
          )}
        </div>
      </div>
    </CardContent>
  );
}
