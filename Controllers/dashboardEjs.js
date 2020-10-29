module.exports = (req,res) => {
    if(req.session.isLoggedIn){
        res.render('dashboard')
    } else {
        res.redirect('/')
    }
}
