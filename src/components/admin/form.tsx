"use client";
import React, { useEffect, useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { TOKEN } from "@/lib/types";
import { fetchData } from "@/lib/utils";
import RequiredField from "./required-field";
import DexField from "./dex-field";
import { Plus, Trash2, X } from "lucide-react";
import SocialField from "./social-field";

const TokenUpdateForm = () => {
  const [loading, setLoading] = useState(true);

  const form = useForm<TOKEN>({
    defaultValues: {
      tokenName: "",
      tokenTicker: "",
      tokenImage: "",
      tokenDescription: "",
      tokenCA: "",
      dexLink: "",
      roadmap: [],
      roadmapProgress: 0,
      features: [],
      tokenomics: {
        totalSupply: "",
        distribution: [],
        features: [],
      },
      socials: {
        twitter: "",
        telegram: "",
        discord: "",
        website: "",
      },
      partners: [],
      faq: [],
    },
  });

  // Setup field array for roadmap phases
  const {
    fields: roadmapFields,
    append: appendPhase,
    remove: removePhase,
  } = useFieldArray({
    control: form.control,
    name: "roadmap",
  });

  const {
    fields: featureFields,
    append: appendFeature,
    remove: removeFeature,
  } = useFieldArray({
    control: form.control,
    name: "features",
  });

  // Setup field arrays for tokenomics sections
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
      currentContent.filter((_, index) => index !== contentIndex)
    );
  };

  // Load initial data
  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchData();
        if (data) {
          // Reset form with fetched data
          form.reset(data);
        }
        console.log(data);
        setLoading(false);
      } catch (error) {
        console.error("Error loading data:", error);
        setLoading(false);
      }
    };

    loadData();
  }, [form]);

  // Function to add a new goal to a specific phase
  const addGoal = (phaseIndex: number) => {
    const currentItems = form.getValues(`roadmap.${phaseIndex}.items`) || [];
    form.setValue(`roadmap.${phaseIndex}.items`, [...currentItems, ""]);
  };

  // Function to remove a goal from a specific phase
  const removeGoal = (phaseIndex: number, goalIndex: number) => {
    const currentItems = form.getValues(`roadmap.${phaseIndex}.items`) || [];
    form.setValue(
      `roadmap.${phaseIndex}.items`,
      currentItems.filter((_, index) => index !== goalIndex)
    );
  };

  const onSubmit = async (data: TOKEN) => {
    console.log("Form submitted:", data);
    // Add your submission logic here
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8 px-4 max-w-3xl">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold">
                Token Information Form
              </CardTitle>
            </CardHeader>

            <RequiredField form={form} />

            <DexField form={form} />

            <CardContent>
              <div className="space-y-6 rounded-lg border border-border p-4 bg-muted/50">
                {" "}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <CardDescription className="text-lg font-semibold">
                      Roadmap
                    </CardDescription>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => appendPhase({ phase: "", items: [""] })}
                      className="flex items-center gap-2"
                    >
                      <Plus className="h-4 w-4" />
                      Add Phase
                    </Button>
                  </div>

                  <div className="space-y-6">
                    {roadmapFields.map((field, phaseIndex) => (
                      <div
                        key={field.id}
                        className="p-4 border rounded-md bg-background"
                      >
                        <div className="flex items-start justify-between mb-4">
                          <FormField
                            control={form.control}
                            name={`roadmap.${phaseIndex}.phase`}
                            render={({ field }) => (
                              <FormItem className="flex-1 mr-4">
                                <FormLabel>Phase Title</FormLabel>
                                <FormControl>
                                  <Input
                                    {...field}
                                    placeholder="Enter phase title"
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
                            onClick={() => removePhase(phaseIndex)}
                            className="text-destructive"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>

                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <FormLabel>Phase Goals</FormLabel>
                            <Button
                              type="button"
                              variant="outline"
                              size="sm"
                              onClick={() => addGoal(phaseIndex)}
                              className="flex items-center gap-2"
                            >
                              <Plus className="h-4 w-4" />
                              Add Goal
                            </Button>
                          </div>

                          {(
                            form.watch(`roadmap.${phaseIndex}.items`) || []
                          ).map((_, goalIndex) => (
                            <div
                              key={goalIndex}
                              className="flex items-center gap-2"
                            >
                              <FormField
                                control={form.control}
                                name={`roadmap.${phaseIndex}.items.${goalIndex}`}
                                render={({ field }) => (
                                  <FormItem className="flex-1">
                                    <FormControl>
                                      <Input
                                        {...field}
                                        placeholder="Enter goal"
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
                                  removeGoal(phaseIndex, goalIndex)
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
                    {roadmapFields.length === 0 && (
                      <div className="text-center py-8 text-muted-foreground border-2 border-dashed rounded-lg text-wrap">
                        No Roadmap added. Click the &quot;Add Phase&quot; button
                        to add your first roadmap.
                      </div>
                    )}
                  </div>

                  {/* Roadmap Progress */}
                  <FormField
                    control={form.control}
                    name="roadmapProgress"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Roadmap Progress</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            {...field}
                            min={1}
                            max={roadmapFields.length || 1}
                            onChange={(e) => {
                              const value = parseInt(e.target.value);
                              if (
                                value >= 1 &&
                                value <= (roadmapFields.length || 1)
                              ) {
                                field.onChange(value);
                              }
                            }}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </CardContent>

            <CardContent>
              <div className="space-y-6 rounded-lg border border-border p-4 bg-muted/50">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">Features</h3>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      appendFeature({ title: "", description: "" })
                    }
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
                              <Input
                                {...field}
                                placeholder="Enter feature title"
                              />
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
                      No features added. Click the &quot;Add Feature&quot;
                      button to add your first feature.
                    </div>
                  )}
                </div>
              </div>
            </CardContent>

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
                    <h3 className="text-lg font-semibold">
                      Token Distribution
                    </h3>
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
                          <h4 className="font-medium">
                            Distribution {index + 1}
                          </h4>
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
                    <h3 className="text-lg font-semibold">
                      Tokenomics Features
                    </h3>
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
                          <h4 className="font-medium">
                            Feature {featureIndex + 1}
                          </h4>
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            onClick={() =>
                              removeTokenomicsFeature(featureIndex)
                            }
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
                                <Input
                                  {...field}
                                  placeholder="Enter feature title"
                                />
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
                            form.watch(
                              `tokenomics.features.${featureIndex}.content`
                            ) || []
                          ).map((_, contentIndex) => (
                            <div
                              key={contentIndex}
                              className="flex items-center gap-2"
                            >
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

            <SocialField form={form} />
          </Card>

          {/* Optional Fields - commented out for now */}
          {/*<div className="space-y-4">
                  <h3 className="text-lg font-semibold">
                    Optional Information
                  </h3>
                  ... rest of the fields
                </div>*/}

          <div className="flex justify-end">
            <Button type="submit" size="lg" className="min-w-[150px]">
              Save Changes
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default TokenUpdateForm;
