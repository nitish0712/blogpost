const blogs = require('../model/blog');

module.exports.create = function(req,res){
    return res.render('create-blog',{
        title: "Blog Post | Create Post"
    });  
}

module.exports.createBlog= function(req,res){
    blogs.create({
        title: req.body.title,
        category: req.body.category,
        content: req.body.content
    }, function(err, newBlogs){
        if(err){console.log('error in creating a list'); return;}

        console.log('**********', newBlogs);
        return res.redirect('/');
        
    });
}