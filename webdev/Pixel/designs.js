

//Canvas
var pixelCanvas = $('#pixelCanvas');

//Responsive Grid Size
$(window).resize( function(){
	 if( $('h1').css('font-size') == '30px'){
	 		$('#inputWeight').attr('max','15');
	 		$('#inputHeight').attr('max','20');
	 	}
}).resize();

$(window).resize( function(){
	 if( $('h1').css('font-size') == '45px'){
	 		$('input[type=number]').attr('max','50');
	 	}
}).resize();

// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function(event){
	event.preventDefault();
	var height = $('#inputHeight').val();
	var width = $('#inputWeight').val();
	makeGrid(height, width);
	//console.log("height:" + row + " and width:" + col);
});



//Make grid
function makeGrid(height,width) {
	//remove previous items
	pixelCanvas.children().remove();

	//create rows
	for(i = 0; i < height; i++){
		pixelCanvas.append('<tr></tr>');
	}
	
	//create columns
	for(i = 0; i < width; i++){
		$('tr').append('<td class= "cell"></td>');
	}

    
    //Click or Click and drag to add and erase color
   var td = $('td');
   var mouseDown = false; 
   var draw = false;
   var colorPicker;

 	//Click to add and erase color
 	td.mousedown( function(event){
    	mouseDown = true;
    	colorPicker = $('#colorPicker').val();

    	
    	if( $(this).attr('style')){	
    		draw = false;
    		$(this).removeAttr('style');
    	}else {	
    		draw = true;
    		$(this).css('background-color', colorPicker);
    	}    	
 	
    });

    //Click and drag to add and erase
    td.mouseover( function(event){
    	 colorPicker = $('#colorPicker').val();

    	/*if( mouseDown && $(this).attr('bgcolor')){
			$(this).removeAttr('bgcolor')
		} else if(mouseDown){
		$(this).attr('bgcolor', colorPicker);
		} */

		if(mouseDown == true){
			if(draw == false){
				$(this).removeAttr('style');
			}else{
				$(this).css('background-color', colorPicker);
			}
		};		

    });
  
 
  	$(document).mouseup( function(event){
    	mouseDown = false;

    });

  	//Click to add and erase color
	
	 /*td.click( function (){

	 	if( $(this).attr('bgcolor')){
	 		$(this).removeAttr('bgcolor')
	 	} else{
			$(this).attr('bgcolor', colorPicker);
	 	}
	 }) */ 


	 //clear
	 $('#clear').css({'visibility': 'visible'});
	 $('#clear').click( function(){
	 		td.removeAttr('style');
	 	
	 });

	

};











