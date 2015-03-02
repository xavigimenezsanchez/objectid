# Exemple d'ús de mongoose.Schema.Types.ObjectId


En el model Missatge declarem el camp "username" de la següent forma:
```javascript
username: {
    type: db.Schema.Types.ObjectId,
    ref: 'Usuari',
    required: true
}
```
Observa que el tipus és ObjectId i a més necessitem el camp 'ref' on indiquem de quin tipus d'id es tracta

Després per fer el post del missatge és mongoose qui s'encarrega de pasar la cadena que li enviem a ObjectId

A l'hora de recuperar els missatges, mongoose ens dóna l'oportunitat de poder treure la informació del missatge i de les dades del usuari que l'ha creat afegint al objecte que retorna find() el mètode .populate()

```javascript
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
```