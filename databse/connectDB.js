import mongoose from "mongoose";

export default function connectDB() {
  try {
    if (mongoose.connections[0].readyState) {
      console.log("Already connected.");
      return;
    }

    mongoose.connect(process.env.MONGODB_URI);

    mongoose.connection.on("connected", () => {
      console.log("Connected to MongoDB.");
    });

    mongoose.connection.on("error", (err) => {
      console.log("Error connecting to MongoDB.", err);
    });
  } catch (error) {
    console.log(error);
  }
}
