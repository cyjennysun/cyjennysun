let setMin = 3;
let setSec = 0;
let timeLeft = 0;
let timeLeftCopy = 0;
let count;
let loopTime = null;

function start(){
  $('#start').css({'display': 'none'});
  $('#pause').css({'display': 'inline-block'}); 
  $('#reset').css({'opacity':'0.3', 'cursor': 'default','pointer-events': 'none'});
  $('.addTimeM').css({'visibility': 'hidden'});
  $('.reduceTimeM').css({'visibility': 'hidden'});
  $('.addTimeS').css({'visibility': 'hidden'});
  $('.reduceTimeS').css({'visibility': 'hidden'});
  timeLeft = Number($('.timerM').text())*60 + Number($('.timerS').text());
  timeLeftCopy = Number(setMin*60 + setSec);
  clearInterval(count);
  countDown();
  count = setInterval(countDown,1000);
}


function countDown(){
	if(timeLeft > 0){
		timeLeft = timeLeft - 1;
		$('.timerM').html(addZero(timeLeftToMin(timeLeft)));
		$('.timerS').html(addZero(timeLeftToSec(timeLeft)));
	} else{
		clearInterval(count);
		$('.timesup').css({'visibility': 'visible'});
		$('.indicator').css({'visibility': 'hidden'});
		$('#reset').css({'opacity':'1', 'cursor': 'pointer', 'pointer-events': 'auto'});
      	$('.timerM').css({'visibility': 'hidden'});
      	$('.timerS').css({'visibility': 'hidden'});
      	$('#start').css({'display':'inline-block', 'opacity': '0.3', 'cursor': 'default', 'pointer-events': 'none'});
      	$('#pause').css({'display':'none'});
      	document.getElementById('alarm').play();

	}
}


function pause(){
  clearInterval(count);
  $('#pause').css({'display': 'none'});
  $('#start').css({'display': 'inline-block'});  
  $('#reset').css({'opacity':'1', 'cursor': 'pointer', 'pointer-events': 'auto'});
}


function reset(){
  setMin = 3;
  setSec = 0;  
  $('.timerM').html(addZero(setMin)).css({'visibility': 'visible'});
  $('.timerS').html(addZero(setSec)).css({'visibility': 'visible'}); 
  arrowStateM();
  arrowStateS();
  $('#pause').css({'display': 'none'});
  $('#start').css({'display': 'inline-block', 'opacity':'1', 'cursor': 'pointer', 'pointer-events': 'auto'}); 
  $('#reset').css({'opacity':'0.3', 'cursor': 'default','pointer-events': 'none'});
  $('.addTimeM').css({'visibility': 'visible'});
  $('.reduceTimeM').css({'visibility': 'visible'});
  $('.addTimeS').css({'visibility': 'visible'});
  $('.reduceTimeS').css({'visibility': 'visible'});
  $('.timesup').css({'visibility': 'hidden'});
  $('.indicator').css({'visibility': 'visible'});
  document.getElementById('alarm').pause();
  document.getElementById('alarm').currentTime = 0;

}




//display: add a zero when number is <10
function addZero(time){
  return (time < 10 ? "0" : "") + time;
}

function timeIncreaseM(){
	if(setMin >= 0 && setMin < 59){
		setMin = setMin + 1;
	}else{
		setMin = 0;
	}
	return setMin;
}

function holdTimeIncreaseM(){
	if(setMin >= 0 && setMin < 59){
		setMin = setMin + 1;
	}else{
		setMin = 0;
	}
	return $('.timerM').html(addZero(setMin));
	$('.timerM').html(setMin);
	setMin++;
}

function timeDecreaseM(){
	if(setMin >= 1 && setMin <= 59){
		setMin = setMin - 1;
	}else{
		setMin = 59;
	}
	return setMin;	
}

function holdTimeDecreaseM(){
	if(setMin >= 1 && setMin <= 60){
		setMin = setMin - 1;
	}else{
		setMin = 59;
	}
	return $('.timerM').html(addZero(setMin));
	$('.timerM').html(setMin);
	setMin--;
}

