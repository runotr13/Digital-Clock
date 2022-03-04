let hour = document.querySelector(".hour");
let minute = document.querySelector(".minute");
let second = document.querySelector(".second");
let pm = document.querySelector(".pm");

function Clock(){
    hour.innerText=new Date().getHours().toString().padStart(2, "0");
    minute.innerText=new Date().getMinutes().toString().padStart(2, "0");
    second.innerText=new Date().getSeconds().toString().padStart(2, "0");
    (new Date().getHours()<12 ? pm.innerText="AM" : "PM")
}
setInterval(Clock,1000)





