const mongoose = require("mongoose");
const findDB = require('./findDB'); //reference file in same folder
const plants = require('../models/plants');
const user = require('../models/user');
var url = require('./utils/url').url;


//list of plants to pupulate into the db
//https://rationalappdev.com/api-backend-with-nodejs-express-and-mongodb-for-react-native-apps/
const plantslist = [
  {
    plantName: "Amaryllis" ,
    plantID: "1001",
    plantImageName: "Amaryllis.jpg" ,
    plantDescription: "Caring, propagation, descriptions and other information for each species is provided." +
                        "Types include foliage, flowering, succulents and cacti. Each indoor plant is given its" +
                        "main common name used and botanical/scientific name.",
  },
  {
    plantName: "African Violet",
    plantID: "1002",
    plantImageName: "AfricanViolet.jpg",
    plantDescription: "African violet care information guide: Belonging to the Saintpaulia Genus with many species." +
                      " Growing conditions, possible problems, pictures and description."
  },
  {
    plantName: "Barberton Daisy ",
    plantID: "1003",
    plantImageName: "BarbertonDaisy.jpg",
    plantDescription: "A flowering pot plant displaying striking flowers."
  },
  {
    plantName: "Beach Spider Lily",
    plantID: "1004",
    plantImageName: "BeachSpiderLily.jpg",
    plantDescription: "This amazing bulb based plant beach spider lily enjoys environments that are downright aquatic and easy to maintain."
  },
  {
    plantName: "Belladonna Lily",
    plantID: "1005",
    plantImageName: "BelladonnaLily.jpg",
    plantDescription: "Also known as the naked lady because of the bare flower stalks that appear without leaves."
  },
  {
    plantName: "Bird Of Paradise",
    plantID: "1006",
    plantImageName: "BirdOfParadise.jpg",
    plantDescription: "The Bird of Paradise is a delightfully easy to care for plant that enjoys warm, balmy days year round."
  },
  {
    plantName: "Blushing Bromeliad",
    plantID: "1007",
    plantImageName: "BlushingBromeliad.jpg",
    plantDescription: "An interesting species from the bromeliad family which produces a red center within the rosette of leaves."
  },
  {
    plantName: "Busy Lizzie ",
    plantID: "1008",
    plantImageName: "BusyLizzie.jpg",
    plantDescription: "Grown for their attractive blooms outdoors (just about everywhere) and indoors when given enough bright light."
  },
  {
    plantName: "Calla Lily",
    plantID: "1009",
    plantImageName: "CallaLily.jpg",
    plantDescription: "Keeping this rhizome happy indoors is a matter of paying attention to some very basic growing conditions."
  },
  {
    plantName: "Coral Berry",
    plantID: "1010",
    plantImageName: "CoralBerry.jpg",
    plantDescription: "Also known as the Christmas berry because it produces bright red berries which last well past Xmas time."
  },
  {
    plantName: "Cyclamen Persicum",
    plantID: "1011",
    plantImageName: "CyclamenPersicum .jpg",
    plantDescription: "A small and attractive flowering pot plant grown during the winter."
  },
  {
    plantName: "Corsage Orchid",
    plantID: "1012",
    plantImageName: "CorsageOrchid.jpg",
    plantDescription: "The Corsage orchid is not the easiest of orchids to care due to its humidity and temperature needs."
  },
  {
    plantName: "Eternal Flame",
    plantID: "1013",
    plantImageName: "EternalFlame.jpg",
    plantDescription: "Named Eternal flame for its attractive yellow bract."
  },
  {
    plantName: "False Shamrock",
    plantID: "1014",
    plantImageName: "FalseShamrock.jpg",
    plantDescription: "A bulbous type species which blooms small trumpet like flowers and has attractive triangular purple leaves."
  },
  {
    plantName: "Flamingo Flower Plant",
    plantID: "1015",
    plantImageName: "FlamingoFlowerPlant.jpg",
    plantDescription: "The beautiful waxed effect flaming flower plant (scientific name: Anthurium scherzerianum)"
                      + "makes a great ornamental plant that stands out looking lush."
  },
  {
    plantName: "Flaming Sword",
    plantID: "1016",
    plantImageName: "FlamingSword.jpg",
    plantDescription: "This species features a red sword like flower head which can grow up to 2ft tall and attractive mottled leaves."
  },
  {
    plantName: "Flowering Maple Plant",
    plantID: "1017",
    plantImageName: "FloweringMaplePlant.jpg",
    plantDescription: "The flowering maple (scientific name: Abutilon hybridum) is part of a large plant genus of flowering and foliage type plants."
  },
  {
    plantName: "Kaffir Lily Plant",
    plantID: "1018",
    plantImageName: "KaffirLilyPlant.jpg",
    plantDescription: "Caring advice and description of the kaffir lily plant, (botanical name: Clivia miniata), also the common name bush lily."
  },
  {
    plantName: "Lollipop Plant",
    plantID: "1019",
    plantImageName: "AfricanViolet.jpg",
    plantDescription: "Also known as the naked lady because of the bare flower stalks that appear without leaves."
  },
  {
    plantName: "Lycaste Orchid",
    plantID: "1020",
    plantImageName: "LycasteOrchid.jpg",
    plantDescription: "There are around 30 species of Lycaste and many of these are hardy and easily obtainable."
  },
  {
    plantName: "Madagascar Jasmine",
    plantID: "1021",
    plantImageName: "Madagascar Jasmine.jpg",
    plantDescription: "A flowering climbing vine which blooms white colored fragrant flowers in the right conditions."
  },
  {
    plantName: "Medusa's Head Plant",
    plantID: "1022",
    plantImageName: "MedusaHeadPlant.jpg",
    plantDescription: "The Caput Medusae has been added to the unusual plant section for it's obvious bizarre look. An air-plant also known as the Medusa's Head"
  },
]

const userslist = [
  {
    name: "Ned Stark",
    username: "lordEddard41",
    userID: "2001",
    password: "winterIsComing",
    email: "wardenOfNorth@sevenkingdoms.org",
  },
  {
    name: "Rob Stark",
    username: "KingInTheNorth",
    userID: "2002",
    password: "greywind",
    email: "theyoungwolf@gprotonmail.com",
  },
  {
    name: "Arya Stark",
    username: "noOne01",
    userID: "2003",
    password: "ValarMorgulus",
    email: "noone@noone.org",
  },
  {
    name:"Sansa Stark",
    username: "youreAllIdiots",
    userID: "2003",
    password: "lemoncakes",
    email: "ladyOFNorth@sevenkingdoms.org",
  },
  {
    name: "Jon Snow",
    username: "JustABastard",
    userID: "2004",
    password: "IknowNothing",
    email: "bastardWinterfell@gmail.com",
  },
  {
    name: "Bran Stark",
    username: "3iRaven",
    userID: "2005",
    password: "youLookedBeautiful",
    email: "threeeyedraven@yahoo.com"
  }
]


// Connect to MongoDB
mongoose.connect('mongodb+srv://zance1054:beautifulI8@veghubclusteralpha-bem9t.mongodb.net/test?retryWrites=true');

// Go through each plant
plantslist.map(data => {
  // Initialize a model with plant data
  const newplants = new plants(data);
  // and save it into the database
  newplants.save();
});

// Go through each user
userslist.map(data => {
  // Initialize a model with user data
  const newuser = new user(data);
  // and save it into the database
  newuser.save();
});
