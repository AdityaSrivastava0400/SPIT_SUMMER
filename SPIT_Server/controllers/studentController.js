const student = require("../models/student");

exports.loginstudent = async (req, res) => {
  console.log("aya");
  const { email } = req.body;
  const det = await student.findOne({ email: email });
  if (det) {
    res.status(200).send(det);
  } else {
    res.status(404).send("NO data found");
  }
};
exports.addcourse = async (req, res) => {
  const email = req.body.email;
  console.log(email);
  try {
    const newstudent = await student.updateOne({ email: email }, req.body);
  } catch (error) {
    console.log(error);
    res.status(504).send(err);
  }
};
