import '../data/styles/index.scss';
import '../data/styles/common.scss';

import '../data/styles/header.scss';
import '../data/styles/footer.scss';
import '../data/styles/doubleImgDiv.scss';
import '../data/styles/product.scss';
import '../data/styles/section1.scss';
import '../data/styles/section2.scss';
import '../data/styles/section3.scss';
import '../data/styles/section4.scss';

import './header.js';
import './section2.js';

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
