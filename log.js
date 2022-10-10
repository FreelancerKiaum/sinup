  const firebaseApp = firebase.initializeApp({ 
/* Firebase config */ 
  apiKey: "AIzaSyBseEn5I-M3piWgqfsNLKXOEod0XoLZfmo",
  authDomain: "auth1-d3cd2.firebaseapp.com",
  databaseURL: "https://auth1-d3cd2-default-rtdb.firebaseio.com",
  projectId: "auth1-d3cd2",
  storageBucket: "auth1-d3cd2.appspot.com",
  messagingSenderId: "84903458235",
  appId: "1:84903458235:web:231598c63793fdd4ef409e"

});
   const db = firebaseApp.firestore();
   const auth = firebaseApp.auth();
  
   
   const sinup = () => {
   	
const email = document.getElementById("email").value;
const password = document.getElementById("password").value;
 consol.log(email, password);
   	firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });
   
   
   }