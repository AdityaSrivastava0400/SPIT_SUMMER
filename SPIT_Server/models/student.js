const mongoose = require("mongoose");
const studentSchema = new mongoose.Schema({
  fullName: {
    type: String,
    unique: true,
  },
  firstName: {
    type: String,
  },
  middleName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
    trim: true,
  },
  mobileNumber: {
    type: Number,
  },
  id: {
    type: String,
    unique: true,
  },
  dateOfBirth: {
    type: String,
    default: "",
  },
  bloodGroup: {
    type: String,
  },
  dateOfJoining: {
    type: String,
    default: "",
  },
  address: {
    type: String,
  },
  type: {
    type: String,
  },
  qualification: {
    type: String,
  },
  department: {
    type: String,
  },

  gender: {
    type: String,
  },

  classIncharge: {
    type: String,
  },
  courses: [
    {
      courseName: {
        type: String,
      },
      courseCode: {
        type: String,
      },
      enrollmentKey: {
        type: String,
      },
      courseType: {
        type: String,
      },
      lecType: {
        type: String,
      },
      class: {
        type: String,
      },
      year: {
        type: Number,
      },
      semester: {
        type: String,
      },
    },
  ],
  facultyreview: {
    type: [String],
    unique: true,
  },
});

module.exports = mongoose.model("Student", studentSchema);
