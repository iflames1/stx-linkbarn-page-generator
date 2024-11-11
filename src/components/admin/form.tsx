"use client";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { TOKEN } from "@/lib/types";
import { fetchData } from "@/lib/utils";
import RequiredField from "./required-field";
import DexField from "./dex-field";
import SocialField from "./social-field";
import PartnersField from "./partners-field";
import FaqField from "./faq-field";
import RoadmapFeild from "./roadmap-feild";
import FeaturesField from "./features-field";
import TokenomicsField from "./tokenomics-field";
import FormLayout from "./form-layout";

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
    <FormLayout>
      <div className="container mx-auto py-8 px-4 max-w-3xl">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-bold">
                  Token Information Form
                </CardTitle>
              </CardHeader>

              <div id="required-section">
                <RequiredField form={form} />
              </div>

              <div id="dex-section">
                <DexField form={form} />
              </div>

              <div id="roadmap-section">
                <RoadmapFeild form={form} />
              </div>

              <div id="features-section">
                <FeaturesField form={form} />
              </div>

              <div id="tokenomics-section">
                <TokenomicsField form={form} />
              </div>

              <div id="socials-section">
                <SocialField form={form} />
              </div>

              <div id="partners-section">
                <PartnersField form={form} />
              </div>

              <div id="faq-section">
                <FaqField form={form} />
              </div>
            </Card>
            <div className="flex justify-end">
              <Button type="submit" size="lg" className="min-w-[150px]">
                Save Changes
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </FormLayout>
  );
};

export default TokenUpdateForm;
