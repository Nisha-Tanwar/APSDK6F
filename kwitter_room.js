
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
  apiKey: "AIzaSyAPwnBxDI9ePiNflDhUPXwwdNKQF92THQg",
  authDomain: "apsdk-5dcb4.firebaseapp.com",
  databaseURL: "https://apsdk-5dcb4-default-rtdb.firebaseio.com",
  projectId: "apsdk-5dcb4",
  storageBucket: "apsdk-5dcb4.appspot.com",
  messagingSenderId: "799885433256",
  appId: "1:799885433256:web:5f79de2805ece94d33a59d",
  measurementId: "G-8KHHZP16BZ"
};
    
    // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
     

              Name=localStorage.getItem("user name");
              document.getElementById("user_name").innerHTML="Welcome "+Name+ "!";

              function addroom()
              {
                  room_name=document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({purpose:"addingroom"});
    localStorage.setItem("room_name",room_name);
    window.location="kwitter_page.html";
              }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("room names-",Room_names);
       row="<div class='romm_name' id="+Room_names+" onclick='redicerttoroomname(this.id)'>#"+Room_names+"</div> <hr>";
       document.getElementById("output").innerHTML+=row;

      //Start code

      //End code
      });});}
getData();  
function redicerttoroomname(name)
{
  console.log(name);
  localStorage.setItem("room_name",name);
  window.location="kwitter_page.html";
}

function logout()
{
  localStorage.removeItem("user name");
  localStorage.removeItem("room_name");
  window.location="index.html";
}