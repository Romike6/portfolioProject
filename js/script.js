
function sendEmail(){

  Email.send({
      SecureToken : "f9547719-7a66-455f-bdaa-d80ff20145ea",
      To : 'ronaldjeangilles01@gmail.com',
      From : 'ronaldjeangilles01@gmail.com',
      Subject : "New Contact From Enquiry",
      Body : "Name" + document.getElementById("name").value
          + "<br> Email: " + document.getElementById("email").value
          + "<br> Phone no: " + document.getElementById("phone").value
          + "<br> Message: " + document.getElementById("message").value

  }).then(
    message => alert("message sent succesfully")
  );
}





let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active')
}



let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  section.forEach(sec =>{
    let top =window.scrollY;
    let offset =sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');
    
    if(top >= offset && top < offset + height){
      navlinks.forEach.apply(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*='+ id + ']').classList.add('active');
      });
    };
  });

let header = document.querySelector('header');
header.classList.toggle('sticky', window.scrollY > 100);


menuIcon.classList.remove('fa-xmark');
navbar.classList.remove('active');

};


ScrollReveal({
  distance: '80px',
  duration: 2000,
  delay: 200,

 });

 ScrollReveal().reveal('.home-content, heading', { origin: 'top' });
 ScrollReveal() .reveal('.home-img, .portfolio-box, .contact form', { origin: 'buttom' });
 ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' });
 ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right' });


 
 



$(".bar").each(function(){
  $(this).find(".bar-inner").animate({
    width: $(this).attr("data-width")
  },2000)
  });
  













