// script.js
document.addEventListener("DOMContentLoaded", function () {
  const pesanBtn = document.getElementById("pesanBtn");

  pesanBtn.addEventListener("click", function () {
    alert("Terima kasih! Silakan hubungi kami melalui WhatsApp untuk pemesanan.");
    // Atau redirect langsung ke WhatsApp
    // window.location.href = "https://wa.me/6281234567890";
  });
});