const siteBar = document.querySelector(".site-header");
const siteBtn = document.querySelector(".site-header__btn");
const elContent = document.querySelector('.content')

siteBtn.addEventListener('click', function(){
  siteBar.classList.toggle('hide')
  elContent.classList.toggle('show-more')
  siteBtn.classList.toggle('rotate')
})