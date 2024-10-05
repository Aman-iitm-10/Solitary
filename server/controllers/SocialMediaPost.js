const SocialMediaPost = require('../models/SocialMediaPost');
const { uploadImageToCloudinary } = require('../utils/imageUploader');

exports.createPost = async (req, res) => {
    try {
        let { title, description, date } = req.body;
        const postImage = req.files.postImage;
        const image = await uploadImageToCloudinary(
            postImage,
            process.env.FOLDER_NAME,
            1000,
            1000
        );

        if (!title || !description || !date || !image) {
            return res.status(400).json({
                success: false,
                message: 'All Fields are Mandatory',
            });
        }

        const newSocialMediaPost = await SocialMediaPost.create({
            title,
            description,
            date,
            image: image.secure_url,
        });
        res.status(200).json({
            success: true,
            message: 'Post created successfully',
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Failed to add post',
            error: error.message,
        });
    }
};

exports.deletePost = async (req, res) => {
    try {
        const { postId } = req.body;

        await SocialMediaPost.findByIdAndDelete(postId);

        return res.status(200).json({
            success: true,
            message: 'Post deleted successfully',
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: 'Server error',
            error: error.message,
        });
    }
};

exports.updatePost = async (req, res) => {
    try {
        const { postId, title, description, date } = req.body;

        if (req.files) {
            console.log('image update');
            const postImage = req.files.postImage;
            const image = await uploadImageToCloudinary(
                postImage,
                process.env.FOLDER_NAME
            );
        }

        const updatedpost = await SocialMediaPost.findByIdAndUpdate(
            postId,
            { title, description, date, image: image.secure_url },
            { new: true }
        );

        return res.json({
            success: true,
            message: 'Post updated successfully',
            updatedpost,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            error: error.message,
        });
    }
};

exports.getAllPosts = async (req, res) => {
    try {
        const allPosts = await SocialMediaPost.find({});
        return res.status(200).json({
            success: true,
            data: allPosts,
        });
    } catch (error) {
        console.log(error);
        return res.status(404).json({
            success: false,
            message: `Can't Fetch POsts Data`,
            error: error.message,
        });
    }
};
