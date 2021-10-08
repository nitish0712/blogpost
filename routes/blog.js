const express = require('express');
const router = express.Router();

const blogcontroller = require('../controllers/blog_controller');

router.get('/create',  blogcontroller.create);
router.post('/createBlog', blogcontroller.createBlog);

module.exports=router;