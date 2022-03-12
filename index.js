//not working - fix

let slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n){
  showDivs(slideIndex += n);
  debugger;
}

function showDivs(n){
  let i;
  let x = document.getElementsByClassName("myImg");
  if(n > x.length){
    slideIndex = 1;
  }
  if(n < 1){
    slideIndex = x.length;
  }
  for(i=0;i<x.length;i++){
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}



// let images = ["images/butterfly.jpeg","images/pink_flower.jpeg","images/bouquet.jpeg","images/blue_flowers.jpeg","images/colorful_flowers.jpeg"];
//
// let imageslength = images.length - 1;
// let currentpic = 0;
//
// function changePic(x){
//   currentpic += x;
//   if(currentpic > imageslength){
//     currentpic = 0;
//   }
//   if(currentpic < 0){
//     currentpic = imageslength;
//   }
//   document.getElementById("img").src = images[currentpic];
// }
