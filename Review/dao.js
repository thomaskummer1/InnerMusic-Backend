import model from "./model.js";
export const createReview = (review) => {
  delete review._id;
  return model.create(review);
};
export const findAllReviews = () => model.find();
export const findReviewById = (reviewId) => model.findById(reviewId);
export const findReviewByAlbum = (album) => model.find({ albumName: album });