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
        A Crowdfunding Platform where you can Donate Money in the<br></br>
       Form of Digital Tokens or Cyptocurrencies such as Ethereum, Etc <br></br>
        </p>
        <div className='flex'>
        <Link to="/Fundraise"><button className='m-2' class="relative inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-medium transition-all bg-blue-600 rounded-full hover:bg-white group">
            <span class="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-full"></span>
            <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-blue-600">Fundraise</span></button></Link>
            <Link to="/Causes"><button className='m-2' class="relative inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-medium transition-all bg-blue-600 rounded-full hover:bg-white group">
            <span class="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-full"></span>
            <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-blue-600">Donate</span></button></Link>
        </div>
      </div>
      
    </div>
  );
};

export default Hero;