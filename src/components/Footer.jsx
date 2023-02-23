import React from 'react'
import {AiFillFacebook, AiFillGoogleCircle, AiFillMail, AiFillYoutube, AiOutlineWhatsApp} from 'react-icons/ai'
const Footer = () => {
  return (
    <div className='bg-black text-white text-center py-16'>
        <div className='max-w-[1240px] mx-auto px-4 grid grid-cols-2 lg:grid-cols-4'>
            <div>
            <h1 setsize={10}>Follow Us</h1>
            <br></br>
             <div className='p-2 cursor-pointer inline-flex items-center
        rounded-full bg-black-700 mx-1.5 text-xl '>
                <div className='flex flex-row space-x-10'>
                <AiFillFacebook/>
                <AiFillYoutube/>
                <AiOutlineWhatsApp/>
                <br></br>
                <AiFillMail/>
                <AiFillGoogleCircle/>
                </div>
             </div>
             </div>
            <div>
                
                <h3 className='font-bold text-xl border-b-4 border-[#00d8ff] inline-block mt-4'>Quick Link</h3>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Blog Post</li>
                    
                </ul>
            </div>
            <div>
                <h3 className='font-bold text-xl border-b-4 border-[#00d8ff] inline-block mt-4'>Get in Touch</h3>
                <ul>
                    <li>Contact Us</li>
                    <li>Services</li>
                    
                </ul>
            </div>
            <div>
                <h3 className='font-bold text-xl border-b-4 border-[#00d8ff] inline-block mt-4'>Causes</h3>
                <ul>
                    <li>Medical</li>
                    <li>Cancer</li>
                    <li>Transplant</li>
                    <li>Education</li>
                </ul>
            </div>  
              
        </div>
        <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-15
      text-center pt-2 text-gray-400 text-sm pb-8 justify-center"
      >
        <span>© 2023 HashFunds. All rights reserved.</span>
        <span>Terms · Privacy Policy</span>
        
      </div>
    </div>
    
  )
}

export default Footer