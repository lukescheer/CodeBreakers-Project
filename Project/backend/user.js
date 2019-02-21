// /backend/user.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// this will be our users's data structure 
const UserSchema = new Schema(
  {
    username: String,
    email: String, 
    passWordHash: String
    
    //created: { type: Date, default : () => new Date()},
  },
  { timestamps: true }
);

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("User", UserSchema);