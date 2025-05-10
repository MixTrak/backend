const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const port = 5000
require('dotenv').config();

const userRoutes = require('./userRoutes.js');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/users', userRoutes)

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(port, () => console.log(`Server Is Running On Port: ${port}`));
    })
    .catch(error => console.error(error))