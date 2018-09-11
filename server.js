require("dotenv").config();
const express = require("express");
const exphbs = require("express-handlebars");
const htmlRoutes = require("./routes/htmlRoutes")
const apiRoutes = require("./routes/apiRoutes")

const app = express();
const PORT = process.env.PORT || 8080;

// USING PUBLIC FOLDER W/ CSS, FRONT END JS, AND IMAGES
app.use(express.static(__dirname + "/public"));

// HANDLEBARS
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// HTML AND API ROUTING
app.use(htmlRoutes);
app.use(apiRoutes);

app.listen(PORT, function () {
    console.log(`Listening on Port ${PORT}`);
})