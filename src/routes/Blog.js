const express = require("express");
const blog = require("../controllers/Blog");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// Register a new user
router.post("/blog/create", protect, blog.createBlog);
router.get("/blog", blog.getAllBlogs);
router.get("/blog/:id", blog.getBlogById);
router.put("/blog/:id", protect, blog.updateBlog);
router.delete("/blog/:id", protect, blog.deleteBlog);

module.exports = router;
