const express = require("express");
const router = express.Router();
const { Members } = require("../models");

router.post("/Members", async (req, res) => {
    const NewMembers = req.body.members;
    await Members.create(NewMembers);
    res.json(Members);
  });

  router.get("/getAllMembers", async (req, res) => {
    const listOfMembers = await Members.findAll();
    res.json({listOfMembers: listOfMembers});
  });
  
  router.delete('/Members/:id', (req, res) => {
    const membersId = req.params.id;
    Members.destroy({
      where: { id: membersId }
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
