const particleContainer = document.querySelector(".particles");

for (let i = 0; i < 50; i++) {
  const p = document.createElement("div");
  p.classList.add("particle");

  // Position aléatoire autour du trou noir
  const radius = Math.random() * 300 + 100;
  const angle = Math.random() * 2 * Math.PI;
  const x = Math.cos(angle) * radius + "px";
  const y = Math.sin(angle) * radius + "px";

  p.style.setProperty("--x", x);
  p.style.setProperty("--y", y);
  p.style.animationDelay = `${Math.random() * 4}s`;

  particleContainer.appendChild(p);
}
