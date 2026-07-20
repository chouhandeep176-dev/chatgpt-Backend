import chatModel from "../models/userChat.model.js";

export async function giveAllChats(req, res) {
  try {
    const allChats = await chatModel.find().sort({ createdAt: -1 });

    res.status(200).json({
      chats: allChats,
      success: true,
    });
  } catch (err) {
    console.log("error while getting all chats: ", err);

    res.status(500).json({
      success: false,
      message: "Failed to fetch chats",
      error: err,
    });
  }
}

export async function storeChatDB(req, res) {
  try {
    const chat = req.body;

    //? store in db -->
    await chatModel.create(chat);

    res.status(200).json({
      message: "Chat saved to DB",
      success: true,
    });
  } catch (err) {
    console.log("error while storing chat in DB: ", err);

    res.status(500).json({
      success: false,
      message: "Failed to store chat",
      error: err,
    });
  }
}

export async function deleteChatDB(req, res) {
  try {
    const chatId = req.body.chatId;
    const deletedChat = await chatModel.findByIdAndDelete(chatId);

    res.status(200).json({
      message: "Chat removed from the DB",
      success: true,
    });
  } catch (err) {
    console.log("error while deleting chat: ", err);

    res.status(500).json({
      success: false,
      message: "Failed to delete chat",
      error: err,
    });
  }
}
