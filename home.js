document.addEventListener("DOMContentLoaded", function () {
    alert("Welcome to DreamStay Hotel! Enjoy your stay.");
});
document.addEventListener("DOMContentLoaded", function () {
    const title = document.querySelector(".main-header__logo");
    title.style.color = "#ffcc00"; // altın sarısı
});
function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById("clock").textContent = timeString;
}

setInterval(updateClock, 1000); // Her saniyede bir çalışır
updateClock(); // Sayfa yüklenir yüklenmez ilk saati yazdırır



