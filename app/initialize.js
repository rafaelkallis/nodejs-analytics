document.addEventListener('DOMContentLoaded', () => {
  Promise.each(Array.from(document.getElementsByTagName('katex')), element => Katex.render(element.innerHTML, element));
});