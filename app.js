var express = require('express');
var app = express();

app.set('view engine','ejs');

app.get('/',function(req,res){
	res.send("<html><body>Porta de Noticias</body></html>");


});

app.get('/tecnologia',function(req,res){
	res.send("<html><body>Porta de tecnologia</body></html>");


});


app.listen(3000, function(){

	console.log("Servidor rodando com Express");

});




