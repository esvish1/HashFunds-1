
import React from 'react'
import img2 from "../assets/c.webp"
import { useForm } from 'react-hook-form'

const Fundraise = () => {
    const { register, handleSubmit, watch, formState: {errors}} = useForm();
    const onSubmit = (data) => {
        alert(JSON.stringify(data));
        console.log(watch(data));
    }

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




    <div className='w-106 m-40 text-left'>

    <div style={{position:'absolute',top:'600px',width:'800px',left:'350px'}}>
    <div className="bg-gray-200">
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
                required: true,
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

Shaalooom, [28-02-2023 15:45]
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
    
    </>
  )
}

export default Fundraise