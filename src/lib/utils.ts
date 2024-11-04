import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { TOKEN } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const fetchData = async (): Promise<TOKEN | null> => {
  try {
    const response = await fetch("http://localhost:3000//api/data");
    return response.json();
  } catch (error) {
    console.error("Erron fetching =>", error);
    return null;
  }
};
