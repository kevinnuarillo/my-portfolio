/*===== SHOW MENU =====*/
const showMenu = (toggleId,navId) =>{
 const toggle = document.getElementById(toggleId),
 nav = document.getElementById(navId);
 
 if(toggle && nav){
  toggle.addEventListener('click', ()=>{
   nav.classList.toggle('show-menu');
  });
 }
}
showMenu('nav-toggle','nav-menu');

/*===== REMOVE MENU MOBILE =====*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
 const navMenu = document.getElementById('nav-menu');
 navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*===== SCROLL SECTION ACTIVE LINK =====*/
const section = document.querySelectorAll('section[id]');

function scrollActive(){
 const scrollY = window.pageYOffset
 
 section.forEach(current => {
  const sectionHeight = current.offsetHeight
  const sectionTop = current.offsetTop - 50
  sectionId = current.getAttribute('id');
  
  if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
   document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
  }else{
   document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
  }
  
 });
}
window.addEventListener('scroll', scrollActive)

/*===== CHANGE BACKGROUND HEADER =====*/
function scrollHeader(){
 const header = document.getElementById('header')
 if(this.scrollY >= 200) header.classList.add('scroll-header'); else header.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader)

/*===== SHOW SCROLL TOP =====*/
function scrollTop(){
 const scrollTop = document.getElementById('scroll-top');
 if(this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollTop);


/*===== MIXITUP FILTER PORTFOLIO =====*/
var mixer = mixitup('#mixitup-container', {
 selectors: {
  target: '#mixitup-content'
 },
  animation: {
   duration: 400
  }
});

/* LINK ACTIVE PORTFOLIO */
var linkPortfolio = document.querySelectorAll('#mixitup-item');

function activePortfolio(){
 if(linkPortfolio){
  linkPortfolio.forEach(l => l.classList.remove('active-portfolio'));
  this.classList.add('active-portfolio');
 }
}
linkPortfolio.forEach(l => l.addEventListener('click', activePortfolio));
