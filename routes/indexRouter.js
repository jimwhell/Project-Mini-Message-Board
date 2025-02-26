const express = require("express");
const router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

const links = [
  {
    name: "Home",
    route: "/",
  },
  {
    name: "Add New Message",
    route: "/new",
  },
];

router.get("/", (req, res) => {
  res.render("index", { messages: messages, links: links });
});

router.get("/new", (req, res) => {
  res.render("form", { links: links });
});

router.post("/new", (req, res) => {
  const { authorName, message } = req.body;
  messages.push({ text: message, user: authorName, added: new Date() });
  res.redirect("/");
});

module.exports = router;
