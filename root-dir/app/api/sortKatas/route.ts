import { NextRequest, NextResponse } from "next/server";
import { fetchKatasBySort } from "./model";

export async function POST(NextRequest: NextRequest) {
  const { sort_by, problems_solved } = await NextRequest.json();
  try {
    const response = await fetchKatasBySort(sort_by, problems_solved);
    return NextResponse.json({ response }, { status: 200 });
  } catch (error: any) {}
}
