import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../config";
import { UserContext } from "../context/UserContext";
import { Card } from "../components/Card";
import "../styles/preview.css";

const Review = () => {
  const { user } = useContext(UserContext);
  const [teachers, setTeachers] = useState([]);
  const [commonCourses, setCommonCourses] = useState([]);

  const fetchTeachers = async () => {
    try {
      const response = await axios.post(
        API_URL + "/api/faculty/get/faculty/fullinfo"
      );
      setTeachers(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (user != null) {
      fetchTeachers();
    }
  }, [user]);

  useEffect(() => {
    if (user && teachers.length > 0) {
      console.log(user);
      const studentCourseCode = user.courses.map(
        (course) => course.courseCode
      );
      const feedbackMap = {};
      const array = user.facultyreview;
      array.forEach((coursecode) => {
        feedbackMap[coursecode] = true;
      });
      const commonCoursesData = teachers.reduce((acc, teacher) => {
        const teacherCourses = teacher.courses;
        const commonCoursesForTeacher = teacherCourses.filter((course) =>
          studentCourseCode.includes(course.courseCode)
        );

        commonCoursesForTeacher.forEach((course) => {
          const coursecode = course.courseCode;
          const isfeedbackgiven = feedbackMap[coursecode]|false;
          acc.push({
            courseName: course.courseName,
            courseCode: course.courseCode,
            teacherName: teacher.fullName,
            teacherRating: teacher.rating,
            isfeedbackgiven: isfeedbackgiven,
          });
        });

        return acc;
      }, []);

      setCommonCourses(commonCoursesData);
      console.log(commonCoursesData);
    }
  }, [user, teachers]);

  return (
    <div className="prods">
      {commonCourses.map((course, index) => (
        
        <Card
          key={index}
          coursename={course.courseName}
          coursecode={course.courseCode}
          name={course.teacherName}
          isfeedbackgiven={course.isfeedbackgiven}
        />
      ))}
    </div>
  );
};

export default Review;
