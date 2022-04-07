import db from "./db/connection";
import routes from "./routes/index";
import express from "express";
import cors from "cors";
import logger from "morgan";
import chalk from "chalk";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use(logger("dev"));

app.use("/api", routes);

db.on("connected", () => {
  console.clear();
  console.log(chalk.blue("connected to MongoDB"));
  app.listen(PORT, () => {
    process.env.NODE_ENV === "production"
      ? console.log(`Express server running in production on port ${PORT}\n\n`) :
      console.log(
        `Express server running in development on: http://localhost:${PORT}`
      );
  });
});