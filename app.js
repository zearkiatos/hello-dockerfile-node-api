var express        = require("express"),
    app            = express(),
    bodyParser     = require("body-parser"),
    methodOverride = require("method-override");

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
};

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(allowCrossDomain);

// API routers
var recurso = express.Router();
recurso.get('/hello', function(req, res) {	
    res.send({
        mensaje: "Hola desarrollador, has logrado completar con éxito el despliegue de la aplicación. Te felicito :D.",
        next: "Ahora sube tu dockerfile a la actividad en coursera para probar que todo funciona correctamente."
    });
});

app.use('/', recurso);

// Start Server
app.listen(3020, function(){
	console.log("Server running on http://localhost:3020");
});