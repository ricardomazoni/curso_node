//var msg = require("./mod_teste");
var app = require('./config/server');

var rotaNoticias = require('./app/routes/noticias');
rotaNoticias(app);

app.listen(3000, function(){

	console.log('Servidor On');

});



