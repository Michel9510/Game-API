import Game from "../models/game.js";

export const getGames = async (req, res) => {
  try {
    const games = await Game.find();
    res.json(games);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const getGame = async (req, res) => {
  try {
    const { id } = req.params;
    const game = await Game.findById(id);

    if (game) {
      return res.json(game);
    }

    res.status(400).json({ message: "Game not found!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const createGame = async (req, res) => {
  try {
    const game = new Game(req.body);
    await game.save();
    res.status(201).json(house);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const updateGame = async (req, res) => {
  const { id } = req.params;
  const game = await Game.findByIdAndUpdate(id, req.body);
  res.status(200).json(game);
};

export const deleteGame = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Game.findByIdAndDelete(id);

    if (deleted) {
      return res.status(200).send("Game deleted!");
    }

    throw new Error("Game not found");
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};