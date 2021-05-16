import { User } from 'models/User'

async function getAllUsers() {}

/*async*/ function getUser(userID: number): User {
  return new User(userID, 'Jean-Jacques')
}
function getUserFriends(userID: number):User[]{
  return [new User(1, 'Ami 1'), new User(2, 'Ami 2'),new User(3, 'Ami 3')]
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
  updateUser,
  deleteUser,
  authUser,
  addFriend,
  acceptFriendRequest,
}
