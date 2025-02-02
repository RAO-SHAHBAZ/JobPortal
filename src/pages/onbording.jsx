import { Button } from '@/components/ui/button'
import { useUser } from '@clerk/clerk-react'
import React from 'react'
import { BarLoader } from 'react-spinners'

function Onbording() {
  const {user,isLoaded} = useUser()

  // THis IS Spinner For For Running Loder Befor User Details Loading
  if(!isLoaded){
    return<BarLoader className='mb-4' width={'100%'} color='#ffff '/>
  }
  
  return (
    <div className='flex flex-col items-center justify-center mt-32'>
        {/* Heading */}
        <h2 className='gradient-title  font-extrabold text-7xl sm:text-8xl  tracking-tighter'>
          I am A...
        </h2>
        {/* Buttons Of Candidate and Recruter */}
        <div className='mt-16 grid grid-cols-1 gap-5 w-full md:px20'>
          <Button variant='blue' className='text-4xl h-32'>
              Candidate
          </Button>
          <Button variant='destructive' className='text-4xl h-32'>
              Recruter
          </Button>
        </div>
    </div>
  )
}

export default Onbording
