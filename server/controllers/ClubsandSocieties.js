const ClubsandSocieties = require('../models/ClubsandSocieties');
const { uploadImageToCloudinary } = require('../utils/imageUploader');

exports.createClub = async (req, res) => {
    try {
        let { name, description, image, link } = req.body;
        // const clubDisplayPicture = req.files.clubDisplayPicture
        // const image = await uploadImageToCloudinary(
        //     clubDisplayPicture,
        //     process.env.FOLDER_NAME,
        //     1000,
        //     1000
        // )

        if (!name || !description || !image) {
            return res.status(400).json({
                success: false,
                message: 'All Fields are Mandatory',
            });
        }

        const newEvent = await ClubsandSocieties.create({
            name,
            description,
            image: image,
            link,
        });
        res.status(200).json({
            success: true,
            message: 'Club added successfully',
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Failed to add event',
            error: error.message,
        });
    }
};

exports.deleteClub = async (req, res) => {
    try {
        const { clubId } = req.body;

        await ClubsandSocieties.findByIdAndDelete(clubId);

        return res.status(200).json({
            success: true,
            message: 'Club removed successfully',
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

exports.updateClub = async (req, res) => {
    try {
        const { clubId, name, description } = req.body;

        if (req.files) {
            console.log('image update');
            const clubDisplayPicture = req.files.clubDisplayPicture;
            const image = await uploadImageToCloudinary(
                clubDisplayPicture,
                process.env.FOLDER_NAME
            );
        }

        const updatedclub = await ClubsandSocieties.findByIdAndUpdate(
            clubId,
            { name, description, image: image.secure_url },
            { new: true }
        );

        return res.json({
            success: true,
            message: 'Club info updated successfully',
            updatedclub,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            error: error.message,
        });
    }
};

exports.getAllClubs = async (req, res) => {
    try {
        const allClubs = await ClubsandSocieties.find({});
        return res.status(200).json({
            success: true,
            data: allClubs,
        });
    } catch (error) {
        console.log(error);
        return res.status(404).json({
            success: false,
            message: `Can't Fetch Clubs and Societies Data`,
            error: error.message,
        });
    }
};
