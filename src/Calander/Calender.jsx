import moment from 'moment'
import React from 'react'
import {useParams,useNavigate} from "react-router-dom"
import {MdOutlineArrowForwardIos,MdOutlineArrowBackIos} from "react-icons/md"
import { getMonthDates } from './month'
const Calender = () => {
   const {year,month}=useParams()
   const navigate=useNavigate()


  const calender=getMonthDates(year,month)
    const today=(val)=>{  //to check the date is today or not

        return moment(val).clone().format("DD/MM/YYYY")===moment().clone().format("DD/MM/YYYY")
    }
    var days=moment()._locale._weekdaysShort  //days of a week 
    var months=moment()._locale._months //to get months
    const prevMonth=+month===1?12:+month-1
    const nextMonth=+month===12?1:+month+1
    const nextYear=+month===12?+year+1:+year
    const prevYear=+month===1?+year-1:+year

  return (
    <div className='w-[97%] border border-[#8d99ae] h-screen m-auto'>
    <div className="flex w-[100%]  justify-between px-6 py-4 mb-3 border bg-[#003049]">
        <button onClick={()=>navigate(`/${prevYear}/${prevMonth}`)} className='border px-3 py-1 bg-[#edf2f4] hover:bg-[#2b2d42] hover:text-[#edf2f4] rounded-xl flex items-center gap-2'><MdOutlineArrowBackIos/> Prev </button>
        <h1 className='text-xl font-bold'>{months[month-1]}{" , "}{year}</h1>
        <button onClick={()=>navigate(`/${nextYear}/${nextMonth}`)} className='flex items-center gap-2 border px-3 py-1 bg-[#edf2f4] hover:bg-[#2b2d42] hover:text-[#edf2f4] rounded-xl'>Next <MdOutlineArrowForwardIos/></button>
    </div>
    <div className="lg:w-[85%] h-screen md:w-[90%] sm:[95%] m-auto">
        <div className='w-full grid grid-cols-7 md:px-8 px-4 '>{days.map((e,i)=><div className="border flex py-2 justify-center items-center " key={i}>{e}</div>)}</div>
        {calender.map((week,i)=><div key={i} className='w-full grid grid-cols-7   md:px-8 px-4'>
            {week.map((day,i)=><div key={i} className=' border lg:h-20 md:h-16 h-12 flex items-center justify-center cursor-pointer hover:bg-[#003049]' style={{backgroundColor:`${today(day)?"blue":""}`, color:`${today(day)?"white":"black"}`}}>
                {day.format("D").toString()}

            </div>)}
        </div>)}

    </div>
    </div>
  )
}

export default Calender
