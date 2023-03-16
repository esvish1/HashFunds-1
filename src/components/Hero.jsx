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
        A Crowdfunding Platform where you can Donate Money in the<br></br>
       Form of Digital Tokens or Cyptocurrencies such as Ethereum, Etc <br></br>
        </p>
        <div className='flex'>
        <Link to="/Fundraise"><button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
  <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
  Fundraise
  </span>
</button></Link>
  <Link to="/Causes"><button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
  <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
      Donate
  </span>
</button></Link>
        </div>
      </div>
      
    </div>
  );
};

export default Hero;