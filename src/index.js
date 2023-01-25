// create base app express app.
const express = require("express");
const app = express();

// import routes
const routes = require("./routes");

// set up routes
// app.use("/", routes);

// start server
app.listen(3000, () => {
  console.log("App listening on port 3000!");
});
