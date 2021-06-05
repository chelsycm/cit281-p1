/* 
CIT 281 Project 1
Name: Chelsy Cortes
*/

function getWeekDay(date){
    let weekdays= new Array(
        "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    );

    let index_of_day_of_week = date.getUTCDay()
    let day_of_week = weekdays[index_of_day_of_week]
   
    return day_of_week; 
}
let today = new Date();
console.log(getWeekDay(today));





