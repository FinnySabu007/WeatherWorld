const express = require("express")
const app = express();
const path = require("path")
const hbs = require("hbs")

//public static path
const static_path = path.join(__dirname,"../views")
// app.use(express.static(static_path))

const template_path = path.join(__dirname,"../templates/views")
const partial_path = path.join(__dirname,"../templates/partials")
app.set("view engine","hbs")
app.set("views",template_path)
hbs.registerPartials(partial_path)


app.get("/",(req,res)=>{

    res.render("index")
    
})

app.get("/weather",(req,res)=>{

    res.render("weather")
    
})

app.get("/about",(req,res)=>{

    res.render("about")
    
})

app.get("*",(req,res)=>{

    res.render("404")
    
})

app.listen(8000,()=>{
    console.log("server is up and is listening to port 8000")
})