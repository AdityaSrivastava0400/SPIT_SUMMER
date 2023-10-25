const express = require("express");
const { createFeedback, getall } = require("../controllers/feedbackCoontroller");
const router = express.Router();
router.post("/create", createFeedback);
router.post("/getall",getall);
module.exports=router;