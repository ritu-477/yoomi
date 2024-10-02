import React from 'react'
import workoutImg from '../assets/images/webp/workout-image.webp'

const Workout = () => {
  return (
    <div className='lg:mt-[-150px] md:mt-[-100px] sm:mt-[-80px] mt-[-60px] relative z-10'>
      <div className='container'>
        <img src={workoutImg} className='w-full max-w-[1052px] mx-auto' alt="workout-image" />
      </div>
    </div>
  )
}

export default Workout