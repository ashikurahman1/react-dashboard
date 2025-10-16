import React from 'react'
import { FaReact } from 'react-icons/fa6'

const Home = () => {
  return (

    
      <div className='flex flex-col lg:flex-row items-center justify-center h-screen'>
      {/* Left */}
      <div className='w-full lg:w-7/12 border-2 bg-blue-500 h-full text-neutral-100'>
        <div className='grid place-items-center mt-40'>
          <FaReact className='animate-bounce text-9xl text-red-600' />
          <h1 className='text-4xl lg:text-6xl font-bold'>React Dashboard</h1>
        </div>
      </div>
 
      {/* Right */ }
      <div className='flex-1 border-2 bg-neutral-100 h-full'>
        <div className='mt-20 flex justify-center'>
          Login
        </div>
      </div>

    </div>
 

  )
}

export default Home