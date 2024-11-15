import TokenUpdateForm from "@/components/admin/form";
import React from "react";
import { fetchData } from "@/lib/utils";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const data = await fetchData();

  return {
    title: data?.tokenName + " - Admin",
    description: data?.tokenDescription + " - Admin" || "",
    openGraph: {
      images: "/token.jpg",
    },
  };
}

export default function page() {
  return (
    <div>
      <TokenUpdateForm />
    </div>
  );
}
