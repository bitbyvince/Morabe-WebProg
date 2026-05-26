const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  age: { type: String, required: false, default: "" },
  gender: { type: String, required: false, default: "" },
  contactNumber: { type: String, required: false, default: "" },
  email: { type: String, required: true, unique: true },
  type: {
    type: String,
    enum: ["admin", "editor", "viewer"],
    default: "viewer",
  },
  username: { type: String, required: false, unique: true, sparse: true },
  password: { type: String, required: true },
  address: { type: String, required: false, default: "" },
  isActive: { type: Boolean, default: true },
});

module.exports =
  mongoose.Model.userSchema || mongoose.model("User", userSchema);
