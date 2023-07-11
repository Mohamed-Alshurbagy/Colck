
// Collecting Data From Document:

const hours = document.querySelector('.hours');
const min = document.querySelector('.minuts');
const seconds = document.querySelector('.seconds');
let bIcon = document.querySelector('.main .burger-icon');
let head = document.querySelector('.main .head');
let close = document.querySelector('.main .close');

setInterval(function(){

  // Creating Time :
  let time = new Date(); // Create Instance From Date Object To 'time' Varable.
  let hour = time.getHours(); // Here We Get Hours Frome Our Main Var (time).
  let minut =  time.getMinutes(); // Now We Get Minutes From Same Var.
  let second = time.getSeconds(); // Getting Our Seconds.

  // Converting To Current Time:
  let hr = 30 * hour + minut / 2;
  let mr = 6 * minut;
  let sr = 6 * second;

  // Add Our Work To Element On HTML & Make it Move:
  hours.style.transform = `rotate(${hr}deg)`;
  min.style.transform = `rotate(${mr}deg)`;
  seconds.style.transform = `rotate(${sr}deg)`;
}, 1000);


// Controle Our Close & Burger Icon (Show-1 & Hide-2):
bIcon.onclick = function(){ // 1
  this.style.display = 'none';
  head.classList.add("toggle")
}

close.onclick = function(){ // 2
  bIcon.style.display = 'flex';
  head.classList.remove("toggle")
}

// ===== ===== ===== ===== =

// End Of The Code ..

// Name: Mohamed Al. Shurbagy;

// Doing: I'm A Junior Front End Developer;

// WhatsApp: 01558656682;

// EGYPT
