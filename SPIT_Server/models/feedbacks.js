const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  coursecode: {
    type: String,
    required: true,
  },
  ratings: {
    reg: Number,
    efec: Number,
    syl: Number,
    inter: Number,
    expe: Number,
    empa: Number,
    reso: Number,
    dom: Number,
    coll: Number,
    evals: Number,
  },
  comment: String,
  date: {
    type: Date,
    default: Date.now,
  },
});

const Feedback = mongoose.model("Feedback", feedbackSchema);

module.exports = Feedback;
