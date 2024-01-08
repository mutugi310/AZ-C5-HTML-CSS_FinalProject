document.addEventListener('DOMContentLoaded', function () {
    const overlayContainer = document.querySelector('.overlay-container');
    const openOverlayButton = document.querySelector('.open-overlay-button');
    const closeOverlayButton = document.querySelector('.X-icon');
  
    openOverlayButton.addEventListener('click', function () {
      overlayContainer.style.display = 'block';
    });
  
    closeOverlayButton.addEventListener('click', function () {
      overlayContainer.style.display = 'none';
    });
  });
  