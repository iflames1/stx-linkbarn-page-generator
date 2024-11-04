import axios from "axios";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const fetchData = async (data: string) => {
  try {
    const response = await axios.get("data.json");
    return response.data;
  } catch (error) {
    console.error("Erron fetching", data, "=>", error);
    return null;
  }
};
