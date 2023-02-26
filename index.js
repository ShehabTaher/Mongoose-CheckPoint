const mongoose = require("mongoose")
const dotenv = require("dotenv")
dotenv.config()

let createPerson = require('./tools/createPerson')
let createMany = require('./tools/createMany')
let findPeople = require('./tools/findPeople')
let findOnePerson = require('./tools/findOnePerson')
let findPersonById = require('./tools/findPersonById')
let findByIdUpdate = require('./tools/findByIdUpdate')
let findOneAndUpdate = require('./tools/findOneAndUpdate')
let findByIdAndRemove = require('./tools/findByIdAndRemove')
let removeMany = require('./tools/removeMany')
let chainSearch = require('./tools/chainSearch')

 const MONGO_URI = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.cyukvup.mongodb.net/test?retryWrites=true&w=majority`

mongoose.connect(MONGO_URI, {useNewUrlParser: true})

mongoose.connection.on("error", function(error) {
  console.log(error)
})

mongoose.connection.on("open", function() {
  console.log("Connected to shehab MongoDB database.")
})


// createPerson("shehab", 29, ["pizza"]);


// createMany([
//             {
//                 name: 'ahmed',
//                 age: 15,
//                 favoriteFoods: ["Cheese Burger","burritos"]
//             },{
//                 name: 'menna',
//                 age: 19,
//                 favoriteFoods: ["Cheese Burger","burritos"]
//             },
//             {
//                 name: 'momen',
//                 age: 25,
//                 favoriteFoods: ["Cheese Burger","burritos"]
//             },
//             {
//                 name: 'Ibrahim',
//                 favoriteFoods: ["Pizza","burritos"]
//             },
//             {
//                 name: 'Radwa',
//                 age: 28,
//                 favoriteFoods: ["shawerma","burritos"]
//             }
//         ]
//     )

    // findPeople();

    
// findOnePerson(
//     {favorateFoods:"Cheese Burger"}
// )




// findPersonById("63fb6e011737ce6958b4b24c");


// findByIdUpdate("63fb6e011737ce6958b4b250","chesse burger")




// findOneAndUpdate("shehab", 29 )

  

// findByIdAndRemove("61b001998deeec881107bc58")



// removeMany("menna")


// chainSearch("burritos")
