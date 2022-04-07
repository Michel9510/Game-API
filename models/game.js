import mongoose from "mongoose";
const Schema = mongoose.Schema;

let Game = new Schema({
  image: String,
  title: String,
  genre: String,
  year: Number,
  description: String
});

export default mongoose.model("games", Game);

