const express = require("express");
const server = express();
const cors = require("cors")
const projectsRouter = require("./routes/projects/projectsRouter");
const actionsRouter = require("./routes/actions/actionsRouter")


const logger = (req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} to ${req.path} from ${req.get('host')}`);
    next();
}
server.use(cors());
server.use(express.json());
server.use(logger);
server.use("/api/projects", projectsRouter);
server.use("/api/actions", actionsRouter);

server.listen(4300, () => console.log("\n***** Server is now listening on port 4300 *****\n"))