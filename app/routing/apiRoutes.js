let friends = require("../data/friends")

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friends)
    });

    app.post("/api/friends", function (req, res) {
        console.log(req.body)
        let user = req.body
        let bestMatch = null;
        let highScore = 0;
        
        for (i = 0; i < friends.length; i++) {
            console.log(user.scores)
            console.log(friends[i].scores)
            let differences = 0

            for (x = 0; x < friends[x].scores.length; x++) {
                differences += Math.abs(user.scores[x] - friends[i].scores[x])

                // console.log(differences)
                // console.log(friends[i])
                // console.log(user.scores)


                if (bestMatch === null || highscore < differences) {
                    highscore = differences;
                    bestMatch = friends[i]
                }
            }
            console.log("Name of Friend:", friends[i])
            console.log("Compatibility Score:", differences)
        }

        // console.log(highscore)

        friends.push(user);
        console.log("Best Match for User:", bestMatch)
        res.json(bestMatch)
    });


};