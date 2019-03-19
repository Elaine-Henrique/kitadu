const mongoose = require('mongoose');
const Schema   = mongoose.Schema;


const debtsSchema = new Schema({
  creditor: String,
  total: Number,
  valorporparcelas: Number,
  parceladoem: Number,
  status: String
}, {
  timestamps: true,
});

const Debts = mongoose.model('Debts', debtsSchema);

module.exports = Debts;