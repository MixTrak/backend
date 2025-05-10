const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const port = process.env.PORT || 4000 
require('dotenv').config();

const userRoutes = require('./userRoutes.js');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/users', userRoutes)

mongoose.connect('mongodb+srv://ayaanplayz18:Login%40123@cluster0.xl78eox.mongodb.net/')
    .then(() => {
        app.listen(port, () => console.log(`Server Is Running On Port: ${port}`));
    })
    .catch(error => console.error(error))
