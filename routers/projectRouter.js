const express = require("express");
const router = express.Router();
const projectDB = require("../data/helpers/projectModel");

router.get("/", (req, res) => {
  projectDB
    .get()
    .then(projects => res.status(200).json(projects))
    .catch(err => res.status(500).json({ message: "Projects Irretrievable" }));
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  projectDB
    .get(id)
    .then(project => {
      if (project) {
        res.status(200).json(project);
      } else {
        res.status(500).json({ message: "ID does not exist" });
      }
    })
    .catch(err => res.status(500).json({ message: "Project Irretrievable" }));
});

router.post("/", (req, res) => {
  const { name, description } = req.body;
  if (!name || !description) {
    res.status(400).json({
      message: "Please provide a name and description for the project"
    });
  } else {
    projectDB
      .insert(req.body)
      .then(project => {
        res.status(201).json(project);
      })
      .catch(err => {
        res.status(500).json({
          message: "Error ocurred while saving project to the database"
        });
      });
  }
});

router.put("/:id", (req, res) => {
  const { name, description } = req.body;
  if (!name || !description) {
    res.status(400).json({
      message: "Please provide a name and description for the project"
    });
  } else {
    projectDB
      .update(req.params.id, req.body)
      .then(post => {
        if (post) {
          res.status(200).json(post);
        } else {
          res.status(404).json({
            message: "ID does not exist"
          });
        }
      })
      .catch(err => {
        res.status(500).json({ error: "Project was not removed" });
      });
  }
});

router.delete("/:id", (req, res) => {
  projectDB
    .remove(req.params.id)
    .then(count => {
      if (count) {
        res.status(200).json(count);
      } else {
        res.status(404).json({ message: "ID does not exist" });
      }
    })
    .catch(err => {
      res.status(500).json({ error: "Project was not removed" });
    });
});

module.exports = router;
