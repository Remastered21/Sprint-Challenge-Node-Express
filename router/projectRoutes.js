const express = require("express");

const db = require("../data/helpers/projectModel");

const router = express.Router();

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
    .then(foundProject => {
      if (foundProject.length !== 0) {
        res.json(foundProject);
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
    .then(projectAct => {
      if (projectAct.length !== 0) {
        res.json(projectAct);
      } else {
        res.status(404).json({ message: "Project actions do not exist." });
      }
    })
    .catch(err => {
      res.status(500).json({ error: err });
    });
});

router.post("/", (req, res) => {
  const newProject = req.body;

  db
    .insert(newProject)
    .then(response => {
      res.status(201).json(response);
    })
    .catch(err => {
      res.status(500).json({ error: "Could not save new project to database" });
    });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;

  db.get(id).then(response => {
    let deletedProj = { ...response };
    db
      .remove(id)
      .then(response => {
        res.status(200).json(deletedProj);
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
  const updatedProj = req.body;

  db
    .update(id, updatedProj)
    .then(response => {
      res.status(200).json(response);
    })
    .catch(err => {
      res.status(500).json({ error: err });
    });
});

module.exports = router;
