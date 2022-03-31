const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:3000/Games", { useNewUrlParser: true });

module.exports = mongoose;