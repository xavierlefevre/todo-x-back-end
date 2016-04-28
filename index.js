var express         = require('express'),
    methodOverride  = require('method-override'),
    indexRoutes     = require('./routes/index'),
    bodyParser      = require('body-parser'),
    app             = express();

// Parse the body of requests
app.use(bodyParser.urlencoded({extended: true}));
// Add DELETE and PUT methods
app.use(methodOverride("_method"));

// Serve the Angular/Ionic app
app.use(express.static('../todo-x-ionic/www'));

// Routes
app.use('/',indexRoutes);

// Launch Server
app.set('port', process.env.PORT || 8080);
app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
