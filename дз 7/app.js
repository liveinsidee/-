const toggleButtons = document.querySelectorAll('.toggle-button');
const answers = document.querySelectorAll('.answer');
toggleButtons.forEach((button, index) => {
  button.addEventListener('click', () => toggleAnswer(index));
});
function toggleAnswer(index) {
  answers[index].classList.toggle('hidden');
  const button = toggleButtons[index];
  button.textContent = answers[index].classList.contains('hidden') ? 'Показать ответ' : 'Скрыть ответ';
}
