const mongoose = require("mongoose");

let tagListSchema = new mongoose.Schema({
   tags: Array
})

module.exports = mongoose.model('TagList', tagSchema);