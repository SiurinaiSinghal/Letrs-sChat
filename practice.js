
//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyBjFalziPmacdnG7G6j8Rj2LxW99lTd0Gw",
    authDomain: "kwitter-de03a.firebaseapp.com",
    databaseURL: "https://kwitter-de03a-default-rtdb.firebaseio.com",
    projectId: "kwitter-de03a",
    storageBucket: "kwitter-de03a.appspot.com",
    messagingSenderId: "492160848944",
    appId: "1:492160848944:web:aae8dbf6c97c29718449f5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function addUser()
{
    user_name = document.getElementById("user_name").value ;
    firebase.database().ref("/").child(user_name).update({
        purpose:"adding user"
    });
}