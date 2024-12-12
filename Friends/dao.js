import model from "./model.js";
export const createFriend = (friend) => {
  delete friend._id
  return model.create(friend);
}
export const removeFriend = (friendId) => model.deleteOne({ _id: friendId });
export const findAllFriends = () => model.find();
export const findFriendById = (friendId) => model.findById(friendId);
export const findFriendsByUser = (userId) => model.find({ user: userId });