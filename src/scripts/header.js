const dropdown = document.querySelector('.nav-stories');
const dropdownValue = document.querySelector('.stories-dropdown');
const nav = document.querySelector('nav');
const arrow = document.querySelector('.nav-stories i');
const hamburgerMenu = document.querySelector('nav .menu');
const navbarLeft = document.querySelector('nav .navbar-left');
const overlay = document.querySelector('.overlay');

let pageScrollingDown = false;
let pageScrollingUp = false;

let oldValue = 0;
let newValue = 0;

document.addEventListener('scroll', () => {
  // checking scroll direction
  newValue = window.pageYOffset;

  if (oldValue < newValue) {
    pageScrollingDown = true;
    pageScrollingUp = false;
  } else if (oldValue > newValue) {
    pageScrollingDown = false;
    pageScrollingUp = true;
  }

  oldValue = newValue;

  // updating nav position/styling
  if (pageScrollingDown) {
    if (
      (document.body.scrollTop > 38 ||
        document.documentElement.scrollTop > 38) &&
      (document.body.scrollTop < 200 ||
        document.documentElement.scrollTop < 200)
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
  } else if (pageScrollingUp) {
    if (
      document.body.scrollTop < 38 ||
      document.documentElement.scrollTop < 38
    ) {
      console.log(
        document.documentElement.scrollTop,
        document.querySelector('header').bottom,
      );
      nav.classList.remove('sticky');
      // nav.style.top = 28 + document.documentElement.scrollTop;
    }
  }
});

dropdown.addEventListener('mouseover', () => {
  // add foreach func and do this for click as well
  if (!arrow.classList.contains('rotate-icon'))
    arrow.classList.add('rotate-icon');

  if (!dropdownValue.classList.contains('is-opened')) {
    dropdownValue.classList.add('is-opened');
  }
});

dropdown.addEventListener('mouseout', () => {
  if (arrow.classList.contains('rotate-icon'))
    arrow.classList.remove('rotate-icon');

  if (dropdownValue.classList.contains('is-opened')) {
    dropdownValue.classList.remove('is-opened');
  }
});

hamburgerMenu.addEventListener('click', () => {
  navbarLeft.classList.toggle('active');
  overlay.classList.add('active');

  if (navbarLeft.classList.contains('active'))
    dropdownValue.classList.add('stories-mob');
});

overlay.addEventListener('click', () => {
  navbarLeft.classList.remove('active');
  overlay.classList.remove('active');
  dropdownValue.classList.remove('stories-mob', 'is-opened');
  arrow.classList.remove('rotate-icon');
});
