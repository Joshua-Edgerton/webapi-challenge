const router = require("express").Router();

const dbActions = require("../../data/helpers/actionModel");
const {
    validateActionId
} = require("./actionsMiddleware");

router.get("/:id", validateActionId, (req, res) => {
    dbActions.get(req.actionId)
    .then(action => res.status(200).json(action))
    .catch(err => res.status(500).json({ error: "Failed to get action." }))
})

router.put("/:id", validateActionId, (req,res) => {
    dbActions.update(req.actionId, req.body)
    .then(updated => res.status(201).json(updated))
    .catch(err => res.status(500).json({ error: "Failed to update action." }))
})

router.delete("/:id", validateActionId, (req, res) => {
    dbActions.remove(req.actionId)
    .then(removed => res.status(200).json(removed))
    .catch(err => res.status(500).json({ error: `Failed to delete action with id:${req.actionId}.` }))
})

module.exports = router;