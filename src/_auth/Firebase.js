import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { auth } from "./firebaseConfig";
import { toast } from "react-toastify";


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
      toast.error(errorMessage);
      console.log(errorMessage);
      return null;
    });
};

const exit = async function() {
  return signOut(auth)
    .then(() => {
      return "signOut";
    })
    .catch((error) => {
      toast.error(error.errorMessage);
      return null;
      // An error happened.
    });
};

export { exit, signIn };
