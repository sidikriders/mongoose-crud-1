var express = require('express');
var router = express.Router();
var bookCont = require('../Controllers/bookController')
var custCont = require('../Controllers/custController')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/books', bookCont.getAllBooks)
router.get('/books/:id', bookCont.getOneBook)
router.post('/books', bookCont.createBook)
router.delete('/books/:id', bookCont.deleteBook)
router.put('/books/:id', bookCont.updateBook)

router.get('/cust', custCont.getAllCustomers)
router.get('/cust/:id', custCont.getOneCustomer)
router.post('/cust', custCont.createCustomer)
router.delete('/cust/:id', custCont.deleteCustomer)
router.put('/cust/:id', custCont.updateCustomer)

module.exports = router;
