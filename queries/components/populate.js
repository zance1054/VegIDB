import mongoose from 'mongoose';
import plant from './models/plants';
import user from './models/user';

//list of plants to pupulate into the db
//https://rationalappdev.com/api-backend-with-nodejs-express-and-mongodb-for-react-native-apps/
const plants = [
  {
    plantName: "Amaryllis" ,
    plantImageName: "Amaryllis.jpg" ,
    image :,
    plantDescription: "Caring, propagation, descriptions and other information for each species is provided." +
                        "Types include foliage, flowering, succulents and cacti. Each indoor plant is given its" +
                        "main common name used and botanical/scientific name.",
  },
  {
    plantName: "African Violet",
    plantImageName: "AfricanViolet.jpg",
    image: ,
    plantDescription: "African violet care information guide: Belonging to the Saintpaulia Genus with many species." +
                      " Growing conditions, possible problems, pictures and description."
  },
  {
    plantName: "Barberton Daisy ",
    plantImageName: "BarbertonDaisy .jpg",
    image: ,
    plantDescription: "A flowering pot plant displaying striking flowers.""
  },
  {
    plantName: "Beach Spider Lily",
    plantImageName: "BeachSpiderLily.jpg",
    image: ,
    plantDescription: "This amazing bulb based plant beach spider lily enjoys environments that are downright aquatic and easy to maintain."
  },
  {
    plantName: "African Violet",
    plantImageName: "AfricanViolet.jpg",
    image: ,
    plantDescription: "Also known as the naked lady because of the bare flower stalks that appear without leaves."
  },
]

const users = [
  {
    name: "Ned Stark",
    username: "lordEddard41",
    password: "winterIsComing",
    email: "wardenOfNorth@sevenkingdoms.org",
  },
  {
    name: "Rob Stark",
    username: "KingInTheNorth",
    password: "greywind",
    email: "theyoungwolf@gprotonmail.com",
  }
  {
    name: "Arya Stark",
    username: "noOne01",
    password: "ValarMorgulus",
    email: "noone@noone.org",
  }
  {
    name:"Sansa Stark",
    username: "youreAllIdiots",
    password: "lemoncakes",
    email: "ladyOFNorth@sevenkingdoms.org",
  }
  {
    name: "Jon Snow",
    username: "JustABastard",
    password: "IknowNothing",
    email: "bastardWinterfell@gmail.com",
  }
  {
    name: "Bran Stark",
    username: "3iRaven",
    password: "youLookedBeautiful",
    email: "threeeyedraven@yahoo.com"
  }
]


// Connect to MongoDB
mongoose.connect('mongodb+srv://zance1054:beautifulI8@veghubclusteralpha-bem9t.mongodb.net/test?retryWrites=true');

// Go through each movie
plant.map(data => {
  // Initialize a model with movie data
  const plant = new Plant(data);
  // and save it into the database
  plant.save();
});

// Go through each movie
user.map(data => {
  // Initialize a model with movie data
  const user= new User(data);
  // and save it into the database
  user.save();
});
