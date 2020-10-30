const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path')
const app = express();
const session = require('express-session');

/* EJS route imports */
const loginRoute = require('./controllers/login');
const signupRoute = require('./controllers/register');
const dashboardRoute = require('./controllers/dashboard')
const dashboardEjsRoute = require('./controllers/dashboardEjs');
const signupHandler = require('./controllers/signupHandler');
const getAllStaff = require('./controllers/Apis/staffFetchApi');
const editStaffEjs = require('./controllers/editStaffEjs');
const editStaff = require('./controllers/editstaff');
const createStaffEjs = require('./controllers/createStaffEjs');
const createStaff = require('./controllers/createStaff');
const deleteStaff = require('./controllers/deleteStaff');
const logout = require('./controllers/logout');

//middlewares
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(session({
        secret: `Secret@string%`,
        resave: false,
        saveUninitialized: false,
        cookie:{
            maxAge: 2 * 60 * 60 * 1000
        }
    })
);
mongoose.set('returnOriginal', false);

//Ejs Routes
app.get('/', loginRoute);
app.get('/signup', signupRoute);
app.get('/dashboard', dashboardEjsRoute);
app.get('/getAllStaff', getAllStaff);
app.get('/editform', editStaffEjs);
app.get('/createStaff', createStaffEjs);
app.get('/deleteform', deleteStaff);
app.get('/logout', logout);
app.post('/dashboard', dashboardRoute);
app.post('/signup', signupHandler);
app.post('/editstaff', editStaff);
app.post('/createStaff', createStaff);

mongoose.connect(`mongodb+srv://admin:admin619@cluster0.mthwn.mongodb.net/teamapp?retryWrites=true&w=majority`)
                .then(result => {
                    app.listen('3000', ()=> console.log("server started"));
                })
