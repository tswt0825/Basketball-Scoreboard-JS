let homeScore = 0;
let guestScore = 0;

const homeDisplay = document.getElementById("homeScore");
const guestDisplay = document.getElementById("guestScore");

function updateScores() {
  homeDisplay.textContent = homeScore;
  guestDisplay.textContent = guestScore;
}

document.querySelectorAll(".home-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const points = parseInt(btn.dataset.points);
    homeScore += points;
    updateScores();
  });
});

// Legg til eventListeners på GUEST-knappene
document.querySelectorAll(".guest-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    guestScore += parseInt(btn.dataset.points);
    updateScores();
  });
});

updateScores();

document.getElementById("resetBtn").addEventListener("click", () => {
  homeScore = 0;
  guestScore = 0;
  updateScores();
});
