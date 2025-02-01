import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './layout/AppLayout'
import Landing from './pages/landing'
import Onbording from './pages/onbording'
import JobListing from './pages/job-listing'
import Job from './pages/job'
import MyJobs from './pages/my-jobs'
import PostJob from './pages/PostJob'
import SavedJobs from './pages/SavedJobs'
import { ThemeProvider } from './components/theme-provider'
import ProtectedRoute from './components/protected-route'



const router = createBrowserRouter([
{
  element: <AppLayout />,
  children: [
    {
        path: '/',
        element: <Landing /> 
    },
    {
      
        path: '/onboarding',
        element: 
        <ProtectedRoute>
          <Onbording /> 
        </ProtectedRoute>

    },
    {
        path: '/jobs',
        element: 
        <ProtectedRoute>
          <JobListing /> 
        </ProtectedRoute>

    },
    {
        path: '/job/:id',
        element:
        <ProtectedRoute>
          <Job />  
        </ProtectedRoute>
    },
    {
        path: '/my-jobs',
        element: 
        <ProtectedRoute>
          <MyJobs /> 
        </ProtectedRoute>
    },
    {
        path: '/post-job',
        element:
        <ProtectedRoute>
        <PostJob /> 
      </ProtectedRoute>
    },
    {
        path: '/saved-jobs',
        element: 
        <ProtectedRoute>
        <SavedJobs /> 
      </ProtectedRoute>
    },
  ]
}

])



const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <RouterProvider router = {router}/>

  </ThemeProvider>
  )
}

export default App
