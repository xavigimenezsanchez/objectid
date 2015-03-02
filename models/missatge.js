var db = require("../db");
var Missatge = db.model('Missatge', {
            username: {
                type: db.Schema.Types.ObjectId,
                ref: 'Usuari',
                required: true
            },
            body: {
                type: String,
                required: true
            },
            date: {
                type: Date,
                required: true,
                default: Date.now
            }
    });

module.exports = Missatge;

