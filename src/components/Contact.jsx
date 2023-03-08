import React from 'react'
import Img1 from '../assets/mountain.webp'
import Footer from '../components/Footer';
import {AiFillFacebook, AiFillGoogleCircle, AiFillMail, AiFillYoutube, AiOutlineWhatsApp} from 'react-icons/ai'


const ContactPage = () => {
  return (

<div>

    <div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
        <img style={{position:'absolute',width:'1540px',height:'480px'}}
          src={Img1}
          alt="My image" 
        />
        

        <div class="absolute top-40 left-40 px-0 py-9">
          <h1 class="mb-3 text-xl-300 font-semibold tracking-tight text-white">Contact Us</h1>
         <p class="leading-normal text-gray-100">We'd Love to Hear from You !</p>
        </div>
      </div>
    </div>
 <div  style={{position:"absolute",top:"570px"}}><iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.462339824404!2d76.72390611477736!3d9.726846693038745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07cc024cb7c83f%3A0xc8944aaebb3ba492!2sSt.%20Joseph&#39;s%20College%20of%20Engineering%20and%20Technology%2C%20Palai!5e0!3m2!1sen!2sin!4v1677567137359!5m2!1sen!2sin"
   height="450" style={{border:"0px",width:"1519px"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>  
    
    <div className='absolute bg-white'>
    <div style={{position:'absolute',top:'1050px',width:'750px',left:'80px'}}>
    <div className="sm:rounded-lg bg-gray-100 hover:bg-gray-300 hover:text-white-900">
      <div className="max-w-7xl mx-auto py-12 sm:px-6 lg:px-8">
        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
          <div className="p-6 bg-white border-b border-gray-200">
            <h2 className="text-2xl font-extrabold text-gray-900">GET IN TOUCH</h2>
            <form className="mt-8 space-y-6" >
              <div>
                <label htmlFor="name" className="sr-only">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"y
                  required
                  className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Email"
                />
              </div>
              <div>
                <label htmlFor="phone" className="sr-only">
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="text"
                  autoComplete="tel"
                  className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Phone"
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Message"
                ></textarea>
              </div>
              <div>
              <button className='m-2' class="relative inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-medium transition-all bg-blue-600 rounded-full hover:bg-white group">
<span class="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-full"></span>
            <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-blue-600">Message</span></button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>


    <div style={{position:'absolute',top:'1050px',width:'500px',left:'920px'}}>
    <div className="group sm:rounded-lg bg-gray-100 hover:bg-gray-300 hover:text-white-900">
      <div className="max-w-7xl mx-auto py-12 sm:px-6 lg:px-8">
        <div className="bg-white hover:bg-sky-500 overflow-hidden shadow-sm sm:rounded-lg">
          <div className="group p-6 bg-white  border-b border-gray-200">
            <h2 className=" text-2xl font-extrabold text-gray-900">HEADQUATERS</h2>
            <form className=" mt-8 space-y-6">
              <div>
                  <div class="col-md-4 align-l" data-ckav-sm="align-c mr-t-30" data-animate-in="fadeInRight">
                    <p className=" mr-b-40 fs16">St.Josephs College of Engineering & Technology, <br /> Choondacheery (P.O), Palai, <br /> India.</p>
                    <br />
                    <p class="mr-0 fs16"><strong class=" f-1 bold-4 ltr-2 txt-dark">Phone: </strong>+1234567890</p>
                    <p class="mr-0 fs16"><strong class=" f-1 bold-4 ltr-2 txt-dark">FAX: </strong>+0986754321</p>
                    <p class="mr-0 fs16"><strong class=" f-1 bold-4 ltr-2 txt-dark">Email: </strong>hashfunds@gmail.com</p>
                  </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>



    //Footer//
    <hr style={{position:"absolute",top:"1850px",width:'1519px'}} className="styled-line"/>

  <div  style={{position:"absolute",top:"1850px",left:'100px'}}>
  <div className='w-full py-16 text-white px-4'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
        <div className='lg:col-span-2 my-4'>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
            Want Updates of HashFunds?
          </h1>
          <p>Sign up to our Newsletter and Stay up to Date.</p>
        </div>
        <div className='my-4'>
          <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
            <input
              className='p-3 flex w-full rounded-md text-black'
              type='email'
              placeholder='Enter Email'
            />
            <button className='bg-[#00df9a] text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3'>
              Notify Me
            </button>
          </div>
          <p>
            We Care about the Protection of your Data.{' '}
            <span className='text-[#00df9a]'></span>
          </p>
        </div>
      </div>
    </div>

  </div>


  <div style={{position:"absolute",top:"2050px",left:'80px'}}>
  <div className='relative  text-white text-center py-16'>
        <div className='max-w-[5000px] mx-auto px-4 grid grid-cols-2 lg:grid-cols-4'>
            <div >
            <h1 setsize={10}>Follow Us</h1>
            <br></br>
             <div className='p-2 cursor-pointer inline-flex items-center
        rounded-full bg-black-700 mx-1.5 text-xl '>
                <div className='flex flex-row space-x-10'>
                <AiFillFacebook/>
                <AiOutlineWhatsApp/>
                <br></br>
                <AiFillMail/>
                <AiFillGoogleCircle/>
                </div>
             </div>
             </div>   
            {/* <div>
                
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
            </div>   */}
              
        </div>
        <div style={{position:"absolute", left:'920px',width:'279px',bottom:'80px'}}
        className="text-gray-400 text-sm pb-8 "
      >
        <span>© 2023 HashFunds. All rights reserved.</span>
        {/* <span> Terms · Privacy Policy</span> */}
        
      </div>
    </div>
    </div>


</div>
  );
};

export default ContactPage;