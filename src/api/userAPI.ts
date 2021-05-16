import { Post } from 'models/Post'
import { User } from 'models/User'

async function getAllUsers() {}

/*async*/ function getUser(userID: number): User {
  return new User(userID, 'Jean-Jacques')
}
function getUserFriends(userID: number):User[]{
  return [new User(1, 'Ami 1'), new User(2, 'Ami 2'),new User(3, 'Ami 3')]
}

function getUserPosts(userId: number): Post[]{
  return [new Post(1, 'Post 1', 'Hello everybody, my hollydays are super cool'), new Post(2, 'Post 2', 'Hello everybody, my hollydays are super cool')]
}
async function updateUser(userID: Number, userInformation: Object) {}

async function deleteUser(userID: Number) {}

async function authUser(username: String, password: String) {}

async function addFriend(userID: Number, friendID: Number) {}

async function acceptFriendRequest(userID: Number, friendID: Number) {}

export {
  getAllUsers,
  getUser,
  getUserFriends,
  getUserPosts,
  updateUser,
  deleteUser,
  authUser,
  addFriend,
  acceptFriendRequest,
}
