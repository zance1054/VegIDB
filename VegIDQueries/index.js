import { getAllUsers } from 'findDB';
import { newAccount } from 'insertDB';

// project ID = 5c92bc84f2a30baf4b46fea1
var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;


function main()
{
  username = "Jon Snow";
  email = "imjustabastard@gmail.com";
  pswd = "theWhiteWolf";

  newAccount(username,email,pswd);
  getAllUsers();
}

main()
