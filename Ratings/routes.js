import * as dao from './dao.js';

export default function RatingRoutes(app) {
    const createRating = async (req, res) => {
        const rating = await dao.createRating(req.body);
        res.json(rating);
    };
    app.post('/api/ratings', createRating);
    const findAllRatings = async (req, res) => {
        const ratings = await dao.findAllRatings();
        res.json(ratings);
    };
    app.get('/api/ratings', findAllRatings);
    const findRatingById = async (req, res) => {
        let rating = await dao.findRatingById(req.params.ratingId);
        res.json(rating);
    };
    app.get('/api/ratings/:ratingId', findRatingById);
    const findRatingsByUser = async (req, res) => {
        const ratings = await dao.findRatingsByUser(req.params.userId);
        res.json(ratings);
    };
    app.get('/api/ratings/user/:userId', findRatingsByUser);
    const findRatingsByAlbum = async (req, res) => {
        const ratings = await dao.findRatingsByAlbum(req.params.album);
        res.json(ratings);
    };
    app.get('/api/ratings/album/:album', findRatingsByAlbum);
    const findRatingsByArtist = async (req, res) => {
        const ratings = await dao.findRatingsByArtist(req.params.artist);
        res.json(ratings);
    };
    app.get('/api/ratings/artist/:artist', findRatingsByArtist);
    const removeRating = async (req, res) => {
        await dao.removeRating(req.params.ratingId);
        res.json({ message: 'Rating removed' });
    };
    app.delete('/api/ratings/:ratingId', removeRating);
    const updateRating = async (req, res) => {
        await dao.updateRating(req.params.ratingId, req.body);
        res.json({ message: 'Rating updated' });
    };
    app.put('/api/ratings/:ratingId', updateRating);
    const findRatingByUserAndAlbum = async (req, res) => {
        const rating = await dao.findRatingByUserAndAlbum(req.params.userId, req.params.album);
        res.json(rating);
    };
    app.get('/api/ratings/user/:userId/album/:album', findRatingByUserAndAlbum);
}