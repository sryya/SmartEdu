const express= require('express');
const app = express();
const pageRoute=require('./routes/pageRoute')

//routes
app.use('/',pageRoute)
//template engine
app.set("view engine","ejs");
//Middleware
app.use(express.static("public"));
const port =3000;
app.listen(port,()=>{
   var a=['a','b','c'];
   a[100]='fox';
    console.log(a.length)
})