var $cont = document.querySelector(".cont");
var $asArr = [].slice.call(document.querySelectorAll(".a"));
var $closeBtnsArr = [].slice.call(document.querySelectorAll(".a__close-btn"));




setTimeout(function () {
  $cont.classList.remove("s--inactive");
}, 200);

$asArr.forEach(function ($a) {
  $a.addEventListener("click", function () {
    if (this.classList.contains("s--active")) return;
    $cont.classList.add("s--a-active");
    this.classList.add("s--active");
  });
});

$closeBtnsArr.forEach(function ($btn) {
  $btn.addEventListener("click", function (e) {
    e.stopPropagation();
    $cont.classList.remove("s--a-active");
    document.querySelector(".a.s--active").classList.remove("s--active");
  });




});

document.addEventListener('DOMContentLoaded', function () {
  // Elementleri seç
  const rezervasyonBtn = document.getElementById('rezervasyonAcBtn');
  const popup = document.getElementById('popup');
  const closeBtn = document.querySelector('.close-btn');
  const form = document.getElementById('rezervasyonForm');

  // Popup'ı başlangıçta kapalı tut
  popup.style.display = 'none';

  // Hata kontrolü
  if (!rezervasyonBtn || !popup) {
    console.error('HATA: Gerekli elementler bulunamadı!');
    return;
  }

  // Sadece butona tıklandığında aç
  rezervasyonBtn.addEventListener('click', function (e) {
    e.preventDefault();
    popup.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  });

  // Kapatma işlevleri
  if (closeBtn) {
    closeBtn.addEventListener('click', function () {
      popup.style.display = 'none';
      document.body.style.overflow = 'auto';
    });
  }

  // Dışarı tıklayınca kapat
  popup.addEventListener('click', function (e) {
    if (e.target === popup) {
      popup.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  });

  // Form gönderimi
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Rezervasyon isteğiniz alındı!');
      popup.style.display = 'none';
      document.body.style.overflow = 'auto';
      this.reset();
    });
  }
});