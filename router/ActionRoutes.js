const express = require("express");

const db = require("../data/helpers/actionModel");

const router = express.Router();

router.get("/", (req, res) => {
  db
    .get()
    .then(actions => {
      res.json(actions);
    })
    .catch(err => {
      res.status(500).json({ error: err });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  db
    .get(id)
    .then(actions => {
      if (actions.length !== 0) {
        res.json(actions);
      } else {
        res.status(404).json({ message: "Action does not exist." });
      }
    })
    .catch(err => {
      res.status(404).json({ error: "cannot find" });
    });
});

router.post("/", (req, res) => {
  let newAction = req.body;

  db
    .insert(newAction)
    .then(response => {
      res.status(201).json(response);
    })
    .catch(err => {
      res.status(500).json({ newAction });
    })
    .catch(err => {
      console.log(err);
    });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;

  db.get(id).then(response => {
    let deletedAct = { ...response };
    db
      .remove(id)
      .then(response => {
        res.status(200).json(deletedAct);
      })
      .catch(err => {
        res.status(500).json({
          error: err
        });
      });
  });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const updatedAct = req.body;

  db
    .update(id, updatedAct)
    .then(response => {
      res.status(200).json(response);
    })
    .catch(err => {
      res.status(500).json({ error: err });
    });
});

module.exports = router;
