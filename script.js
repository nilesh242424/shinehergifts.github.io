document.addEventListener("mousemove", (e) => {
  const x = (window.innerWidth / 2 - e.pageX) / 50;
  const y = (window.innerHeight / 2 - e.pageY) / 50;

  document.querySelector(".container").style.transform =
    `translate(${x}px, ${y}px)`;
});
