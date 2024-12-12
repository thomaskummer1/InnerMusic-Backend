import mongoose from "mongoose";
const reviewSchema = new mongoose.Schema({
    albumName: { type: String, required: true, unique: true },
    review: { type: String, required: true },
  },
  { collection: "reviews" }
);
export default reviewSchema;