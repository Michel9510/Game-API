const mongoose = require('../connections')
const Schema = mongoose.Schema

const gamesSchema = new Schema({
  title: String,
  genre: String,
  year: Number,
  description: String
})

Games = mongoose.model("Games", gamesSchema)

module.exports = Games