module.exports = (req, res) => {
    if(req.session.isLoggedIn){
        res.render('createStaff');
    } else {
        res.redirect('/')
    }
}
