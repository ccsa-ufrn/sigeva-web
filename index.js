var express = require('express');
var bodyParser = require('body-parser');
var helmet = require('helmet');
var compression = require('compression');
var app = express();

app.disable('x-powered-by');
app.enable('view cache');

app.set('views', './');
app.set('view engine', 'pug');

// Setting static content
app.use('/public', express.static('app'));
app.use('/public/files', express.static('files'));
app.use('/public/js', express.static('app/js'));
app.use('/public', express.static('node_modules'));
app.use('/public', express.static('systemjs'));
app.use('/public/templates', express.static('templates'));

// Setting body parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Setting helmet
app.use(helmet());

// Setting compression - G-Zip
app.use(compression());

/**
 * Routes definitions
 */
app.get('/dashboard*', function(req, res) {
	res.render('dashboard');
});

app.get('*', function(req, res) {
	res.render('index');
});

/**
 * Starting the server
 */
app.listen(8080, function() {
	console.log('Front-end started on port 8080.');
});
