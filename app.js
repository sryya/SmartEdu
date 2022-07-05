const express= require('express');
const mongoose=require('mongoose')
const pageRoute=require('./routes/pageRoute')
const courseRoute=require('./routes/courseRoute')
//connect DB
mongoose.connect('mongodb://localhost/smart-edu-tr');


const app = express();
//routes
app.use('/',pageRoute)
app.use('/courses',courseRoute)
//template engine
app.set("view engine","ejs");
//Middleware
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended:true}))
const port =3000;
app.listen(port)