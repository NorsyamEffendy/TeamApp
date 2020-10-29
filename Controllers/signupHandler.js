const User = require('../models/users');

module.exports = (req,res)=>{
    const {username, password} = req.body;
    const user = new User({
        username: username,
        password: password
    })
    user
        .save()
        .then(result => {
            res.redirect('/')
        })


    // const staff = new Staff({
    //     name: "staff 1",
    //     data: {
    //         fullname: "BOB",
    //         company_email: "bob@teamapp.com\n",
    //         emp_id: 12233,
    //         designation: "onetwo",
    //         team: "team2",
    //         age: 22,
    //         dob: "20/20/02",
    //         date_joined: "11/22/20",
    //         rr_pass: 2131,
    //         pass_expiry: "11/11/23"
    //     }
    // })
    // staff
    //     .save()
    //     .then(result => {
    //         console.log(result)
    //     })
}



/*
* 1. fetch the username and password
* 2. save them in db
* 3. redirect to /
* */
