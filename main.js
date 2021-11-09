setInterval(clockTime, 1000) //calling the function every second 



function clockTime(){
    const D = new Date ();
   
    const SECONDS = D.getSeconds() * 6;  //60 seconds in a minute 360 / 60 = 6 
  
    const MINUTES = ( D.getMinutes()) * 6; // 60 minutes in an hour . 360 / 60 = 6 
  
    const HOURS =  (  D.getHours()) * 30;  // 12 hours on a clock.  360 / 30 = 12 
    document.getElementById("second_hand").style.transform = "rotate(" + SECONDS + "deg)"
    document.getElementById("minute_hand").style.transform = "rotate(" + MINUTES + "deg)"
    document.getElementById("hour_hand").style.transform   = "rotate("   +  HOURS + "deg)"

}


function myfunction() {
  const d = new Date();
  let h = d.getHours();
  let m = d.getMinutes();
  let s = d.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('button1').innerHTML = d;
  setTimeout(myfunction, 1000);
   
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }


function myfunction2() {
 var element = document.body;
        element.classList.toggle("dark-mode");

     }
 