import mongoose from "mongoose";

export const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI as string);
    console.log("Mongodb Database Connected Succesfully");
  } catch (error) {
    console.log("Mongodb Database Connection Failed");
  }
};
