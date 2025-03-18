const conteneur = document.querySelector('.conteneur');
const images = document.querySelectorAll('.image');
let currentIndex = 0;

images[currentIndex].classList.add('active');

setInterval(() => {
  images[currentIndex].classList.remove('active');
  currentIndex++;
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  images[currentIndex].classList.add('active');
}, 3000);