document.addEventListener('DOMContentLoaded', () => {
  const text = document?.querySelector('.text');

  fetch('https://baconipsum.com/api/?type=lucky')
  .then(response => response.json())
  .then(content => {
    text.textContent = content[0];
  });
})
