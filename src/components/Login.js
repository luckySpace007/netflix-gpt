import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const [isSignInForm,setIsSignInForm] = useState(true);


const toggleSignInForm = () => {
  setIsSignInForm(!isSignInForm); //

}
  return (
    <div>
      <Header />
        <div className='absolute'>
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/2e07bc25-8b8f-4531-8e1f-7e5e33938793/e4b3c14a-684b-4fc4-b14f-2b486a4e9f4e/IN-en-20240219-popsignuptwoweeks-perspective_alpha_website_medium.jpg" 
            alt="bg" 
            />
        </div>
        <form className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-8 left-8 text-white rounded-lg bg-opacity-70'>
            <h1 className='font-bold text-3xl py-2 px-2 mb-4 text-left'>{isSignInForm ? "Sign In " : "Sign Up"}</h1>
            {!isSignInForm && 
              <input 
                type="text" 
                placeholder='Full Name' 
                className='p-4 m-2 w-full bg-gray-600' 
            />}
            <input 
              type="text" 
              placeholder='Email Address' 
              className='p-4 m-2 w-full bg-gray-600' 
            />
            <input 
              type="password" 
              placeholder='Password' 
              className='p-4 m-2 w-full bg-gray-600' 
            />
            <button className='py-2 px-4 m-2 bg-red-700 w-full inline-block rounded-lg'>
              {isSignInForm ? "Sign In " : "Sign Up"}
            </button>
            <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>
              {isSignInForm ? "New To Netflix? Sign Up Now" : 
              "Already registered? Sign In Now"}
            </p>
        </form>
    </div>
  )
}

export default Login