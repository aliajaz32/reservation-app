// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider,getAuth, signInWithPopup,signOut  } from "firebase/auth";









// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYSrpKcE0tiGN37gAvyFhsgqfBhnnUZBo",
  authDomain: "reservation-app-8ac8e.firebaseapp.com",
  projectId: "reservation-app-8ac8e",
  storageBucket: "reservation-app-8ac8e.appspot.com",
  messagingSenderId: "677903234487",
  appId: "1:677903234487:web:ca9739113bcd9b3e182432"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();

function googleSignUp(){
    signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    console.log("user",user);
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
}
function signOutConfig(){
    signOut(auth).then(() => {
        // Sign-out successful.
        alert("signed out successfully");
      }).catch((error) => {
        // An error happened.
      });
}

export  {googleSignUp,signOutConfig};