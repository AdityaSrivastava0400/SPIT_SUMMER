const express = require("express");
const { createFeedback } = require("../controllers/feedbackCoontroller");
const router = express.Router();
router.post("/create", createFeedback);
module.exports=router;