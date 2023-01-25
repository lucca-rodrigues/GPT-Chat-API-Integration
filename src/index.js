// create base app express app.
const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const openai = require("openai");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const endpoint = "https://api.openai.com/v1/engines/davinci/completions";
const apiKey = "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";
const prompt = "What is the capital of France?";

axios.defaults.headers.common["Authorization"] = `Bearer ${apiKey}`;
axios.defaults.headers.post["Content-Type"] = "application/json";

// import routes
// const routes = require("./routes");

// set up routes
// app.use("/", routes);
app.post("/question", (req, res) => {
  const data = {
    prompt: req.body.question,
    max_tokens: 1000,
    // temperature: 0.1,
  };
  axios
    .post("https://api.openai.com/v1/engines/davinci/completions", data)
    .then((response) => {
      console.log("response.data:", response.data);
      const responseData = response.data;
      res.status(200).send(responseData);
    })
    .catch((error) => {
      console.log(error);
    });
});

// start server
app.listen(3000, () => {
  console.log("App listening on port 3000!");
});
