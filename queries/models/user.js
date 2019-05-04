const mongoose = require("mongoose");

// Define plant schema
var userSchema = new mongoose.Schema({
  name: String,
  email: String,
  userID: String,
  password: String,
});

// Export Mongoose model
module.export = mongoose.model('user', userSchema);
