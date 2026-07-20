import express, { json } from "express";
const chatRouter = express.Router();

import { giveAllChats, storeChatDB, deleteChatDB } from "../controllers/userChats.js";

chatRouter.get("/allChats", giveAllChats);

chatRouter.post("/chat", storeChatDB);

chatRouter.delete("/chat", deleteChatDB);

export default chatRouter;