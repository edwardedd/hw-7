let audio_A = document.createElement("audio");
let arr =['sounds/1.mp3','sounds/2.mp3','sounds/3.mp3','sounds/4.mp3',
'sounds/5.mp3','sounds/6.mp3','sounds/7.mp3','sounds/8.mp3',];
let number = [65,83,68,70,71,72,74,75];
function soundClick(event) {
	let z = event.keyCode;	
	let zw = number.indexOf(z);	
	if (zw !== -1 ) {
		audio_A.src = arr[zw];
		audio_A.play();
	}	;
};
addEventListener('keydown', soundClick);