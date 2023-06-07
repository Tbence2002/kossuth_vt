const express = require("express");
const router = express.Router();
const { News } = require("../models");
const bcrypt = require("bcrypt");
const { validateToken } = require("../middlewares/AuthMiddleware");
const { sign } = require("jsonwebtoken");

router.post("/News", async (req, res) => {
    const NewNews = req.body.news;
    await News.create(NewNews);
    res.json(News);
  });

  router.get("/getAllNews", async (req, res) => {
    const listOfNews = await News.findAll();
    res.json({listOfNews: listOfNews});
  });
  
  router.delete('/News/:id', (req, res) => {
    const newsId = req.params.id;
    News.destroy({
      where: { id: newsId }
    })
    .then(() => {
      res.status(200).send({ message: 'A hír sikeresen törölve lett.' });
    })
    .catch(err => {
      console.error(err);
      res.status(500).send({ error: 'Hiba történt a hír törlésekor.' });
    });
  });
  
module.exports = router;
