  document.addEventListener('DOMContentLoaded', () => {
    // 1. Full-screen cover photo fade out
    const coverPhoto = document.getElementById('cover-photo-overlay');
    setTimeout(() => {
      coverPhoto.style.opacity = '0';
      setTimeout(() => {
        coverPhoto.style.display = 'none';
      }, 3000); 
    }, 200);

    // 2. Falling hearts animation
    const body = document.body;
    function createHeart() {
      const heart = document.createElement('span');
      heart.classList.add('heart');
      heart.innerHTML = '&#10084;';
      heart.style.left = Math.random() * 100 + 'vw'; 
      heart.style.animationDuration = Math.random() * 5 + 5 + 's';
      heart.style.animationDelay = Math.random() * 5 + 's'; 
      body.appendChild(heart);
      heart.addEventListener('animationend', () => {
        heart.remove();
      });
    }
    setInterval(createHeart, 500);
  });

      function flipCard() {
        const card = document.querySelector('.card-container');
        const sound = document.getElementById('flipSound');

        // Play the sound
        if (sound) {
          sound.currentTime = 0; // Rewind to the start
          sound.play();
        }

        // Flip the card
        card.classList.toggle('flipped');
      }