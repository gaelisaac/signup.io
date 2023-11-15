 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
  import { getAuth,GoogleAuthProvider,signInWithPopup } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";
  const firebaseConfig = {
    apiKey: "AIzaSyCqF8ZIU3MGsV7DA38V7O1UnH-LUymxGCA",
    authDomain: "login-7f2f2.firebaseapp.com",
    projectId: "login-7f2f2",
    storageBucket: "login-7f2f2.appspot.com",
    messagingSenderId: "606026366926",
    appId: "1:606026366926:web:f5cd600256daae452c359f"
  };

 
  const app = initializeApp(firebaseConfig);
  const auth = new GoogleAuthProvider (app);
  auth.languagecode ='en'
  const provider = new GoogleAuthProvider ();


  const googlelogin = document.getElementById("google-login-button");
  googlelogin.addEventListner("click",function() {
    signInWithPopup(auth, provider)
  .then((result) => {
    
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const user = result.user;
    console.log(user);
    window.location.href="../logged.html";
    
  }).catch((error) => {
    
    const errorCode = error.code;
    const errorMessage = error.message;
  });




})
