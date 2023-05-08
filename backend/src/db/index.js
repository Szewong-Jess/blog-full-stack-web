import mongoose from "mongoose";

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("db is connected...");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

export default dbConnect;
