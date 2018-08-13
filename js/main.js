

//VARIABLES

var bootyNumber = 2;
var isPlaying = false;



// TO CHANGE IMAGE ON CLICK
  
function changeImage() {

  	if (bootyNumber== 9){
    	bootyNumber = 1;
    
  	}
    var image = document.getElementById('myImage');
    image.src = "img/"+ bootyNumber +".png";
    bootyNumber ++;         
}

// TO PLAY SOUND EFFECT ON CLICK


function play(){
     var audio = document.getElementById("audio");
     audio.play();
}


// TO TOGGLE MUSIC ON AND OFF 


function bootify(){
	var booty = document.getElementById("booty");

	if(isPlaying){
		
		booty.pause();
		isPlaying = false;

	}else if(!isPlaying){ 

	 	booty.play();
		isPlaying = true;
	}
}



