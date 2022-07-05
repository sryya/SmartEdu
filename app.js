const express= require('express');
const bodyParser = require('body-parser')
const mongoose=require('mongoose');

const pageRoute=require('./routes/pageRoute')
const courseRoute=require('./routes/courseRoute')
//connect DB
mongoose.connect('mongodb://localhost/smart-edu-tr');


const app = express();
// parse application/x-www-form-urlencoded

// parse application/json

//Middleware
app.use(express.static("public"));
// app.use(express.json());
// app.use(express.urlencoded({extended:true}));
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: false })) // for parsing application/x-www-form-urlencoded

//routes
app.use('/',pageRoute)
app.use('/courses',courseRoute)
//template engine
app.set("view engine","ejs");

const port =3000;
app.listen(port)