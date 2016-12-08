const Promise = require('bluebird');

document.addEventListener('DOMContentLoaded', () => {
  Promise.each(Array.from(document.getElementsByTagName('katex')), element => katex.render(element.innerHTML, element));
});
