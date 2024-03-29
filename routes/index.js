import { Router } from "express"
import gamesRoutes from "./games.js"

const router = Router();

router.get("/", (req, res) =>
  res.send("api root"));

router.use("/", gamesRoutes);

export default router;
