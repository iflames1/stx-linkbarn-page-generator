import { promises as fs } from "fs";
import { NextResponse } from "next/server";
import path from "path";

export async function GET() {
  const filePath = path.join(process.cwd(), "/public/data.json");
  const fileContent = await fs.readFile(filePath, "utf-8");
  const jsonData = JSON.parse(fileContent);

  return NextResponse.json(jsonData);
}
