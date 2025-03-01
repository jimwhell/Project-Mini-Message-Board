const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");

const messages = [
  {
    id: "b52c6e1e-427a-453f-9a32-0bf3eb0ba5b2",
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    id: "7f0d10a9-472f-4d78-aa5b-415f77d2b41d",
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

router.get("/message/:id", (req, res) => {
  const messageId = req.params.id;
  const targetMessage = messages.find((message) => message.id === messageId);
  res.render("messageDetail", { message: targetMessage, links: links });
});

router.get("/new", (req, res) => {
  res.render("form", { links: links });
});

router.post("/new", (req, res) => {
  const { authorName, message } = req.body;

  const newMessage = {
    id: uuidv4(),
    text: message,
    user: authorName,
    added: new Date(),
  };

  messages.push(newMessage);
  res.redirect("/");
});

module.exports = router;
