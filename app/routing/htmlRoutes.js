let path = require("path");

module.exports = function (app) {

    // route to send to survey.html
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"))
    });

    // default catch all route for anything but survey to go directly to home.html
    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"))
    });

};