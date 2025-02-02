import { useUser } from '@clerk/clerk-react'
import React from 'react'
import { Navigate, useLocation } from 'react-router-dom';

function ProtectedRoute({children}) {
    // This Is Using useUser
    const { isSignedIn,isLoaded,user }= useUser();
    // For Checking What is Our Current path using USerLocation which come from ReactRouter
    const {pathname } =useLocation()
    // Now Condition For when user not loged in or user details not loded or its not undefined
    if(isLoaded && !isSignedIn && isSignedIn!=undefined){
        return <Navigate to='/?sign-in=true' />
    }

    // checking onbording statues
    if (
      user !== undefined &&
      !user?.unsafeMetadata?.role &&
      pathname !== "/onboarding"
    )
      return <Navigate to="/onboarding" />;

      
  return children;
};

export default ProtectedRoute
