
var profilesArray = require("../data/friends");

module.exports = function(app){
    console.log("this is working");
         //The below CL shows that profilesArray is being properly pulled via module
         // console.log(profilesArray);


    app.get("/api/profiles", function(req, res){
        console.log(profilesArray); //WORKING! going to /api/profiles is showing array
    })

    app.post("/api/profiles", function(req, res){
        // console.log(req.body); //WORKING! this should display the object i add from postman
        //TODO: Logic, push this object to the profiles Array
        profilesArray.push(req.body);
    })
}