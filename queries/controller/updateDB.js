var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;
var url = require('./utils/url').url;

function updateEmail(user_name,oldEmail,newEmail)
{
  MongoClient.connect(url,{ useNewUrlParser: true },function(err, db) {
    if (err) throw err;
    var dbo = db.db("veg_users");
    var myquery = { "email": oldEmail }; //find the user we need to update doesnt need .str
    var newvalues = { $set: {"email": newEmail } };
    dbo.collection("users").updateOne(myquery, newvalues, function(err, res) {
      if (err) throw err;
      console.log("Email Updated");
      db.close();
    });
  });
}

//Update password
function updatePassword(user_name,email,newpassword)
{
  MongoClient.connect(url,{ useNewUrlParser: true },function(err, db) {
    if (err) throw err;
    var dbo = db.db("veg_users");
    var myquery = { "email": email }; //find the user we need to update
    var newvalues = { $set: {"password": newpassword } };
    dbo.collection("users").updateOne(myquery, newvalues, function(err, res) {
      if (err) throw err;
      console.log("Password Updated");
      db.close();
    });
  });
}

//update the description of a plant
function updatePlantInfo(plantID,newDescription)
{
  MongoClient.connect(url,{ useNewUrlParser: true },function(err, db) {
    if (err) throw err;
    var dbo = db.db("veg_users");
    var myquery = { "plantID": plantID }; //find the user we need to update
    var newvalues = { $set: {"plantDescription": newDescription } };
    dbo.collection("plants").updateOne(myquery, newvalues, function(err, res) {
      if (err) throw err;
      console.log("Description Updated");
      db.close();
    });
  });
}

function updatePlantName(plantID,newName)
{
  MongoClient.connect(url,{ useNewUrlParser: true },function(err, db) {
    if (err) throw err;
    var dbo = db.db("veg_users");
    var myquery = { "plantID": plantID }; //find the user we need to update
    var newvalues = { $set: {"plantName": newName } };
    dbo.collection("plants").updateOne(myquery, newvalues, function(err, res) {
      if (err) throw err;
      console.log("Plant Name Updated");
      db.close();
    });
  });
}
