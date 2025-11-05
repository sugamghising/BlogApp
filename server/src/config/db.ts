import mongoose from "mongoose";

export const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI as string);
        console.log("✅ MongoDB Connected");
    } catch (error) {
        console.log("❌ Failed to connect to MONGODB", error);
        process.exit(1);
    }
}