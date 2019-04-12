var mongoose = require('mongoose');
require('../models/models.js');

var Peopel1995 = mongoose.model('People');

module.exports = {
    index: function (req, res) {

        Peopel1995.find({}, function (err, allpeople) {
            // Retrieve an array of users
            if (err) {
                console.log("Returned error", err);
                // respond with JSONcopy
                res.json({ message: "Error", error: err })
            }
            else {
                res.json({ allpeople });
            }
            // This code will run when the DB is done attempting to retrieve all matching records to {}
        })
    },

    postnewname: function (req, res) {
        console.log("POST DATA", req.body);
        // This is where we would add the user from req.body to the database.
        var newpeople = new Peopel1995({ name: req.params.name });

        newpeople.save(function (err) {
            if (err) {
                // if there is an error upon saving, use console.log to see what is in the err object 
                console.log("We have an error!", err);
                // adjust the code below as needed to create a flash message with the tag and content you would like

                // redirect the user to an appropriate route
                res.json({ message: "Faile add People" });
            }
            else {
                res.json({ message: "Success Add New People" });
            }
        });
    },

    removename: function (req, res) {
        var newname = req.params.name;
        Peopel1995.remove({name:req.params.name}, function (err) {
            if (err) {
                res.json({ message: "Faile to remove People" });
            }
            else {
                res.json({ message: "Success remove People" });
            }
        });
    },

    thatname: function (req, res) {
        Peopel1995.findOne({name:req.params.name}, function(err, user) {
            if (err) {
                console.log("Returned error", err);
                // respond with JSONcopy
                res.json({ message: "Error", error: err })
            }
            else {
                res.json({user});
            }
           });
        
    },
}