// const currentDayElement = document.getElementById("currentDay");
// const currentUTCElement = document.getElementById("currentUTC");


// function updateCurrentDay() {
//     const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//     const currentDate = new Date();
//     const currentDayOfWeek = daysOfWeek[currentDate.getUTCDay()];
//     currentDayElement.textContent = currentDayOfWeek;
// }


//  function updateCurrentUTC() {
//      const currentUTCTime = new Date();
//      const currentTimeString = currentUTCTime.toISOString();
//      currentUTCElement.textContent = currentUTCTime;
     
//  }


// updateCurrentDay();
// updateCurrentUTC();
document.getElementById('currentUTC').innerHTML = Date.now()