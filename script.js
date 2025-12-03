window.addEventListener("scroll", () => {
  const scroll = window.scrollY;

  // Turn scroll position into hue
  const hue = scroll % 360;

  // Apply color to name text
  document.getElementById("name").style.color = `hsl(${hue}, 100%, 60%)`;
});
