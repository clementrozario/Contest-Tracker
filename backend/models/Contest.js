const mongoose = require("mongoose");

const contestSchema = new mongoose.Schema({
  name: { type: String, required: true }, 
  platform: { type: String, required: true }, 
  date: { type: Date, required: true },
  duration: { type: Number, required: true }, // in minutes
  url: { type: String, required: true },
  isPast: { type: Boolean, default: false },
  solutionLink: { type: String, default: "" }, // YouTube solution link
});

const Contest = mongoose.model("Contest", contestSchema);

module.exports = Contest;
