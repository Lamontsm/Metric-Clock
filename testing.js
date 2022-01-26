// This is a node.js program to test the logic, to be moved to the script in the html
const OFFSET = 3;  // arbitrary for now

// //Calculate current Metric time
let curTime = new Date();
let timeZone = curTime.getTimezoneOffset() / (-60);        //PT is -8           
curTime.setHours(curTime.getHours() - OFFSET - timeZone);
console.log('Adjusted time is: ' + curTime);
    
let mt = convertTime(curTime);

console.log("Current metric time");
console.log(mt.mhrs + ":" + mt.mmins.toString().padStart(2, '0') + ":" + mt.msecs.toString().padStart(3, '0'))  //TODO check format with leading zeros
console.log(mt.day + ' ' + mt.date + ' ' + mt.month + ' ' + mt.year);

// // Convert input time to metric  TODO
time = new Date();  // For plugging in the defaults
let nYear = 2022;  //time.getFullYear();
let nMonth = 0;   //time.getMonth();
let nDate = 22;    //time.getDate(); not zero-based
let nTimeZone = -8;  //time.getTimeZoneOffset()/60
let dayLightSav = 0; //Standard time = 0, daylight saving = -1
let nHours = 22;   //time.getHours() + OFFSET + nTimeZone;
let nMins = 0;    //time.getMinutes();
let nSecs = 0 ;    //time.getSeconds();
newTime = new Date(nYear, nMonth, nDate, nHours - OFFSET - nTimeZone +  dayLightSav , nMins, nSecs);
let nt = convertTime(newTime);
console.log("\nMetric time after conversion");
console.log(nt.mhrs + ":" + nt.mmins.toString().padStart(2, '0') + ":" + nt.msecs.toString().padStart(3, '0')) 
console.log(nt.day + ' ' + nt.date + ' ' + nt.month + ' ' + nt.year);

function convertTime (time){
    let t = {};
    t.year = time.getFullYear();
    t.month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][time.getMonth()];
    t.date = time.getDate();
    t.day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][time.getDay()];
    let remain = ((time.getHours() * 60) + time.getMinutes()) * 60 + time.getSeconds();
    
    remain = remain * 1000000 / 86400;
    t.mhrs = Math.floor(remain / 100000);
    remain -= t.mhrs * 100000;
    t.mmins = Math.floor(remain / 1000);
    remain -= t.mmins * 1000;
    t.msecs = Math.floor(remain);
    return t;
}

// // Convert input time to metric
// time = new Date();
// let nYear = 2022;  //time.getFullYear();
// let nMonth = 0;   //time.getMonth();
// let nDate = 14;    //time.getDate(); not zero-based
// let nTimeZone = -8;  //time.getTimeZoneOffset()/60
// let dayLightSav = 0; //Standard time = 0, daylight saving = -1
// let nHours = 19;   //time.getHours() + OFFSET + nTimeZone;
// let nMins = 10;    //time.getMinutes();
// let nSecs = 0 ;    //time.getSeconds();
// newTime = new Date(nYear, nMonth, nDate, nHours + OFFSET + nTimeZone +  dayLightSav , nMins, nSecs);
// console.log(newTime);  //remove later
// let nt = convertTime(newTime);

// function convertTime(newTime) {
//     let t = {};
//     t.year = newTime.getFullYear();
//     t.month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][newTime.getMonth()];
//     t.date = newTime.getDate();
//     t.day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][newTime.getDay()];
//     let hrs = newTime.getUTCHours() + OFFSET;
//     let mins = newTime.getUTCMinutes();
//     let secs = newTime.getUTCSeconds();
//     let msec = newTime.getUTCMilliseconds();  //This is not working!!! Returns 0

//     console.log('current adjusted UTC time: ' + t.day + ' ' + hrs + ':' + mins + ':' + secs);  // TODO Remove when time calc is fixed

//     t.printout = function () {
//         return 'metric time: ' + this.date + ' ' + this.m_hours + ':' + this.m_mins;
//     }
    
//     let elapsed = (((((hrs * 60) + mins) * 60) + secs) * 1000) + msec;  

//     t.m_hours = Math.floor(elapsed / 10000000);
//     elapsed = elapsed % 10000000;
//     t.m_mins = (Math.floor(elapsed / 100000));
//     elapsed = elapsed % 100000;

//     t.m_secs = padTime(padTime(Math.floor(elapsed / 100)));
//     t.printout = function () {
//         return 'metric time: ' + this.date + ' ' + this.m_hours + ':' + this.m_mins;
//     }
//     return t;
// }

// function padTime(i) {
//     if (i < 10) {
//         i = "00" + i;
//     }  // add zeros in front of numbers < 10
//     return i;
// }
