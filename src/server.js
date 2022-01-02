/**
 * Create an Express application server and connect to MongoDB Atlas remote database (DB-as-a-Service). Use middleware layer to route to paths.
 */

 let express = require('express');
 let app = express();
 let mongoose = require('mongoose');
 let morgan = require('morgan');
 let bodyParser = require('body-parser');
 let config = require('config'); //load db location from db options

//server variables
let port = 8080;

//Import routes
const usersRoute = require('./controllers/userApi');

//db options
let options = {
    server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } },
    replset: { socketOptions: { keepAlive: 1, connectTimeoutMS : 30000 } }
  };


//DB Connect
mongoose.connect(
    config.DBHost,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log("Connected to Database")
);
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));


//don't show the log when it is test to avoid too many messages
if(config.util.getEnv('NODE_ENV') !== 'test') {
    //use morgan to log at command line
    app.use(morgan('combined')); //'combined' outputs the Apache style LOGs
}

//Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Route middleware urls
app.use('/api/v1/users', usersRoute);
app.listen(port);
console.log("Listening on port " + port);

module.exports = app;