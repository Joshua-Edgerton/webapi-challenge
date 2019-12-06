const db = require("../../data/helpers/actionModel");

const validateActionId = (req, res, next) => {
    const id = req.params.id;
    
    db.get(id)
    .then(action => {
        if (action) {
            req.actionId = id;
            next();
        } else res.status(404).json({ errorMessage: `Action with id:${id} does not exist.` })
    })
    .catch(err => res.status(500).json({ error: `Failed to get action with id:${id}.` }))
}

module.exports = {
    validateActionId
}