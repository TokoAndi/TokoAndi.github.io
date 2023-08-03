function validateNumber(input) {
  const minLength = 12;
  const number = input.value;

  if (number.length < minLength) {
    input.setCustomValidity(`Nomor harus lebih dari ${minLength} angka.`);
  } else {
    input.setCustomValidity("");
  }
}

function validateMessageFunction(input) {
  const minLength = 10;
  const text = input.value;

  if (text.length < minLength) {
    input.setCustomValidity(
      `Mohon masukkan pesan anda lebih dari ${minLength} huruf.`
    );
  } else {
    input.setCustomValidity("");
  }
}

function toggleFullScreen() {
  const card = document.querySelector(".card");
  const fullButton = document.querySelector(".full-button");
  if (!document.fullscreenElement) {
    card.requestFullscreen().catch((err) => {
      alert(
        `Error attempting to enable full-screen mode: ${err.message} (${err.name})`
      );
    });
    fullButton.textContent = "Exit";
  } else {
    document.exitFullscreen();
    fullButton.textContent = "Full";
  }
}

// POPUP
setTimeout(function () {
  document.getElementById("overlay").style.display = "block";
  document.getElementById("popup").style.display = "block";
}, 30000);

// Fungsi untuk menutup popup
function closePopup() {
  document.getElementById("overlay").style.display = "none";
  document.getElementById("popup").style.display = "none";
}

// Fungsi untuk menutup popup jika mengklik di luar area popup
window.onclick = function (event) {
  var overlay = document.getElementById("overlay");
  if (event.target === overlay) {
    closePopup();
  }
};
