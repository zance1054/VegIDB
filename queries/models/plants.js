const mongoose = require("mongoose");

// Define plant schema
const plantSchema = new mongoose.Schema({
  plantName: String,
  plantID: String,
  plantFileName: String,
  plantDescription: String,
});

// Export Mongoose model
module.export = mongoose.model('plants', plantSchema);
