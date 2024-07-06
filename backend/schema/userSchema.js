import mongoose  from 'mongoose'

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  phoneNo: {
    type: String,
    required: true,
    trim: true
  },

  inTime: {
    type: String,
  },
  outTime: {
    type: Date
  }
});

const User = mongoose.model('User', userSchema);

export default User;