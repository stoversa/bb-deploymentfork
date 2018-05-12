const router = require("express").Router();
const meetingRoutes = require("./meetingAPI");
const commentRoutes = require("./commentsAPI");


// API Routes

router.use("/api/meetings", meetingRoutes);
router.use("/api/comments", commentRoutes);


module.exports = router;
