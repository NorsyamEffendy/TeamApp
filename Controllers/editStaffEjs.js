module.exports = (req, res) => {
    if(req.session.isLoggedIn){
        req.session._id = req.query.id;
        // console.log(req.session._id)
        res.render('editstaff');
    } else {
        res.redirect('/')
    }
}
