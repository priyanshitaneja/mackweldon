import '../data/styles/index.scss';
import '../data/styles/common.scss';

import '../data/styles/header.scss';
import '../data/styles/doubleImgDiv.scss';

import './header.js';
import './section1.js';

(function() {
  var password = prompt('Password Please');
  if (password != 'Please') {
    document.body.innerHTML = '';
    document.body.innerHTML =
      'Uh-oh! Incorrect password <br/> <br/> Try again?';
    document.body.style.textAlign = "center";
    document.body.style.marginTop = "100px";
  } else {
    alert("Come right in \nYou've entered the right password 🎉 🎉 🎉");
  }
})();
