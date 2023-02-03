const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config({ path: "../config.env" });
const port = process.env.PORT || 5000;
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors());
app.use(express.json());
app.use(require("./routes"));
// get driver connection

app.listen(port, () => {
  // perform a database connection when server starts

  console.log(`Server is running on port: ${port}`);
});
