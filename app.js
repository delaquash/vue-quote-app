const express = require('express');
const  mongoose  = require('mongoose');
const bodyParser = require('body-parser');

// express app
const app = express();


// mongoDB URI
const URI ="mongodb://delaquarsh:Equarshie85@vue-quote-app-shard-00-00.tt7jr.mongodb.net:27017,vue-quote-app-shard-00-01.tt7jr.mongodb.net:27017,vue-quote-app-shard-00-02.tt7jr.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-2lxzr9-shard-0&authSource=admin&retryWrites=true&w=majority"

// routes
app.get('/', (req, res) => {
    res.send("Welcome to a new struggle")
});

const QuotesRoute = require('./routes/quotes.js');
app.use('/quotes', QuotesRoute);
app.post('/quotes/new', QuotesRoute)


// database
const connectDB = async () => {
try {
      const conn = await mongoose.connect(URI, {
          useNewUrlParser: true,
          useUnifiedTopology: true
      });
      console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
      console.log(`Error: ${err.message}`);
      process.exit(1);
  }
};
connectDB();

// Body Parser middleware
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

// server
app.listen(5000, console.log("Listening on port 5000"));