//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const homeStartingContent = "Work in progress!";
const aboutContent = "About details coming soon!";
const contactContent = "Contact details coming soon";

const app = express();

app.set('view engine', 'ejs');

app.get("/",function(req,res){
  res.render("home",{start:homeStartingContent});
})

app.get("/contact",function(req,res){
  res.render("contact",{start:contactContent});
})


app.get("/about",function(req,res){
  res.render("about",{start:aboutContent});
})


app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));














app.listen(3000, function() {
  console.log("Server started on port 3000");
});
