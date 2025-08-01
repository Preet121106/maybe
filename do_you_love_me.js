const questionContainer = document.querySelector(".question-container");
const resultContainer = document.querySelector(".result-container");
const gifResult = document.querySelector(".gif-result");
const heartLoader = document.querySelector(".cssload-main");
const yesBtn = document.querySelector(".js-yes-btn");
const noBtn = document.querySelector(".js-no-btn");
const bgMusic = document.getElementById("bg-music");

// Change the position of the "No" button on hover
noBtn.addEventListener("mouseover", () => {
  const newX = Math.floor(Math.random() * (window.innerWidth - noBtn.offsetWidth));
  const newY = Math.floor(Math.random() * (window.innerHeight - noBtn.offsetHeight));

  noBtn.style.position = "absolute";
  noBtn.style.left = `${newX}px`;
  noBtn.style.top = `${newY}px`;
});

// Yes button functionality
yesBtn.addEventListener("click", () => {
  // Start background music on interaction
  if (bgMusic) {
    bgMusic.volume = 1.0;
    bgMusic.play().catch((err) => {
      console.warn("Autoplay blocked:", err);
    });
  }

  // Show heart loader
  questionContainer.style.display = "none";
  heartLoader.style.display = "flex"; // or "inherit" depending on your CSS

  setTimeout(() => {
    heartLoader.style.display = "none";
    resultContainer.style.display = "flex"; // or "block" depending on your CSS
    gifResult.play();
  }, 3000);
});
