var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var db = require('./database');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// index page 
app.get('/', function (req, res) {
    res.send('Express is running');
});

app.get('/api/products', db.getAllProducts);
app.get('/api/products/:id', db.getProductByID);
app.post('/api/products', db.insertProduct);
app.put('/api/products/:id', db.updateProduct);
app.delete('/api/products/:id', db.deleteProduct);

var port = process.env.PORT || 8080;

app.listen(port, function () {
    console.log('App is running on http://localhost:' + port);
});