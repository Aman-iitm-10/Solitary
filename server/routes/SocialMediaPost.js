const express = require('express');
const router = express.Router();
const { auth } = require('../middleware/auth');

const {
    createPost,
    deletePost,
    updatePost,
    getAllPosts,
} = require('../controllers/SocialMediaPost');

router.post('/createEvent', auth, createPost);
router.post('/updateEvent', auth, updatePost);

router.get('/events', getAllPosts);

router.delete('/deleteEvent', auth, deletePost);

module.exports = router;
