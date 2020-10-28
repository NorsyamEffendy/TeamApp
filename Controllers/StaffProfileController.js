const StaffProfileModel = require('./../models/staffprofile');

const controllers = {

    listStaffProfile: (req, res) => {
        res.render('staffprofile/index', {
            pageTitle: "List of Staff Profile",
            bakegoods: StaffProfileModel
        })
    },

    showStaffProfile: (req, res) => {
        let arrIndex = req.params.id

        // type NaN cannot be equated using ===
        // need to use isNaN function to get a bool value for comparison
        if (isNaN(parseInt(arrIndex))) {
            res.send('id must be a number')
            return
        }

        if (arrIndex < 0 || arrIndex > StaffProfileModel.length) {
            res.send('invalid id')
            return
        }

        res.render('staffprofile/show', {
            pageTitle: "Show Staff Profile",
            item: StaffProfileModel[arrIndex]
        })
    },

    newstaffprofile: (req, res) => {
        res.render('staffprofile/new', {
            pageTitle: "Create New Staff Profile"
        })
    },

    createStaffProfile: (req, res) => {
        // in reality we will store in db

        StaffProfileModel.push({
            name: req.body.product_name,
            price: req.body.price,
            image: req.body.img_url
        })

        let newItemIndex = StaffProfileModel.length - 1
        res.redirect('/staff-profile/' + newItemIndex)
    }

}

module.exports = controllers