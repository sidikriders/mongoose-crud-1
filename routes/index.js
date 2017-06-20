var express = require('express');
var router = express.Router();
var bookCont = require('../Controllers/bookController')
var custCont = require('../Controllers/custController')
var transCont = require('../Controllers/transController')

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

router.get('/trans', transCont.getAllTransactions)
router.get('/trans/:id', transCont.getOneTransaction)
router.post('/trans', transCont.createTransaction)
router.delete('/trans/:id', transCont.deleteTransaction)
router.put('/trans/:id', transCont.updateTransaction)

module.exports = router;
