
window.addEventListener('keydown', playAudio);

function playAudio(e){
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
	if(!audio) return; //stop the function from running all together 
	audio.currentTime = 0; //rewind to the start. setting this value seeks the media to the new time
	audio.play(); //play the sound
	key.classList.add('playing');  //add CSS playing class when pressing down the key
}


function removeTransition(e){
	if (e.propertyName !== 'transform') return;
	this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));



