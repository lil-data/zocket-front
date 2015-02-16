var socket = io('https://zocket.herokuapp.com/');
//var socket = io('http://localhost:5000');

var slider = null;
socket.on('slider-change', function(newval){
   slider.value = newval;
});

var i = 0;
window.onload = function(){
   slider = document.getElementById("slider");
   slider.addEventListener("input", function(){
       if(i % 8 === 0) {
           socket.emit("slider-change", this.value);
           i = 0;
       }
       i++;
   },false);

    slider.addEventListener("change", function(){
            socket.emit("slider-change", this.value);
    },false);
};