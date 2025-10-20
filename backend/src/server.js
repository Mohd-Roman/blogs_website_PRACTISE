import express, { json, urlencoded } from "express";
import dotenv from "dotenv";
import connectdb from "./Database/db.js";
import userRoute from "./routes/user.routes.js";
import cookieParser from "cookie-parser";
import cors from "cors";

dotenv.config();

const app = express();

// ✅ Middleware
app.use(cookieParser());
app.use(json());
app.use(urlencoded({ extended: true }));

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true, 
  })
);
app.use("/api/v1/user", userRoute);


app.get("/", (req, res) => {
  console.log("App is running");
  res.send("Server is live");
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  connectdb();
  console.log(`✅ Server started on PORT ${PORT}`);
});
