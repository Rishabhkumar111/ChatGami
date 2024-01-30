import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { auth } from "./firebaseConfig";


const provider = new GoogleAuthProvider();

const signIn = async () => {
  return signInWithPopup(auth, provider)
    .then((result) => {
      return result.user;
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
    });
};

const exit = async function() {
  return signOut(auth)
    .then(() => {
      return "signOut";
    })
    .catch((error) => {
      // An error happened.
    });
};

export { exit, signIn };
