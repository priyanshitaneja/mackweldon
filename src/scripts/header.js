window.onscroll = function () {
  // stickyFunction();
  scrollFunction();
};

const dropdown = document.querySelector('.nav-stories');
const dropdownValue = document.querySelector('.stories-dropdown');

const nav = document.querySelector('nav');
// let sticky = 100;

const arrow = document.querySelector('.nav-stories i');

dropdown.addEventListener('mouseover', () => {
  if(arrow.classList.contains('rotate-icon'))
    arrow.classList.remove('rotate-icon');
  else 
    arrow.classList.add('rotate-icon');

  if (dropdownValue.classList.contains('is-opened')) {
    dropdownValue.classList.remove('is-opened');
  }
  else {
    dropdownValue.classList.add('is-opened');
    nav.classList.add('nav-white-bg');
  }
});

// function stickyFunction() {
//   if (window.pageYOffset >= sticky) {
//     nav.classList.add('sticky');
//   } else {
//     nav.classList.remove('sticky');
//   }
// }

function scrollFunction() {
  if (
    (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) &&
    (document.body.scrollTop < 100 || document.documentElement.scrollTop < 100)
  ) {
    nav.classList.add('sticky');
  } else {
    console.log("remove", nav);
    if(nav.classList.contains('sticky')) {
      nav.classList.remove('sticky');
      // nav.classList.add('xyz');
    }
    console.log(nav.classList);
  }
}
