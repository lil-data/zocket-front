//var socket = io('https://zocket.herokuapp.com/');
var socket = io('http://localhost:5000');

//setInterval(function(){
//    socket.emit("slider-change", Math.random());
//},1000);
var slider = null;
socket.on('slider-change', function(newval){
   slider.value = newval;
});

socket.on('init', function(newval){
    console.log(newval);
});
var i = 0;
window.onload = function(){
   slider = document.getElementById("slider");
   slider.addEventListener("input", function(){
       if(i % 8 === 0) {
           socket.emit("slider-change", this.value);
       }
       i++;
   },false);

    slider.addEventListener("change", function(){
            socket.emit("slider-change", this.value);
    },false);
};