function timeIncreaseS(){
	if(setSec >= 0 && setSec < 59){
		setSec = setSec + 1;
	}else{
		setSec = 0;
	}
	return setSec;
}

function holdTimeIncreaseS(){
	if(setSec >= 0 && setSec < 59){
		setSec = setSec + 1;
	}else{
		setSec = 0;
	}
	return $('.timerS').html(addZero(setSec));
	$('.timerS').html(setSec);
	setSec++;
}

function timeDecreaseS(){
	if(setSec >= 1 && setSec <= 60){
		setSec = setSec - 1;
	}else{
		setSec = 59;
	}
	return setSec;
}

function holdTimeDecreaseS(){
	if(setSec >= 1 && setSec <= 60){
		setSec = setSec - 1;
	}else{
		setSec = 59;
	}
	return $('.timerS').html(addZero(setSec));
	$('.timerS').html(setSec);
	setSec--;
}

function arrowStateM(){
	/*if(setMin == 60) {
		$('.addTimeM').css({'opacity':'0.3'});
		$('.reduceTimeM').css({'opacity':'1'});		
	}else if (setMin == 0){
		$('.addTimeM').css({'opacity':'1'});
		$('.reduceTimeM').css({'opacity':'0.3'});
	}else{  */
		$('.addTimeM').css({'opacity':'1'});
		$('.reduceTimeM').css({'opacity':'1'});	
	//}
}

function arrowStateS(){
	/*if(setSec == 59) {
		$('.addTimeS').css({'opacity':'0.3'});
		$('.reduceTimeS').css({'opacity':'1'});		
	}else if (setSec == 0){
		$('.addTimeS').css({'opacity':'1'});
		$('.reduceTimeS').css({'opacity':'0.3'});
	}else{  */
		$('.addTimeS').css({'opacity':'1'});
		$('.reduceTimeS').css({'opacity':'1'});	
	//}
}

function timeLeftToMin(time) {
  time = Number(time);
  var m = Math.floor(time / 60); 
  return m;
}
function timeLeftToSec(time) {
  time = Number(time);
  var s = Math.floor(time % 60);
  return s;
}





//Time controls
$('.timerM').html(addZero(setMin));
$('.timerS').html(addZero(setSec));
arrowStateM();
arrowStateS();

//increase minutes
$('.addTimeM').on('click',function(){
	timeIncreaseM();
	arrowStateM();
	$('.timerM').html(addZero(setMin));
});

$('.addTimeM').on('mousedown',function(){
	loopTime = setInterval(holdTimeIncreaseM, 110);
	arrowStateM();
}).on('mouseup', function(){
	clearInterval(loopTime);
});

//decrease minutes
$('.reduceTimeM').on('click',function(){
	timeDecreaseM();
	arrowStateM();
	$('.timerM').html(addZero(setMin));
});

$('.reduceTimeM').on('mousedown',function(){
	loopTime = setInterval(holdTimeDecreaseM, 110);
	arrowStateM();
}).on('mouseup', function(){
	clearInterval(loopTime);
});

//increase seconds
$('.addTimeS').on('click',function(){
	timeIncreaseS();
	arrowStateS();
	$('.timerS').html(addZero(setSec));
});

$('.addTimeS').on('mousedown',function(){
	loopTime = setInterval(holdTimeIncreaseS, 110);
	arrowStateS();
}).on('mouseup', function(){
	clearInterval(loopTime);
});

//decrease seconds
$('.reduceTimeS').on('click',function(){
	timeDecreaseS();
	arrowStateS();
	$('.timerS').html(addZero(setSec));
});

$('.reduceTimeS').on('mousedown',function(){
	loopTime = setInterval(holdTimeDecreaseS, 110);
	arrowStateS();
}).on('mouseup', function(){
	clearInterval(loopTime);
});

//Start, pause, reset
$('#start').on('click',function(){
	start();
});
$('#pause').on('click',function(){
	pause();
});
$('#reset').on('click',function(){
	reset();
});



