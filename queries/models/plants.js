import mongoose, { Schema } from 'mongoose';

// Define plant schema
var plantSchema = new Schema({
  plantName: String,
  plantFileName: String,
  img: ,
  plantDescription: String,
});

// Export Mongoose model
export default mongoose.model('plants', plantSchema);
