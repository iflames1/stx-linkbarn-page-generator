import React from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import { Plus, Trash2 } from "lucide-react";
import { FORMFIELD } from "@/lib/types";
import { useFieldArray } from "react-hook-form";
import { Textarea } from "../ui/textarea";

export default function FeaturesField({ form }: FORMFIELD) {
  const {
    fields: featureFields,
    append: appendFeature,
    remove: removeFeature,
  } = useFieldArray({
    control: form.control,
    name: "features",
  });

  return (
    <CardContent>
      <div className="space-y-6 rounded-lg border border-border p-4 bg-muted/50">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Features</h3>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => appendFeature({ title: "", description: "" })}
            className="flex items-center gap-2"
          >
            <Plus className="h-4 w-4" />
            Add Feature
          </Button>
        </div>

        <div className="space-y-4">
          {featureFields.map((field, index) => (
            <div
              key={field.id}
              className="p-4 border rounded-md bg-background space-y-4"
            >
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium">Feature {index + 1}</h4>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={() => removeFeature(index)}
                  className="text-destructive"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>

              <FormField
                control={form.control}
                name={`features.${index}.title`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Enter feature title" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name={`features.${index}.description`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        placeholder="Enter feature description"
                        className="min-h-[100px]"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          ))}

          {featureFields.length === 0 && (
            <div className="text-center py-8 text-muted-foreground border-2 border-dashed rounded-lg">
              No features added. Click the &quot;Add Feature&quot; button to add
              your first feature.
            </div>
          )}
        </div>
      </div>
    </CardContent>
  );
}
