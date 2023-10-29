function filterInput(input) {
  const filteredInput = input.value.replace(/[!@#$%^&*()]/g, '');
  input.value = filteredInput;
  return filteredInput;
}

document.addEventListener('DOMContentLoaded', () => {
  const input = document?.querySelector('.form__input');


  input?.addEventListener('input', (e) => {
    filterInput(e.target);
  })
})
