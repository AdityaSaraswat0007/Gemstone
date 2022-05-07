// var rollV, nameV, genderV, addressV;
var nameV, passV, emailV;
function readFom() {
  nameV = document.getElementById("username").value;
  emailV = document.getElementById("email").value;
  passV = document.getElementById("password").value;

  console.log(nameV, emailV, passV);
}

document.getElementById("signedUp").onclick = function () {
  readFom();
};

//   firebase
//     .database()
//     .ref("peoples/" + emailV)
//     .set({
//       //   rollNo: rollV,
//       //   name: nameV,
//       //   gender: genderV,
//       //   address: addressV,
//       name: nameV,
//       email: emailV,
//       pass: passV,
//     });
//   alert("Data Inserted");
//   document.getElementById("nameV").value = "";
//   document.getElementById("emailV").value = "";
//   document.getElementById("passV").value = "";
// };

// document.getElementById("read").onclick = function () {
//   readFom();

//   firebase
//     .database()
//     .ref("student/" + rollV)
//     .on("value", function (snap) {
//       document.getElementById("roll").value = snap.val().rollNo;
//       document.getElementById("name").value = snap.val().name;
//       document.getElementById("gender").value = snap.val().gender;
//       document.getElementById("address").value = snap.val().address;
//     });
// };

// document.getElementById("update").onclick = function () {
//   readFom();

//   firebase
//     .database()
//     .ref("student/" + rollV)
//     .update({
//       //   rollNo: rollV,
//       name: nameV,
//       gender: genderV,
//       address: addressV,
//     });
//   alert("Data Update");
//   document.getElementById("roll").value = "";
//   document.getElementById("name").value = "";
//   document.getElementById("gender").value = "";
//   document.getElementById("address").value = "";
// };
// document.getElementById("delete").onclick = function () {
//   readFom();

//   firebase
//     .database()
//     .ref("student/" + rollV)
//     .remove();
//   alert("Data Deleted");
//   document.getElementById("roll").value = "";
//   document.getElementById("name").value = "";
//   document.getElementById("gender").value = "";
//   document.getElementById("address").value = "";
// };
