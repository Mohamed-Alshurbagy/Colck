// Collecting Data From Document:

const hours = document.getElementById("hours");
const min = document.getElementById("min");
const seconds = document.getElementById("seconds");
const bIcon = document.querySelector('.burger-icon');
const head = document.querySelector('.head')
const close = document.querySelector('.close');

setInterval(function(){
  // Creating Time:
  let time = new Date(); // Create Instance From Date Object To 'time' Varable.
  let h = time.getHours(); // Here We Get Hours Frome Our Main Var (time).
  let m = time.getMinutes(); // Now We Get Minutes From Same Var.
  let s = time.getSeconds(); // Getting Our Seconds.
  // Convertimg To Current Time:
  let hr = 30 * h + m / 2;
  let mr = m * 6;
  let sr = s * 6;
  // Add Our Work To Element On HTML & Make it Move:
  hours.style.transform = `rotate(${hr}deg)`;
  min.style.transform = `rotate(${mr}deg)`;
  seconds.style.transform = `rotate(${sr}deg)`;
}, 1000)

bIcon.onclick =function(){
  head.classList.toggle('s');
  this.style.display = 'none';
}

close.onclick = function(){
  this.parentElement.classList.remove('s');
  bIcon.style.display = 'flex';
}

// End Of The Code ..
