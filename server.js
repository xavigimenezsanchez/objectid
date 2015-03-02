var express = require("express");
var bodyParser = require("body-parser");
var Missatge = require("./models/missatge");
var Usuari = require("./models/usuaris");

var app = express();
app.use(bodyParser.json());

app.post("/api/usuaris", function (req,res,next) {
    var usuari = new Usuari({
        username : req.body.username,
        nom: req.body.nom,
        cognoms: req.body.cognoms
    });
    usuari.save(function(err, usuari) {
        if (err) { return next(err) }
        res.status(201).json(usuari);
    });
});

app.get("/api/usuaris", function(req, res, next) {
    Usuari.find(function(err, usuari) {
        if (err) {
            return next(err);
        }
        res.status(201).json(usuari);
    });
    
});


app.get("/api/missatges", function(req, res, next) {
    Missatge.find()
        .populate('username')
        .exec(function(err, misstages) {
        if (err) {
            return next(err);
        }
        res.json(misstages);
    });
    
});

app.post("/api/missatges", function (req,res,next) {
    
    var missatge = new Missatge({
        username : req.body.username,
        body: req.body.body
    });
    missatge.save(function(err, missatge) {
        if (err) { return next(err) }
        res.status(201).json(missatge);
    });
});

app.listen(process.env.PORT, function() {
    console.log('Server listening on', process.env.PORT);
});

