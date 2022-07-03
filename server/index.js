const express = require("express");
const cors = require("cors");
const app = express();

app.use(
  cors({
    origin: "*",
    methods: "GET",
  })
);

const routes = require("./routes/index");

// middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/", routes.home);
app.use("/wifi", routes.wifi);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`on port ${port}`));
