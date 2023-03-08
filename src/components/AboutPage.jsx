import React from 'react'
import { SiHiveBlockchain } from 'react-icons/si';
import { GrSecure} from 'react-icons/gr';
import {HiCubeTransparent}from 'react-icons/hi';
import {AiOutlineGlobal}from 'react-icons/ai';
import AboutCard from './AboutCard';
import {AiFillFacebook, AiFillGoogleCircle, AiFillMail, AiFillYoutube, AiOutlineWhatsApp} from 'react-icons/ai'
import Img2 from '../assets/aboutheader.jpg'
import Group from '../assets/group.jpg';
import Faq from '../assets/faq.png';
import { Link } from 'react-router-dom'
import T from '../assets/terin.jpg';
import S from '../assets/shalom.jpg';
import V from '../assets/vishnu.jpg';
import R from '../assets/rahul.jpg';
import i1 from '../assets/im1.jpg';
import i2 from '../assets/im2.jpg';
import i3 from '../assets/im3.jpg';
import i4 from '../assets/im4.jpg';
import i5 from '../assets/im5.jpg';
import i6 from '../assets/im6.jpg';

const AboutPage = () => {
  return (

<div>

    <div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
        <img style={{position:'absolute',width:'1540px',height:'480px'}}
          src={Img2}
          alt="My image" 
        />

        <div class="absolute top-40 left-40 px-0 py-9">
          <h1 class="mb-3 text-xl-300 font-semibold tracking-tight text-white">About Us</h1>
         <p class="leading-normal text-gray-100">Your Support is Really Powerfull !</p>
        </div>
      </div>
    </div>


    <div  style={{position:"absolute",top:"500px",width:'1200px',left:'80px'}}>
    <div className='w-full py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[450px] mx-auto my-4' src={Group} alt='/' />
        <div className='flex flex-col justify-center text-[white]'>
          <p className='text-[gray] font-bold '>About Us</p>
          <h1 className='md:text-4xl text-[#00d8ff] sm:text-3xl text-2xl font-bold py-2'>Raise Money for Any Cause.</h1>
          <p color-white>
            With HashFunds you can create your fundraiser in minutes with no upfront fees.  Let us assume an individual, unfortunately, meets with an accident on the road. Fortunately, his best friend signed up on HashFund crowdfunding platform, completed the process of submitting valid documents needed for verification. In a few minutes, he created a crowdfunding campaign to raise funds for his friend’s medical expenses. In a matter of few minutes, funds in the form of digital tokens start coming in to support the financial needs of the injured friend. 
          </p>
          <Link to="/Fundraise"><button className='bg-black text-[white] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button></Link>
        </div>
      </div>
    </div>

//Start Fundraiser//
    <div  style={{position:"absolute",top:"450px",width:'1160px',left:'80px'}}>
    <section className="dark:bg-gray-800 dark:text-gray-100">
  <div className="container max-w-5xl px-4 py-12 mx-auto">
    <div className="grid gap-4 mx-4 sm:grid-cols-12">
      <div className="col-span-12 sm:col-span-3">
        <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-[#00d8ff]">
          <h3 className="text-3xl font-semibold">Start a Fundraiser in three simple steps</h3>
          
        </div>
      </div>
      <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
        <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-700">
          <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-[#00d8ff]">
            <h3 className="text-xl font-semibold tracking-wide">Start Your Fundraiser </h3>
            
            <p className="mt-3">It’ll take only 2 minutes. Just tell us a few details about you and the ones you are raising funds for and upload necessary documents.</p>
          </div>
          <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-[#00d8ff]">
            <h3 className="text-xl font-semibold tracking-wide">Share your fundraiser</h3>
            
            <p className="mt-3">All you need to do is share the fundraiser with your friends and family. In no time, support will start pouring in.</p>
          </div>
          <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-[#00d8ff]">
            <h3 className="text-xl font-semibold tracking-wide">Receive Funds</h3>
            
            <p className="mt-3">The funds raised will be received without any hassle directly to your account.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>

//Features
    <div style={{position:"absolute",width:'1160px', top:"900px",left:'70px', minHeight:'200px'}}>
    <div className='relative w-full  text-white text-center'>
      <div className='max-w-[1240px] mx-auto px-4 py-16 '>
        <div>
          <h1 className='py-4 text-[#00d8ff]'>Our Features</h1>
          <p className='py-4 text-xl'>
           A Crowdfunding platform where you can donate money in the form of Digital tokens or Cryptocurrencies such as Ethereum to projects and Needful people.
          </p>
          <br>
          </br>
          {/* Card Container */}
          <div className='grid sm:grid-cols-2 lg:grid-cols-2 gap-9'>

            {/* Card */}
            <AboutCard icon={<SiHiveBlockchain size={30} />} heading='Engagement through tokenization of philanthropic assets' text='Instead of just helping an organization financially, donors will be able to decide on the projects they would like to be involved in and send their funds directly to the people.' />

            <AboutCard icon={<GrSecure size={30} />} heading='Removing the middlemen from charitable systems' text='Manage their funds more closely and serve as a marketing strategy, removing the need for these middlemen.' />
            <AboutCard icon={<AiOutlineGlobal size={30} />} heading='Global contribution' text='Anyone in the world can contribute to the campaign and transactions are quick and easy.' />
            <AboutCard icon={<HiCubeTransparent size={30} />} heading='Transparency and anti-fraud measures' text='Contributors can follow and monitor where, when, and to whom charity donations were disbursed.' />
          </div>
        </div>
      </div>
    </div>


</div>
//Team//
    <div style={{position:"absolute",top:"1800px",left:'460px'}}>
    <div class="mb-10 md:mb-16">
    <h1
      class="
       
        mb-4
        text-3xl
        font-bold
        text-center text-[#00d8ff]
        lg:text-3xl
        md:mb-6
      "
    >
      Meet Our Team
    </h1>

    <p class="max-w-screen-md mx-auto text-center text-white md:text-lg">
      Our team of exceptionally talented digital natives.
    </p>
  </div>
  </div>

      <div  style={{position:"absolute",top:"1870px",left:'75px'}}>
          
    <div style={{position:'relative',width:'1250px', minHeight:'500px'}} 
    class="absolute flex items-center min-h-screen justify-center bg-gray">
    
    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
   <div class=" grid grid-cols-1 gap-9 md:grid-cols-2 lg:grid-cols-4">
    <div class="group relative rounded-lg cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
      <div class="h-96 w-72">
        <img class="h-full w-full rounded-lg object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={T} alt="" />
      </div>
    <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div class="absolute inset-0 flex translate-y-[80%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 class="font-serif text-3xl font-bold text-white">Terin</h1>
        <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100">Founder</p>
        <div class="sm:flex sm:items-center sm:justify-between">
        
         <div class="flex mt-4 space-x-2 sm:justify-center sm:mt-0">
            <a href="#" class="inline-block rounded-full  hover:bg-blue-500">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
      
            </a>
            <a href="#" class="inline-block rounded-full  hover:bg-gradient-to-br from-pink-500 to-purple-500">


<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" /></svg>
                
            </a>
            <a href="#" class="inline-block rounded-full  hover:bg-green-500">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.419 3.574 8 8 8 4.419 0 8-3.581 8-8 0-4.419-3.574-8-8-8zm3.656 13.252c-.274.458-.804.676-1.318.454l-2.853-1.296c-.392-.174-.85-.052-1.131.27l-.826.827c-.251.251-.529.454-.804.702-.251.174-.476.378-.702.604-.226.226-.43.529-.604.78-.226.251-.43.529-.604.827-.174.274-.347.604-.226.93.122.326.542.602.93.454.83-.3 1.697-.73 2.522-1.53.418-.391.722-.777.968-1.225.225-.378.043-.804-.304-1.027z" /></svg>
                
            </a>
           
          </div>
        </div>
      </div>
    </div>
    <div class="group relative rounded-lg cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
      <div class="h-96 w-72">
        <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={S} alt="" />
      </div>
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div class="absolute inset-0 flex translate-y-[80%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 class="font-dmserif text-3xl font-bold text-white">Shalom</h1>
        <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Founder</p>
        <div class="sm:flex sm:items-center sm:justify-between">
        
        <div class="flex mt-4 space-x-2 sm:justify-center sm:mt-0">
            <a href="#" class="inline-block rounded-full  hover:bg-blue-500">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
      
            </a>


<a href="#" class="inline-block rounded-full  hover:bg-gradient-to-br from-pink-500 to-purple-500">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" /></svg>
                
            </a>
            <a href="#" class="inline-block rounded-full  hover:bg-green-500">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.419 3.574 8 8 8 4.419 0 8-3.581 8-8 0-4.419-3.574-8-8-8zm3.656 13.252c-.274.458-.804.676-1.318.454l-2.853-1.296c-.392-.174-.85-.052-1.131.27l-.826.827c-.251.251-.529.454-.804.702-.251.174-.476.378-.702.604-.226.226-.43.529-.604.78-.226.251-.43.529-.604.827-.174.274-.347.604-.226.93.122.326.542.602.93.454.83-.3 1.697-.73 2.522-1.53.418-.391.722-.777.968-1.225.225-.378.043-.804-.304-1.027z" /></svg>
                
            </a>
           
        </div>
    </div>
      </div>
    </div>
    <div class="group relative rounded-lg cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
      <div class="h-96 w-72">
        <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={V} alt="" />
      </div>
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div class="absolute inset-0 flex translate-y-[80%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 class="font-dmserif text-3xl font-bold text-white">Vishnu</h1>
        <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Founder</p>
        <div class="sm:flex sm:items-center sm:justify-between">
        
        <div class="flex mt-4 space-x-2 sm:justify-center sm:mt-0">
            <a href="#" class="inline-block rounded-full  hover:bg-blue-500">


<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
      
            </a>
            <a href="#" class="inline-block rounded-full  hover:bg-gradient-to-br from-pink-500 to-purple-500">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" /></svg>
                
            </a>
            <a href="#" class="inline-block rounded-full  hover:bg-green-500">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.419 3.574 8 8 8 4.419 0 8-3.581 8-8 0-4.419-3.574-8-8-8zm3.656 13.252c-.274.458-.804.676-1.318.454l-2.853-1.296c-.392-.174-.85-.052-1.131.27l-.826.827c-.251.251-.529.454-.804.702-.251.174-.476.378-.702.604-.226.226-.43.529-.604.78-.226.251-.43.529-.604.827-.174.274-.347.604-.226.93.122.326.542.602.93.454.83-.3 1.697-.73 2.522-1.53.418-.391.722-.777.968-1.225.225-.378.043-.804-.304-1.027z" /></svg>
                
            </a>
           
        </div>
    </div>
      </div>
    </div>
    <div class="group relative rounded-lg cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
      <div class="h-96 w-72">
        <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={R} alt="" />
      </div>
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div class="absolute inset-0 flex translate-y-[80%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 class="font-dmserif text-3xl font-bold text-white">Rahul</h1>
        <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Founder</p>
        <div class="sm:flex sm:items-center sm:justify-between">
        
        <div class="flex mt-4 space-x-2 sm:justify-center sm:mt-0">


<a href="#" class="inline-block rounded-full  hover:bg-blue-500">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
      
            </a>
            <a href="#" class="inline-block rounded-full  hover:bg-gradient-to-br from-pink-500 to-purple-500">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" /></svg>
                
            </a>
            <a href="#" class="inline-block rounded-full  hover:bg-green-500">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.419 3.574 8 8 8 4.419 0 8-3.581 8-8 0-4.419-3.574-8-8-8zm3.656 13.252c-.274.458-.804.676-1.318.454l-2.853-1.296c-.392-.174-.85-.052-1.131.27l-.826.827c-.251.251-.529.454-.804.702-.251.174-.476.378-.702.604-.226.226-.43.529-.604.78-.226.251-.43.529-.604.827-.174.274-.347.604-.226.93.122.326.542.602.93.454.83-.3 1.697-.73 2.522-1.53.418-.391.722-.777.968-1.225.225-.378.043-.804-.304-1.027z" /></svg>
                
            </a>
           
        </div>
    </div>
      </div>
      
    </div>
    
  </div>
  //FAQ
  <div  style={{position:"absolute",top:"600px",width:'1200px',right:'90px'}}>
  <div className="dark:bg-neutral">
    <div className='w-full py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[450px] mx-auto my-4' src={Faq} alt='/' />
        <div className='flex flex-col justify-center text-[white]'>
        <div className="bg-neutal">
                <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                    
                    <div className="space-y-4">
                    <details className="w-full rounded-lg ring-1 ring-blue">
                            <summary className="px-4 py-6">
                            Why Donation?
                            </summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-[#00d8ff]">
                            Donation is important because it helps to create positive change and support causes that are important to individuals and communities. Through donations, we can work towards a better world and improve the lives of those around us.
                            </p>
                        </details>
                        <details className="w-full rounded-lg ring-1 ring-blue">
                            <summary className="px-4 py-6">
                            Importance of Crowdfunding using Blockchain? 
                            </summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-[#00d8ff]">

                            Crowdfunding using blockchain technology has the potential to democratize access to funding, improve transparency and security, and create new opportunities for entrepreneurs and creative individuals around the world. 
                            </p>
                        </details>
                        <details className="w-full rounded-lg ring-1 ring-blue">
                            <summary className="px-4 py-6">
                            How Transactions using Blockchain is Secure?
                            </summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-[#00d8ff]">
                            The combination of decentralization, encryption, consensus, immutability, and traceability makes transactions using blockchain technology highly secure, transparent, and resistant to fraud and hacking.
                            </p>
                        </details>
                        
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  //Gallery
  <div style={{position:"absolute",top:"1280px",left:'510px'}}>
    <div class="mb-10 md:mb-16">
    <h2
      class="
        mb-4
        text-2xl
        font-bold
        text-center text-[#00d8ff]
        lg:text-3xl
        md:mb-6
      "
    >
     Our Gallery
    </h2>

    
  </div>
  </div>
  <div  style={{position:"absolute",top:"1300px",right:'90px'}}>
  <section class="overflow-hidden text-gray-200">
  <div class="container mx-auto px-25 py-10 lg:px-32 lg:pt-24">
    <div class="-m-1 flex flex-wrap md:-m-10">
      <div class="flex w-1/2 flex-wrap">
        <div class="w-1/2 p-1 md:p-2">
          <img
            alt="gallery"
            class="block h-full w-full rounded-lg object-cover object-center hover:scale-125 transition-all duration-500 cursor-pointer"
            src={i1} />
        </div>
        <div class="w-1/2 p-1 md:p-2">
          <img
            alt="gallery"
            class="block h-full w-full rounded-lg object-cover object-center hover:scale-125 transition-all duration-500 cursor-pointer"
            src={i2} />
        </div>
        <div class="w-full p-1 md:p-2">
          <img
            alt="gallery"
            class="block h-full w-full rounded-lg object-cover object-center hover:scale-125 transition-all duration-500 cursor-pointer"
            src={i3} />
        </div>
      </div>
      <div class="flex w-1/2 flex-wrap">
        <div class="w-full p-1 md:p-2">
          <img
            alt="gallery"
            class="block h-full w-full rounded-lg object-cover object-center hover:scale-125 transition-all duration-500 cursor-pointer"
            src={i4} />
        </div>
        <div class="w-1/2 p-1 md:p-2">
          <img
            alt="gallery"
            class="block h-full w-full rounded-lg object-cover object-center hover:scale-125 transition-all duration-500 cursor-pointer"
            src={i5} />
        </div>
        <div class="w-1/2 p-1 md:p-2">
          <img
            alt="gallery"
            class="block h-full w-full rounded-lg object-cover object-center hover:scale-125 transition-all duration-500 cursor-pointer"
            src={i6} />
        </div>
      </div>
    </div>
  </div>
</section>
 
    </div>
  

  //
  </div>
  
  </div>
  
  </div>






   <br /><br /><br /><br /><br />

    //Footer//
    <hr style={{position:"absolute",top:"4500px",width:'1519px'}} className="styled-line"/>

  <div  style={{position:"absolute",top:"4500px",left:'100px'}}>
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


  <div style={{position:"absolute",top:"4700px",left:'80px'}}>
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

export default AboutPage;