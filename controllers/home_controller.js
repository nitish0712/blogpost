const blogs = require('../model/blog');

module.exports.home = function(req,res){

    blogs.find({}, function(err, blog_list){
        if(err){
            console.log('Error in fetching lists from db');
            return;
        }

        return res.render('home',{
            title: "Blog Post | Home",
            Blogs: blog_list
        });
    });   
}