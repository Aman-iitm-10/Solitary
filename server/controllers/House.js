const House = require('../models/House');
const { uploadImageToCloudinary } = require('../utils/imageUploader');

exports.createHouse = async (req, res) => {
    try {
        let { name, description, image, link } = req.body;
        // const houseDisplayPicture = req.files.houseDisplayPicture
        // const image = await uploadImageToCloudinary(
        //     houseDisplayPicture,
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

        const newEvent = await House.create({
            name,
            description,
            image: image,
            link,
        });
        res.status(200).json({
            success: true,
            message: 'House added successfully',
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

exports.deleteHouse = async (req, res) => {
    try {
        const { houseId } = req.body;

        await House.findByIdAndDelete(houseId);

        return res.status(200).json({
            success: true,
            message: 'House removed successfully',
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

exports.updateHouse = async (req, res) => {
    try {
        const { houseId, name, description } = req.body;

        if (req.files) {
            console.log('image update');
            const houseDisplayPicture = req.files.houseDisplayPicture;
            const image = await uploadImageToCloudinary(
                houseDisplayPicture,
                process.env.FOLDER_NAME
            );
        }

        const updatedhouse = await House.findByIdAndUpdate(
            houseId,
            { name, description, image: image.secure_url },
            { new: true }
        );

        return res.json({
            success: true,
            message: 'House info updated successfully',
            updatedhouse,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            error: error.message,
        });
    }
};

exports.getAllHouse = async (req, res) => {
    try {
        const allHouse = await House.find({});
        return res.status(200).json({
            success: true,
            data: allHouse,
        });
    } catch (error) {
        console.log(error);
        return res.status(404).json({
            success: false,
            message: `Can't Fetch House Data`,
            error: error.message,
        });
    }
};
