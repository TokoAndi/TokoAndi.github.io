// script.js

function openPopup(popupButtonId, overlayId) {
  const openPopupButton = document.getElementById(popupButtonId);
  const overlay = document.getElementById(overlayId);

  openPopupButton.addEventListener("click", () => {
    overlay.style.display = "block";
    document.body.style.overflow = "hidden";
  });

  overlay.addEventListener("click", () => {
    closePopup();
  });

  function closePopup() {
    overlay.style.display = "none";
    document.body.style.overflow = "auto";
  }
}
