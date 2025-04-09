import mongoose from "mongoose";

const dbConnection = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://hassanqureshi9496:B4J13b6nakXqnhcQ@cluster0.vawgphs.mongodb.net/TaskDB?retryWrites=true&w=majority&appName=Cluster0",
    );

    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("Database connection failed:", error.message);
    throw new Error("Database connection failed");
  }
};

export default dbConnection;
