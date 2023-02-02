const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require('mongoose');
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

app.listen(port, () => {
  // perform a database connection when server starts

  mongoose.connect(mongoURL, {
	dbName: dbName,
	useNewUrlParser: true,
}).then(() => {
	console.log("Connected to mongo")
}).catch((err) => console.log(err.message))

  console.log(`Server is running on port: ${port}`);
});