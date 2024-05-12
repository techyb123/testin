const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a"); 
const slides=document.querySelectorAll(".slide");

const colors = [
  "#0f0f0f",
  "#0f0f0f",
  "#0f0f0f",
  "#0f0f0f",
  "#0f0f0f",
  "#0f0f0f",
  "#0f0f0f",
  "#0f0f0f",
  "#0f0f0f",
  "#0f0f0f",
  "#0f0f0f",
  "#0f0f0f",
  "#0f0f0f",
  "#0f0f0f",
  "#0f0f0f",
  "#0f0f0f",
  "#0f0f0f",
  "#0f0f0f",
  "#0f0f0f",
  "#0f0f0f",
  "#0f0f0f",
  "#0f0f0f"
];

var counter=0;
slides.forEach(
  (slide ,index)=>{
    slide.style.left=`${index*100}%`

  }
    
  
  )
  const goPrev=()=>{
    if(counter<=0) return;
    counter--;
    slideImage()
  }

  const goNext=()=>{
    if(counter>=slides.length-1) return;
    counter++;
    slideImage()
  }

 const slideImage = () =>{
  slides.forEach(
    (slide)=>{
      slide.style.transform=`translateX(-${counter*100}%)`
    }
  )
 }  

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop   ;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id"); 

    if(top >= offset && top < offset + height){
      navLinks.forEach(links => {
        links.classList.remove("active");
        document.querySelector("nav a[href*=" + id + "]").classList.add("active");

      }); 

    };
  });
};


circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});





window.addEventListener("mousemove", function(e){
  coords.x = e.clientX;
  coords.y = e.clientY;
  
});

function animateCircles() {
  
  let x = coords.x;
  let y = coords.y;
  
  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";
    
    circle.style.scale = (circles.length - index) / circles.length;
    
    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });
 
  requestAnimationFrame(animateCircles);
}

animateCircles();



