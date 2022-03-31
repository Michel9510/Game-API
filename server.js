const express = require("express")
const app = express()
const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:3000/Games", { useNewUrlParser: true })

const db = mongoose.connection
db.on("error", (error) => console.error(error))
db.once("open", () => console.log("connected to Database"))


app.listen(3000, () => console.log("server started"))

app.use(express.json())

app.use("/game", require("./routes/games"))