function adjustFontSize() {
  const baseSize = 12;
  const currentWidth = window.innerWidth;
  const newSize = baseSize * (currentWidth / 1200);
  document.documentElement.style.fontSize = `${newSize}px`;
}

window.addEventListener('resize', adjustFontSize);
adjustFontSize();
function getZoomLevel() {
      return window.outerWidth / window.innerWidth;
    }

    function adjustFontSize() {
      const baseSize = 16; // Base font size in pixels
      const currentWidth = window.innerWidth;
      const zoomLevel = getZoomLevel();
      const newSize = baseSize * (currentWidth / 375) * zoomLevel; // Adjust based on zoom level
      document.documentElement.style.fontSize = `${newSize}px`;
    }

    window.addEventListener('resize', adjustFontSize);
    adjustFontSize();