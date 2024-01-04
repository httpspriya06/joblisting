const mongoose = require("mongoose");

const userschema = new mongoose.Schema(
  {
    name: { type: String, require: [true, "Name is required"] },
    email: {
      type: String,
      required: [true, "Email is required"],
      Unique: true,
    },
    mobileNumber: {
      type: Number,
      require: [true, "Mobile Number is required"],
    },
    password: { type: String, require: [true, "Password is required"] },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userschema);
