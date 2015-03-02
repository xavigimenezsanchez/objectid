var db = require("../db");
var Usuari = db.model('Usuari', {
            username: {
                type: String,
                required: true
            },
            nom: {
                type: String,
                required: true
            },
            cognoms: {
                type: String,
                required: true
            }
    });

module.exports = Usuari;

