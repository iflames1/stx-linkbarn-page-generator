import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { TOKEN } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const fetchData = async (): Promise<TOKEN | null> => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  try {
    if (!apiUrl) {
      throw new Error("API URL is not defined");
    }
    const response = await fetch(apiUrl);
    return response.json();
  } catch (error) {
    console.error("Erron fetching =>", error);
    return null;
  }
};
