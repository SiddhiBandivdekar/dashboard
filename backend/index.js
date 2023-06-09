const express = require("express");
const dotenv = require("dotenv").config();
const colors = require("colors");
const connectDB = require("./config/db");
const port = process.env.PORT || 5000;
const cors = require("cors");

connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/dashboard", require("./routes/dashRoutes"));

app.listen(port, () => console.log(`Server started on port ${port}`));
