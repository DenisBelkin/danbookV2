const express = require('express');
const cors = require('cors');
const app = express();
const port = 3010;
const bodyParser = require('body-parser');
//
// const endPoints = require('../src/common/endPointsList');
// //user data
// const {saveNewUser} = require('./requests/saveNewUser');
// const {checkingAuthOfUser} = require('./requests/checkingAuthOfUser');
// const {loadUserInfo} = require('./requests/loadUserInfo');
// const {loadAnotherUserInfo} = require('./requests/loadAnotherUserInfo');
// const {updateUserInfo} = require('./requests/updateUserInfo');
// const {loadUsersForSearch} = require('./requests/loadUsersForSearch');
// const {loadUserEmail} = require('./requests/loadUserEmail');
// const {generatePassword} = require('./requests/generatePassword');
// //friends
// const {checkFriendsList} = require('./requests/friends/checkFriendsList');
// const {addFriend} = require('./requests/friends/addFriend');
// const {removeFriend} = require('./requests/friends/removeFriend');
// const {loadFriendsData} = require('./requests/friends/loadFriendsData');
//
//
//
app.use(cors());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));
//
// app.post(endPoints.saveNewUser,saveNewUser);
//
// app.post(endPoints.checkingAuthOfUser,checkingAuthOfUser);
//
// app.post(endPoints.loadUserInfo, loadUserInfo);
//
// app.post(endPoints.updateUserInfo, updateUserInfo);
//
// app.post(endPoints.loadUsersForSearch, loadUsersForSearch);
//
// app.post(endPoints.loadAnotherUserPage, loadAnotherUserInfo);
//
// app.post(endPoints.checkFriendsList, checkFriendsList);
//
// app.post(endPoints.addFriend, addFriend);
//
// app.post(endPoints.removeFriend, removeFriend);
//
// app.post(endPoints.loadFriendsData, loadFriendsData);
//
// app.post(endPoints.loadUserEmail, loadUserEmail);
//
// app.post(endPoints.generatePassword, generatePassword);
//
app.listen(port);
