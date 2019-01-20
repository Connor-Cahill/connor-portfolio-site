const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');

const app = express();


//  Middleware Setup:
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//  Setups views:
app.use(express.static('public'))
app.engine('hbs', exphbs({
    extname: 'hbs', 
    defaultLayout: 'main', 
    layoutsDir: __dirname + '/views/layouts',
    partialsDir  : [
        //  path to your partials -- partials wouldn't render without this 
        __dirname + '/views/partials',
    ]
}));
app.set('view engine', 'hbs');

//  Database Connections:
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/connor-portfolio-site', { useNewUrlParser: true });
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error'));
mongoose.Promise = global.Promise;

//  setup controllers:
require('./controllers/index.controller')(app);
require('./controllers/project.controller')(app);


//  setup server:
app.listen(3000, () => console.log('Be Listenin on da 3000'));

module.exports = app;


