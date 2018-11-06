require("dotenv").config();
const express = require("express");
// const exphbs = require("express-handlebars");
const htmlRoutes = require("./routes/htmlRoutes")
const apiRoutes = require("./routes/apiRoutes")
const bodyParser = require("body-parser");
const morgan = require("morgan");
const path = require("path");

const PORT = process.env.PORT || 8080;
const app = express();
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// // USING PUBLIC FOLDER W/ CSS, FRONT END JS, AND IMAGES
// app.use(express.static(__dirname + "/public"));

// HANDLEBARS
// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}
//api stuff here
app.use("/api", apiRoutes);

app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "./client/public/index.html"));
    // res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function () {
    console.log(`Listening on Port ${PORT}`);
})