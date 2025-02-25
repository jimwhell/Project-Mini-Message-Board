const express = require("express");
const app = express();
const path = require("node:path");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const assetPath = path.join(__dirname, "public");
app.use(express.static(assetPath));

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Server is listening at port ${PORT}`);
});
