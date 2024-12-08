const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const { readdirSync } = require("fs");
const app = express();


//middleware
app.use(morgan("dev"));
app.use(cors());
app.use(express.json())

readdirSync("./routes").map((item) =>
  app.use("/api", require("./routes/" + item))
);

app.listen(5000, () => console.log("server is running on port 5000"));
