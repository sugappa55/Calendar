import React, { useState } from 'react'
import {useNavigate} from "react-router-dom"
import {MdOutlineArrowForwardIos} from "react-icons/md"

const Welcome = () => {
        const navigate=useNavigate()
        const [calendarData,setCalendarData]=useState({})

    const nextPage=(e)=>{
        e.preventDefault()
            navigate(`/${calendarData.year}/${calendarData.month}`)
    }
    const collectFormData=(e)=>{
        const {id,value}=e.target
        setCalendarData({
            ...calendarData,
            [id]:value
        })
       }
  return (
    <div className='w-full'>
      <h1 className='text-center text-3xl font-bold mt-8'>Enter year/month in the url to see the calendar</h1>
      <p className='text-center lg:my-16 md:my-10 my-6'>Or</p>
      <form className='text-center m-auto md:w-[50%] sm:w-full flex flex-col items-center justify-center ' onSubmit={(e)=>nextPage(e)}>
       <div className='flex '>
            <div className='w-[150px] h-[80px]  flex flex-col gap-2'>
                <label htmlFor="">Year  : </label>
                <label htmlFor="">Month  : </label>
            </div>
            <div className='w-[150px] h-[80px] flex flex-col gap-2 '>
                <input type="number" placeholder='year' name="" id="year" className='border text-center'  onChange={(e)=>collectFormData(e)} required min="0"/>
                <input type="number" placeholder='month' id="month" className='border text-center' onChange={(e)=>collectFormData(e)}  required min="1" max="12"/>
            </div>
       </div>
                <button type="submit" className='px-2 py-2 rounded-lg border hover:bg-green-500 flex items-center gap-2' >Go to Calender <MdOutlineArrowForwardIos/></button>

      </form>
    </div>
  )
}

export default Welcome
