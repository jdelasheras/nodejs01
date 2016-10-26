var http = require('http');
var fs = require('fs');


http.createServer(function (request, response) {
	response.writeHead(200, {'Content-Type': 'text/plain'});
	switch(request.url){
		case '/':
			plantilla ="inicio.html";
			break;
		case '/nodejs':
			plantilla = "sobrenode.html"
			break;
		default:
			plantilla = "404.html"
			break;
	}

	fs.readFile("./plantillas/" + plantilla , function( error, datos){
		response.write(datos);
		response.end();
	});
	
}).listen(3000);



