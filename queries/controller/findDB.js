var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;
var url = require('./utils/url').url;


//prints out the first user in the data set
function findFirst()
{
  MongoClient.connect(url,{ useNewUrlParser: true }, function(err, db) {
    if (err) throw err;
    var dbo = db.db("veg_users");
    dbo.collection("users").findOne({}, function(err, result) {
      if (err) throw err;
      console.log(result.name);
      db.close();
    });
  });
}
//gets all users and their info from the user table
function getAllUsers()
{
  MongoClient.connect(url,{ useNewUrlParser: true }, function(err, db) {
    if (err) throw err;
    var dbo = db.db("veg_users");
    dbo.collection("users").find({}).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
      db.close();
    });
  });
}

function getAllPlants()
{
  MongoClient.connect(url,{ useNewUrlParser: true }, function(err, db) {
    if (err) throw err;
    var dbo = db.db("veg_users");
    dbo.collection("plants").find({}).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
      db.close();
    });
  });
}

//gets the userID for the passed user, verified by username and email
//https://docs.mongodb.com/manual/reference/method/ObjectId/
function getUserID(username,email)
{

    MongoClient.connect(url,{ useNewUrlParser: true }, function(err, db) {
    if (err) throw err;
    var dbo = db.db("veg_users");
    dbo.collection("users").findOne({"name":username,"email":email}, function(err, result) {
      if (err) throw err;
      print((String(result._id)));
      return result._id.valueOf;
      db.close();
    });
  });
}


function main()
{

  username = "Rob Stark";
  email = "theyoungwolf@gmail.com";
  getUserID(username,email);


}
