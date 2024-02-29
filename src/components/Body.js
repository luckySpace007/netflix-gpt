import React, { useEffect } from 'react'
import Browse from './Browse'
import Login from './Login'
import {createBrowserRouter , RouterProvider} from "react-router-dom"
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
function Body() {
  const dispatch = useDispatch();
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />
    },
    {
      path: "/browse",
      element: <Browse />
    }
  ]); 
  //we use useEffect because i have to call it once
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid , email , displayName , photoURL} = user;
        dispatch(
          addUser({
            uid: uid, 
            email: email, 
            displayName: displayName , 
            photoURL : photoURL}));
      } else {
        // User is signed out
        dispatch(removeUser());
      }
    });
  },[])

  return (
    <div>
        <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body