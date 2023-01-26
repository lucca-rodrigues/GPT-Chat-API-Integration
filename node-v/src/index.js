// create base app express app.
const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const endpoint = "https://api.openai.com/v1/engines/davinci/completions";
const apiKey = "";
const prompt = "What is the capital of France?";

axios.defaults.headers.common["Authorization"] = `Bearer ${apiKey}`;
axios.defaults.headers.post["Content-Type"] = "application/json";

app.post("/question", (req, res) => {
  const data = {
    prompt: req.body.question,
    max_tokens: 1000,
  };
  axios
    .post(endpoint, data)
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
