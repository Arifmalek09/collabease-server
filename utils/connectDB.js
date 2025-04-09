import mongoose from "mongoose";

const dbConnection = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://malekasif201:x1goMfA5h5PCexqS@collabease.gpovthk.mongodb.net/?retryWrites=true&w=majority&appName=CollabEase",
    );

    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("Database connection failed:", error.message);
    throw new Error("Database connection failed");
  }
};

export default dbConnection;
