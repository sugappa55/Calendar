import moment from "moment"
export const getMonthDates=(year,month)=>{
    const val=moment(`${year}-${month}-1`,"YYYY-MM-DD") //to get the moment of  selecetd month and year 
    
    const startDay=val.clone().startOf("month").startOf("week")  //calendar starting day
    const endDay=val.clone().endOf("month").endOf("week")  //calendar ending day
    const day=startDay.clone().subtract(1,"day")//to start a loop before it user first day of selected month 
 
     let calender=[]//collection of weeks
     while(day.isBefore(endDay,"day"))
     {
         calender.push(
             Array(7).fill(0).map(()=>day.add(1,"day").clone())//creating a week collection of days
         )
     }
     return calender
}