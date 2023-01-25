// comments are used for mongoDB
// no comments for mongoose

// const MongoClient = require('mongodb').MongoClient;
// const assert = require('assert');

const mongoose =  require('mongoose');

// ---> Connection URL
// const url = 'mongodb://localhost:27017';
//
// //Database name
// const dbName = 'fruitsDB'
//
// // Create a new MongoClient
// const client = new MongoClient(url);
//
// // Use connect method to connect server
// client.connect(function(err){
//   assert.equal(null,err);
//   console.log("Connected successfully to server");
//
//   const db = client.db(dbName);
//
//   findDocuments(db,function(){
//     client.close();
//   });
//
// });

//---> Connection URL using mongoose

mongoose.connect("mongodb://localhost:27017/fruitsDB");

// Inserting in doc
// const insertDocuments = function(db,callback){
//   // Get the Documents collection
//   const collection = db.collection('fruits');
//   // Insert some insertDocuments
//   collection.insertMany([
//     {
//        name: "Apple",
//        score: 8,
//        review: "Great fruit"
//     },
//     {
//        name: "Orange",
//        score: 6,
//        review: "Waah"
//     },
//     {
//        name: "Banana",
//        score: 9,
//        review: "Mast"
//     }
//   ],function(err,result){
//     assert.equal(err,null);
//     // assert.equal(3, result.result.n);
//     // assert.equal(3, result.ops.length);
//     console.log("Inserted 3 documents into the collection");
//     callback(result);
//   });
// }

// creating new doc using mongoose
const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "No name!!"]
  },
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

const Fruit = mongoose.model("Fruit",fruitSchema);

const fruit = new Fruit ({

  rating: 9,
  review: "Sahi Sahi !"
});

const kiwi = new Fruit ({
  name: "kiwi",
  rating: 8,
  review: "Ok !"
});


const orange = new Fruit ({
  name: "orange",
  rating: 8,
  review: "Good !"
});


const banana = new Fruit ({
  name: "banana",
  rating: 10,
  review: "wooh !"
});

const pineApple = new Fruit ({
  name: "pineApple",
  score: 1,
  review: "chiii !"
});

pineApple.save();

const strawberry = new Fruit ({
  name: "strawberry",
  score: 5,
  review: "ishhh !"
});

strawberry.save();

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favFruit: fruitSchema
});

const Person = mongoose.model("Person",personSchema);

// const person = new Person ({
//   name : "Amy",
//   age: 12,
//   favFruit: pineApple
// });

Person.updateOne({name: "Amy"},{favFruit: strawberry},function(err){
  if(err)
    console.log(err);
  else
    console.log("Successfully updated favfruit");
});

// person.save();

// fruit.save();
// Fruit.insertMany([kiwi,orange,banana],function(err){
//   if(err)
//     console.log(err);
//   else
//     console.log("Successfully saved all the fruits to fruisDB");
// });

// const findDocuments = function(db,callback){
//   const collection=db.collection('fruits');
//
//   collection.find({}).toArray(function(err,fruits){
//     assert.equal(err,null);
//     console.log("Found the following records");
//     console.log(fruits)
//     callback(fruits);
//   });
// }

//read from mongoose

Fruit.find(function(err,fruits){
  if(err)
      console.log(err);
    else{
      // mongoose.connection.close();
        fruits.forEach(function(fruit){
          console.log(fruit.name);
      });

    }
});

//update using mongoose
// Fruit.updateOne({_id:"61b08d7972c34a9272a64283"},{name: "Peach"},function(err){
//   if(err)
//       console.log(err);
//     else{
//       console.log("Successfully updated!");
//     }
// });

//delete using mongoose
// Fruit.deleteOne({name: "Peach"},function(err){
//   if(err)
//       console.log(err);
//   else{
//       console.log("Successfully deleted!");
//     }
//   });

  // Person.deleteMany({name: "Jon"},function(err){
    //   if(err)
    //       console.log(err);
    //   else{
    //       console.log("Successfully deleted all!");
    //   }
    // });
