import React from 'react'

const Subscribe = () => {
  return (
    <div className=' w-full px-4 py-16 bg-black text-white text-center'>
        <h1>Join Our HashFunds Community</h1>
        <div className='py-4'>
            <input className='p-3 rounded-3xl mr-4' type="email" placeholder='Enter your email' />
            <button>Subscribe</button>
        </div>
        <div className='flex items-center justify-center py-2 '>
            <p>Your details is safe with us,we don't spam.</p>
        </div>
    </div>
  )
}

export default Subscribe