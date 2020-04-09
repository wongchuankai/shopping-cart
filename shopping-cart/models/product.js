var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    //image, title,description, price
    imagePath : {type: String, required: true},
    title : {type: String, required: true},
    description : {type: String, required: true},
    price : {type: Number, required: true},
});

//creating a blueprint that actually work.
module.exports = mongoose.model('Product', schema);
