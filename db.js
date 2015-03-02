var mongoose = require("mongoose");
mongoose.connect("mongodb://xavi:patata@ds039441.mongolab.com:39441/prova", function() {
    console.log('Connectat a mongodb');
});

module.exports = mongoose;
