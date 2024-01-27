import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { auth } from "./firebaseConfig";


const provider = new GoogleAuthProvider();
const singIn = async () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result.user);
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
    });
};

const exit = async function() {
  signOut(auth)
    .then(() => {
      
    })
    .catch((error) => {
      // An error happened.
    });
};

export { exit, singIn };
