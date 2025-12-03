let lastScrollY = window.scrollY;
let lastTime = Date.now();

window.addEventListener("scroll", () => {
  const currentY = window.scrollY;
  const currentTime = Date.now();

  // Scroll speed = absolute pixel distance per millisecond
  const deltaY = Math.abs(currentY - lastScrollY);
  const deltaTime = currentTime - lastTime;
  const speed = deltaY / deltaTime; // px per ms

  // Map scroll speed to a color hue (0–360)
  const hue = Math.min(360, speed * 800);  

  document.getElementById("name").style.color = `hsl(${hue}, 90%, 60%)`;

  lastScrollY = currentY;
  lastTime = currentTime;
});
