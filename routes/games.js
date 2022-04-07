import { Router } from "express";
import * as controllers from "../controllers/games"

const router = Router();

router.get("/games", controllers.getGames);
router.get("/games/:id", controllers.getGame);
router.post("/games", controllers.createGame);
router.put("/games/:id", controllers.updateGame);
router.delete("/games/:id", controllers.deleteGame);

export default router;