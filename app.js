//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const homeStartingContent = "Work in progress!";
const aboutContent = "About details coming soon!";
const contactContent = "Contact details coming soon";

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.set('view engine', 'ejs');

let postarray = [];

app.get("/",function(req,res){
  res.render("home",{
    start:homeStartingContent,
    posts:postarray
  });

})

app.get("/contact",function(req,res){
  res.render("contact",{start:contactContent});
})

app.get("/posts/:postid",function(req,res){
  console.log(req.params.postid);

})


app.get("/about",function(req,res){
  res.render("about",{start:aboutContent});
})

app.get("/compose",function(req,res){
  res.render("compose");
})

app.post("/compose",function(req,res){
  let posttitle = req.body.title;
  let posttext = req.body.posttext;

  var post = {
    ptitle:posttitle,
    ptext:posttext
  };

  postarray.push(post);
  res.redirect("/");

})














app.listen(3000, function() {
  console.log("Server started on port 3000");
});
