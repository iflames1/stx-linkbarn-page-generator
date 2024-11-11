import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CardContent, CardDescription } from "@/components/ui/card";
import { Plus, Trash2, X } from "lucide-react";
import { FORMFIELD } from "@/lib/types";
import { useFieldArray } from "react-hook-form";

export default function RoadmapFeild({ form }: FORMFIELD) {
  const {
    fields: roadmapFields,
    append: appendPhase,
    remove: removePhase,
  } = useFieldArray({
    control: form.control,
    name: "roadmap",
  });

  const addGoal = (phaseIndex: number) => {
    const currentItems = form.getValues(`roadmap.${phaseIndex}.items`) || [];
    form.setValue(`roadmap.${phaseIndex}.items`, [...currentItems, ""]);
  };

  const removeGoal = (phaseIndex: number, goalIndex: number) => {
    const currentItems = form.getValues(`roadmap.${phaseIndex}.items`) || [];
    form.setValue(
      `roadmap.${phaseIndex}.items`,
      currentItems.filter((_: string, index: number) => index !== goalIndex)
    );
  };

  return (
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
                          <Input {...field} placeholder="Enter phase title" />
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

                  {(form.watch(`roadmap.${phaseIndex}.items`) || []).map(
                    (_: string, goalIndex: number) => (
                      <div key={goalIndex} className="flex items-center gap-2">
                        <FormField
                          control={form.control}
                          name={`roadmap.${phaseIndex}.items.${goalIndex}`}
                          render={({ field }) => (
                            <FormItem className="flex-1">
                              <FormControl>
                                <Input {...field} placeholder="Enter goal" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          onClick={() => removeGoal(phaseIndex, goalIndex)}
                          className="text-destructive"
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    )
                  )}
                </div>
              </div>
            ))}
            {roadmapFields.length === 0 && (
              <div className="text-center py-8 text-muted-foreground border-2 border-dashed rounded-lg text-wrap">
                No Roadmap added. Click the &quot;Add Phase&quot; button to add
                your first roadmap.
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
                      if (value >= 1 && value <= (roadmapFields.length || 1)) {
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
  );
}
