document
  .getElementById("aspirasiForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const data = {
      nama: document.getElementById("nama").value.trim(),
      kategori: document.getElementById("kategori").value,
      kritikan: document.getElementById("kritikan").value.trim(),
      solusi: document.getElementById("solusi").value.trim(),
    };

    if (!data.nama || !data.kategori || !data.kritikan || !data.solusi) {
      alert("Semua kolom harus diisi!");
      return;
    }

    fetch(
      "https://script.google.com/macros/s/AKfycbx7RUsijEWhh28JP76z1-fFqDHP6ECtgXytTpStPEwEqiCc5Ukq_oqGi1l-JKTNHXg8/exec",
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.text())
      .then((result) => {
        alert("Aspirasi berhasil dikirim!");
        document.getElementById("aspirasiForm").reset();
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Terjadi kesalahan. Coba lagi nanti.");
      });
  });
