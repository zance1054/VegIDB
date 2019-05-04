
var MongoUserName = "zance1054";
var MongoPSWD = "beautifulI8";
mongoose.connect('mongodb+srv://'+ MongoUserName +':' + MongoPSWD + '@veghubclusteralpha-bem9t.mongodb.net/test?retryWrites=true');


const app = express();
