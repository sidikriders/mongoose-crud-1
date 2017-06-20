const Transaction = require('../Models/Transactions');

function getAllTransactions(req, res) {
  Transaction.find({}).populate('booklist').exec( (err, rec) => {
    if (err) res.send(err);
    res.send(rec)
  })
}

function getOneTransaction(req, res) {
  Transaction.findOne({
    _id: req.params.id
  }).populate('booklist').exec( (err, rec) => {
    if (err) res.send(err);
    res.send(rec)
  })
}

function createTransaction(req, res) {
  // let booklisting = req.body.booklist
  // booklisting.forEach(data => {
  //   return mongoose.Types.ObjectId(data)
  // })
  Transaction.create({
    memberID: req.body.memberID,
    days: req.body.days,
    out_date: new Date(req.body.out_date),
    due_date: new Date(req.body.due_date),
    in_date: new Date(req.body.in_date),
    fine: req.body.fine,
    booklist: req.body.booklist
  }, function(err, response) {
    if (err) res.send(err)
    res.send(response)
  })
  // res.send(booklisting)
}

function deleteTransaction(req, res) {
  Transaction.remove({
    _id: req.params.id
  }, function(err, response) {
    if (err) res.send(err)
    res.send(response)
  })
}

function updateTransaction(req, res) {
  Transaction.updateOne({
    _id:req.params.id
  },{
    memberID: req.body.memberID,
    days: req.body.days,
    out_date: new Date(req.body.out_date),
    due_date: new Date(req.body.due_date),
    in_date: new Date(req.body.in_date),
    fine: req.body.fine,
    booklist: req.body.booklist
  }, function(err, response) {
    if (err) res.send(err);
    res.send(response)
  })
}


module.exports={
  getAllTransactions,
  getOneTransaction,
  createTransaction,
  deleteTransaction,
  updateTransaction
}
