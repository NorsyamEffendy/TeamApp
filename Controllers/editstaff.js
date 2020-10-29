const Staff = require('../models/staff');


module.exports = (req,res) => {
    let {
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

    Staff.findById(req.session._id).then(staff => {
        staff.data.fullname = fullname;
        staff.data.company_email = company_email;
        staff.data.emp_id = emp_id;
        staff.data.designation = designation;
        staff.data.team = team;
        staff.data.age = age;
        staff.data.dob = dob;
        staff.data.date_joined = date_joined;
        staff.data.rr_pass = rr_pass;
        staff.data.pass_expiry = pass_expiry
        console.log(staff.data)
        return staff.save()
    }).then(result => res.redirect('/dashboard'))
}
