import React from 'react';
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  
  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate("/");
    }).catch((error) => {
      // An error happened.
    });
  };

  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img 
        className='w-44'
        src="https://img.hotimg.com/BrandAssets_Logos_01-Wordmark-removebg-preview.png" 
        alt="logo" 
      />
      {user && (
        <div className="flex p-2">
          <button onClick={handleSignOut} className='font-bold text-white'>
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
}

export default Header;
