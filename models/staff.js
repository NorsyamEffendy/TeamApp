const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const staffSchema = new Schema({
    name: String,
    data: {
        fullname: String,
        company_email: String,
        emp_id: String,
        designation: String,
        team: String,
        age: String,
        dob: String,
        date_joined: String,
        rr_pass: String,
        pass_expiry: String
    }
})


module.exports = mongoose.model('Staff', staffSchema);
