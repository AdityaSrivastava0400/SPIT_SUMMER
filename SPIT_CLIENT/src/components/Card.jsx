import { useEffect, useState } from "react";
import "../styles/product.css";
import { FaStar } from "react-icons/fa";
import ReviewForm from "./ReviewForm";
import StarRatingForm from "./Starrat";
import axios from "axios";
import { API_URL } from "../config";

export function Card(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
              <span className="coursename">{props.coursename}</span>
              <span className="coursecode">{props.coursecode}</span>
            </div>
            <div className="teachername">
              <span className="teachname">{props.name}</span>
            </div>
          </div>

          <div className="productRating">
            <button
              className="button-3"
              role="button"
              onClick={handleFeedbackClick}
              disabled={props.isfeedbackgiven}
            >
              Feedback
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      <div>
        <div className="productModalContent">
          {isModalOpen && (
            <ReviewForm
              name={props.name}
              coursecode={props.coursecode}
              onClose={closeModal}
            />
          )}
        </div>
      </div>
    </div>
  );
}
