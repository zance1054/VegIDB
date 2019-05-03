var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;

var url = "mongodb+srv://zance1054:beautifulI8@veghubclusteralpha-bem9t.mongodb.net/test?retryWrites=true";


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

function getUserID(username,email)
{

    MongoClient.connect(url,{ useNewUrlParser: true }, function(err, db) {
    if (err) throw err;
    var dbo = db.db("veg_users");
    dbo.collection("users").findOne({"name":username,"email":email}, function(err, result) {
      if (err) throw err;
      console.log((String(result._id)));
      return String(result._id);
      db.close();
    });
  });
}

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
