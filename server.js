let express = require("express");
let path = require("path");

let app = express();

let PORT = process.env.PORT || 8000;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.use("/images", express.static(__dirname + '/appdata/images/'))

console.log(__dirname)

app.listen(PORT, function() {
    console.log("App is listening on PORT", PORT)
})

