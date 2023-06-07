const express = require("express");
const router = express.Router();
const { Admins } = require("../models");
const bcrypt = require("bcrypt");
const { validateToken } = require("../middlewares/AuthMiddleware");

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await Admins.findOne({ where: { username: username } });
  if (user)
    bcrypt.compare(password, user.password).then((match) => {
      if (!match)
        res.json({ error: "Rossz kombináció!" });
      else {
        req.session.user = user;
        res.send(user);
        console.log(req.session.user)
      }
    });
  else {
    res.json({ error: "A felhasználó nem létezik!" });
  }
  router.get("/getAdmins", async (req, res) => {
    const listOfAdmins = await Admins.findAll();
    res.json({listOfAdmins: listOfAdmins});
  });
});

router.get("/", (req, res) => {
  if (req.session.user) {
    res.send({ loggedIn: true, user: req.session.user })
  } else {
    res.send({loggedIn: false});
  }
})

router.get("/auth", validateToken, (req, res) => {
  res.json(req.user);
});

router.post("/torles", async (req, res) => {
  const felhasznalok = req.body.adatok.felhasznalok;
  for (i = 0; i < felhasznalok.length; i++) {
    console.log(felhasznalok[i]);
    await Admins.destroy({ where: { id: felhasznalok[i] } });
  }
  await Admins.destroy({ where: { id: felhasznalok[0] } });
  res.send("Sikeres törlés!");
});
module.exports = router;
