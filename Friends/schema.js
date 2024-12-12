import mongoose from "mongoose";
const friendSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
    friend: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
  },
  { collection: "friends" }
);
export default friendSchema;