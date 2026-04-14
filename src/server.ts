import authRoutes from "./routes/auth.routes";
import mongoose from "mongoose";
import dotenv from "dotenv";
import app from "./app";
dotenv.config();

app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5001;
const MONGO_URI =
  process.env.MONGO_URI ||
  "mongodb+srv://admin_said:jPI1fGNZUADKKVgW@sporton-cluster.mqwspjg.mongodb.net/sporton?appName=Sporton-Cluster";

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => console.error("error connecting to MongoDB:", error));
