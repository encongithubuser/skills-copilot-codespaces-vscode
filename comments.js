//create a web server
var express = require('express');
var router = express.Router();

//import the model
const Comment = require('../models/comments');

//import the middleware
const { isLoggedIn } = require('../middleware');

//import the controller
const commentsCtrl = require('../controllers/comments');

//create a new comment
router.post('/campgrounds/:id/comments', isLoggedIn, commentsCtrl.createComment);

//delete the comment
router.delete('/campgrounds/:id/comments/:commentId', isLoggedIn, commentsCtrl.deleteComment);

//export the router
module.exports = router;
