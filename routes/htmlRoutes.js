const { response } = require("express");
const path = require("path");
const router = require("express").Router();

// setting index route
router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/notes.html"));
});
