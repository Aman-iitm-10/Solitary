const Event = require('../models/Event');
const { uploadImageToCloudinary } = require('../utils/imageUploader');

exports.createEvent = async (req, res) => {
    try {
        let { title, description, date, image, tags } = req.body;
        // const eventImage = req.files.eventImage
        // const image = await uploadImageToCloudinary(
        //     eventImage,
        //     process.env.FOLDER_NAME,
        //     1000,
        //     1000
        // )
        console.log(req.body);
        if (!title || !description || !date || !image) {
            return res.status(400).json({
                success: false,
                message: 'All Fields are Mandatory',
            });
        }

        const newEvent = await Event.create({
            title,
            description,
            date,
            image: image,
            tags,
        });
        res.status(200).json({
            success: true,
            message: 'Event created successfully',
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

exports.deleteEvent = async (req, res) => {
    try {
        const { eventId } = req.body;

        await Event.findByIdAndDelete(eventId);

        return res.status(200).json({
            success: true,
            message: 'Event deleted successfully',
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

exports.updateEvent = async (req, res) => {
    try {
        const { eventId, title, description, date, image } = req.body;

        // if (req.files) {
        //     console.log("image update")
        //     const eventImage = req.files.eventImage
        //     const image = await uploadImageToCloudinary(
        //       eventImage,
        //       process.env.FOLDER_NAME
        //     )
        // }
        // else {
        //    const { image } = req.body;
        // }
        const updatedevent = await Event.findByIdAndUpdate(
            eventId,
            { title, description, date, image: image },
            { new: true }
        );

        return res.json({
            success: true,
            message: 'Event updated successfully',
            updatedevent,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            error: error.message,
        });
    }
};

exports.getAllEvents = async (req, res) => {
    try {
        const allEvents = await Event.find({});
        return res.status(200).json({
            success: true,
            data: allEvents,
        });
    } catch (error) {
        console.error(error);
        return res.status(404).json({
            success: false,
            message: `Can't Fetch Event Data`,
            error: error.message,
        });
    }
};
