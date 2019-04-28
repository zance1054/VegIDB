var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;

var MongoUserName = "myUserName";
var MongoPSWD = "myPswd";
var url = "mongodb+srv://"+ MongoUserName +":" + MongoPSWD + "beautifulI8@veghubclusteralpha-bem9t.mongodb.net/test?retryWrites=true";

function updateEmail(user_name,oldEmail,newEmail)
{
  console.log(getUserID(user_name,oldEmail));

  MongoClient.connect(url,{ useNewUrlParser: true },function(err, db) {
    if (err) throw err;
    var dbo = db.db("veg_users");
    var myquery = { "_id": getUserID(user_name,oldEmail) }; //find the user we need to update doesnt need .str
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
  var userID = getUserID(user_name,email);
  MongoClient.connect(url,{ useNewUrlParser: true },function(err, db) {

    if (err) throw err;
    var dbo = db.db("veg_users");
    var myquery = { "name": user_name }; //find the user we need to update
    var newvalues = { $set: {"password": newpassword } };
    dbo.collection("users").updateOne(myquery, newvalues, function(err, res) {
      if (err) throw err;
      console.log("Password Updated");
      db.close();
    });
  });
}

function main()
{

}
