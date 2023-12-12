import connectDB from "@/databse/connectDB";
import Project from "@/models/project";

import { NextResponse } from "next/server";

connectDB();

export async function GET(req) {
  const projects = await Project.find({});
  return NextResponse.json(projects, {
    status: 200,
  });
}
