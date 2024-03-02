import React, { useRef, useState } from 'react'
import Header from './Header'
import {createUserWithEmailAndPassword , signInWithEmailAndPassword , updateProfile} from "firebase/auth";
import { checkValidateData } from '../utils/validate';
import { auth } from '../utils/firebase'
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { BG_URL } from '../utils/constants';
const Login = () => {
  const [isSignInForm,setIsSignInForm] = useState(true);
  const [errorMessage,setErrorMessage] = useState(null);
  
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    // Validate The Form Data
    checkValidateData(email,password)


    const message = checkValidateData(email.current.value,password.current.value);
    setErrorMessage(message);
    if(message) return;

    // Create a new user 
    if(!isSignInForm) {
      // sign up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
        )
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        updateProfile(user, {
          displayName: name.current.value,
          photoURL: "https://avatars.githubusercontent.com/u/141610404?v=4"
        })
        .then(() => {
          const {uid , email , displayName , photoURL} = auth.currentUser;
          dispatch(
          addUser({
            uid: uid, 
            email: email, 
            displayName: displayName , 
            photoURL : photoURL
          })
        );
        }).catch((error) => {
          console.log(error)
        });
    
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + "-" + errorMessage);
        
      });
    }

    else{
      //Sign in logic
      signInWithEmailAndPassword(auth, email.current.value,password.current.value)
      .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
    
      
      }) 
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + "-" + errorMessage);
      });

    }
};
  // then proceed to sign in sign out 
const toggleSignInForm = () => {
  setIsSignInForm(!isSignInForm); //

}
  return (
    <div>
      <Header />
        <div className='absolute'>
            <img 
              src={BG_URL} 
              alt="bg" 
            />
        </div>
        <form 
            className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-8 left-8 text-white 
            rounded-lg bg-opacity-80'
            onSubmit={(e) => e.preventDefault()}>
            <h1 className='font-bold text-3xl py-2 px-2 mb-4 text-left'>{isSignInForm ? "Sign In " : "Sign Up"}</h1>
            {!isSignInForm && 
              <input 
                type="text" 
                placeholder='Full Name' 
                className='p-4 m-2 w-full bg-gray-600' 
            />}
            <input 
              ref={email}
              type="text" 
              placeholder='Email Address' 
              className='p-4 m-2 w-full bg-gray-600' 
            />
           
            <input 
              ref={password}
              type="password" 
              placeholder='Password' 
              className='p-4 m-2 w-full bg-gray-600' 
            />
            <p className='text-red-600 font-bold text-lg py-2'>{errorMessage}</p>
            <button className='py-2 px-4 m-2 bg-red-700 w-full inline-block rounded-lg' onClick={handleButtonClick}>
              {isSignInForm ? "Sign In " : "Sign Up"}
            </button>
            <p onSubmit={(e) => e.preventDefault} className='py-4 cursor-pointer text-red-400' onClick={toggleSignInForm}>
              {isSignInForm ? "New To Netflix? Sign Up Now" : 
              "Already registered? Sign In Now"}
            </p>
        </form>
    </div>
  )
}

export default Login