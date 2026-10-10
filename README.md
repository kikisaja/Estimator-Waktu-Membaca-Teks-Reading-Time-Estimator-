# 📖 Read Time Estimator

Aplikasi pemantau dan pengestimasi waktu membaca teks (*Reading Time Estimator*) interaktif berbasis JavaScript untuk menghitung durasi baca artikel berdasarkan jumlah kata dan pilihan kecepatan membaca (*WPM - Words Per Minute*).

---

## 🎯 Konsep Pembelajaran RPL / Pemrograman Web

1. **String Manipulation & Regex:**
   Menggunakan ekspresi reguler (`/\s+/` dan `/[.!?]+/`) untuk memecah teks menjadi kata dan kalimat secara akurat.
2. **Kalkulasi Matematika Waktu:**
   Mengonversi rasio $\frac{\text{Jumlah Kata}}{\text{WPM}}$ menjadi komponen pembagian menit dan detik yang presisi.
3. **Dynamic Event Listeners:**
   Menerapkan listener `input` untuk menghasilkan pembaruan analisis statistik secara *real-time* tanpa membuat tombol pemicu manual.

---

## 📂 Struktur Folder Proyek

```text
├── index.html       # Input teks area, pemilih opsi WPM, dan kartu indikator hasil
├── style.css        # Desain Neobrutalism, warna pop cerah, dan layout responsif
└── script.js        # Pemrosesan string Regex, kalkulasi durasi baca, & manipulasi DOM
