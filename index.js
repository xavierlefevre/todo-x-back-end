var express         = require('express'),
    methodOverride  = require('method-override'),
    indexRoutes     = require('./routes/index'),
    bodyParser      = require('body-parser'),
    config          = require('./config/config'),
    cors            = require('cors'),
    app             = express();

// Parse the body of requests
app.use(bodyParser.urlencoded({extended: true}));
// Add DELETE and PUT methods
app.use(methodOverride("_method"));

// Serve the Angular/Ionic app
app.use(express.static('../todo-x-ionic/www'));

// Allow cross-origin calls
app.use(cors());

// Routes
app.use('/',indexRoutes);

// Launch Server
app.set('port', config.port);
app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
