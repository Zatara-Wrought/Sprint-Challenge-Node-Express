const express = require("express");
const router = express.Router();
const actionDB = require("../data/helpers/actionModel");

router.get("/", (req, res) => {
  actionDB
    .get()
    .then(actions => res.status(200).json(actions))
    .catch(err => res.status(500).json({ message: "Actions Irretrievable" }));
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  actionDB
    .get(id)
    .then(action => {
      if (id) {
        res.status(200).json(action);
      } else {
        res.status(404).json({ message: "Action ID does not exist " });
      }
    })
    .catch(err => res.status(500).json({ message: "Action Irretrievable" }));
});

router.post("/", (req, res) => {
  const { project_id, description, notes } = req.body;
  if (!project_id || !description || !notes) {
    res
      .status(400)
      .json({ message: "Must include a project id, description, and notes." });
  } else {
    actionDB
      .insert(req.body)
      .then(action => {
        res.status(201).json(action);
      })
      .catch(err => {
        res.status(500).json({ message: "Could not save" });
      });
  }
});

router.put("/:id", (req, res) => {
  const { project_id, description, notes } = req.body;
  if (!project_id || !description || !notes) {
    res.status(400).json({
      message: "Must include a project id, description, and notes."
    });
  } else {
    actionDB
      .update(req.params.id, req.body)
      .then(action => {
        if (action) {
          res.status(200).json(action);
        } else {
          res.status(404).json({
            message: "Action ID does not exist"
          });
        }
      })
      .catch(err => {
        res.status(500).json({ error: "Action Unremovable" });
      });
  }
});

router.delete("/:id", (req, res) => {
  actionDB
    .remove(req.params.id)
    .then(count => {
      if (count) {
        res.status(200).json(count);
      } else {
        res.status(404).json({ message: "Action ID does not exist" });
      }
    })
    .catch(err => {
      res.status(500).json({ error: "Action Unremovable" });
    });
});

module.exports = router;
