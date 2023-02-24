import React from 'react';
import Typical from 'react-typical';

import heroVid from '../assets/video.mp4';

const Hero = () => {
  return (
    <div className='w-full h-[90vh] top-[90px]'>
      <video
        className='object-cover h-[90vh] w-full absolute -z-10'
        src={heroVid}
        autoPlay
        loop
        muted
      />
      <div className='w-full h-[90%] flex flex-col justify-center items-center text-white px-4 text-center'>
        <h1>Get Involved</h1>
        <h1 className='py-2'>
          <strong className="blue">
        <Typical
             steps={[
                     'Lend The Helping Hand',
                  2000,
                  'Without Any Reason',
                  2000,
                  'No Matter How Small',
                  2000,
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
          <button className='m-2'>Donate</button>
        </div>
      </div>
      
    </div>
  );
};

export default Hero;