module.exports = (req,res)=> {
    req.session.isLoggedIn = false;
    res.redirect('/');
}
