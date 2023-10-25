import { useEffect, useState } from "react";
import "../styles/FacultyCourseCard.css";
import { FaStar } from "react-icons/fa";
import ReviewForm from "./ReviewForm";
import StarRatingForm from "./Starrat";
import axios from "axios";
import { API_URL } from "../config";
import { FacultyReviewForm } from "./FacultyReviewForm";

export function FacultyCourseCard(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  console.log(props);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleFeedbackClick = () => {
    openModal();
  };

  return (
    <div className="productList">
      <div className="productCard">
        <div className="productCard__content">
          <div className="upper">
            <div className="heading">
              <span className="coursename">{props.course.courseName}</span>
              <span className="coursecode">({props.course.courseCode})</span>
            </div>
          </div>
          <button
            className="button-3"
            role="button"
            onClick={handleFeedbackClick}
          >
            View Feedback
          </button>
        </div>
      </div>
    

      <div>
        <div className="productModalContent">
          {isModalOpen && (
            <FacultyReviewForm
              
              data={props.course}
              onClose={closeModal}
            />
          )}
        </div>
      </div>
      </div> 
  );
}
