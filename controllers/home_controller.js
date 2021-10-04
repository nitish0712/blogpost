module.exports.home = function(req,res){
    return res.render('home',{
        title: "Blog Post | Home"
    });
}