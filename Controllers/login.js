module.exports = function login(req,res){
    if(req.session.isLoggedIn){
        res.redirect('/dashboard')
    } else {
        res.render('login')
    }
}
