const btnSurat = document.getElementById('BukaSurat');
const surat = document.getElementById('Surat');

btnSurat.addEventListener('click', () => {
  surat.classList.remove('visually-hidden');
});