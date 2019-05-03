var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;

var MongoUserName = "myUserName";
var MongoPSWD = "myPswd";
var url = "mongodb+srv://"+ MongoUserName +":" + MongoPSWD + "beautifulI8@veghubclusteralpha-bem9t.mongodb.net/test?retryWrites=true";
//delete an account
function deleteAccount(user_name, email)
{
  MongoClient.connect(url,{ useNewUrlParser: true }, function(err, db) {
    if (err) throw err;
    var dbo = db.db("veg_users");
    var myquery = { _id: getUserID() };
    dbo.collection("users").delteOne(myquery, function(err, res) {
      if (err) throw err;
      console.log("User Deleted");
      db.close();
    });
  });
}

//delete a plant (from the db not a favorite)
function deletePlant(user_name, email)
{
  MongoClient.connect(url,{ useNewUrlParser: true }, function(err, db) {
    if (err) throw err;
    var dbo = db.db("veg_users");
    var myquery = { _id: getUserID() };
    dbo.collection("users").delteOne(myquery, function(err, res) {
      if (err) throw err;
      console.log("Plant Deleted");
      db.close();
    });
  });
}
//create a new user
function newAccount(username,pswd, eMail)
{
  MongoClient.connect(url,{ useNewUrlParser: true }, function(err, db) {
    if (err) throw err;
    var dbo = db.db("veg_users");
    var myobj = { name: username, email: eMail, password:pswd };
    dbo.collection("users").insertOne(myobj, function(err, res) {
      if (err) throw err;
      console.log("New User created");
      db.close();
    });
  });
}

//add a plant with a name and the filename of the image for that plant
function newPlant(name, filename)
{
  MongoClient.connect(url,{ useNewUrlParser: true }, function(err, db) {
    if (err) throw err;
    var dbo = db.db("veg_users");
    var myobj = { plantName: name, plantImage: filename};
    dbo.collection("plants").insertOne(myobj, function(err, res) {
      if (err) throw err;
      console.log("New Plant saved");
      db.close();
    });
  });
}

function updatePlantImage(name, plantImage)
{
  MongoClient.connect(url,{ useNewUrlParser: true },function(err, db) {
    if (err) throw err;
    var dbo = db.db("veg_users");
    var myquery = { "plantName": name }; //find the user we need to update doesnt need .str
    var newvalues = { $set: {"image": newEmail } };
    dbo.collection("users").updateOne(myquery, newvalues, function(err, res) {
      if (err) throw err;
      console.log("Email Updated");
      db.close();
    });
  });
}

function encodeImage()
{

}

function decodeImage()
{

}

function getPlantImage(plant)
{
  MongoClient.connect(url,{ useNewUrlParser: true }, function(err, db) {
  if (err) throw err;
  var dbo = db.db("veg_users");
  dbo.collection("plants").findOne({"plantName":plant}, function(err, result) {
    if (err) throw err;

    //decode image String
    var img = decodeImage(result.image);

    console.log(img);

    return result._id.valueOf;
    db.close();
  });
});
}

function main()
{


  updatePlantImage("orchid", plantImage);
  getPlantImage("orchid");


}

main()
