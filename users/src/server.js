const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const morgan = require("morgan");
const moment = require('moment');

const userRouter = require("./routes/userRouter");

require("dotenv").config({path: "./config.env"});

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use(morgan(':dateTime :method :url :status :res[content-length] - :response-time ms'));
morgan.token('dateTime', function (req, res, param) {
  return '[' + moment(new Date()).format('YYYY/MM/DD HH:mm:ss') + ']';
});

mongoose.connect(
    process.env.DB_URL, {
    useNewUrlParser: true
}).then(() => {
    console.log("Connected to MongoDB");
}).catch(() => {
    console.log("Failed connecting to MongoDB");
});

app.use("/api/user", userRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});