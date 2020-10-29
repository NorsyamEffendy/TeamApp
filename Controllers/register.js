module.exports = function (req,res){
    if(req.session.isLoggedIn){
        res.redirect('/dashboard')
    } else {
        res.render('register')
    }
}
