const mongoose = require("mongoose");
const dns = require("dns");

dns.setServers(["8.8.8.8", "8.8.4.4"]);

const DEFAULT_MONGO_URI = "mongodb://127.0.0.1:27017/morabe";

const connectDB = async () => {
  const mongoUri = process.env.MONGO_URI || DEFAULT_MONGO_URI;
  try {
    const conn = await mongoose.connect(mongoUri);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
    if (!process.env.MONGO_URI) {
      console.log(`Using fallback local MongoDB URI: ${DEFAULT_MONGO_URI}`);
    }
  } catch (error) {
    console.error(`MongoDB connection failed for URI: ${mongoUri}`);
    console.error(`Error: ${error.message}`);

    if (process.env.MONGO_URI) {
      console.log("Attempting fallback to local MongoDB...");
      try {
        const fallbackConn = await mongoose.connect(DEFAULT_MONGO_URI);
        console.log(`MongoDB Connected: ${fallbackConn.connection.host}`);
        console.log(`Using fallback local MongoDB URI: ${DEFAULT_MONGO_URI}`);
        return;
      } catch (fallbackError) {
        console.error(
          `Local MongoDB fallback failed: ${fallbackError.message}`,
        );
      }
    }

    if (process.env.MONGO_URI) {
      console.error(
        "If you are using MongoDB Atlas, verify your IP whitelist, cluster status, and that DNS resolution for mongodb.net works from this machine.",
      );
    }
    process.exit(1);
  }
};

module.exports = connectDB;
