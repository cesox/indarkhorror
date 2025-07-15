
document.getElementById('startBtn').addEventListener('click', () => {
  const scream = new Audio('scream.mp3');
  scream.play();
  alert("Game is starting...");
});
