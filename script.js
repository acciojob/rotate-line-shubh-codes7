//your JS code here. If required.
deg = 0;
setInterval(()=>{
	document.querySelector("#line").style.transform = `rotate(${deg}deg)`
	deg += 2;
}, 20)