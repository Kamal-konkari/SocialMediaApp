const mongoose = require("mongoose");
const dotenv = require(".env");
dotenv.config();

url = "";

mongoose.connect(url, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("connected Success");
  }
});
