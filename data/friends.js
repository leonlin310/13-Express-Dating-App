//all api POSTs and api GETs will flow to this file

// 5. You should save your application's data inside of `app/data/friends.js` as an array of objects. Each of these objects should roughly follow the format below.
// ```json
// {
//   "name":"Ahmed",
//   "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
//   "scores":[
//       5,
//       1,
//       4,
//       4,
//       5,
//       1,
//       2,
//       5,
//       4,
//       1
//     ]
// }


var profilesArray = [
    {
        profileName: "Leon",
        photo: "https://www.leon.com",
        scores: [
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5
        ]
    },
    {
        profileName: "Cindy",
        photo: "https://www.cindy.com",
        scores: [
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4
        ]
    },
    {
        profileName: "Popcorn",
        photo: "https://www.popcorn.com",
        scores: [
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3
        ]
    },
    {
        profileName: "Teddy",
        photo: "https://www.teddy.com",
        scores: [
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2
        ]
    },
    {
        profileName: "Gordon",
        photo: "https://www.gordon.com",
        scores: [
            3,
            2,
            1,
            2,
            3,
            4,
            5,
            1,
            2,
            5
        ]
    },

];

module.exports = profilesArray;