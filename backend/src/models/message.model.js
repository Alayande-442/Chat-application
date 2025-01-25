import mongoose from "mongoose";

// Correctly define the schema
const messageSchema = new mongoose.Schema(
  {
    senderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    receiverId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    text: {
      type: String, // Use `String` (uppercase) instead of `string`
    },
    image: {
      type: String, // Use `String` (uppercase) instead of `string`
    },
  },
  { timestamps: true }
);

// Correctly define and export the model
const Message = mongoose.model("Message", messageSchema);
export default Message;
