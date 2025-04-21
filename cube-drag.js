const cube = document.getElementById('cube');
let drag = false, lastX = 0, lastY = 0;
let rotX = -30, rotY = 30; // initial nice angle

function setCubeRotation() {
  cube.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg)`;
}
setCubeRotation();

cube.addEventListener('mousedown', (e) => {
  drag = true;
  lastX = e.clientX;
  lastY = e.clientY;
  cube.style.cursor = 'grabbing';
});

document.addEventListener('mouseup', () => {
  drag = false;
  cube.style.cursor = 'grab';
});

document.addEventListener('mousemove', (e) => {
  if (!drag) return;
  const dx = e.clientX - lastX;
  const dy = e.clientY - lastY;
  rotY += dx * 0.7;
  rotX -= dy * 0.7;
  setCubeRotation();
  lastX = e.clientX;
  lastY = e.clientY;
});

// Touch support
cube.addEventListener('touchstart', (e) => {
  drag = true;
  lastX = e.touches[0].clientX;
  lastY = e.touches[0].clientY;
}, {passive:false});

document.addEventListener('touchend', () => {
  drag = false;
});

document.addEventListener('touchmove', (e) => {
  if (!drag) return;
  const dx = e.touches[0].clientX - lastX;
  const dy = e.touches[0].clientY - lastY;
  rotY += dx * 0.7;
  rotX -= dy * 0.7;
  setCubeRotation();
  lastX = e.touches[0].clientX;
  lastY = e.touches[0].clientY;
}, {passive:false});
