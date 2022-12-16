//slide1
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
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
//slide2
let slideindex2=1;
showSlides2(slideindex2);
function plusSlides2(n){
  showSlides2(slideindex2+=n)
}
function showSlides2(n)
{
  let i;
  let slides2=document.getElementsByClassName("mySlides2");
  if(n>slides2.length) {slideindex2=1}
  if(n<1){slideindex2=slides2.length}
  for(i=0;i<slides2.length;i++)
  {
    slides2[i].style.display="none";
  }
  slides2[slideindex2-1].style.display="inline-block"
}
//slide3
let an=1;
show(an);
function plus(n)
{
show(an+=n)
}
function show(n)
{
  let binh=document.getElementsByClassName("mySlides3")
  if(n>binh.length) {an=1}
  if(n<1) {an=binh.length}
  for(let i=0;i<binh.length;i++)
  {
    binh[i].style.display="none"
  }
  binh[an-1].style.display="inline-block"
}
/*color*/
color=document.querySelectorAll('.color')
for(let i=0;i<color.length;i++)
{
  let j=i
  color[i].addEventListener('click',()=>{
    color[i].style.border="5px solid black"
       color[i].addEventListener('click',()=>{
        if(color[i].style.border==="5px solid black")
        {
          color[i].style.border="1px solid black"
          i=0;
        }
        else{
          i++
        }
       })
    
  })

  
}
for(let i=0;i<color.length;i++)
{
  let j=i
  color[i].addEventListener('click',()=>{
    color[i].style.border="5px solid black"
       color[i].addEventListener('click',()=>{
        if(color[i].style.border==="5px solid black")
        {
          color[i].style.border="1px solid black"
          i=0;
        }
        else{
          i++
        }
       })
    
  })

  
}

