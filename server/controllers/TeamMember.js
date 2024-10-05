const TeamMember = require('../models/TeamMember');
const Event = require('../models/TeamMember');
const { uploadImageToCloudinary } = require('../utils/imageUploader');

exports.addMember = async (req, res) => {
    try {
        let { name, role, links, team } = req.body;
        const displayPicture = req.files.displayPicture;
        const image = await uploadImageToCloudinary(
            displayPicture,
            process.env.FOLDER_NAME,
            1000,
            1000
        );

        if (!name || !role || !links || !team || !image) {
            return res.status(400).json({
                success: false,
                message: 'All Fields are Mandatory',
            });
        }

        const newTeamMember = await TeamMember.create({
            name,
            role,
            links,
            team,
            image: image.secure_url,
        });
        res.status(200).json({
            success: true,
            message: 'Member added successfully',
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Failed to add Team Member',
            error: error.message,
        });
    }
};

exports.deleteMember = async (req, res) => {
    try {
        const { memberId } = req.body;

        await TeamMember.findByIdAndDelete(memberId);

        return res.status(200).json({
            success: true,
            message: 'Member removed successfully',
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

exports.updateMember = async (req, res) => {
    try {
        const { memberId, name, role, links, team } = req.body;

        if (req.files) {
            console.log('image update');
            const displayPicture = req.files.displayPicture;
            const image = await uploadImageToCloudinary(
                displayPicture,
                process.env.FOLDER_NAME
            );
        }

        const updatedMember = await TeamMember.findByIdAndUpdate(
            memberId,
            { name, role, links, team, image: image.secure_url },
            { new: true }
        );

        return res.json({
            success: true,
            message: 'Member info updated successfully',
            updatedMember,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            error: error.message,
        });
    }
};

exports.getAllMembers = async (req, res) => {
    try {
        const allMembers = await Event.find({});
        return res.status(200).json({
            success: true,
            data: allMembers,
        });
    } catch (error) {
        console.log(error);
        return res.status(404).json({
            success: false,
            message: `Can't Fetch Members Data`,
            error: error.message,
        });
    }
};
