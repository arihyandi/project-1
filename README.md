# Detektif Pola

Game sederhana untuk materi **Berpikir Komputasional: Pengenalan Pola**.
**Mainkan:** https://arihyandi.github.io/project-1/

Siswa mengamati sebuah urutan (warna, bentuk, arah panah, angka, atau huruf), menemukan aturannya, lalu memilih jawaban yang mengisi kotak bertanda `?`.

## Cara memainkan

Buka `index.html` di browser. Tidak perlu internet atau instalasi, kecuali untuk font.

- Pilih salah satu dari 5 tingkat. Soal dalam satu ronde dibuat acak, jadi setiap ronde berbeda.
- Klik jawaban atau tekan tombol `1`–`4`. Tekan `Enter` untuk lanjut.
- Setelah menjawab, muncul penjelasan aturan polanya.
- Di akhir ronde ada skor, bintang (maksimal 3), dan skor terbaik per tingkat. Tombol naik tingkat muncul jika mendapat minimal 2 bintang (75% benar).

## Tingkatan dan jenis pola

| Tingkat | Soal | Jenis pola |
|---------|------|------------|
| 1 · Sangat Mudah | 15 | Warna berulang (AB), bentuk berulang (AB), gambar buah/hewan, ukuran besar–kecil, bilangan +1/+2, huruf berurutan, jumlah titik +1 |
| 2 · Mudah | 16 | Warna dan bentuk (AAB, ABB, ABC), gambar ABC, ukuran, bilangan ditambah, bilangan dikurangi, huruf melompat, titik +1/+2, panah berputar 90° |
| 3 · Sedang | 17 | Pola ganda (bentuk + warna), putaran panah 45°/90°, bilangan dikurangi, pola bertumbuh (+1, +2, +3, ...), huruf melompat 2–3, huruf mundur, angka hilang di tengah, gambar ABCD |
| 4 · Sulit | 18 | Perkalian, Fibonacci, bilangan kuadrat, operasi selang-seling, angka hilang di tengah, pola ganda hilang di tengah, huruf + angka (A1, C2, E3), huruf selang-seling (A, Z, B, Y), putaran 135° |
| 5 · Sangat Sulit | 20 | Bilangan kubik, bilangan segitiga, bilangan prima, selisih berlipat, dua deret diselipkan, huruf bertumbuh, putaran + warna, dua operasi (×2 +1), pola ganda dan Fibonacci hilang di tengah |

## Publikasi (GitHub Pages)

Situs dipublikasikan otomatis oleh workflow `.github/workflows/pages.yml` setiap ada perubahan di branch `master`.

Pengaturan yang perlu dilakukan sekali saja:

1. Buka **Settings → Pages** di repositori ini.
2. Pada **Build and deployment → Source**, pilih **GitHub Actions**.
3. Gabungkan (merge) perubahan ke `master`, atau jalankan workflow secara manual dari tab **Actions → Publikasi ke GitHub Pages → Run workflow**.

Setelah selesai, game bisa dibuka di https://arihyandi.github.io/project-1/.

Karena game ini hanya satu file `index.html`, file tersebut juga bisa diunggah ke hosting statis lain (Netlify, Vercel, Google Sites lewat embed, atau LMS sekolah).

## Struktur

```
index.html                     # seluruh game (HTML, CSS, dan JavaScript)
.github/workflows/pages.yml    # publikasi otomatis ke GitHub Pages
```
