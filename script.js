const nameEl = document.getElementById("name");

// scroll -> color
window.addEventListener("scroll", () => {
  const scroll = window.scrollY;
  const hue = scroll % 360;

  const color = `hsl(${hue}, 100%, 60%)`;

  // Update main name color
  nameEl.style.color = color;

  // Update CSS variable for hover color
  document.documentElement.style.setProperty("--accent-color", color);
});

// click -> 3D rotation
let angle = 0;

nameEl.addEventListener("click", () => {
  angle += 180; // rotate 180° each click
  nameEl.style.transform = `rotateY(${angle}deg)`;
});
