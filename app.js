//jshint eversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

var items =["buy food", "cook food", "eat food"];
app.set('view engine', "ejs");

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/", function(req,res){
    var today = new Date();

    var options= {
        weekday:'long',
        day :'numeric',
        month:'long'

    };

    var day = today.toLocaleDateString("en-us",options  );

    
    res.render("list", {Kindofday:day, newlistitems : items});
});

app.post("/",function(req,res){
    var item =req.body.newitem;
    items.push(item);

    res.redirect("/");


});



app.listen(3000, function(){
    console.log("server is started on 3000 port");
});