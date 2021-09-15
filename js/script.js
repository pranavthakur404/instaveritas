// scrool function
var header=document.getElementById("header");
var nav=document.getElementById("nav-links");
var logo=document.getElementById("logo");

window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      header.style.background = "white";
      nav.style.color="black";
      logo.src="../images/scrolllogo.png";
  } else {
     header.style.background = "#00243A";
      nav.style.color="#fafafa";
      logo.src="../images/logo.png";
  }
}
// scrool function

// counter
var counter1= document.getElementById("counter1");
var counter2=document.getElementById("counter2");
var counter3=document.getElementById("counter3");
var counter4=document.getElementById("counter4");

var count1=0;
var count2=0;
var count3=0;
var count4=0;

setInterval(() => {
  if(count1<5){
    count1++;
    counter1.innerHTML=count1;
  }
}, 500);

setInterval(() => {
     if(count2<300){
       count2++;
       counter2.innerHTML=count2;
     }
    
     if(count3<100){
       count3++;
       counter3.innerHTML=count3;
     }

     if(count4<500){
       count4++;
       counter4.innerHTML=count4;
     }
}, 10);

// responsive navbar
function navbar(){
  var x = document.getElementById("nav-links");
  if(x.style.display=="none"){
         x.style.display="flex";
  }else{
    x.style.display="none";
  }
}