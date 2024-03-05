import React, { useEffect } from 'react';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, SUPPORTED_LANGUAGES } from '../utils/constants';
import { toggleGptSearchView } from "../utils/gptSlice"
import { changeLanguage } from '../utils/configSlice';
function Header() {
  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  const showGptSearch = useSelector(store => store.gpt.showGptSearch)


  const dispatch = useDispatch();
  const handleSignOut = () => {
    signOut(auth).then(() => {
    }).catch((error) => {
      console.log(error)
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid , email , displayName , photoURL} = user;
        dispatch(
          addUser({
            uid: uid, 
            email: email, 
            displayName: displayName , 
            photoURL : photoURL
          })
        );
        navigate("/browse")
      } else {
        dispatch(removeUser());
        navigate("/")
      }
    });
    // unsubscribe when component is unmounted
    return () => unsubscribe();
  },[])

  const handleGptSearchClick = () => {
    // toggle search
    dispatch(toggleGptSearchView())
  }

  const linkNavigate = () => {
      navigate("/")  
   }

   const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value))
   }

  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row md:justify-between'>
      <img 
        className='w-44 mx-auto md:mx-0'
        src={LOGO} 
        alt="logo" 
        onClick={linkNavigate}
      />
      {user && (
        <div className="flex p-2 ">
          {showGptSearch && (
              <select className='px-10 m-7 text-green-500 bg-transparent rounded-lg cursor-pointer' onChange={handleLanguageChange}>
              {SUPPORTED_LANGUAGES.map(lang => (
              <option className='bg-transparent' key={lang.identifier} value={lang.identifier}>
              {lang.name}
            </option>
            ))}
           </select>
          )}
          <button className="px-10 m-7 text-white bg-red-700 rounded-lg cursor-pointer
          " onClick={handleGptSearchClick}
          >
              {showGptSearch ? "HomePage" : "GPT Search"}
          </button>
          <button onClick={handleSignOut} className='font-bold text-white'>
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
}

export default Header;
