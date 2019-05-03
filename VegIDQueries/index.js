import { getAllUsers } from './findDB';
import { newAccount } from './insertDB';
import { updateEmail } from './updateDB';

// project ID = 5c92bc84f2a30baf4b46fea1
var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;


function main()
{
    username = "Rob Stark";
    email = "theyoungwolf@gmail.com";
    newEmail = "greywind@gmail.com";

    getAllUsers();

    updateEmail(username,email,newEmail);

    getAllUsers();

}

main()
