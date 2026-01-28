let hr=document.getElementById('hour');
let min=document.getElementById('min');
let sec=document.getElementById('sec');
let digh=document.querySelector('#dig-hr h4');
let digmin=document.querySelector('#dig-min h4');
let digsec=document.querySelector('#dig-sec h4');
function displayTime(){
  let date=new Date();
  let hh=date.getHours();
  let mm=date.getMinutes();
  let ss=date.getSeconds();

  let hRotation=30*hh+mm/2;
  let mRotation=6*mm;
  let sRotation=6*ss;


  hr.style.transform=`rotate(${hRotation}deg)`;
  min.style.transform=`rotate(${mRotation}deg)`;
  sec.style.transform=`rotate(${sRotation}deg)`;
}
function digital(){
    let date=new Date();
    let digHours=date.getHours();
    let digmiN=date.getMinutes();
    let digSec=date.getSeconds();
    digh.innerHTML=`${digHours}`
    digsec.innerHTML=`${digmiN}`
    digmin.innerHTML=`${digSec}`
    
}

setInterval(digital,1000);

setInterval(displayTime,1000);