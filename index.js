const express = require('express');
const session = require('express-session');
const {name}= require('ejs');
const expressLayouts = require('express-ejs-layouts')
const path = require('path');
const port = 3000;
const sassMiddleware = require('node-sass-middleware');
const MongoStore = require('connect-mongodb-session')(session);
const flash = require('connect-flash');
const customMware = require('./config/middleware');

const app = express();


const db = require('./config/mongoose');
const blogs = require('./model/blog');


app.use(sassMiddleware({
    src: './assets/scss',
    dest: './assets/css',
    debugger: true,
    outputStyle: 'expanded',
    prefix: '/css'
}));



app.use(express.urlencoded());

app.use(expressLayouts);
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static('./assets'));



app.use(session({
    secret:'geeksforgeeks',
    saveUninitialized: true,
    resave: true
}));


app.use(flash());
// app.use(customMware.setFlash);

app.use('/', require('./routes'));

app.listen(port, function(err){
    if(err){
        console.log('Error in running the server', err);
    }

    console.log('Yup! My express server is running on port: ', port);
});