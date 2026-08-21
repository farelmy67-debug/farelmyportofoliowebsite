# Portfolio Polish

Saya sudah upload semua file kode (index.html, style.css, main.js, README.md, main.js, dan launch.json) untuk website portofolio interaktif saya. Tolong bantu saya dengan hal berikut, sesuai urutan prioritas:

## 1. PERBAIKI BUG: Scroll tidak berfungsi di dalam detail panel

Bug: Ketika saya klik salah satu dari 3 "role card" utama (Administration Staff, Data Scientist/Analyst, Digital Marketing/SEO Specialist) di halaman utama, panel detail full-screen terbuka (elemen dengan class ".detail-panel", jadi anak dari ".role-card" yang dapat class "is-open"). Tapi begitu di dalam panel itu, saya TIDAK BISA scroll ke bawah sama sekali, baik pakai trackpad, scroll wheel, maupun tombol panah keyboard. Konten yang panjang (misalnya bar chart skor, daftar keterampilan, galeri sertifikat) jadi kepotong dan tidak bisa saya lihat.

Detail teknis elemen yang bermasalah:

- ".detail-panel" pakai position: fixed; inset: 0; overflow-y: scroll (atau auto)

- Class "is-open" ditambahkan/dihapus lewat JavaScript di fungsi openRoleCard() dan closeRoleCard() di scripts/main.js

- Sudah saya coba ganti visibility:hidden jadi opacity saja, sudah tambah overscroll-behavior: contain, sudah tambah paksa reflow (offsetHeight) di JS, tapi bug tetap ada

- Saya curiga kemungkinan akar masalahnya: (a) scrollHeight konten yang benar-benar sama dengan clientHeight viewport untuk role tertentu sehingga browser menganggap tidak ada overflow, (b) ada elemen ancestor yang tanpa sengaja membuat position:fixed jadi tidak relatif ke viewport, atau (c) ada listener JavaScript lain yang mencegat/memblokir event scroll/wheel/keydown sebelum sampai ke .detail-panel

Tolong investigasi dari awal dengan DevTools/inspect langsung di preview yang bisa kamu jalankan, cari akar masalah pastinya (bukan tebak-tebakan), lalu perbaiki sampai user BENAR-BENAR bisa scroll naik-turun di dalam panel detail itu pakai keyboard (panah atas/bawah, Page Up/Down, Home/End) DAN trackpad/scroll wheel.

## 2. Ganti semua gambar dengan placeholder sementara

File foto asli (foto profil, sertifikat, dokumentasi, logo, background) belum saya upload. Saya akan upload dan taruh di foldernya masing-masing nanti secara manual. Untuk sekarang, tolong:

- JANGAN hapus atau ubah struktur folder assets/ dan nama file yang sudah direferensikan di kode (index.html, main.js, style.css)

- Ganti SEMENTARA semua gambar yang belum ada jadi placeholder visual yang rapi (misalnya kotak dengan ikon atau teks nama filenya, mengikuti palet warna baru di bawah), supaya layout tetap kelihatan bagus dan tidak ada broken image icon, TANPA saya perlu upload file gambar sekarang

- Path gambar yang perlu placeholder (semua ada di folder assets/), di antaranya:

  - assets/background/Background.jpg (background halaman utama)

  - assets/background/firstpage.jpg (background layar sambutan)

  - assets/admin/admin-photo.jpg

  - assets/data-science/ds-photo.jpg

  - assets/digital-marketing/dm-id-card.jpg, dm-speaking.jpg, dm-group1.jpg, dm-group2.jpg, dm-selfie.jpg

  - assets/admin/certificates/ (12 file sertifikat, nama filenya sudah didefinisikan di ADMIN_CERTIFICATES pada main.js)

  - assets/data-science/certificates/ (5 file sertifikat, nama file di DATA_CERTIFICATES pada main.js)

  - assets/other-certificates/ (9 file sertifikat, nama file di OTHER_CERTIFICATES pada main.js)

  - assets/dokumentasi/ (3 foto dokumentasi Teach for Indonesia)

  - assets/logo/Logo OSIS.jpeg, Grab Icon.jpg

  - assets/social/instagram-qr.png

- Kode yang sudah ada di main.js sebenarnya SUDAH punya fallback onerror yang otomatis menampilkan teks "Sertifikat segera ditambahkan" atau class "missing-image" kalau file tidak ketemu. Tolong pastikan fallback ini tetap jalan dan terlihat rapi secara visual, supaya begitu saya upload file asli nanti, tinggal ganti file-nya tanpa perlu ubah kode lagi.

## 3. Palet warna

Ganti seluruh skema warna situs ini supaya HANYA memakai 4 warna: biru, emas (gold), putih, dan hitam.

- Hitam dan biru gelap untuk background utama

- Emas untuk aksen utama: garis pembatas kartu, border hover, judul penting, angka bar chart/counter

- Biru untuk elemen sekunder: badge role, tombol, highlight tambahan

- Putih untuk teks utama

- Jaga hierarki kontras: judul putih terang, deskripsi putih agak redup/abu kebiruan, background gelap solid

- Jangan pakai warna lain di luar 4 warna ini (hindari oranye, hijau, merah, dsb dari skema lama), kecuali warna wajib seperti merah untuk notifikasi error kalau memang perlu

## 4. Redesign UI/UX secara menyeluruh

Selain warna, saya juga mau tampilan dan pengalaman keseluruhan situs dirombak jadi lebih modern, rapi, dan premium. Boleh dieksplorasi bebas selama tetap pakai 4 warna di atas dan tidak mengubah struktur konten/copy yang sudah ada. Beberapa arahan:

- Tingkatkan hierarki visual dan tipografi: variasi ukuran, ketebalan, dan spacing yang lebih terasa "dirancang", bukan default

- Perhalus transisi dan animasi (morph antar role card, buka/tutup detail panel, hover state) supaya terasa lebih smooth dan modern, tapi tetap ringan/tidak berlebihan

- Perbaiki spacing, alignment, dan komposisi layout supaya lebih lega dan nyaman dibaca, terutama di detail panel yang isinya banyak (timeline, bar chart, tag skill, galeri kredensial)

- Elemen interaktif (tombol, kartu, galeri geser, form rating) boleh didesain ulang bentuknya (border-radius, shadow, efek hover/fokus) selama tetap konsisten dengan gaya keseluruhan

- Pastikan hasil redesign tetap fully responsive di mobile dan desktop

- Pertahankan semua fungsi yang sudah ada: morph transition antar role card, navigasi sebelumnya/selanjutnya, lightbox sertifikat, galeri dokumentasi, form rating, popover Instagram, dll, jangan ada fitur yang hilang

## Catatan penting

- Jangan gunakan tanda em dash ("—") di teks manapun kalau menambah atau mengedit konten

- Jangan ubah konten/copy yang sudah ada di index.html kecuali diminta

- Kerjakan sesuai urutan: (1) bug scroll dulu karena ini masalah fungsional paling krusial, (2) placeholder gambar, (3) palet warna, (4) redesign UI/UX menyeluruh

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://farelmyportofoliowebsite.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/6c1517ee-e8f7-4ec0-ac33-4d26e3059a17).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
