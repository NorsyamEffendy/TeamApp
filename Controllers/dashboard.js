const User = require('../models/users');

module.exports = function(req,res){
    const {username, password} = req.body;
    User.findOne({
        username: username,
        password: password
    }).then(result => {
        if(result !== null){
            req.session.isLoggedIn = true;
            res.redirect('/dashboard')
        } else {
            res.redirect('/')
        }
    })
}


/*
* 1. check the login credentials
* 2. if right, load the dashboard and create a session
* 3. if wrong, redirect to /
* */
