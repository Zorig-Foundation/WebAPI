var mongoose = require("mongoose");
mongoose.Promise = require("bluebird");
var Form_Schema = require("./Schema/FormSchema");
var User_Schema = require("./Schema/UserInfo");


// try {
mongoose.connect(
  "mongodb+srv://WebBack:tdvq5LZNV8VdsVsD@cluster0.homa41h.mongodb.net/Test?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("successs");
  }
);



var removePromises = [
  Form_Schema.deleteMany({}),
  User_Schema.deleteMany({}),
];

Promise.all(removePromises)
  .then(function () {
    User_Schema.create({
      fname:"Sanchir",
      personelid:"0",
      lname:"sanchir",
      status:"not graded"
      
    }).then(function (userObj) {
      userObj.save();
      console.log("go");
    })

        // Read the PDF file as a data buffer
        Form_Schema.create({
          fname:"Lkhasuren",
          lname:"sanchir",
          age: "21",
          personelid:"0",
          mail: "sanchir@gmial.com",
          phone: "BUdaagin dugaar",
            address: "HOME",
          univesity_name: "NUM",
          sex: "er",
          avarage_point: "700",
          salbar_surguuli:"KHISHUS",
          mergejil: "IT",
          grade: "90",
          esse: "test"
        })
          .then(function (userObj) {
            userObj.save();
            console.log("go");
          })
          .catch(function (err) {
            console.error("Error create user", err);
          });
    })
  .catch(function (err) {
    console.error("Error create schemaInfo", err);
  });
