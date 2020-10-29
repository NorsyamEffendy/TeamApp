const Staff = require('../../models/staff');

module.exports = (req,res) => {
    Staff.find()
        .then(result => {
            res.json(result);
        })
}
