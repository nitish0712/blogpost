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

        req.flash('message', 'New Blog Created');
        return res.redirect('/');
        
    });
}

module.exports.delete = function(req,res){
    let id =req.query.id;

    blogs.findByIdAndDelete(id, function(err){
        if(err){
            if(err){
                console.log('error in deleting blog from database');
                return;
            }
        }
        req.flash('message', 'Blog Deleted Successfully!!');
        return res.redirect('/');
    });
    
}

module.exports.edit = function(req,res){
    blogs.findById(req.query.id, function(err, blog){
        return res.render('edit-blog',{
            title: "Blog Post | Edit Blog",
            edit_blog: blog
        });
    });  
}

module.exports.open = function(req,res){
    blogs.findById(req.query.id, function(err, blog){
        return res.render('open-blog',{
            title: "Blog Post | Blog",
            open_blog: blog
        });
    });  
}


module.exports.editBlog = function(req,res){
    let id = req.query.id;
    blogs.findById(id, function(err, blog){
        if(err){
            console.log('error in editing blog');
            return;
        }
        blog.title=req.body.title;
        blog.category=req.body.category;
        blog.content=req.body.content;

        blog.save();
        req.flash('message', 'Blog Edited Successfully!!!');
        return res.redirect('/');
    });

}


