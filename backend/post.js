const mongoose = require("mongoose");

let postSchema = new mongoose.Schema({
    text: String,
    author: String,
    github: String,
    tags: Array,
    replies: Array
})

let replySchema = new mongoose.Schema({
    text: String,
    author: String
})

module.exports = mongoose.model('Post', postSchema);