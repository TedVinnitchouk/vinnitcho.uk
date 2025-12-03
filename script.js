window.addEventListener("scroll", () => {
  const scroll = window.scrollY;

  // turn scroll position into a hue value
  const hue = scroll % 360;

  // apply HSL color
  document.getElementById("name").style.color = `hsl(${hue}, 100%, 60%)`;
});
