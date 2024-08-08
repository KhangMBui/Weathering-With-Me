var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var axios = require("axios");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Serve the public folder as static files
// app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "public")));

// Render the index template with default values for weather and error:
app.get("/", (req, res) => {
  res.render("index", { weather: null, error: null });
});

// Handle the /weather route
app.get("/weather", async (req, res) => {
  // Get the city from the query parameters
  const city = req.query.city;
  const apiKey = "9496b1253db5f8718358a50073437bd6";
  const APIUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;
  let weather;
  let error = null;
  try {
    const response = await axios.get(APIUrl);
    weather = response.data;
  } catch (error) {
    weather = null;
    error = "Error! Please try again.";
  }
  // Render the index template with the weather data and error message:
  res.render("index", { weather, error });
});
// Start the server and listen on port 3000 or value of PORT environment variable
const port = process.env.port || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
