const express = require('express');
const app = express();
const eventRoutes = require('./routes/Event');
const clubsandSocietiesRoutes = require('./routes/ClubsandSocieties');
const logintRoutes = require('./routes/Auth');
const socialMediaPostRoutes = require('./routes/SocialMediaPost');
const teamMemberRoutes = require('./routes/TeamMember');
const houseRoutes = require('./routes/House');
const database = require('./config/database');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const { cloudinaryConnect } = require('./config/cloudinary');
const fileUpload = require('express-fileupload');

require('dotenv').config();

const PORT = process.env.PORT || 4000;

database.connect();

app.use(express.json());
app.use(cookieParser());
app.use(
    cors({
        origin: '*',
        credentials: true,
    })
);

app.use(
    fileUpload({
        useTempFiles: true,
        tempFileDir: '/tmp/',
    })
);

cloudinaryConnect();

app.use('/api/v1/auth', logintRoutes);
app.use('/api/v1/club', clubsandSocietiesRoutes);
app.use('/api/v1/event', eventRoutes);
app.use('/api/v1/teamMembers', teamMemberRoutes);
app.use('/api/v1/socialMediaPost', socialMediaPostRoutes);
app.use('/api/v1/house', houseRoutes);

// Testing the server
app.get('/', (req, res) => {
    return res.json({
        success: true,
        message: 'Your server is up and running ...',
    });
});

// Listening to the server
app.listen(PORT, () => {
    console.log(`App is listening at ${PORT}`);
});
