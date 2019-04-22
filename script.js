// let audio_A = document.createElement("audio");
// let arr =['sounds/1.mp3','sounds/2.mp3','sounds/3.mp3','sounds/4.mp3',
// 'sounds/5.mp3','sounds/6.mp3','sounds/7.mp3','sounds/8.mp3',];
// let number = [65,83,68,70,71,72,74,75];
// function soundClick(event) {
// 	let z = event.keyCode;	
// 	let zw = number.indexOf(z);	
// 	if (zw !== -1 ) {
// 		audio_A.src = arr[zw];
// 		audio_A.play();
// 	}	;
// };





const button = [
	{keyA: document.getElementById('playAudioA'), soundA: new Audio('sounds/1.mp3'), codeA: 65},
	{keyS: document.getElementById('playAudioS'), soundS: new Audio('sounds/2.mp3'), codeS: 83},
	{keyD: document.getElementById('playAudioD'), soundD: new Audio('sounds/3.mp3'), codeD: 68},
	{keyF: document.getElementById('playAudioF'), soundF: new Audio('sounds/4.mp3'), codeF: 70},
	{keyG: document.getElementById('playAudioG'), soundG: new Audio('sounds/5.mp3'), codeG: 71},
	{keyH: document.getElementById('playAudioH'), soundH: new Audio('sounds/6.mp3'), codeH: 72},
	{keyJ: document.getElementById('playAudioJ'), soundJ: new Audio('sounds/7.mp3'), codeJ: 74},
	{keyK: document.getElementById('playAudioK'), soundK: new Audio('sounds/8.mp3'), codeK: 75}
]

function mouseClick(key, sound) {
	key.addEventListener("mousedown", function (event) {
		sound.play();
	})
}
mouseClick(button[0].keyA, button[0].soundA);
mouseClick(button[1].keyS, button[1].soundS);
mouseClick(button[2].keyD, button[2].soundD);
mouseClick(button[3].keyF, button[3].soundF);
mouseClick(button[4].keyG, button[4].soundG);
mouseClick(button[5].keyH, button[5].soundH);
mouseClick(button[6].keyJ, button[6].soundJ);
mouseClick(button[7].keyK, button[7].soundK);

function soundClick(key, sound, code) {
	document.addEventListener('keydown', function(event){
		if(event.keyCode == code){
			sound.play();
		}
	})
}

soundClick(button[0].keyA, button[0].soundA, button[0].codeA);
soundClick(button[1].keyS, button[1].soundS, button[1].codeS);
soundClick(button[2].keyD, button[2].soundD, button[2].codeD);
soundClick(button[3].keyF, button[3].soundF, button[3].codeF);
soundClick(button[4].keyG, button[4].soundG, button[4].codeG);
soundClick(button[5].keyH, button[5].soundH, button[5].codeH);
soundClick(button[6].keyJ, button[6].soundJ, button[6].codeJ);
soundClick(button[7].keyK, button[7].soundK, button[7].codeK);