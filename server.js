import { app } from "./app.js";
import dotenv from "dotenv";

dotenv.config();

//? connect to DB -->
import connect_DB from "./config/db.js";
connect_DB();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`App running as http://localhost:${PORT}`);
});