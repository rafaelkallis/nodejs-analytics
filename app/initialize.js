document.addEventListener('DOMContentLoaded', () => {
  Promise.each(Array.from(document.getElementsByClassName('katex')), element => Katex.render(element.innerHTML, element));
});