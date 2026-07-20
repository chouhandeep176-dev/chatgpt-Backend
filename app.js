import express from "express";
import cors from "cors";
import chatRouter from "./routes/chat.router.js";

export const app = express();

app.use(
  cors({
    origin: "http://localhost:5173", // your frontend
    credentials: true,
  }),
);

// Application level middleware -->
app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>Hello from Backend!</h1>");
});

app.use("/user", chatRouter);
