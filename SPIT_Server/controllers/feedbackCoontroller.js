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
exports.getall=async(req,res)=>{
  console.log("getall");
  const coursecode=req.body.courseCode;
  const getall=await Feedback.find({coursecode:coursecode});
  if(getall){
    res.status(200).send(getall);
  }
  else{
    res.status(404).send("NO DATA FOUND");
  }
}