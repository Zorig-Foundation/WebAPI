const form = require("../Schema/FormSchema.js");
const user = require("../Schema/UserInfo.js");
const db = require("../Schema/dbconnection.js");


// Assuming you have a buffer named "myBuffer"


function getStatusbyId
(request, response) {
  response.header("Access-Control-Allow-Origin", "*");
  response.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  let data = request.query.id
  console.log(data)

  user.find({"personalid":data}, (err, res) => {
    if (err !== null) {
      response.status(500).send("ERROR");
    } else {
      if (res.length == 0) {
        response.status(400).send("no data");
      } else {
        let datas = JSON.parse(JSON.stringify(res));
        response.status(200).send(datas);
      }
    }
  });
}

function createdForm
(request, response) {
  response.header("Access-Control-Allow-Origin", "*");
  response.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );

  let data = request.body;
  console.log(typeof(data))

  form.create({
    fname: data.fname,
    lname: data.lname,
    age: data.age,
    personelid: data.personelid,
    mail: data.mail,
    phone: data.phone,
    address: data.address,
    university_name: data.university_name,
    sex: data.sex,
    average_point: data.average_point,
    salbar_surguuli: data.salbar_surguuli,
    mergejil: data.mergejil,
    grade: data.grade,
    esse: data.esse
  }).then(function (userObj) {
    console.log("creating")
    userObj.save();
    response.status(200).send("Succesfull created")
  })
  .catch(function (err) {
    console.log(err)
    response.status(400).send("Can not  create, Some value is missing")
  });
}

``


module.exports = {
  getStatusbyId,
  createdForm

};
