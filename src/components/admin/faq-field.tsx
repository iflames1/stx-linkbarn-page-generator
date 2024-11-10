import { FORMFIELD } from "@/lib/types";
import React from "react";
import { useFieldArray } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Plus, Trash2 } from "lucide-react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CardContent } from "@/components/ui/card";

export default function FaqField({ form }: FORMFIELD) {
  const {
    fields: faqFields,
    append: appendFAQ,
    remove: removeFAQ,
  } = useFieldArray({
    control: form.control,
    name: "faq",
  });
  return (
    <CardContent>
      <div className="space-y-6 rounded-lg border border-border p-4 bg-muted/50">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">FAQ</h3>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => appendFAQ({ question: "", answer: "" })}
            className="flex items-center gap-2"
          >
            <Plus className="h-4 w-4" />
            Add FAQ
          </Button>
        </div>
        <div className="space-y-4">
          {faqFields.map((field, index) => (
            <div
              key={field.id}
              className="p-4 border rounded-md bg-background space-y-4"
            >
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium">Question {index + 1}</h4>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={() => removeFAQ(index)}
                  className="text-destructive"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
              <FormField
                control={form.control}
                name={`faq.${index}.question`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Question</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Enter FAQ question" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name={`faq.${index}.answer`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Answer</FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        placeholder="Enter FAQ answer"
                        className="min-h-[100px]"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          ))}
          {faqFields.length === 0 && (
            <div className="text-center py-8 text-muted-foreground border-2 border-dashed rounded-lg">
              No FAQs added. Click the &quot;Add FAQ&quot; button to add your
              first question.
            </div>
          )}
        </div>
      </div>
    </CardContent>
  );
}
