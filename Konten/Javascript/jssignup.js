function submitFormUp() {
    const form = document.getElementById("signup-form");
    const firstNameInput = document.getElementById("first-name");
    const lastNameInput = document.getElementById("last-name");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirm-password");
    
    // Validasi saat pengguna mengirimkan formulir
    form.addEventListener("submit", function (event) {
      // Cek apakah password dan konfirmasi password sama
      if (passwordInput.value !== confirmPasswordInput.value) {
        alert("Password dan Konfirmasi Password harus sama!");
        event.preventDefault();
        return;
      }
    
      // Cek apakah email valid menggunakan regex
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailInput.value)) {
        alert("Masukkan alamat email yang valid!");
        event.preventDefault();
        return;
      }
    
      // Jika validasi berhasil, Anda dapat mengirimkan formulir
      alert("Formulir berhasil dikirim!");
    });
}
