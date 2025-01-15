
const balloonContainer = document.getElementById('balloonContainer');

const createBalloon = () => {
  const balloon = document.createElement('div');
  balloon.classList.add('balloon');

  const string = document.createElement('div');
  string.classList.add('string');
  balloon.appendChild(string);

  const colors = ['#FF6347', '#FFD700', '#32CD32', '#8A2BE2', '#FF4500'];
  balloon.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

  const size = Math.random() * 30 + 60;
  balloon.style.width = `${size}px`;
  balloon.style.height = `${size * 1.5}px`;

  balloon.style.left = `${Math.random() * 100}vw`;

  balloonContainer.appendChild(balloon);
};

setInterval(createBalloon, 500);

const confettiButton = document.getElementById('confettiButton');
const confettiContainer = document.getElementById('confettiContainer');

const releaseConfetti = () => {
  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');


    confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    confetti.style.left = `${Math.random() * 100}vw`;
    confetti.style.animationDuration = `${Math.random() * 1.5 + 0.5}s`; 

    confettiContainer.appendChild(confetti);

    // Remove confetti after it falls
    setTimeout(() => confetti.remove(), 2000);
  }
};

confettiButton.addEventListener('click', releaseConfetti);
