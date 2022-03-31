const app = require("express")()
const Games = require("./models/Games")

app.get("/", (req, res) => {
  res.redirect("/games")
})

app.get("/games", (req, res) => {
  Games.find({})
    .then(games => {
      res.json(games)
    })
})

app.get("/games/:id", (req, res) => {
  Games.findById(require.params.id)
    .then(games => {
      res.json(games)
    })
})

app.post("/games", (req, res) => {
  Games.create(req.body)
    .then(games => {
      res.json(games)
    })
})

app, listen(3000, () => {
  console.log("listening")
})