import { SignedIn, SignedOut, SignIn, SignUp, UserButton, } from '@clerk/clerk-react'
import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { Button } from './ui/button'
import { BriefcaseBusiness, Heart, PenBox } from 'lucide-react'

function Header() {
  const [showSignIn, setshowSignIn] = useState(false)  // For SignIn
  const [showSignUp, setshowSignUp] = useState(false)  // For SignUp

  //For If User Not SignIn
  const [search, setsearch] = useSearchParams()

  //For If USer Not SignIn and after search parm change
  useEffect (()=>{
      if (search.get ('sign-in')){
        setshowSignIn(true);
      } 
    } , [search]
  )

  //  Function for When We Click Outside Of Clerck Div it will Disapear
  const HandleOverlayClick = (e)=>{
      if (e.target === e.currentTarget){
        setshowSignIn(false);
        setshowSignUp(false);
        setsearch({});
      }
  }

  return (
    <>
      <nav className='flex justify-between items-center py-4 px-8'>
        {/* For Logo */}
        <Link to='/' >
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
            <UserButton 
            // For Change Avatar of UserButton //Speacil Clerk Function
            appearance={{
              elements:{
                avatarBox: "w-10 h-10",
              }
            }}
            >
              {/* Additional Buttons In Clerk wit Links */}
              <UserButton.MenuItems>
                  <UserButton.Link 
                  label='My Jobs'
                  labelIcon = {<BriefcaseBusiness size={15} />}
                  href='/my-jobs'
                  />
                  <UserButton.Link 
                  label='Saved Jobs'
                  labelIcon = {<Heart size={15} />}
                  href='/saved-jobs'
                  />
              </UserButton.MenuItems>

            </UserButton>
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
