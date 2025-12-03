let lastScrollY = window.scrollY;
let lastTime = Date.now();

window.addEventListener("scroll", () => {
  const currentY = window.scrollY;
  const currentTime = Date.now();

  const deltaY = Math.abs(currentY - lastScrollY);
  const deltaTime = currentTime - lastTime || 1;

  // Scroll speed (px/ms)
  const speed = deltaY / deltaTime;

  // AMPLIFIED hue change — way more dramatic
  const hueShift = speed * 5000; 
  const hue = (hueShift % 360); // keep it looping smoothly

  document.getElementById("name").style.color = `hsl(${hue}, 100%, 60%)`;

  lastScrollY = currentY;
  lastTime = currentTime;
});
