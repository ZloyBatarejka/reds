let startBtn = document.querySelector("#start");
let stopBtn = document.querySelector("#stop");
let timer = document.querySelector(".timer");
let data = new Date(2011,1,1);
let sec,min,hour;
function counter(){
	data.setSeconds(data.getSeconds()+1)
	let hour = "0" + data.getHours();
	if(sec >= 9){
		sec = data.getSeconds();
	} else {
		sec =  "0" + data.getSeconds();
	}
	if(min >= 10){
		min = data.getMinutes();
	} else {
		min =  "0" + data.getMinutes();
	}
	
	timer.textContent = `${hour}:${min}:${sec}`
}
	
startBtn.addEventListener("click",()=>{
	start = setInterval(counter,1000);
})
stopBtn.addEventListener("click",()=>{
	clearInterval(start);
	
})

