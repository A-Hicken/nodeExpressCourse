const mongoose = require("mongoose");

// const connectDB = (url) => {
//   return mongoose
//     .connect(url)
//     .then(() => console.log("MongoDB Connected"))
//     .catch((err) => console.log(err));
// };

// module.exports = connectDB;

const connectDB = (url) => {
  return mongoose.connect(url, {});
};

module.exports = connectDB;
