const buttons = document.querySelectorAll('.button');
const infos = document.querySelectorAll('.info');

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    infos[index].style.display = infos[index].style.display === 'none' ? 'block' : 'none';
  });
});