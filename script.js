window.addEventListener("scroll", () => {
  const scroll = window.scrollY;
  const hue = scroll % 360;

  const color = `hsl(${hue}, 100%, 60%)`;

  // Update main name color
  document.getElementById("name").style.color = color;

  // Update CSS variable for hover color
  document.documentElement.style.setProperty("--accent-color", color);
});
