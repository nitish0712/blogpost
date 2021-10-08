const express = require('express');
const router = express.Router();

const blogcontroller = require('../controllers/blog_controller');

router.get('/create',  blogcontroller.create);
router.post('/createBlog', blogcontroller.createBlog);
router.get('/delete/', blogcontroller.delete);
router.get('/edit/', blogcontroller.edit);
router.post('/editBlog/', blogcontroller.editBlog);
router.get('/open/',blogcontroller.open);

module.exports=router;