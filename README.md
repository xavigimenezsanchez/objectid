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