import model from "./model.js";
export const createRating = (rating) => {
  delete rating._id
  return model.create(rating);
}
export const findAllRatings = () => model.find();
export const findRatingById = (ratingId) => model.findById(ratingId);
export const findRatingsByUser = (userId) => model.find({ user: userId });
export const findRatingsByAlbum = (album) => model.find({ album: album });
export const findRatingsByArtist = (artist) => model.find({ artist: artist });
export const removeRating = (ratingId) => model.deleteOne({ _id: ratingId });
export const updateRating = (ratingId, rating) => model.updateOne({ _id: ratingId }, rating);
export const findRatingByUserAndAlbum = (userId, album) => model.findOne({ user: userId, album: album });

