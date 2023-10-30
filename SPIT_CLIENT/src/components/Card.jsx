import { useContext, useEffect, useState } from "react";
import "../styles/Productt.css"
import { FaStar } from "react-icons/fa";
import ReviewForm from "./ReviewForm";
import StarRatingForm from "./Starrat";
import axios from "axios";
import { API_URL } from "../config";
import { UserContext } from "../context/UserContext";

export function Card(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {user}=useContext(UserContext)
  const cardKey = `${props.coursecode}`;
  
  const [isfeedgiven, setfeedgiven] = useState(false);


  const openModal = () => {
    setIsModalOpen(true);
  };
  useEffect(()=>{
    if(props.isfeedbackgiven){
      localStorage.setItem(cardKey,'true');
    }
    const initialIsfeedgiven = localStorage.getItem(cardKey) === "true";
    setfeedgiven(initialIsfeedgiven)
  },[user])

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleFeedbackClick = () => {
    openModal();
  };

  return (
    <div className="productList1">
      <div className="productCard1">
        <div className="productCard__content1">
            <div className="heading">
              <span className="coursename">{props.coursename}</span>
              <span className="coursecode">{props.coursecode}</span>
            </div>
            <div className="teachername">
              <span className="teachname">{props.name}</span>
            </div>
          <div className="productRating">
            <button
              className="button-3"
              role="button"
              onClick={handleFeedbackClick}
              disabled={isfeedgiven}
            >
              Feedback
            </button>
          </div>
        </div>

      {/* Moda */}
     
      </div>
      <div>
        <div className="productModalContent">
          {isModalOpen && (
            <ReviewForm
            name={props.name}
            coursecode={props.coursecode}
            onClose={closeModal}
            setfeedgiven={setfeedgiven}
            />
            )}
        </div>
            </div>
    </div>
  );
}
