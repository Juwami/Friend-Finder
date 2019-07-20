let friends = require("../data/friends")

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friends)
    });

    app.post("/api/friends", function (req, res) {
        console.log(req.body)
        let user = req.body

        for (i = 0; i < friends.length; i++) {
            let bestMatch = null;
            let highScore = 0;
            console.log(user.scores)
            console.log(friends[i].scores)

            for (x = 0; x < friends[x].scores.length; x++) {
                let differences = 0
                differences += Math.abs(user.scores[x] - friends[i].scores[x])

                console.log(differences)
                // console.log(friends[i])
                // console.log(user.scores)


                if (highScore < differences || bestMatch === null) {
                    highscore = differences;
                    bestMatch = friends[i]
                }
            }
        }

        console.log(highscore)

        friends.push(user);
        console.log(bestMatch)
        res.json(bestMatch)
    });


};