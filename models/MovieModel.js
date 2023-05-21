const mongoose = require('mongoose');

const moviesSchema = new mongoose.Schema({
  name : String,
  yearpermiered : Number,
  genres:[String],
  image: String
})

module.exports = mongoose.model("movies", moviesSchema);