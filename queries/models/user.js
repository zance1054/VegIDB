import mongoose, { Schema } from 'mongoose';

// Define plant schema
var userSchema = new Schema({
  name: String,
  email: String,
  password: ,
});

// Export Mongoose model
export default mongoose.model('users', userSchema);
