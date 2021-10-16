const siteBar = document.querySelector(".site-header");
const siteBtn = document.querySelector(".site-header__btn");
const elContent = document.querySelector('.content')

siteBtn.addEventListener('click', function(){
  siteBar.classList.toggle('hide')
  elContent.classList.toggle('show-more')
  siteBtn.classList.toggle('rotate')
})

var typed = new Typed('.hero__typer', {
  strings:['Student','Developer'],
  typeSpeed:30,
  backSpeed:30,
  loop:true
});

var typed = new Typed('.typer', {
  strings:['Web Developer','Web Design'],
  typeSpeed:30,
  backSpeed:30,
  loop:true
});

const cursor = document.querySelector(".cursor")

document.addEventListener('mousemove', e => {
  cursor.setAttribute("style", "top: "+e.pageY+"px; left: "+e.pageX+"px;")
})