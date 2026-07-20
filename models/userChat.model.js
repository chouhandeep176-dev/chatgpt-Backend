import { Schema, model } from "mongoose";

const chatSchema = new Schema(
  {
    query: { type: String, required: true },
    response: { type: String, required: true },
    date: { type: String, required: true },
  },
  { timestamps: true },
);

const chatModel = new model("userChat", chatSchema);

export default chatModel;
