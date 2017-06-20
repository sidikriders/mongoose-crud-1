const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;

let bookSchema = new Schema({
  isbn: String,
  title: String,
  author: String,
  category: String,
  stock: Number
})

var Book = mongoose.model("Book", bookSchema)

module.exports = Book
