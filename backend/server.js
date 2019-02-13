const mongoose = require("mongoose");
const express = require("express");
const logger = require("morgan");
const User = require("./user");

const API_PORT = 3001;
const app = express();
const router = express.Router();

// this is our MongoDB database
const dbRoute = "mongodb+srv://dbAdmin:team27woohoo!@codebreakers-tujtz.mongodb.net/CodeBreakers.Users?retryWrites=true"

// connects our back end code with the database
mongoose.connect(
  dbRoute,
  { useNewUrlParser: true }
);

let db = mongoose.connection;

db.once("open", () => console.log("connected to the database"));

// checks if connection with the database is successful
db.on("error", console.error.bind(console, "MongoDB connection error:"));


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
  let user = new User();

  const { passWordHash, email, username } = req.body;

  if (!passWordHash || !email || !username) {
    return res.json({
      success: false,
      error: "INVALID INPUTS"
    });
  }
  user.passWordHash = passWordHash;
  user.email = email;
  user.username = username;
  user.save(err => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});

// append /api for our http requests
app.use("/api", router);

// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));