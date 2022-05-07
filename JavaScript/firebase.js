
//   const firebaseConfig = {
//     apiKey: "AIzaSyAw7Ay8dDjmS2ZCtqCVh34R1TlQp7eoi8U",
//     authDomain: "signuppage-4594f.firebaseapp.com",
//     databaseURL: "https://signuppage-4594f-default-rtdb.firebaseio.com",
//     projectId: "signuppage-4594f",
//     storageBucket: "signuppage-4594f.appspot.com",
//     messagingSenderId: "848489842214",
//     appId: "1:848489842214:web:c6ad29ba7e6b7f829148e7",
//     measurementId: "G-XKDGZVNGYW"
//   };

//   // Initialize Firebase
//   const app = initializeApp(firebaseConfig);
//   const analytics = getAnalytics(app);
// var datab=firebase.database().ref('data');
// function UserRegister(){
// var email=document.getElementById('email').value;
// var password=document.getElementById('password').value;
// firebase.auth().createUserWithEmailAndPassword(email,password).then(function(){
  
// }).catch(function(error){
//   var errorcode=error.code;
//   var errormsg=error.message;
// });
// }
// const auth=firebase.auth();
// function SignIn(){
//   var email=document.getElementById('email').value;
//   var password=document.getElementById('password').value;
//   const promise=auth.signInWithEmailAndPassword(email,password);
//   promise.catch(e=>alert(e.msg));
//   window.open("https://www.google.com","_self");
// }
// document.getElementById('form').addEventListener('submit',(e)=>{
//   e.preventDefault();
//   var userInfo=datab.push();
//   userInfo.set({
//     name:getId('fname'),
//     email:getId('email'),
//     password:getId('password')
//   });
//   alert("Successfully Signed Up");
//   console.log("sent");
//   document.getElementById('form').reset();

// });
// function getId(id){
//   return document.getElementById(id).value;
// }
