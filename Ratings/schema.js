import mongoose from "mongoose";
const ratingSchema = new mongoose.Schema({
    rating: { type: Number, required: true },
    comment: { type: String, required : true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
    album: { type: String, required: true },
    artist: { type: String, required: true },
    date: { type: Date, default: Date},
    img:  { type: String, required: true },
  },
  { collection: "ratings" }
);
export default ratingSchema;