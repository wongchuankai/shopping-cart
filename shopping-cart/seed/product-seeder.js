var Product = require('../models/product');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/shopping',{useNewUrlParser: true});

var products = [
    new Product({
        imagePath: "https://upload.wikimedia.org/wikipedia/en/e/e9/CallofDutyModernWarfare%282019%29.jpg",
        title: 'Call of Duty Video game',
        description: 'shooting game',
        price : 12
    }),
    new Product({
        imagePath: 'https://flarefiles.com/wp-content/uploads/2019/06/FIFA-2019.jpeg',
        title: 'FIFA 2019',
        description: 'soccer game',
        price: 12
    }),
    new Product({
        imagePath: 'https://cdn.pocket-lint.com/r/s/1200x/assets/images/144028-games-feature-pubg-image1-zkpdntqgbc.jpg',
        title: 'PUBG',
        description: 'Battle Royale gameplay',
        price: 12
    }),
    new Product({
        imagePath: 'https://lh3.googleusercontent.com/proxy/SRYw0yBKK41B6i9o-rdiNT3jawcBOC9Do421CM2WfZQTAFsBlXCaCy0377Rc4W1bPn1H4GYiX5Pd4iIDdYSRRxXNkzsQh4A0e-AEosUY6bCXfKARGke1VZmj',
        title: 'League of Legends',
        description: 'MOBA game',
        price: 12
    })];
    
var done = 0;    
for (var i = 0; i < products.length; i++) {
    products[i].save(function(err, result) {
        done++;
        if (done === products.length) {
            exit();
        }
    });

}

function exit() {
    mongoose.disconnect();
}

// not the right place for -> mongoose.disconnect();