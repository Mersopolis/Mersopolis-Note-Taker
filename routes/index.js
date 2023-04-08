const express = require('express');
const notesRoutes = require("./notesRoutes");

const app = express();

app.use("/notesRoutes", notesRoutes);

module.exports = app;
