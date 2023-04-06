const express = require("express");

// Import our modular routers for /notes and /diagnostics
const notesRouter = require("./api/notes");
const diagnosticsRouter = require("./api/diagnostics");

const app = express();

app.use("/notes", notesRouter);
app.use("/diagnostics", diagnosticsRouter);

module.exports = app;
