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
import { Plus, Trash2, X } from "lucide-react";
import { FORMFIELD } from "@/lib/types";
import { useFieldArray } from "react-hook-form";
import { Textarea } from "../ui/textarea";

export default function TokenomicsField({ form }: FORMFIELD) {
  const {
    fields: distributionFields,
    append: appendDistribution,
    remove: removeDistribution,
  } = useFieldArray({
    control: form.control,
    name: "tokenomics.distribution",
  });

  const {
    fields: tokenomicsFeaturesFields,
    append: appendTokenomicsFeature,
    remove: removeTokenomicsFeature,
  } = useFieldArray({
    control: form.control,
    name: "tokenomics.features",
  });

  // Function to add a new content item to a tokenomics feature
  const addContentItem = (featureIndex: number) => {
    const currentContent =
      form.getValues(`tokenomics.features.${featureIndex}.content`) || [];
    form.setValue(`tokenomics.features.${featureIndex}.content`, [
      ...currentContent,
      "",
    ]);
  };

  // Function to remove a content item from a tokenomics feature
  const removeContentItem = (featureIndex: number, contentIndex: number) => {
    const currentContent =
      form.getValues(`tokenomics.features.${featureIndex}.content`) || [];
    form.setValue(
      `tokenomics.features.${featureIndex}.content`,
      currentContent.filter(
        (_: string, index: number) => index !== contentIndex
      )
    );
  };

  return (
    <CardContent>
      <div className="space-y-6 rounded-lg border border-border p-4 bg-muted/50">
        <FormField
          control={form.control}
          name="tokenomics.totalSupply"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Total Supply</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Enter total supply" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Distribution Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Token Distribution</h3>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() =>
                appendDistribution({
                  title: "",
                  percentage: 0,
                  description: "",
                })
              }
              className="flex items-center gap-2"
            >
              <Plus className="h-4 w-4" />
              Add Distribution
            </Button>
          </div>

          <div className="space-y-4">
            {distributionFields.map((field, index) => (
              <div
                key={field.id}
                className="p-4 border rounded-md bg-background space-y-4"
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium">Distribution {index + 1}</h4>
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={() => removeDistribution(index)}
                    className="text-destructive"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name={`tokenomics.distribution.${index}.title`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Title</FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="E.g., Team" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name={`tokenomics.distribution.${index}.percentage`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Percentage</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            {...field}
                            min="0"
                            max="100"
                            step="0.1"
                            onChange={(e) =>
                              field.onChange(parseFloat(e.target.value))
                            }
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name={`tokenomics.distribution.${index}.description`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          placeholder="Enter distribution details"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Tokenomics Features Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Tokenomics Features</h3>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() =>
                appendTokenomicsFeature({ title: "", content: [""] })
              }
              className="flex items-center gap-2"
            >
              <Plus className="h-4 w-4" />
              Add Feature
            </Button>
          </div>

          <div className="space-y-4">
            {tokenomicsFeaturesFields.map((field, featureIndex) => (
              <div
                key={field.id}
                className="p-4 border rounded-md bg-background space-y-4"
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium">Feature {featureIndex + 1}</h4>
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={() => removeTokenomicsFeature(featureIndex)}
                    className="text-destructive"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>

                <FormField
                  control={form.control}
                  name={`tokenomics.features.${featureIndex}.title`}
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

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <FormLabel>Content Items</FormLabel>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => addContentItem(featureIndex)}
                      className="flex items-center gap-2"
                    >
                      <Plus className="h-4 w-4" />
                      Add Content
                    </Button>
                  </div>

                  {(
                    form.watch(`tokenomics.features.${featureIndex}.content`) ||
                    []
                  ).map((_: string, contentIndex: number) => (
                    <div key={contentIndex} className="flex items-center gap-2">
                      <FormField
                        control={form.control}
                        name={`tokenomics.features.${featureIndex}.content.${contentIndex}`}
                        render={({ field }) => (
                          <FormItem className="flex-1">
                            <FormControl>
                              <Input
                                {...field}
                                placeholder="Enter content item"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        onClick={() =>
                          removeContentItem(featureIndex, contentIndex)
                        }
                        className="text-destructive"
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </CardContent>
  );
}
