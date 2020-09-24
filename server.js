const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.mongoATLAS_URL;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => console.log("Connection is successful!"));

const jobsRouter = require("./routes/jobs");
const companyRouter = require("./routes/company");

app.use("/jobs", jobsRouter);
app.use("/companies", companyRouter);

app.listen(port, () => console.log(`The app is running on Port: ${port}.`));
