const express = require("express");
const router = express.Router();

const db = require("../data/helpers/projectModel");

router.get("/", (req, res) => {
  db
    .get()
    .then(projects => {
      res.json(projects);
    })
    .catch(err => {
      res.status(500).json({ error: err });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  db
    .get(id)
    .then(projects => {
      if (projects.length !== 0) {
        res.json(projects);
      } else {
        res.status(404).json({ message: "Project does not exist." });
      }
    })
    .catch(err => {
      res.status(404).json({ error: "cannot find" });
    });
});

router.get("/:id/actions", (req, res) => {
  const { id } = req.params;

  db
    .getProjectActions(id)
    .then(projects => {
      if (projects.length !== 0) {
        res.json(projects);
      } else {
        res.status(404).json({ message: "Project does not exist." });
      }
    })
    .catch(err => {
      res.status(500).json({ error: err });
    });
});

router.post('/')

module.exports = router;
