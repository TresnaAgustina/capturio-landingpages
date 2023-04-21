// JavaScript
const navLink = document.querySelectorAll(".link");

// Tambahkan event listener pada setiap tombol
navLink.forEach((button) => {
  button.addEventListener("click", function () {
    // hapus kelas "active" dari semua tombol
    navLink.forEach((button) => {
      button.classList.remove("active");
    });

    // tambahkan kelas "active" pada tombol yang di klik
    button.classList.add("active");
  });
});
