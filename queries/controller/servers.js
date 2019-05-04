var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

var url = require("./utils/url").url;

//views

app.set("views", path.join(__dirname, "view"));
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);

//body bodyParser

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use("/api",functions);\
