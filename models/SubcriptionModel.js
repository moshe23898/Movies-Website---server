const mongoose = require('mongoose');

const subcriptonSchema = new mongoose.Schema({
  movieid : String,
  memberid : String,
  date:String 
})

module.exports = mongoose.model("subscriptions", subcriptonSchema);