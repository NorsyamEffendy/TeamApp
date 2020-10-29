const Staff = require('../models/staff');

module.exports = (req,res) => {
    if(req.session.isLoggedIn){
        let id = req.query.id;
        Staff.findByIdAndRemove(id).then(() => {
            res.redirect('/');
        })
    } else {
        res.redirect('/')
    }
}
