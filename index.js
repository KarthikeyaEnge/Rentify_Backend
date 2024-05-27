const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT;
const cors = require("cors");

app.use(cors());

app.use(express.json());

app.route("/").get((req, res) => {
  res.send("running");
});

app.use("/rentify", require("./Routers/Dbroute"));

app.listen(PORT, () => {
  console.log(`Server running in port:${PORT}`);
});
