import * as dao from './dao.js';

export default function FriendsRoutes(app) {
    const createFriend = async (req, res) => {
        const friend = await dao.createFriend(req.body);
        res.json(friend);
    };
    app.post('/api/friends', createFriend);
    const findAllFriends = async (req, res) => {
        const friends = await dao.findAllFriends();
        res.json(friends);
    };
    app.get('/api/friends', findAllFriends);
    const findFriendById = async (req, res) => {
        let friend = await dao.findFriendById(req.params.friendId);
        res.json(friend);
    };
    app.get('/api/friends/:friendId', findFriendById);
    const findFriendsByUser = async (req, res) => {
        const friends = await dao.findFriendsByUser(req.params.userId);
        res.json(friends);
    };
    app.get('/api/friends/user/:userId', findFriendsByUser);
    const removeFriend = async (req, res) => {
        await dao.removeFriend(req.params.friendId);
        res.json({ message: 'Friend removed' });
    };
    app.delete('/api/friends/:friendId', removeFriend);
}