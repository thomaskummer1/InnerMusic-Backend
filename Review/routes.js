import * as dao from './dao.js';

export default function ReviewRoutes(app) {
    const createReview = async (req, res) => {
        const review = await dao.createReview(req.body);
        res.json(review);
    };
    app.post('/api/reviews', createReview);
    const deleteReview = async (req, res) => {

        const status = await dao.deleteReview(req.params.review);
        res.json(status);
    };
    app.delete('/api/reviews/:review', deleteReview);
    const findReviewById = async (req, res) => {
        const review = await dao.findReviewById(req.params.reviewId);
        res.json(review);
    };
    app.get('/api/reviews/:reviewId', findReviewById);
    const findAllReviews = async (req, res) => {
        const reviews = await dao.findAllReviews();
        res.json(reviews);
    };
    app.get('/api/reviews', findAllReviews);
    const findReviewByAlbum = async (req, res) => {
        const reviews = await dao.findReviewByAlbum(req.params.album);
        res.json(reviews[0]);
    };
    app.get('/api/reviews/album/:album', findReviewByAlbum);
    const updateReview = async (req, res) => {
        const review = await dao.updateReview(req.params.albumName, req.body);
        res.json(review);
    };
    app.put('/api/reviews/:albumName', updateReview);
}