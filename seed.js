const Games = require("./models/Games")
const gamesJSON = require("./games.json")

let gamesArr = [];

gamesJSON.forEach((game) => {
  gamesArr.push(game)
})
console.log(gamesArr())

Games.deleteMany({})
  .then(() => {
    Games.create(gamesArr)
      .then(gamesArr => {
        console.log(gamesArr)
        process.exit()
      })
  })