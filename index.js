var express = require('express');
var bodyParser = require('body-parser');
var helmet = require('helmet');
var compression = require('compression');
var app = express();

app.disable('x-powered-by');
app.enable('view cache');

app.set('views', './views');
app.set('view engine', 'pug');

// Setting static content
app.use('/public', express.static('app'));
app.use('/public', express.static('node_modules'));
app.use('/public/assets', express.static('assets'));
app.use('/public/views', express.static('views'));

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
app.get('*', function(req, res) {
	res.render('index');
});

/**
 * Starting the server
 */
app.listen(8080, function() {
	console.log(`
        Front-end started on port 8080 in dev mode,
        but it will be loaded in 8081 for BrowserSync.
    `);
});
