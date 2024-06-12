const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  age: {
    type: Number,
    required: true,
    min: 18,
  },
  isActive: {
    type: Boolean,
    required: true,
    default: false,
  },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
