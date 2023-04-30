const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();
const file_upload = require('express-fileupload');
const mongoose = require('mongoose');
const path = require("path");
const router = require('./routes/index.ts')

const app = express();

app.use(cors());
app.use(express.json());
app.use(file_upload({}));
app.use(express.static(path.resolve('../client/dist/')));
app.use('/api', router);


const start_server = async () => {
    try {
        await mongoose.connect(process.env.BD_URL);
        app.listen(process.env.PORT, () => console.log(`Server started on http://localhost:${process.env.PORT}`))
    } catch (e) {
        console.log(e);
    }
};

start_server();
