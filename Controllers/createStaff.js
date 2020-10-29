const Staff = require('../models/staff');


module.exports = (req,res) => {
    let {
        staff_name,
        fullname,
        company_email,
        emp_id,
        designation,
        team,
        age,
        dob,
        date_joined,
        rr_pass,
        pass_expiry
    } = req.body;


    let staff = new Staff({
        name: staff_name,
        data: {
            fullname: fullname,
            company_email: company_email,
            emp_id: emp_id,
            designation: designation,
            team: team,
            age: age,
            dob: dob,
            date_joined: date_joined,
            rr_pass: rr_pass,
            pass_expiry: pass_expiry
        }
    })
    staff.save().then(result => {
        res.redirect('/dashboard');
    })
}
