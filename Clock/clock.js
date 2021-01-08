const hr=document.getElementById('hour');
const min=document.getElementById('min');
const sec=document.getElementById('sec');
const deg=6;
function time(){
    let day = new Date();
    let hh=day.getHours() * 30;
    let mm= day.getMinutes() * deg;
    let ss= day.getSeconds() * deg;
    hr.style.transform =`rotateZ(${hh+(mm/12)}deg)`;
    min.style.transform=`rotateZ(${mm}deg)`;
    sec.style.transform=`rotateZ(${ss}deg)`;
}

time();

setInterval(()=>{
  time();
},1000)
