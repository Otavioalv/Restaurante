const linhas = document.querySelectorAll('.texto-gradual p');

linhas.forEach((linha, index) => {
  setTimeout(() => {
    linha.classList.add('animate');
  }, 500 * (index + 1));
});
