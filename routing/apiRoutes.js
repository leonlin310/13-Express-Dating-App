
var profilesArray = require("../data/friends");

module.exports = function(app){
    // console.log("this is working");
         //The below CL shows that profilesArray is being properly pulled via module
         // console.log(profilesArray);


    app.get("/api/profiles", function(req, res){
        console.log(profilesArray); //WORKING! going to /api/profiles is showing array
    })

    app.post("/api/profiles", function(req, res){
        console.log(req.body); //WORKING! this should display the object i add from postman
        var playerInteger = req.body
        for (var i = 0; i < playerInteger.scores.length; i++){
            playerInteger.scores[i] = parseInt(playerInteger.scores[i]);
        }

        // console.log("should be able to math now", playerInteger.scores);
        //TODO: bestProfileIndex shows the index of the best friend from the profilesArray. 
        bestProfileIndex = 0;
        comparisonNumber = 99
        // console.log(profilesArray)
        //TODO: Logic, push this object to the profiles Array
        for (var i = 0; i < profilesArray.length; i++){
            //TODO: Set totalDifference in the outer loop to have a different totalDifference per each element in the profilesArray
            var totalDifference = 0;
            for (var x = 0; x < profilesArray[i].scores.length; x++){
                var difference = Math.abs(playerInteger.scores[x] - profilesArray[i].scores[x]);
                console.log(difference);
                totalDifference += difference
            }            

            console.log("Total difference", totalDifference) //This shows the total difference for each person. 
            if (totalDifference < comparisonNumber){
                bestProfileIndex = i;
                comparisonNumber = totalDifference;
            }
            console.log("Lowest comparison number", comparisonNumber);
            console.log("index of the best profile match", bestProfileIndex);
        }
        //Total difference: Leon: 9 // Cindy: 6 // Popcorn: 3 // Teddy: 2
        // profilesArray.push(req.body);
    })
}






  





//TODO: LOGIC!

//TODO: when click on the "find my best match button"
    //TODO: 1. Take the object that the user submitted and go straight to the 'scores' key. Find a way to push your character to the array AFTER it calculates who your friend will be. 

    //TODO: 2. Find a way to grab the numbers in the array and compare them against the numbers in another array. Use a for loop. 
    //TODO: 3. MUST use the absolute value between the two numbers. 
        //TODO: Push this to another array and calculate the sum of it?
    //TODO: 4. Grab the object of the profile with the best match and say that's your new best friend. 
//Posting: 3, 2, 1
    // Leon
//    scores: [
//         5 - 3 = 2
//         5 - 2 = 3
//         5 - 1 = 4
        //total = 9
//     ]
// },
// {
//     profileName: "Cindy",
//     photo: "https://www.google.com",
//     scores: [
//         4 - 3 = 1
//         4 - 2 = 2
//         4 - 1 = 3
        //total = 6
//     ]
// },
// {
//     profileName: "Popcorn",
//     photo: "https://www.google.com",
//     scores: [
//         3 - 3 = 0
//         3 - 2 = 1
//         3 - 1 = 2 
        //total = 3
//     ]
// },
// {
//     profileName: "Teddy",
//     photo: "https://www.google.com",
//     scores: [
//         2 - 3 = 1
//         2 - 2 = 0
//         2 - 1 = 1
        //total = 2


    



    //
// 6. Determine the user's most compatible friend using the following as a guide:

//    * Convert each user's results into a simple array of numbers (ex: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`).
//    * With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the `totalDifference`.
//      * Example:
//        * User 1: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1] = 32`
//        * User 2: `[3, 2, 6, 4, 5, 1, 2, 5, 4, 1] = 33 `
//        * Total Difference: **2 + 1 + 2 =** **_5_**
//    * Remember to use the absolute value of the differences. Put another way: no negative solutions! Your app should calculate both `5-3` and `3-5` as `2`, and so on.
//    * The closest match will be the user with the least amount of difference.