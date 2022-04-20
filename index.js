

 /*AUDIO*/

 var allblocs = document.getElementsByClassName("nav-item");
 for(i = 0; i < allblocs.length; i ++){
    allblocs[i].onclick = function(){
      var audio = new Audio('sounds/clickAudio.mp3');
      audio.play();
    }
 }
 var allblocs = document.getElementsByClassName("btn1");
 for(i = 0; i < allblocs.length; i ++){
    allblocs[i].onclick = function(){
      var audio = new Audio('sounds/gimn.mp3');
      audio.play();
      
    }
 }


