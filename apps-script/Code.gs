/**
 * Penerima riwayat jawaban Detektif Pola.
 *
 * Cara pakai (ringkas, lihat README.md untuk langkah lengkap):
 * 1. Buat Google Sheets baru, lalu buka Ekstensi -> Apps Script.
 * 2. Tempel seluruh isi file ini, simpan.
 * 3. Terapkan -> Deployment baru -> Jenis: Aplikasi web.
 *    Jalankan sebagai: Saya. Yang memiliki akses: Siapa saja.
 * 4. Salin URL Web App ke config.js (googleSheetsUrl).
 */

var SHEET_JAWABAN = 'Jawaban';
var SHEET_RINGKASAN = 'Ringkasan';

var HEADER_JAWABAN = ['Waktu', 'Nama', 'Kelas', 'Tingkat', 'Ronde', 'No', 'Jenis Pola', 'Soal', 'Jawaban Siswa', 'Kunci', 'Hasil'];
var HEADER_RINGKASAN = ['Mulai', 'Selesai', 'Nama', 'Kelas', 'Tingkat', 'Benar', 'Jumlah Soal', 'Nilai', 'Bintang', 'Ronde'];

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    var d = JSON.parse(e.postData.contents);
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    if (d.type === 'jawaban') {
      sheet_(ss, SHEET_JAWABAN, HEADER_JAWABAN).appendRow([
        d.waktu, d.nama, d.kelas, d.tingkat, d.ronde, d.no, d.jenis, d.soal, d.jawaban, d.kunci, d.hasil,
      ].map(clean_));
    } else if (d.type === 'ringkasan') {
      sheet_(ss, SHEET_RINGKASAN, HEADER_RINGKASAN).appendRow([
        d.mulai, d.selesai, d.nama, d.kelas, d.tingkat, d.benar, d.total, d.nilai, d.bintang, d.ronde,
      ].map(clean_));
    }
    return ContentService.createTextOutput('ok');
  } catch (err) {
    return ContentService.createTextOutput('error: ' + err);
  } finally {
    lock.releaseLock();
  }
}

// Untuk mengecek di browser bahwa Web App sudah aktif.
function doGet() {
  return ContentService.createTextOutput('Detektif Pola: penerima riwayat aktif.');
}

function sheet_(ss, name, header) {
  var sh = ss.getSheetByName(name);
  if (!sh) {
    sh = ss.insertSheet(name);
    sh.appendRow(header);
    sh.setFrozenRows(1);
    sh.getRange(1, 1, 1, header.length).setFontWeight('bold');
  }
  return sh;
}

// Cegah teks dari siswa dibaca sebagai rumus spreadsheet.
function clean_(v) {
  if (v === null || v === undefined) return '';
  if (typeof v === 'string' && /^[=+\-@]/.test(v)) return "'" + v;
  return v;
}
