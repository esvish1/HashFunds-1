
import React from 'react'
import img2 from "../assets/c.webp"
import Carousel1 from '../components/Slider1';
import { useForm } from 'react-hook-form'
import {AiFillFacebook, AiFillGoogleCircle, AiFillMail, AiFillYoutube, AiOutlineWhatsApp} from 'react-icons/ai'

const Fundraise = () => {
  const { register, handleSubmit, watch, formState: {errors}} = useForm();
  const onSubmit = async (data) => {
      try {
        const response = await fetch('http://localhost:3000/api/form-data', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });

        const responseData = await response.json();
        if (responseData.success) {
          alert('Form data submitted successfully');
        } else {
          alert('Failed to submit form data');
        }
      } catch (error) {
        console.error(error);
      }
    };
    const slides = [
        "https://ih1.redbubble.net/image.3538509645.0995/ssrco,classic_tee,mens,fafafa:ca443f4786,front_alt,square_product,600x600.u2.jpg",
        "http://www.wearethecity.com/wp-content/uploads/2012/08/MP910221024.jpg",
        "https://thumbs.dreamstime.com/b/crowdfunding-crowdfunding-written-blackboard-icons-107166337.jpg",
        "https://imageio.forbes.com/specials-images/imageserve/639337837c344730ef65ce93/Alphabet-letter-wooden-blocks-with-words-GIVE-in-child-and-parents-hands--Family-and/960x0.jpg?format=jpg&width=960",
    ]

  return (
    <>
    
    <div>
    <div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
        <img style={{position:'absolute',width:'1540px',height:'480px'}}
          src={img2}
          alt="My image" 
        />

        <div class="absolute top-40 left-40 px-0 py-9">
          <h1 class="mb-3 text-xl-300 font-semibold tracking-tight text-white">Start Fundraising</h1>
         <p class="leading-normal text-gray-100">In a Few Steps !</p>
        </div>
      </div>
    </div>



    <div style={{position:'absolute', right:'1500px'}}>
    <div className='w-106 m-40 text-left'>

    <div style={{position:'absolute',top:'600px',width:'800px',left:'350px'}}>
    <div className="sm:rounded-lg bg-gray-100 hover:bg-gray-300 hover:text-white-900">
    <div className="max-w-7xl mx-auto py-12 sm:px-6 lg:px-8">
        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
          <div className="p-6 bg-white border-b border-gray-200">
    <h2 className="text-3xl font-extrabold text-gray-900 text-center">Fundraising Form</h2>
        <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4' onSubmit={handleSubmit(onSubmit)}>
            <label className=' block text-gray-700 text-sm font-bold mt-3 mb-2 '>First Name</label>
            <input className='shadow appearance-none border rounded w-full py-2 px-3 textgray-700 leading-tight focus:outline-none focus:shadow-outline' type="text" id="firstName" placeholder='John'
            {...register("firstName", {
                required: true,
                maxLength: 20,
                pattern: /^[A-Za-z]+$/i
            })}
            
            /> 
            {errors?.firstName?.type === "required" && <p className='text-red-500'>First name is required</p>}
            {errors?.firstName?.type === "pattern" && (<p className='text-red-500'>Alphabetical characters only</p>)}
<br></br>
            <label className='block text-gray-700 text-sm font-bold mt-3 mb-2'>Middle Name</label>
            <input className='shadow appearance-none border rounded w-full py-2 px-3 textgray-700 leading-tight focus:outline-none focus:shadow-outline' type="text" id="middleName" placeholder='K'
            {...register("middleName", {
                required: false,
                maxLength: 0,
                pattern: /^[A-Za-z]+$/i
            })}
            
            /> 

            <label className='block text-gray-700 text-sm font-bold mt-3 mb-2'>Last Name</label>
            <input className='shadow appearance-none border rounded w-full py-2 px-3 textgray-700 leading-tight focus:outline-none focus:shadow-outline' type="text" id="lastName" placeholder='Doe'
            {...register("lastName", {
                pattern: /^[A-Za-z]+$/i
            })}
            
            
            />
            {errors?.lastName?.type === "pattern" && (<p className='text-red-500'>Alphabetical characters only</p>)}
            


            <label className='block text-gray-700 text-sm font-bold mt-3 mb-2'>Email</label>
            <input className='shadow appearance-none border rounded w-full py-2 px-3 textgray-700 leading-tight focus:outline-none focus:shadow-outline' type="email" id="email" placeholder='example@gmail.com'
            {...register("email", {
                 pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i 
            })}
            
            />
            {errors?.email?.type === "pattern" && (<p className='text-red-500'>Please write correct email address</p>)}

<label className='block text-gray-700 text-sm font-bold mt-3 mb-2'>Country</label>
            <input className='shadow appearance-none border rounded w-full py-2 px-3 textgray-700 leading-tight focus:outline-none focus:shadow-outline' type="text" id="country" placeholder='India'
            {...register("country", {
                required: true,
                maxLength: 20,
                pattern: /^[A-Za-z]+$/i
            })}
            
            /> 
            {errors?.firstName?.type === "required" && <p className='text-red-500'>Country is required</p>}
            {errors?.firstName?.type === "pattern" && (<p className='text-red-500'>Alphabetical characters only</p>)}
            <label className='block text-gray-700 text-sm font-bold mt-3 mb-2'>Phone Number</label>
            <input className='shadow appearance-none border rounded w-full py-2 px-3 textgray-700 leading-tight focus:outline-none focus:shadow-outline' type="number" id="phone" placeholder='000-000-0000'
            {...register("phone", {
                required: true,
                maxLength: 10,
                pattern: /^[0-9]*$/
            })}
            
            /> 
            {errors?.firstName?.type === "required" && <p className='text-red-500'>Phone Number is required</p>}
            {errors?.firstName?.type === "pattern" && (<p className='text-red-500'>Numbers only</p>)}


            <label className='block text-gray-700 text-sm font-bold mt-3 mb-2'>Consulting Hospital</label>
            <input className='shadow appearance-none border rounded w-full py-2 px-3 textgray-700 leading-tight focus:outline-none focus:shadow-outline' type="text" id="hospital" placeholder='Short text'
            {...register("hospital", {
                required: true,
                maxLength: 25,
                pattern: /^[A-Za-z]+$/i
            })}
            
            /> 
            {errors?.firstName?.type === "required" && <p className='text-red-500'>Hospital Name is required</p>}
            {errors?.firstName?.type === "pattern" && (<p className='text-red-500'>Alphabetical characters only</p>)}

            <label className='block text-gray-700 text-sm font-bold mt-3 mb-2'>Documents to be Uploaded</label>
            <input className='shadow appearance-none border rounded w-full py-2 px-3 textgray-700 leading-tight focus:outline-none focus:shadow-outline' type="file" id="file" 
/>
            
            <label className='block text-gray-700 text-sm font-bold mt-3 mb-2'>Expected Date Of Money</label>
            <input className='shadow appearance-none border rounded w-full py-2 px-3 textgray-700 leading-tight focus:outline-none focus:shadow-outline' type="date" id="lastName" placeholder='Doe'
            {...register("date", {
                required:"Date is required"
            })}
            />

           <label className='block text-gray-700 text-sm font-bold mt-3 mb-2'>Fundraising for</label>
            <div className="t">
                <input type="checkbox" id="t" name="t" value="aid" />  Medical Aid
                <br></br>
                <input type="checkbox" id="t" name="t" value="aid" />  Transplant
                <br></br>
                <input type="checkbox" id="t" name="t" value="aid" />  Cancer
                <br></br>
                <input type="checkbox" id="t" name="t" value="aid" />  Education
                <br></br>
                <input type="checkbox" id="t" name="t" value="aid" />  Others
                <br></br>
               
            </div>

            <label className='block text-gray-700 text-sm font-bold mt-3 mb-2'>Submit your health history</label>
            <input className='shadow appearance-none border rounded w-full py-2 px-3 textgray-700 leading-tight focus:outline-none focus:shadow-outline' type="textarea" id="history" placeholder='Long text'
            {...register("history", {
                required: false,
                maxLength: 100,
                pattern: /^[A-Za-z]+$/i
            })}
            
            /> 
           
           <div class="container py-5 px-5 mx-0 min-w-full flex flex-col items-center">

<button className='m-2' class="relative inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-medium transition-all bg-blue-600 rounded-full hover:bg-white group">
            <span class="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-blue rounded-full"></span>
            <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-blue-600">Submit</span></button>
        
        </div></form>
        </div>
        </div>
        </div>
        </div>
    </div>
    </div>
    </div>
    


    <div style={{position:'absolute', left:'900px', top:'1450px'}}>
    <div className='max-w-lg'>
        <Carousel1 autoSlide={true} autoSlideInterval={2500}>
            {slides.map((s) => (
                <img src={s} />
            ))}
        </Carousel1>
    </div>
    </div>






    //Start Fundraiser//
    <div  style={{position:"absolute",top:"690px",width:'512px',left:'900px'}}>
    <section className="dark:bg-gray-800 dark:text-gray-100">
  <div className="container max-w-5xl px-4 py-12 mx-auto">
    <div className="grid gap-4 mx-4 sm:grid-cols-12">
      {/* <div className="col-span-12 sm:col-span-3">
        <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-[#00d8ff]">
          <h3 className="text-3xl font-semibold">Start a Fundraiser in three simple steps</h3>
          
        </div>
      </div> */}
      <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
        <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-700">
          <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-[#00d8ff]">
            <h3 className="text-xl font-semibold tracking-wide">Start Your Fundraiser </h3>
            
            <p className="mt-3">It’ll take only 2 minutes. Just tell us a few details about you and the ones you are raising funds for and upload necessary documents.</p>
          </div>
          <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-[#00d8ff]">
            <h3 className="text-xl font-semibold tracking-wide">Documents to be Attached</h3>
            
            <p className="mt-3">- Two Goverment ID Proof <br />- Presciption from Consulting Doctor <br />- Consulting Hospital Details <br />- Medical History of Paitent</p>
          </div>
          <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-[#00d8ff]">
            <h3 className="text-xl font-semibold tracking-wide">Share your Fundraiser</h3>
            
            <p className="mt-3">All you need to do is share the fundraiser with your friends and family. In no time, support will start pouring in.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>






    //Footer//
    <hr style={{position:"absolute",top:"2100px",width:'1519px'}} className="styled-line"/>

  <div  style={{position:"absolute",top:"2100px",left:'100px'}}>
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


  <div style={{position:"absolute",top:"2300px",left:'80px'}}>
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
    
    </>
  )
}

export default Fundraise