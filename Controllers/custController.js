const Customer = require('../Models/Customers');

function getAllCustomers(req, res) {
  Customer.find({}, function(err, response) {
    if (err) {
      res.send(err)
    } else {
      res.send(response)
    }
  })
}

function getOneCustomer(req, res) {
  Customer.findOne({
    _id: req.params.id
  }, function(err, response) {
    if (err) res.send(err);
    res.send(response)
  })
}

function createCustomer(req, res) {
  Customer.create({
    name: req.body.name,
    memberID: req.body.memberID,
    address: req.body.address,
    zipcode: req.body.zipcode,
    phone: req.body.phone
  }, function(err, response) {
    if (err) res.send(err);
    res.send("1 Customer telah ditambah")
  })
}

function deleteCustomer(req, res) {
  Customer.remove({
    _id: req.params.id
  }, function(err, response) {
    if (err) res.send(err);
    res.send(response)
  })
}

function updateCustomer(req, res) {
  Customer.updateOne({
    _id:req.params.id
  },{
    name: req.body.name,
    memberID: req.body.memberID,
    address: req.body.address,
    zipcode: req.body.zipcode,
    phone: req.body.phone
  }, function(err, response) {
    if (err) res.send(err);
    res.send(response)
  })
}

module.exports = {
  getAllCustomers,
  getOneCustomer,
  createCustomer,
  deleteCustomer,
  updateCustomer
}
