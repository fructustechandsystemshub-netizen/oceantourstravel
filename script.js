const heroImages = [
  'images/ocean1.jpeg',
  'images/ocean2.jpeg',
  'images/ocean3.jpeg',
  'images/ocean4.jpeg',
  'images/ocean5.jpeg',
  'images/ocean6.jpeg',
];

const backdrop = document.querySelector('.hero__backdrop');
const progress = document.querySelector('.hero__progress span');
const cards = document.querySelectorAll('.destination-card');
let activeIndex = 0;
const interval = 15000;

heroImages.forEach((source) => {
  const image = new Image();
  image.src = source;
});

function showHeroImage(index) {
  activeIndex = index % heroImages.length;
  backdrop.style.backgroundImage = `url('${heroImages[activeIndex]}')`;
  progress.style.width = `${((activeIndex + 1) / heroImages.length) * 100}%`;
  cards.forEach((card, cardIndex) => card.classList.toggle('is-active', cardIndex === activeIndex % cards.length));
}

function nextHeroImage() {
  showHeroImage(activeIndex + 1);
}

showHeroImage(0);
setInterval(nextHeroImage, interval);
