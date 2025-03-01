const express = require("express");
const app = express();
const path = require("node:path");
const indexRouter = require("./routes/indexRouter");

app.use(express.urlencoded({ extended: true }));
const assetPath = path.join(__dirname, "public");
app.use(express.static(assetPath));
app.use("/", indexRouter);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is listening at port ${PORT}`);
});
