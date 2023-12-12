import fs from "fs";
import { NextResponse } from "next/server";
import Project from "@/models/project";
import connectDB from "@/databse/connectDB";
import sharp from "sharp";

const checkFileExist = (imagePath) => {
  return fs.existsSync(process.cwd() + "/public/uploads/" + imagePath);
};

const storeFile = async (projectFile, imagePath) => {
  //convert buffer
  const buffer = await projectFile.arrayBuffer();
  const file = Buffer.from(buffer);

  //write file
  fs.writeFileSync(process.cwd() + "/public/uploads/" + imagePath, file);
};

const limitSize = (projectFile) => {
  // limit 1MB
  const size = projectFile.size / 1024 / 1024;
  return size < 1;
};

const checkKey = (key) => {
  console.log(key);
  console.log(process.env.KEY);
  return key === process.env.KEY;
};

export async function POST(req) {
  const formData = await req.formData();
  const projectFile = formData.get("projectFile");
  const projectLink = formData.get("projectLink");
  const projectName = formData.get("projectName");
  const key = formData.get("key");

  await connectDB();

  const imagePath = projectFile.name;

  if (!projectFile || !projectLink || !projectName || !key) {
    return NextResponse.json(
      { message: "Missing field" },
      {
        status: 400,
      }
    );
  }

  // check key
  if (!checkKey(key)) {
    return NextResponse.json(
      { message: "Key is not correct" },
      {
        status: 400,
      }
    );
  }

  if (!limitSize(projectFile))
    return NextResponse.json(
      { message: "File size is smaller than 1MB" },
      {
        status: 400,
      }
    );

  // check file exist and store file
  if (!checkFileExist(imagePath)) await storeFile(projectFile, imagePath);

  // save project in db
  const project = new Project({
    name: projectName,
    link: projectLink,
    image: imagePath,
  });

  await project.save();

  return NextResponse.json(
    { message: "success" },
    {
      status: 200,
    }
  );
}
