import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import "../styles/preview.css";
import { FacultyCourseCard } from "../components/FacultyCourseCard";
const FacultyReview = () => {
  const { user } = useContext(UserContext);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    if (user != null) {
      const course = user.courses;
      setCourses(course);
    }
  }, [user]);

  return (
    <>
      <div className="prods">
        {courses.length > 0 ? (
          courses.map((cour, index) => (
<div key={index}><FacultyCourseCard  course={cour}/></div>

            
          ))
        ) : (
          <p>No courses available</p>
        )}
      </div>
    </>
  );
  
};

export default FacultyReview;
