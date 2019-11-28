const mongoose = require('mongoose')


const sampleSchema = new mongoose.Schema({
  supplier: {type: String, required: true},
  product: {type: String, required: true},
  price: {type: Number, required: true}
})

module.exports = mongoose.model('Sample', sampleSchema)
