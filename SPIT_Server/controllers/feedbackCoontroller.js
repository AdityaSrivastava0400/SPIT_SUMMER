const Feedback = require("../models/feedbacks");

exports.createFeedback = (req, res) => {
  console.log("feedback aya");
  const data = req.body;
  const newFeedback = new Feedback({
    name: data.name,
    coursecode: data.coursecode,
    ratings: data.ratings,
    comment: data.comment,
  });

  newFeedback.save();
};
