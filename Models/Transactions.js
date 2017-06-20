const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;

let transSchema = new Schema({
  memberID: {
    type: Schema.Types.ObjectId,
    ref: "Customer"
  },
  days: Number,
  out_date: Date,
  due_date: Date,
  in_Date: Date,
  fine: Number,
  booklist: [{
    type: Schema.Types.ObjectId,
    ref: "Book"
  }]
})

var Transaction = mongoose.model("Transaction", transSchema)

module.exports = Transaction
