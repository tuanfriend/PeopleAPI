var mongoose = require('mongoose');

var peopleAPISchema = new mongoose.Schema({
    name: { type: String},
},{ timestamps: true })

mongoose.model('People', peopleAPISchema); // We are setting this Schema in our Models as 'User'