const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const express = require("express");
const logger = require("morgan");
const User = require("./user");
const cors = require("cors")

const API_PORT = 3001;
const app = express();

var allowCrossDomain = function(req, res, next){
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
}

//app.use(allowCrossDomain);
app.use(cors());
const router = express.Router();

//response.addHeader("Access-Control-Allow-Origin", "*");


// this is our MongoDB database
const dbRoute = "mongodb+srv://dbAdmin:team27woohoo!@codebreakers-tujtz.mongodb.net/CodeBreakers?retryWrites=true"

// connects our back end code with the database
mongoose.connect(
  dbRoute,
  { useNewUrlParser: true }
);

let db = mongoose.connection;

db.once("open", () => console.log("connected to the database"));

// checks if connection with the database is successful
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// bodyParser, parses the request body to be a readable json format
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger("dev"));

// this is our get method
// this method fetches all available data in our database
router.get("/getUser", (req, res) => {
  User.find((err, user) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, user: user });
  });
});

// this is our update method
// this method overwrites existing data in our database
router.post("/updateUser", (req, res) => {
  const { id, update } = req.body;
  User.findOneAndUpdate(id, update, err => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});

// this is our delete method
// this method removes existing data in our database
router.delete("/deleteUser", (req, res) => {
  const { username } = req.body;
  User.findOneAndDelete(username, err => {
    if (err) return res.send(err);
    return res.json({ success: true });
  });
});

// this is our create method
// this method adds new data in our database
router.post("/putUser", (req, res) => {
  
  const {email, username, passWordHash} = req.body;
  console.log(req.body)
  //check that fields are not blank
  if (!email) {
    console.log("email cannot be blank")
    return res.send({
      success: false,
      message: 'Error: Email cannot be blank.'
    });
  }
  if (!username) {
    console.log("username cannot be blank")
    return res.send({
      success: false,
      message: 'Error: Username cannot be blank.'
    });
  }
  if (!passWordHash) {
    console.log("password cannot be blank")
    return res.send({
      success: false,
      message: 'Error: Password cannot be blank.'
    });
  }

  //check if account with email already exists
  User.find({
    email: email
  }, (err, previousUsers) => {
    if (err) {
      console.log("server error occurred")
      return res.send({
        success: false,
        message: 'Error: Server error'
      });
    } else if (previousUsers.length > 0) {
      console.log("email already exists")
      return res.send({
        success: false,
        message: 'Error: Account with email already exist.'
      });
    }
    //check if account with username already exists
    User.find({
      username: username
    }, (err, previousUsers) => {
      if (err) {
        console.log("a server error occurred")
        return res.send({
          success: false,
          message: 'Error: Server error'
        });
      } else if (previousUsers.length > 0) {
        console.log("username already exists")
        return res.send({
          success: false,
          message: 'Error: Account with username already exist.'
        });
      }
      let user = new User();

      user.email = email;
      user.username = username;
      user.passWordHash = passWordHash;
      user.save(err => {
        if (err){
        console.log("hey, an error occured:");
        console.log(err);
        return res.json({ success: false, error: err });
        }
        console.log("this should be the email:");
        console.log(user.email);
        return res.json({ success: true });
      });
  });
  
  });
  
});

// append /api for our http requests
app.use("/api", router);

// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));