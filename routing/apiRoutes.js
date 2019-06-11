
var profilesArray = require("../data/friends");

module.exports = function(app){
    // console.log("this is working");
         //The below CL shows that profilesArray is being properly pulled via module
         // console.log(profilesArray);


    app.get("/api/profiles", function(req, res){
        console.log(profilesArray); //WORKING! going to /api/profiles is showing array
        // console.log(req)
    ;
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
                console.log(difference); //This calculates the difference between playerInteger results vs profilesArray results
                totalDifference += difference
            }            

            console.log("Total difference", totalDifference) //This sums the total difference for each person. 
            if (totalDifference < comparisonNumber){
                bestProfileIndex = i;
                comparisonNumber = totalDifference;
            }
        }
        console.log("Lowest comparison number", comparisonNumber); //This shows the BEST match person
        console.log("index of the best profile match", bestProfileIndex); //shows the index of the person with the best match. 
        console.log("THIS SHOWS THE BEST BITCH OF ALL", profilesArray[bestProfileIndex]);
        res.json(profilesArray[bestProfileIndex]) //THIS SHOWS ON THE API PAGE THE PERSON WITH THE BEST MATCH!!!

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
