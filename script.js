// --- 1. AMBIL ELEMEN DOM ---
const textInput = document.getElementById("text-input");
const clearBtn = document.getElementById("clear-btn");
const speedBtns = document.querySelectorAll(".speed-btn");

const readTimeDisplay = document.getElementById("read-time-display");
const wordCountDisplay = document.getElementById("word-count-display");
const charCountDisplay = document.getElementById("char-count-display");
const sentenceCountDisplay = document.getElementById("sentence-count-display");

let currentWpm = 200; // Default: 200 kata per menit

// --- 2. FUNGSI HITUNG ESTIMASI WAKTU BACA ---
function calculateReadTime(wordsCount, wpm) {
    if (wordsCount === 0) return "0 Detik";

    // Waktu dalam menit
    const totalMinutes = wordsCount / wpm;
    const minutes = Math.floor(totalMinutes);
    const seconds = Math.round((totalMinutes - minutes) * 60);

    let result = "";
    if (minutes > 0) {
        result += `${minutes} Menit `;
    }
    if (seconds > 0 || minutes === 0) {
        result += `${seconds} Detik`;
    }

    return result;
}

// --- 3. LOGIKA ANALISIS TEKS REAL-TIME ---
function analyzeText() {
    const text = textInput.value;

    // Hitung Karakter Total
    const charCount = text.length;

    // Hitung Kata (Abaikan spasi berlebih & baris baru)
    const trimmedText = text.trim();
    const wordsArray = trimmedText ? trimmedText.split(/\s+/) : [];
    const wordCount = wordsArray.length;

    // Hitung Kalimat (Berdasarkan tanda titik, tanda tanya, atau tanda seru)
    const sentencesArray = text.split(/[.!?]+/).filter((s) => s.trim().length > 0);
    const sentenceCount = sentencesArray.length;

    // Hitung Estimasi Waktu Baca
    const readTimeText = calculateReadTime(wordCount, currentWpm);

    // Render ke UI
    wordCountDisplay.textContent = wordCount.toLocaleString("id-ID");
    charCountDisplay.textContent = charCount.toLocaleString("id-ID");
    sentenceCountDisplay.textContent = sentenceCount.toLocaleString("id-ID");
    readTimeDisplay.textContent = readTimeText;
}

// --- 4. EVENT LISTENERS ---

// Real-time input listener
textInput.addEventListener("input", analyzeText);

// Tombol Hapus Teks
clearBtn.addEventListener("click", () => {
    textInput.value = "";
    analyzeText();
    textInput.focus();
});

// Switch Mode Kecepatan Baca (WPM)
speedBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        speedBtns.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");

        currentWpm = parseInt(btn.getAttribute("data-wpm"));
        analyzeText();
    });
});

// Inisialisasi awal
analyzeText();
