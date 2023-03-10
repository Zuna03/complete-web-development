const express = require("express");
const https = require("https");
const bodyParser = require("body-parser")
const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html")

});

app.post("/", function(req, res) {
  const query = req.body.cityName;
  const apikey = "eb6d27e91bd9194b3ba021d21b83612d";
  const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apikey + "&units=metric";
  https.get(url, function(response) {
    console.log(response.statusCode);

    response.on("data", function(data) {
      const weatherdata = JSON.parse(data);
      const temp = weatherdata.main.temp;
      const description = weatherdata.weather[0].description;
      const icon = weatherdata.weather[0].icon;
      const urlicon = "http://openweathermap.org/img/wn/" + icon + "@2x.png"
      res.write("<p>The weather is currently " + description + "</p>");
      res.write("<h1>The temp in " + query + " is " + temp + " degree celcius </h1>")
      res.write("<img src=" + urlicon + ">")
      res.send();
    })
  })
})

app.listen(3000, function() {
  console.log("The server is running on port 3000");
})
