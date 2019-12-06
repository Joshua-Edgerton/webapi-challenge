const db = require("../../data/helpers/projectModel");

const validateProjectId = (req, res, next) => {
    const id = req.params.id;

    db.get(id)
    .then(post => {
        if (post){
            req.projectId = id;
            next();
        } else res.status(404).json({ message: `Project with id:${id} does not exist.` })
    })
    .catch(err => res.status(500).json({ error: `Failed to get project with id of ${id}.` }))
}

const validateProject = (req, res, next) => {
    const projectObj = req.body;

    if (!Object.getOwnPropertyNames(req.body).length) {
        res.status(400).json({ errorMessage: "Please provide information in the body of the request." })
    } else if (!projectObj.name || !projectObj.description) {
        res.status(400).json({ errorMessage: "Please provide a name and description in the request." })
    } else next();
}

module.exports = {
    validateProjectId,
    validateProject
}