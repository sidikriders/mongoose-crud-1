const Book = require('../Models/Books');

function getAllBooks(req, res) {
  Book.find({}, function(err, response) {
    if (err) {
      res.send(err)
    } else {
      res.send(response)
    }
  })
}

function getOneBook(req, res) {
  Book.findOne({
    _id: req.params.id
  }, function(err, response) {
    if (err) res.send(err);
    res.send(response)
  })
}

function createBook(req, res) {
  Book.create({
    isbn: req.body.isbn,
    title: req.body.title,
    author: req.body.author,
    category: req.body.category,
    stock: req.body.stock
  }, function(err, response) {
    if (err) res.send(err);
    res.send("1 Buku telah ditambah")
  })
}

function deleteBook(req, res) {
  Book.remove({
    _id: req.params.id
  }, function(err, response) {
    if (err) res.send(err);
    res.send(response)
  })
}

function updateBook(req, res) {
  Book.updateOne({
    _id:req.params.id
  },{
    isbn: req.body.isbn,
    title: req.body.title,
    author: req.body.author,
    category: req.body.category,
    stock: req.body.stock
  }, function(err, response) {
    if (err) res.send(err);
    res.send(response)
  })
}

module.exports= {
  getAllBooks,
  getOneBook,
  createBook,
  deleteBook,
  updateBook
}
