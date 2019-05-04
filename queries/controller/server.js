const mongoose = require('mongoose');

// Don't forget to set "MONGODB_URI" in ~/server/.env
const uri = process.env.MONGODB_URI || `mongodb+srv://zance1054:beautifulI8@veghubclusteralpha-bem9t.mongodb.net/test?retryWrites=true`;

mongoose
  .connect(uri, { useNewUrlParser: true })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });
