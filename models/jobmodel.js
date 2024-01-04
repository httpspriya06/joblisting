const mongoose = require("mongoose");

const jobschema = new mongoose.Schema(
  {
    _id: { type: mongoose.schema.types.objectid, auto: true },
    companyName: { type: string, require: true },
    remote: { type: string, require: true, enum: ["Remote", "Office"] },
    skillsRequired: {
      type: string,
      require: true,
    },

    recruiterName: { type: string, required: true },
    createdAt: { type: Date, default: Date.now },
    logoURL: { type: string, require: true },
    position: {
      type: String,
      required: true,
    },
    salary: {
      type: String,
      required: true,
    },
    jobType: {
      type: String,
      enum: ["Full-time", "Part-time"],
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    about: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("job", jobschema);
