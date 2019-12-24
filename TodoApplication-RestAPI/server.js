let express = require('express'),
    app = express(),
    config = require('./config'),
    port = process.env.PORT || config.port,
    mongoose = require('mongoose'), //created model loading here
    bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.connect(config.database, {
    useMongoClient: true
});
mongoose.Promise = global.Promise;
console.log(mongoose.Promise);

//Adding body parser for handling request and response objects.
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

//Enabling CORS
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods","POST, PUT, GET, DELETE, OPTIONS");
    next();
});

//Initialize app
let initApp = require('./api/app'); //stores the function/variables of app.js in a variable
initApp(app); // executes the functions with a parameter

app.listen(port); //listens to the port
console.log('TODO-LIST APP RESTful API server started on: ' + port);
