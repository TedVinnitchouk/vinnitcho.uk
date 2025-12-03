let lastScrollY = window.scrollY;
let lastTime = Date.now();

window.addEventListener("scroll", () => {
  const currentY = window.scrollY;
  const currentTime = Date.now();

  const deltaY = Math.abs(currentY - lastScrollY);
  const deltaTime = currentTime - lastTime || 1; // avoid divide by zero
  const speed = deltaY / deltaTime; // px per ms

  // Map scroll speed to hue (0–360)
  const hue = Math.min(360, speed * 800);

  const nameEl = document.getElementById("name");
  if (nameEl) {
    nameEl.style.color = `hsl(${hue}, 90%, 60%)`;
  }

  lastScrollY = currentY;
  lastTime = currentTime;
});
