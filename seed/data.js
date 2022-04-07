import db from "../db/connection.js";
import Game from "../models/game.js";
import games from "./games.json" assert {type: "json"};

const insertData = async () => {
  //this is to reset the db
  db.dropDatabase();

  // insert the games into the db
  await Game.insertMany(games);

  db.close();
};

insertData();