// ReviewForm.js
import  { useContext, useEffect, useState } from "react";
import "../styles/review.css";
import StarRatingForm from "../components/Starrat";
import axios from "axios";
import { API_URL } from "../config";
import { UserContext } from "../context/UserContext";
import { Comment } from "./Comment";
// import { AiOutlineClose } from "react-icons/fa";

export const FacultyReviewForm = ({ data, onClose }) => {
  // const ReviewForm = () => {
  const { user } = useContext(UserContext);
  const [rating, setRating] = useState(0);
 
  const [reg, setReg] = useState(0);
  const [efec, setEfec] = useState(0);
  const [syl, setSyl] = useState(0);
  const [inter, setinter] = useState(0);
  const [expe, setExpe] = useState(0);
  const [empa, setEmpa] = useState(0);
  const [reso, setReso] = useState(0);
  const [dom, setDom] = useState(0);
  const [coll, setColl] = useState(0);
  const [evals, setEvals] = useState(0);
  const [opencommnet,setopenComment]=useState(false)
  const [comment,setComment]=useState([]);
  const coursecode=data.courseCode
  const handleComment=()=>{
setopenComment(!opencommnet)
  }
useEffect(()=>{
  const fetch=async()=>{
    console.log(data.courseCode)
    try{
      // const response =await axios(API_URL + "/api/feedback/getall",data);
      const response = await axios.post(API_URL + "/api/feedback/getall",data
      );
      const ratings=response.data.map((data)=>{
        
        return data.ratings});
        const comments=response.data.map((data)=>{
         return  data.comment;
        })
        const average = {
          reg,
          efec,
          syl,
          inter,
          expe,
          empa,
          reso,
          dom,
          coll,
          evals,
        };
        ratings.forEach(response=> {
          for(const key of Object.keys(average )){
            average[key]+=response[key];
          }
        });
        for(const key of Object.keys(average)){
          average[key]/=ratings.length;
          average[key] = parseFloat(average[key].toFixed(2));
        }
        setReg(average.reg);
        setColl(average.coll);
        setDom(average.dom);
        setEfec(average.efec)
        setEmpa(average.empa)
        setEvals(average.empa)
        setExpe(average.expe)
        setinter(average.inter)
        setReso(average.reso)
        setSyl(average.syl)
        setComment(comments)
    console.log(response);
    console.log(average);
    console.log(comments)
  }
    
  catch(error){
    console.log(error);
  }
}
fetch();

},[data]);
  const handleSubmit = async () => {
    const ratingsObject = {
      reg,
      efec,
      syl,
      inter,
      expe,
      empa,
      reso,
      dom,
      coll,
      evals,
    };

    
   
  };

  return (
    <div className="review-form">
      <div className="form-header bg-black text-white">
        <h2 className="heading text-white-bold">Course Feedback Form</h2>
        <span className="close" onClick={onClose}>
          &times;
        </span>
      </div>
      <div className="form-body">
        <div className="childrev">
          <span>
            Regularity and Punctuality
            <h6>The faculty is regular and punctual.</h6>
          </span>
          <StarRatingForm val={reg} setval={setReg} filled={true} />
          <span className="marks">({reg}/3.0)</span>
        </div>
        <div className="childrev">
          <span>
            Effective communication
            <h6>The faculty communicates with the students effectively.</h6>
          </span>
          <StarRatingForm val={efec} setval={setEfec} filled={true}/>
          <span className="marks">({efec}/3.0)</span>
        </div>
        <div className="childrev">
          <span>
            Syllabus coverage
            <h6>
              The faculty declared the course plan at the beginning and executed
              it as planned and completed the syllabus to the satisfaction of
              the students.
            </h6>
          </span>
          <StarRatingForm val={syl} setval={setSyl} filled={true}/>
          <span className="marks">({syl}/3.0)</span>
        </div>
        <div className="childrev">
          <span>
            Interest generation and Innovative Practices
            <h6>
              The faculty generated the interest in the course, practiced
              innovative methods for teaching learning and evaluation.
            </h6>
          </span>
          
          <StarRatingForm val={inter} setval={setinter} filled={true}/>
          <span className="marks">({inter}/3.0)</span>
        </div>
        <div className="childrev">
          <span>
            Experiential learning
            <h6>
              The faculty encouraged participative learning and curiosity among
              the learners. The faculty encouraged asking the questions.
            </h6>
          </span>
          <StarRatingForm val={expe} setval={setExpe} filled={true} />
          <span className="marks">({expe}/3.0)</span>
        </div>
        <div className="childrev">
          <span>
            Empathy
            <h6>
              The faculty is sensitive to student’s problems, aware of class
              bandwidth and takes care of bright, weaker students appropriately.
            </h6>
          </span>
          <StarRatingForm val={empa} setval={setEmpa} filled={true}/>
          <span className="marks">({empa}/3.0)</span>
        </div>
        <div className="childrev">
          <span>
            Resourceful
            <h6>
              The Faculty triggered thinking, self-learning and directed good
              literature, books, and videos for learning beyond classroom.
            </h6>
          </span>
          <StarRatingForm val={reso} setval={setReso} filled={true} />
          <span className="marks">({reso}/3.0)</span>
        </div>
        <div className="childrev">
          <span>
            Domain Expertise
            <h6>
              The faculty possessed a sound technical knowledge and aware of
              real life applications.
            </h6>
          </span>
          <StarRatingForm val={dom} setval={setDom} filled={true} />
          <span className="marks">({dom}/3.0)</span>
        </div>
        <div className="childrev">
          <span>
            Collaboration
            <h6>
              Teacher encouraged co-teaching from industry, arranged experts
              talks and motivated few students to give presentations.
            </h6>
          </span>
          <StarRatingForm val={coll} setval={setColl} filled={true} />
          <span className="marks">({coll}/3.0)</span>
        </div>
        <div className="childrev">
          <span>
            Evaluation and Assessment
            <h6>
              question papers, assignments, set by the teachers encouraged
              in-depth learning, self-learning and triggered thinking.
            </h6>
          </span>
          <StarRatingForm val={evals} seteval={setEvals} filled={true}/>
          <span className="marks">({evals}/3.0)</span>
        </div>
        <div><span className="showcomment" onClick={handleComment}>View Comments</span>
        {opencommnet&&  <div className="comments">
      {comment.map((course, index) => (
        <Comment
          key={index}
          comment={course}
          
        />
      ))}
    </div> }
        </div>
      </div>
      
    </div>
  );
};

// import React from "react";

// const ReviewForm = () => {
//   return <div>ReviewForm</div>;
// };

// export default ReviewForm;
