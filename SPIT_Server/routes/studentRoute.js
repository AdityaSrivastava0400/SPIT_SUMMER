const express = require("express");
const { loginstudent, addcourse } = require("../controllers/studentController");
const router = express.Router();
router.post("/login", loginstudent);
router.post("/addcourse", addcourse);
module.exports = router;
