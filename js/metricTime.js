const utcDate1 = new Date(Date.UTC(96, 1, 2, 3, 4, 5));
const utcDate2 = new Date(Date.UTC(0, 0, 0, 0, 0, 0));
var now = new Date();

// Adding something from PaisaCloud version 2  Now adding something from Codeanywhere

// console.log(utcDate1.toUTCString());
// expected output: Fri, 02 Feb 1996 03:04:05 GMT

// console.log(utcDate2.toUTCString());
// expected output: Sun, 31 Dec 1899 00:00:00 GMT

// alert("date =" + utcDate2);

// var doc = document.getElementById("time");
// doc.innerHTML = "good to see you 1";
// doc.innerHTML = utcDate2;

// $("#test1").text("Hello world from JQuery! Time was: " + utcDate2 + " or this: " + now);

$(document).ready(function(){
    $(".hitme").click(function(){
    //   alert("The paragraph was clicked.");
        $(".printme").text("Current time in ms since 1970: " + Date.parse(now));
        // TODO - check what parse does. Accurate?
      });
    });

// var dateLocal = new Date();
// console.log("Current local time is: " + dateLocal)

// console.log("UTC date M:D:H:M = " + dateLocal.getUTCMonth() + ":" + dateLocal.getUTCDate() + ':' + dateLocal.getUTCHours() + ':' + dateLocal.getUTCMinutes());

// var dateUTC = dateLocal + (8 * 60 * 60 * 1000);
// console.log("Current date UTC by calculation: " + dateUTC);
//console.log("Current UTC date: " + dateUTC.getMonth() + ':' + dateUTC.getDate());  //Doesn't like this. read up on it some more. 

// var time = dateLocal.getTime();
// console.log("Time in msecs since...: " + time);

// var md = new Date();
// var midnightUTC = new Date(md.getFullYear(), md.getMonth(), md.getDay(), 0, 0, 0, 0);
// var midnightMSec = midnightUTC.getTime();
// console.log("time at UTC day start: " + midnightUTC + " Midnight in MSec = " + midnightMSec);
// var timeNow = new Date(md.getFullYear(), md.getMonth(), md.getDay(), 12, 0,0,0);
// console.log("Try time now: " + timeNow);
startTime();

function startTime() {
  var time = new Date();
  console.log("Time now local is: " + time);
  // var timeIDL = new Date(time.getFullYear(), time.getMonth(), time.getDate(), time.getHours() + 8, time.getMinutes(),
              // time.getSeconds(), time.getMilliseconds());
  // time = new Date(time.getFullYear(), time.getMonth(), time.getDate(), 4,0,0,0); //setting test time
  console.log("Test time local: " + time);
  var timeUTC = time;
  timeUTC.setHours(time.getHours() + 8);
  console.log("Time IDL is D:H:M:S: " + timeUTC.getDate() + ':' + timeUTC.getHours() + ':' + timeUTC.getMinutes() + ':' + timeUTC.getSeconds());
  var msecNow = timeUTC.getTime();
  console.log("Msec now: " + msecNow);
  var IDLmidnight = new Date(timeUTC.getFullYear(), timeUTC.getMonth(), timeUTC.getDate(), 0,0,0,0);
  console.log("Midnight IDL: " + IDLmidnight);
  var msecMN = IDLmidnight.getTime();
  console.log("Msec at midnight: " + msecMN);
  var delta = msecNow - msecMN;
  console.log("MSec elapsed: " + delta);

  var m_hours = padTime(Math.floor(delta/8640000));
  delta -= (m_hours * 8640000);
  var m_mins = padTime(Math.floor(delta/86400));
  delta -= (m_mins * 86400);
  var m_secs = padTime(Math.floor(delta/864));

  console.log("Metric time in HMS: " + m_hours + ":" + m_mins + ":" + m_secs);

  $("#test1").text("Metric Time");
  $("#test2").text(m_hours + ":" + m_mins + ":" + m_secs);
  var day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][timeUTC.getDay()];
  var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][timeUTC.getMonth()];
  $("#test3").text(day + ", " + month + " " + timeUTC.getDate() + ", " + timeUTC.getFullYear());
  var t = setTimeout(startTime, 864); // Note set for metric seconds
}
function padTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}