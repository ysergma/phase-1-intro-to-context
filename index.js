// Your code here
function createEmployeeRecord (array) {
//const [firstName,familyName,title,payPerHour,timeInEvents,timeOutEvents] = array
return {firstName:array[0],
        familyName:array[1],
        title:array[2],
        payPerHour:array[3],
        timeInEvents:[],
        timeOutEvents:[]
}

}

function createEmployeeRecords (arrays) {
let empArr=[];
arrays.map((array)=>{
  const empRecord =  createEmployeeRecord(array)
 // console.log(empRecord)
     empArr.push(empRecord)
  //   console.log(empArr)
})

return empArr

}

function createTimeInEvent(obj,stamp) {
    const parts =stamp.split(" ");
    const date = parts[0];
     const hour = parts[1]*1      
    const timeInObj={type:"TimeIn",
                     hour:hour,
                     date:date
}
  obj.timeInEvents.push(timeInObj)
  return obj

}

function createTimeOutEvent(obj,stamp) {
    const parts =stamp.split(" ");
    const date = parts[0];
     const hour = parts[1]*1      
    const timeOutObj={type:"TimeOut",
                     hour:hour,
                     date:date
}
  obj.timeOutEvents.push(timeOutObj)
  return obj


}

function hoursWorkedOnDate (objects,date){
    const timeInEventsobj= objects.timeInEvents[0].hour
    const timeOutEventsobj= objects.timeOutEvents[0].hour
  // console.log(timeInEventsobj)
  // console.log(timeOutEventsobj)
  // console.log(date)

   return (timeOutEventsobj-timeInEventsobj)/100

}


function wagesEarnedOnDate(objects,date){
//console.log(objects)
const timeInEventsobj= objects.timeInEvents[0].hour
const timeOutEventsobj= objects.timeOutEvents[0].hour
const payPerHour = objects.payPerHour
return ((timeOutEventsobj-timeInEventsobj)/100)*payPerHour
}

function allWagesFor (objects,date){

  const timeInEventsobj= objects.timeInEvents[0].hour
const timeOutEventsobj= objects.timeOutEvents[0].hour
const timeInEventsobj1= objects.timeInEvents[1].hour
const timeOutEventsobj1= objects.timeOutEvents[1].hour
const time1=timeOutEventsobj - timeInEventsobj
const time2=timeOutEventsobj1 -timeInEventsobj1
const payPerHour = objects.payPerHour
return ((time1+time2)/100)*payPerHour

}

function calculatePayroll (empArr){
    console.log
    let sum = 0
empArr.forEach(element => {
    //console.log(allWagesFor(element))
  const  empay= allWagesFor(element);
    return sum += empay
}

);
return sum
    
}

