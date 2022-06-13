const dropdown = document.querySelector('.nav-stories');
const dropdownValue = document.querySelector('.stories-dropdown');
const nav = document.querySelector('nav');
const arrow = document.querySelector('.nav-stories i');
const hamburgerMenu = document.querySelector('nav .menu');
const navbarLeft = document.querySelector('nav .navbar-left');

dropdown.addEventListener('mouseover', () => {
  if(!arrow.classList.contains('rotate-icon'))
    arrow.classList.add('rotate-icon');

  if (!dropdownValue.classList.contains('is-opened')) {
    dropdownValue.classList.add('is-opened');
    // nav.classList.add('nav-white-bg');
  }
});

document.addEventListener('scroll', () => {
  if (
    (document.body.scrollTop > 38 || document.documentElement.scrollTop > 38) &&
    (document.body.scrollTop < 200 || document.documentElement.scrollTop < 200)
  ) {
    nav.classList.add('sticky');
  }
  if (
    (document.body.scrollTop > 200 ||
      document.documentElement.scrollTop > 200) &&
    nav.classList.contains('sticky')
  ) {
    nav.classList.remove('sticky');
  }
});

hamburgerMenu.addEventListener('click', ()=>{
  navbarLeft.classList.toggle('active');
});
