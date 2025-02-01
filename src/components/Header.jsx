import { SignedIn, SignedOut, SignIn, SignUp, UserButton, } from '@clerk/clerk-react'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from './ui/button'
import { PenBox } from 'lucide-react'

function Header() {
  const [showSignIn, setshowSignIn] = useState(false)  // For SignIn
  const [showSignUp, setshowSignUp] = useState(false)  // For SignUp

  //  Function for When We Click Outside Of Clerck Div it will Disapear
  const HandleOverlayClick = (e)=>{
      if (e.target === e.currentTarget){
        setshowSignIn(false);
        setshowSignUp(false);
      }
  }

  return (
    <>
      <nav className='flex justify-between items-center py-4 px-8'>
        {/* For Logo */}
        <Link>
          <img src="/logo.png" alt="logo" className='h-20' />
        </Link>
        {/* FOr SignIn and Signout */}
        <div className='flex space-x-4'>
          <SignedOut>
            <Button variant="outline" onClick={() => setshowSignIn(true)}>
              Sign In
            </Button>
            <Button variant="outline" onClick={() => setshowSignUp(true)}>
              Sign Up
            </Button>
          </SignedOut>
          <SignedIn>
            {/* Add a Condition Here */}
            <Link to='/post-job'>
              <Button variant="destructive" className='rounded-full'>
                <PenBox size={20} className='mr-2' />
                Post a Job
              </Button>
            </Link>
            <UserButton />
          </SignedIn>
        </div>
        
          {/* JS FOr Condition SignIn and SignUp */}
        {
          showSignIn && <div onClick={HandleOverlayClick}
          className='absolute top-0 left-0 h-screen w-full bg-black bg-opacity-50 flex justify-center items-center'>
            <SignIn 
            signUpForceRedirectUrl='/onboarding'
            fallbackRedirectUrl='/onboarding'
            />
          </div>
        }
        {
          showSignUp && <div onClick={HandleOverlayClick}
          className='absolute top-0 left-0 h-screen w-full bg-black bg-opacity-50 flex justify-center items-center'>
            <SignUp />
          </div>
        }



      </nav>
    </>
  )
}

export default Header
