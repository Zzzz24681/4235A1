function adjustFontSize() {
  const baseSize = 12;
  const currentWidth = window.innerWidth;
  const zoomLevel = getZoomLevel();
  const newSize = baseSize * (currentWidth / 1200) * zoomLevel; // Adjust based on zoom level
  document.documentElement.style.fontSize = `${newSize}px`;
}


adjustFontSize();
    function getZoomLevel() {
      return window.outerWidth / window.innerWidth;
    }
	
 function adjustContentPlacement() {
      const container = document.querySelector('.container');
      const zoomLevel = getZoomLevel();
      
      if (zoomLevel > 1) {
        container.style.flexDirection = 'column';
      } else {
        container.style.flexDirection = 'row';
      }
    }

    function handleResize() {
      adjustFontSize();
      adjustContentPlacement();
    }

    window.addEventListener('resize', handleResize);
    window.addEventListener('DOMContentLoaded', handleResize);
