import React from 'react';
import Typical from 'react-typical';
import { Link } from 'react-router-dom'
import heroVid from '../assets/video.mp4';

const Hero = () => {
  return (
    <div className='relative w-full h-[90vh] top-[5px]'>
      <video
        className='object-cover h-[100vh] w-full'
        src={heroVid}
        autoPlay
        loop
        muted
      />
      <div className='absolute top-5 w-full h-[90%] flex flex-col justify-center items-center text-white px-4 text-center'>
        <h1>Get Involved</h1>
        <h1 className='py-2'>
          <strong className="blue">
        <Typical
             steps={[
                     'Lend The Helping Hand',
                  3000,
                  'Without Any Reason',
                  3000,
                  'No Matter How Small',
                  3000,
                ]}
                wrapper="p"
                loop={Infinity}
        />
  </strong> 
        </h1>
        <p className='text-xl py-4'>
          We Believe that We can Save More Lives with you.
        </p>
        <div>
          <button className='m-2'>Fundraise</button>
          <Link to="/Causes"><button className='m-2'>Donate</button></Link>
        </div>
      </div>
      
    </div>
  );
};

export default Hero;