window.addEventListener("scroll", () => {
  const scroll = window.scrollY;
  const hue = scroll % 360;

  // update the main name color
  document.getElementById("name").style.color = `hsl(${hue}, 100%, 60%)`;
});
