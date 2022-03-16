const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();

app.use(bodyParser.json());

const events = [];

app.post("/events", (req, res) => {
  const event = req.body;

  events.push(event);
  console.log("Thiss event inside the general eventss functrion", event);

  //For posts
  axios.post("http://post-clusterip-srv:4000/events", event).catch((err) => {
    console.log("Inside post event");
    console.log(err.message);
  });

  //For comments
  axios.post("http://comments-srv:4001/events", event).catch((err) => {
    console.log(err.message);
    console.log("Inside comments event");
  });

  //For Query
  axios.post("http://query-srv:4002/events", event).catch((err) => {
    console.log(err.message);
    console.log("Inside query event");
  });

  //For moderation
  axios.post("http://moderation-srv:4003/events", event).catch((err) => {
    console.log(err.message);
    console.log("Insside moderation");
  });

  res.send({ status: "OK" });
});

app.get("/events", (req, res) => {
  res.send(events);
});

app.listen(4005, () => {
  console.log("Listening on 4005");
});
