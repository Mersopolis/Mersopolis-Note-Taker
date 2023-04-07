const express = require("express");

// Import our modular routers for /notes and /diagnostics
const notesRouter = require("./api/notes");

const app = express();

app.use("/api/notes", notesRouter);

module.exports = app;
