const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;

let custSchema = new Schema({
  name: String,
  memberID: {
    type: String,
    unique: true
  },
  address: String,
  zipcode: String,
  phone: String
})

var Customer = mongoose.model("Customer", custSchema)

module.exports = Customer
