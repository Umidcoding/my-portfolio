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
  strings:['Frontend Developer','Web Design'],
  typeSpeed:30,
  backSpeed:30,
  loop:true
});