module.exports.create = function(req,res){
    return res.render('create-blog',{
        title: "Blog Post | Create Post"
    });
}