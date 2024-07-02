function adjustFontSize() {
  const baseSize = 12;
  const currentWidth = window.innerWidth;
  const newSize = baseSize * (currentWidth / 1500);
  document.documentElement.style.fontSize = `${newSize}px`;
}

window.addEventListener('resize', adjustFontSize);
adjustFontSize();
