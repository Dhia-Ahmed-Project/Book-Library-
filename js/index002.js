//slide
let slideIndex = 1;
showSlides(slideIndex);

function allSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

//button 
  //$( "#finger-btn" ).on( "click", function() {
  //  var navbar= document.getElementsById ("navBar")
  // $('.header')
 // });
 // $(".show").click(function  n() {
   // var infoShow = $(this).children (".infoShow");
  //  $("p").show();
 // });

 $('.show').click(function(){
  $('.aa').toggle()
})
  