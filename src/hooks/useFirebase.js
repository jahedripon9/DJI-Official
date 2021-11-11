import { useEffect, useState } from "react";
import initFirebase from "../Pages/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";

initFirebase()
const useFirebase = () =>{
    const [user, setUser] = useState({});


    const auth = getAuth();

    const userRegister = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
          });
    } 

    const userLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }

// Observer User State
    useEffect(()=>{
       const  unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
             
              
            } else {
             setUser({})
            }
          });
          return () => unsubscribe
    },[auth])

    const logout = () =>{
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          });
    } 

    return{
    user,
    userRegister,
    logout,
    userLogin,
    
    }

}

export default useFirebase;