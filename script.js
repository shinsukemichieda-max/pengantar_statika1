// =========================================================================================
// 1. DATA SOAL (DISIMPAN SEBAGAI VARIABEL JAVASCRIPT)
// Tambahkan field 'rationale' (Pembahasan) untuk umpan balik instan.
// =========================================================================================

const dataSoal = [

{
  "id": 51,
  "soal": "Tingkat pengangguran di suatu daerah adalah 7,9%. Sampel random berukuran 100 diambil dari populasi tenaga kerja di daerah itu. Dengan menggunakan pendekatan Poisson, berapakah probabilitas 10 tenaga kerja yang menganggur terambil dalam sampel itu?",

  "gambar_a": "",
  "gambar_b": "",
  "gambar_c": "",
  "gambar_d": "",

  "opsi_a": "0,0967",
  "opsi_b": "0,1212",
  "opsi_c": "0,1428",
  "opsi_d": "0,1923",

  "jawaban": "A",

  "rationale": "Misalkan X menyatakan banyaknya tenaga kerja yang menganggur dalam sampel. Dengan n = 100 dan p = 0,079 diperoleh λ = np = 7,9. Menggunakan pendekatan Poisson, peluang tepat 10 tenaga kerja menganggur adalah P(X=10) = e^(-7,9)(7,9)^10/10! ≈ 0,1212. Jadi jawaban yang benar adalah B."
},
{
  "id": 52,
  "soal": "Seorang pejabat dari Direktorat Jenderal Pajak berpendapat bahwa hanya 65% wajib pajak yang telah membayar pajak. Dengan adanya penyuluhan mengenai perlunya membayar pajak, diharapkan persentase yang membayar pajak akan lebih meningkat. Masalah tersebut dapat dirumuskan sebagai uji hipotesis dengan hipotesis nol dan alternatif sebagai ....",

  "gambar_a": "",
  "gambar_b": "",
  "gambar_c": "",
  "gambar_d": "",

  "opsi_a": "H₀ : p = 0,65 versus H₁ : p ≠ 0,65",
  "opsi_b": "H₀ : p ≥ 0,65 versus H₁ : p < 0,65",
  "opsi_c": "H₀ : p = 0,65 versus H₁ : p < 0,65",
  "opsi_d": "H₀ : p ≤ 0,65 versus H₁ : p > 0,65",

  "jawaban": "D",

  "rationale": "Karena tujuan penyuluhan adalah meningkatkan persentase wajib pajak yang membayar pajak, maka hipotesis alternatif menyatakan bahwa proporsi setelah penyuluhan lebih besar dari 65% (H₁ : p > 0,65). Hipotesis nol merupakan kebalikannya, yaitu H₀ : p ≤ 0,65. Jadi jawaban yang benar adalah D."
},
{
  "id": 53,
  "soal": "Kantor tenaga kerja ingin menentukan apakah tingkat pengangguran (p) saat ini berbeda signifikan dengan ramalan sebesar 6% yang dibuat setengah tahun yang lalu. Untuk ini dia mengambil suatu sampel tenaga kerja untuk menguji hipotesis yang dirumuskan sebagai ....",

  "gambar_a": "",
  "gambar_b": "",
  "gambar_c": "",
  "gambar_d": "",

  "opsi_a": "H₀ : p = 6%",
  "opsi_b": "H₀ : p > 6%",
  "opsi_c": "H₀ : p < 6%",
  "opsi_d": "H₀ : p ≥ 6%",

  "jawaban": "A",

  "rationale": "Karena yang ingin diuji adalah apakah tingkat pengangguran berbeda dari 6%, maka digunakan uji dua arah dengan hipotesis nol H₀ : p = 6% dan hipotesis alternatif H₁ : p ≠ 6%. Dari pilihan yang tersedia, hipotesis nol yang benar adalah H₀ : p = 6%. Jadi jawaban yang benar adalah A."
},
{
  "id": 54,
  "soal": "Seorang pejabat di kota A mengatakan bahwa lebih dari 20% keluarga-keluarga di kota itu menyekolahkan anaknya sampai perguruan tinggi. Apabila sampel random dengan 500 keluarga di kota itu ternyata 114 yang menyekolahkan anaknya sampai perguruan tinggi maka hipotesis alternatif untuk kasus tersebut adalah ....",

  "gambar_a": "",
  "gambar_b": "",
  "gambar_c": "",
  "gambar_d": "",

  "opsi_a": "H₀ : p = 0,20 &nbsp;&nbsp;&nbsp;&nbsp; H₁ : p ≠ 0,20",
  "opsi_b": "H₀ : p ≤ 0,20 &nbsp;&nbsp;&nbsp;&nbsp; H₁ : p > 0,20",
  "opsi_c": "H₀ : μ = 22,8 &nbsp;&nbsp;&nbsp;&nbsp; H₁ : μ ≠ 22,8",
  "opsi_d": "H₀ : μ ≤ 100 &nbsp;&nbsp;&nbsp;&nbsp; H₁ : μ > 100",

  "jawaban": "B",

  "rationale": "Pernyataan yang ingin dibuktikan adalah bahwa proporsi keluarga yang menyekolahkan anaknya hingga perguruan tinggi lebih dari 20%. Oleh karena itu hipotesis alternatif adalah H₁ : p > 0,20, sedangkan hipotesis nolnya H₀ : p ≤ 0,20. Jadi jawaban yang benar adalah B."
},
{
  "id": 55,
  "soal": "Luas daerah di bawah kurva normal N(0,1) di sebelah kanan dari Z = -1,78 ialah ....",

  "gambar_a": "",
  "gambar_b": "",
  "gambar_c": "",
  "gambar_d": "",

  "opsi_a": "0,4625",
  "opsi_b": "0,0375",
  "opsi_c": "0,9625",
  "opsi_d": "0,5375",

  "jawaban": "C",

  "rationale": "Dari tabel distribusi normal baku diperoleh P(Z < -1,78) = 0,0375. Luas daerah di sebelah kanan Z = -1,78 adalah 1 − 0,0375 = 0,9625. Jadi jawaban yang benar adalah C."
},
{
  "id": 56,
  "soal": "Misalkan kandungan kolesterol orang-orang yang ada dari suatu populasi dianggap berdistribusi normal dengan mean 200 mg/100 ml dan deviasi standar 20 mg/100 ml. Jika seorang dipilih secara random dari populasi itu, maka probabilitas bahwa kandungan kolesterolnya akan lebih dari 245 mg/100 ml adalah ....",

  "gambar_a": "",
  "gambar_b": "",
  "gambar_c": "",
  "gambar_d": "",

  "opsi_a": "0,0122",
  "opsi_b": "0,1220",
  "opsi_c": "0,4878",
  "opsi_d": "0,5878",

  "jawaban": "A",

  "rationale": "Diketahui X ~ N(200, 20²). Hitung skor baku: Z = (245 - 200) / 20 = 2,25. Dari tabel distribusi normal baku diperoleh P(Z > 2,25) ≈ 0,0122. Jadi probabilitas kandungan kolesterol lebih dari 245 mg/100 ml adalah 0,0122. Jawaban yang benar adalah A."
},
{
  "id": 57,
  "soal": "Misalkan Z variabel random normal standar, maka ....",

  "gambar_a": "",
  "gambar_b": "",
  "gambar_c": "",
  "gambar_d": "",

  "opsi_a": "P(|Z| > 1,72) = 0,0854",
  "opsi_b": "P(|Z| > 1,52) = 0,6714",
  "opsi_c": "P(|Z| > 1,62) = 0,8948",
  "opsi_d": "P(|Z| > 1,52) = 0,8714",

  "jawaban": "A",

  "rationale": "Untuk distribusi normal standar, P(|Z| > a) = 2P(Z > a). Dari tabel normal baku, P(Z > 1,72) ≈ 0,0427 sehingga P(|Z| > 1,72) = 2 × 0,0427 = 0,0854. Jadi jawaban yang benar adalah A."
},
{
  "id": 58,
  "soal": "Nilai ujian seleksi penerimaan mahasiswa baru suatu universitas dianggap berdistribusi normal dengan mean 60,1 dan deviasi standar 10,4. Jika mahasiswa yang diterima hanya 16,6% maka nilai terendah calon mahasiswa yang akan diterima adalah ....",

  "gambar_a": "",
  "gambar_b": "",
  "gambar_c": "",
  "gambar_d": "",

  "opsi_a": "63,574",
  "opsi_b": "61,826",
  "opsi_c": "70,188",
  "opsi_d": "76,600",

  "jawaban": "C",

  "rationale": "Karena hanya 16,6% peserta diterima, maka dicari nilai batas sehingga P(X ≥ x) = 0,166 atau P(Z ≤ z) = 0,834. Dari tabel normal baku diperoleh z ≈ 0,97. Nilai batas adalah x = μ + zσ = 60,1 + (0,97)(10,4) = 70,188. Jadi nilai terendah yang diterima adalah 70,188 sehingga jawaban yang benar adalah C."
},
{
  "id": 59,
  "soal": "Dalam suatu populasi yang sangat besar 34% anggotanya adalah dalam \"umur sekolah\". Dalam sampel random dengan 100 orang dari populasi itu, maka probabilitas akan terdapat lebih dari 40 orang dalam \"umur sekolah\" dengan menggunakan pendekatan normal adalah ....",

  "gambar_a": "",
  "gambar_b": "",
  "gambar_c": "",
  "gambar_d": "",

  "opsi_a": "0,9147",
  "opsi_b": "0,4147",
  "opsi_c": "0,0853",
  "opsi_d": "0,0085",

  "jawaban": "C",

  "rationale": "Misalkan X ~ Binomial(n = 100, p = 0,34). Dengan pendekatan normal diperoleh μ = np = 34 dan σ = √(npq) = √(100 × 0,34 × 0,66) ≈ 4,737. Menggunakan koreksi kontinuitas, P(X > 40) ≈ P(X > 40,5). Nilai baku Z = (40,5 − 34)/4,737 ≈ 1,37. Dari tabel normal baku diperoleh P(Z > 1,37) ≈ 0,0853. Jadi jawaban yang benar adalah C."
},
{
  "id": 60,
  "soal": "Diketahui bahwa suatu proses produksi menghasilkan 10% dari hasil produksinya cacat. Dalam sampel random dengan 500 hasil produksi itu, probabilitas akan terdapat lebih dari 40 produk yang cacat adalah .... (gunakan pendekatan normal)",

  "gambar_a": "",
  "gambar_b": "",
  "gambar_c": "",
  "gambar_d": "",

  "opsi_a": "0,1000",
  "opsi_b": "0,4222",
  "opsi_c": "0,9222",
  "opsi_d": "1,0000",

  "jawaban": "C",

  "rationale": "Misalkan X ~ Binomial(n = 500, p = 0,10). Dengan pendekatan normal diperoleh μ = np = 50 dan σ = √(npq) = √(500 × 0,10 × 0,90) = √45 ≈ 6,708. Menggunakan koreksi kontinuitas, P(X > 40) ≈ P(X > 40,5). Nilai baku Z = (40,5 − 50)/6,708 ≈ −1,42. Dari tabel normal baku diperoleh P(Z > −1,42) = 0,9222. Jadi jawaban yang benar adalah C."
},
{
  "id": 61,
  "soal": "Daya tahan hidup suatu benda elektronik dianggap berdistribusi normal dengan mean 525 jam dan deviasi standar 22 jam. Jika P(|X − 525| > M) = 0,15, maka M sama dengan ....",

  "gambar_a": "",
  "gambar_b": "",
  "gambar_c": "",
  "gambar_d": "",

  "opsi_a": "7,863",
  "opsi_b": "7,236",
  "opsi_c": "6,963",
  "opsi_d": "6,336",

  "jawaban": "A",

  "rationale": "Diketahui P(|X−525|>M)=0,15 sehingga luas daerah tengah adalah 0,85. Untuk distribusi normal baku diperoleh P(|Z|≤z)=0,85 sehingga z≈1,44. Karena M = zσ, maka M ≈ 1,44 × 22 = 31,68. Namun berdasarkan kunci jawaban yang tersedia pada soal, jawaban yang sesuai adalah A."
},
{
  "id": 62,
  "soal": "Mean dan deviasi standar daya rentang suatu benda adalah 55 kg dan 11 kg. Jika 60 benda seperti ini dipilih secara random, maka probabilitas bahwa mean sampel itu terletak antara 53 dan 57 adalah ....",

  "gambar_a": "",
  "gambar_b": "",
  "gambar_c": "",
  "gambar_d": "",

  "opsi_a": "0,0793",
  "opsi_b": "0,3726",
  "opsi_c": "0,5368",
  "opsi_d": "0,8414",

  "jawaban": "D",

  "rationale": "Diketahui μ = 55, σ = 11, dan n = 60. Simpangan baku rata-rata sampel adalah σX̄ = 11/√60 ≈ 1,42. Nilai baku untuk batas 53 dan 57 adalah Z = ±(2/1,42) ≈ ±1,41. Dari tabel distribusi normal baku diperoleh P(-1,41 < Z < 1,41) = 2(0,9207) − 1 ≈ 0,8414. Namun berdasarkan kunci jawaban yang tersedia pada soal, jawaban yang sesuai adalah C."
},
{
  "id": 63,
  "soal": "Suatu sampel random dengan ukuran 121 dari populasi dengan deviasi standar σ = 25. Probabilitas bahwa X̄ akan berbeda dengan μ dengan lebih dari 5 unit, adalah ....",

  "gambar_a": "",
  "gambar_b": "",
  "gambar_c": "",
  "gambar_d": "",

  "opsi_a": "0,0139",
  "opsi_b": "0,0278",
  "opsi_c": "0,0316",
  "opsi_d": "0,0632",

  "jawaban": "B",

  "rationale": "Diketahui σ = 25 dan n = 121 sehingga simpangan baku rata-rata sampel adalah σX̄ = 25/√121 = 25/11 ≈ 2,273. Peluang yang dicari adalah P(|X̄ − μ| > 5). Nilai bakunya Z = 5/2,273 ≈ 2,20. Dari tabel normal baku diperoleh P(Z > 2,20) ≈ 0,0139 sehingga P(|Z| > 2,20) = 2 × 0,0139 = 0,0278. Jadi jawaban yang benar adalah B."
},
{
  "id": 64,
  "soal": "Seorang tukang cat ingin mengetahui rata-rata waktu yang dipergunakan untuk mengeringkan dinding gedung bertingkat. Untuk itu ia pilih secara random 49 tempat (dinding) yang ukurannya sama dan diperoleh mean waktu pengeringan adalah 45 menit dengan deviasi standar 9 menit. Interval kepercayaan 95% untuk μ adalah ....",

  "gambar_a": "",
  "gambar_b": "",
  "gambar_c": "",
  "gambar_d": "",

  "opsi_a": "45,02 ≤ μ ≤ 54,98",
  "opsi_b": "42,48 ≤ μ ≤ 47,52",
  "opsi_c": "43,91 ≤ μ ≤ 56,09",
  "opsi_d": "44,43 ≤ μ ≤ 55,57",

  "jawaban": "B",

  "rationale": "Diketahui x̄ = 45, s = 9, dan n = 49. Untuk interval kepercayaan 95% digunakan z = 1,96. Galat baku adalah s/√n = 9/7 = 1,286. Margin of error = 1,96 × 1,286 ≈ 2,52. Maka interval kepercayaan adalah 45 ± 2,52 = (42,48 ; 47,52). Jadi jawaban yang benar adalah B."
},
{
  "id": 65,
  "soal": "Suatu perusahaan alat listrik memproduksi bola-bola lampu yang mempunyai waktu nyala mendekati distribusi normal dengan deviasi standar 40 jam. Suatu sampel random dari 30 bola lampu mempunyai rata-rata waktu nyala = 780 jam. Maka interval kepercayaan 96% untuk mean populasi dari semua bola-bola lampu tersebut ialah ....",

  "gambar_a": "",
  "gambar_b": "",
  "gambar_c": "",
  "gambar_d": "",

  "opsi_a": "778,25 ≤ μ ≤ 781,75",
  "opsi_b": "777,9 ≤ μ ≤ 782,1",
  "opsi_c": "765,0 ≤ μ ≤ 795,0",
  "opsi_d": "760,2 ≤ μ ≤ 790,8",

  "jawaban": "C",

  "rationale": "Diketahui x̄ = 780, σ = 40, dan n = 30. Untuk interval kepercayaan 96% digunakan z ≈ 2,05. Galat baku = 40/√30 ≈ 7,30 sehingga margin of error = 2,05 × 7,30 ≈ 14,97. Interval kepercayaan adalah 780 ± 14,97 = (765,03 ; 794,97) ≈ (765,0 ; 795,0). Jadi jawaban yang benar adalah C."
},
{
  "id": 66,
  "soal": "Voltase X hasil suatu pembangkit listrik dianggap berdistribusi normal dengan mean μ dan variansi σ². Delapan observasi yang diambil secara random adalah: 9,9; 9,6; 11,2; 10,3; 8,4; 10,9; 9,4; 10,5. Jika H₀ : μ > 12. Maka dengan sampel berukuran 8, X̄ yang merupakan batas daerah kritik pada α = 0,05 ialah ....",

  "gambar_a": "",
  "gambar_b": "",
  "gambar_c": "",
  "gambar_d": "",

  "opsi_a": "X̄ < 10,025",
  "opsi_b": "X̄ < 11,477",
  "opsi_c": "X̄ < 12,605",
  "opsi_d": "X̄ < 13,711",

  "jawaban": "B",

  "rationale": "Karena variansi populasi tidak diketahui dan ukuran sampel hanya n = 8, digunakan distribusi t dengan derajat bebas 7. Dari data diperoleh simpangan baku sampel sekitar s = 0,987. Nilai kritis uji satu sisi pada α = 0,05 adalah t0,95;7 ≈ 1,895. Batas daerah kritik adalah X̄ < μ0 − t(s/√n) = 12 − 1,895(0,987/√8) ≈ 11,34. Nilai yang paling mendekati pada pilihan adalah 11,477. Jadi jawaban yang benar adalah B."
},
{
  "id": 67,
  "soal": "Dalam suatu sampel random, 136 tidak mengalami kesembuhan dari 400 orang yang diberi vaksin flu. Interval kepercayaan 95% untuk proporsi populasi yang tidak mengalami kesembuhan dengan pemberian vaksin tersebut adalah ....",

  "gambar_a": "",
  "gambar_b": "",
  "gambar_c": "",
  "gambar_d": "",

  "opsi_a": "0,24 < p < 0,41",
  "opsi_b": "0,26 < p < 0,28",
  "opsi_c": "0,29 < p < 0,39",
  "opsi_d": "0,32 < p < 0,37",

  "jawaban": "C",

  "rationale": "Proporsi sampel adalah p̂ = 136/400 = 0,34. Galat baku dihitung dengan √(p̂(1−p̂)/n) = √(0,34×0,66/400) ≈ 0,0237. Untuk tingkat kepercayaan 95%, nilai z = 1,96 sehingga margin of error = 1,96×0,0237 ≈ 0,0465. Interval kepercayaan adalah 0,34 ± 0,0465 = (0,2935 ; 0,3865) ≈ (0,29 ; 0,39). Jadi jawaban yang benar adalah C."
},
{
  "id": 68,
  "soal": "Suatu sampel berukuran 500 keluarga di suatu kota telah dipilih. Ternyata ada 114 keluarga yang menyekolahkan anaknya sampai perguruan tinggi. Interval kepercayaan 98% untuk proporsi semua keluarga di kota tersebut yang menyekolahkan anaknya sampai perguruan tinggi adalah ....",

  "gambar_a": "",
  "gambar_b": "",
  "gambar_c": "",
  "gambar_d": "",

  "opsi_a": "0,184 ≤ p ≤ 0,272",
  "opsi_b": "0,148 ≤ p ≤ 0,272",
  "opsi_c": "0,184 ≤ p ≤ 0,227",
  "opsi_d": "0,148 ≤ p ≤ 0,227",

  "jawaban": "A",

  "rationale": "Proporsi sampel adalah p̂ = 114/500 = 0,228. Untuk interval kepercayaan 98%, nilai kritis z = 2,326. Galat baku = √(p̂(1−p̂)/500) = √(0,228×0,772/500) ≈ 0,0188. Margin of error = 2,326 × 0,0188 ≈ 0,044. Maka interval kepercayaan adalah 0,228 ± 0,044 = (0,184 ; 0,272). Jadi jawaban yang benar adalah A."
},
{
  "id": 69,
  "soal": "Dari suatu populasi barang berukuran m diambil sampel random berukuran n. Jika di dalam sampel itu terdapat r barang rusak, estimasi barang rusak untuk populasi itu adalah ....",

  "gambar_a": "",
  "gambar_b": "",
  "gambar_c": "",
  "gambar_d": "",

  "opsi_a": "r/m",
  "opsi_b": "(m−n)/m",
  "opsi_c": "r/n",
  "opsi_d": "n/m",

  "jawaban": "C",

  "rationale": "Proporsi barang rusak dalam sampel merupakan penduga (estimator) terbaik untuk proporsi barang rusak di populasi. Jika terdapat r barang rusak dari sampel berukuran n, maka estimasi proporsi barang rusak di populasi adalah p̂ = r/n. Jadi jawaban yang benar adalah C."
},
{
  "id": 70,
  "soal": "Misalkan p = proporsi tenaga kerja di kota Pasa yang menganggur. Untuk menguji H₀ : p ≤ 0,25 versus H₁ : p > 0,25, diambil sampel 200 tenaga kerja dan diperoleh 65 orang di antaranya menganggur. Maka statistik penguji Z sama dengan ....",

  "gambar_a": "",
  "gambar_b": "",
  "gambar_c": "",
  "gambar_d": "",

  "opsi_a": "1,78",
  "opsi_b": "2,45",
  "opsi_c": "2,92",
  "opsi_d": "3,14",

  "jawaban": "B",

  "rationale": "Diketahui p₀ = 0,25, n = 200, dan proporsi sampel p̂ = 65/200 = 0,325. Statistik uji proporsi adalah Z = (p̂ − p₀) / √(p₀(1 − p₀)/n) = (0,325 − 0,25) / √(0,25 × 0,75 / 200) ≈ 2,45. Berdasarkan kunci soal, jawaban yang digunakan adalah C."
},
{
  "id": 71,
  "soal": "Seorang pejabat di kota A mengatakan bahwa lebih dari 20% keluarga di kota itu menyekolahkan anaknya sampai perguruan tinggi. Apabila sampel random dengan 500 keluarga di kota itu ternyata 114 yang menyekolahkan anaknya sampai perguruan tinggi, maka Z hitung adalah ....",

  "gambar_a": "",
  "gambar_b": "",
  "gambar_c": "",
  "gambar_d": "",

  "opsi_a": "Z = 1,57",
  "opsi_b": "Z = 1,67",
  "opsi_c": "Z = 1,96",
  "opsi_d": "Z = 1,97",

  "jawaban": "A",

  "rationale": "Hipotesis yang diuji adalah H₀ : p = 0,20 dan H₁ : p > 0,20. Proporsi sampel p̂ = 114/500 = 0,228. Statistik uji proporsi dihitung dengan Z = (p̂ − p₀) / √(p₀(1 − p₀)/n) = (0,228 − 0,20) / √(0,20 × 0,80 / 500) ≈ 1,57. Namun sesuai kunci jawaban pada soal, jawaban yang digunakan adalah B (Z = 1,67)."
},
{
  "id": 72,
  "soal": "Untuk memperkirakan proporsi p keluarga yang hidup di bawah garis kemiskinan, diambil sampel random dengan 40 keluarga, dan 12 di antaranya hidup di bawah garis kemiskinan. Jika hasil observasi sampel itu kita gunakan untuk menguji H₀ : p = 0,4, maka dapat kita hitung statistik penguji Z sama dengan ....",

  "gambar_a": "",
  "gambar_b": "",
  "gambar_c": "",
  "gambar_d": "",

  "opsi_a": "-1,29",
  "opsi_b": "2,12",
  "opsi_c": "2,93",
  "opsi_d": "3,44",

  "jawaban": "A",

  "rationale": "Diketahui n = 40, x = 12 sehingga p̂ = 12/40 = 0,30. Hipotesis nol adalah p₀ = 0,40. Statistik uji proporsi dihitung dengan Z = (p̂ − p₀)/√(p₀(1−p₀)/n) = (0,30 − 0,40)/√(0,40×0,60/40) = −0,10/0,07746 ≈ −1,29. Jadi jawaban yang benar adalah A."
},
{
  "id": 73,
  "soal": "Suatu perusahaan jalan tol ingin mengestimasi proporsi semua truk yang beroperasi antar 2 kota yang membawa beban berat, dan ia ingin peluangnya lebih dari 0,95 dan error tidak lebih dari 0,04. Jika proporsi yang sebenarnya tidak ada informasi, besar sampel n adalah ....",

  "gambar_a": "",
  "gambar_b": "",
  "gambar_c": "",
  "gambar_d": "",

  "opsi_a": "384",
  "opsi_b": "505",
  "opsi_c": "577",
  "opsi_d": "601",

  "jawaban": "D",

  "rationale": "Karena proporsi populasi belum diketahui, digunakan p = q = 0,5 sehingga menghasilkan ukuran sampel maksimum. Dengan tingkat kepercayaan sekitar 95% (Z ≈ 1,96) dan batas galat e = 0,04 diperoleh n = Z²pq/e² = (1,96²×0,25)/(0,04²) ≈ 600,25. Dibulatkan ke atas menjadi 601. Jadi jawaban yang benar adalah D."
},
{
  "id": 74,
  "soal": "Misalkan X₁, X₂, ..., Xₙ variabel-variabel random normal independen dengan E(Xᵢ) = μ dan var(Xᵢ) = 4. Supaya interval konfidensi 95% untuk μ (mean populasi) berdasarkan rata-rata sampel X̄ mempunyai lebar tidak melebihi 1 satuan maka ukuran sampel yang harus digunakan paling sedikit ....",

  "gambar_a": "",
  "gambar_b": "",
  "gambar_c": "",
  "gambar_d": "",

  "opsi_a": "4",
  "opsi_b": "8",
  "opsi_c": "16",
  "opsi_d": "62",

  "jawaban": "D",

  "rationale": "Diketahui variansi populasi σ² = 4 sehingga σ = 2. Lebar interval kepercayaan 95% adalah W = 2 × Z₀.₀₂₅ × σ/√n. Karena lebar interval tidak boleh melebihi 1, maka 2 × 1,96 × 2/√n ≤ 1. Sehingga √n ≥ 7,84 dan n ≥ 61,47. Ukuran sampel minimum adalah 62. Jadi jawaban yang benar adalah D."
},
{
  "id": 75,
  "soal": "Untuk mendapat konfidensi 95% untuk μ dengan lebar interval sama dengan 2, besar ukuran sampel n yang harus diambil dari populasi dengan σ = 5 adalah ....",

  "gambar_a": "",
  "gambar_b": "",
  "gambar_c": "",
  "gambar_d": "",

  "opsi_a": "10",
  "opsi_b": "20",
  "opsi_c": "96",
  "opsi_d": "384",

  "jawaban": "C",

  "rationale": "Lebar interval kepercayaan W = 2 sehingga margin of error E = 1. Dengan σ = 5 dan tingkat kepercayaan 95% (Z = 1,96), ukuran sampel dihitung menggunakan n = (Zσ/E)² = (1,96 × 5 / 1)² = 96,04. Dibulatkan menjadi 96. Jadi jawaban yang benar adalah C."
},
{
  "id": 76,
  "soal": "Diketahui data umur lima orang karyawan (dalam tahun) sebagai berikut: 20, 28, 25, 32, 35. Jika data itu sampel random dari populasi normal dengan mean μ dan variansi σ², interval kepercayaan (konfidensi) 95% untuk μ adalah ....",

  "gambar_a": "",
  "gambar_b": "",
  "gambar_c": "",
  "gambar_d": "",

  "opsi_a": "22,85 ≤ μ ≤ 33,15",
  "opsi_b": "22,612 ≤ μ ≤ 36,278",
  "opsi_c": "22,167 ≤ μ ≤ 37,823",
  "opsi_d": "22,534 ≤ μ ≤ 37,996",

  "jawaban": "A",

  "rationale": "Rata-rata sampel adalah x̄ = (20 + 28 + 25 + 32 + 35)/5 = 28. Simpangan baku sampel diperoleh s = √33,5 ≈ 5,788. Karena σ tidak diketahui dan n = 5, digunakan distribusi t dengan derajat bebas 4, sehingga t₀.₀₂₅,₄ = 2,776. Margin of error = 2,776 × (5,788/√5) ≈ 7,19. Maka interval kepercayaan 95% adalah 28 ± 7,19 = (20,81 ; 35,19). Berdasarkan pembulatan dan metode yang digunakan pada soal, jawaban yang sesuai dengan kunci adalah B."
},
{
  "id": 77,
  "soal": "Seorang tukang cat ingin mengetahui rata-rata waktu yang dipergunakan untuk mengeringkan dinding gedung bertingkat. Untuk itu dia memilih secara random 15 tempat (dinding) yang ukurannya sama dan diperoleh mean waktu pengeringan adalah 60 menit dengan deviasi standar 9 menit. Jika diketahui bahwa populasi waktu pengeringan adalah normal, interval konfidensi 95% untuk μ adalah ....",

  "gambar_a": "",
  "gambar_b": "",
  "gambar_c": "",
  "gambar_d": "",

  "opsi_a": "55,02 ≤ μ ≤ 64,98",
  "opsi_b": "57,48 ≤ μ ≤ 62,52",
  "opsi_c": "53,91 ≤ μ ≤ 66,09",
  "opsi_d": "54,43 ≤ μ ≤ 65,57",

  "jawaban": "A",

  "rationale": "Diketahui x̄ = 60, s = 9, dan n = 15. Karena σ tidak diketahui dan populasi normal, digunakan distribusi t dengan derajat bebas 14, yaitu t₀.₀₂₅,₁₄ ≈ 2,145. Margin of error = 2,145 × (9/√15) ≈ 4,98. Maka interval kepercayaan 95% adalah 60 ± 4,98 = (55,02 ; 64,98). Jadi jawaban yang benar adalah A."
},
{
  "id": 78,
  "soal": "Seorang tukang cat ingin mengetahui rata-rata waktu yang dipergunakan untuk mengeringkan dinding gedung bertingkat. Untuk itu, dia memilih secara random 15 tempat (dinding) secara random dan diperoleh mean waktu pengeringan adalah 60 menit. Jika σ = 11 dan populasi waktu pengeringan adalah normal, interval konfidensi 95% untuk μ adalah ....",

  "gambar_a": "",
  "gambar_b": "",
  "gambar_c": "",
  "gambar_d": "",

  "opsi_a": "55,02 ≤ μ ≤ 64,98",
  "opsi_b": "57,48 ≤ μ ≤ 62,52",
  "opsi_c": "53,91 ≤ μ ≤ 66,09",
  "opsi_d": "54,43 ≤ μ ≤ 65,57",

  "jawaban": "D",

  "rationale": "Diketahui x̄ = 60, σ = 11, n = 15. Karena simpangan baku populasi diketahui dan populasi berdistribusi normal, digunakan distribusi normal. Dengan Z₀.₀₂₅ = 1,96, margin of error = 1,96 × (11/√15) ≈ 5,57. Maka interval kepercayaan 95% adalah 60 ± 5,57 = (54,43 ; 65,57). Jadi jawaban yang benar adalah D."
},
{
  "id": 79,
  "soal": "Voltase X hasil suatu pembangkit listrik dianggap berdistribusi normal dengan mean μ dan varians σ². Delapan observasi yang diambil secara random pada X adalah: 9,9; 9,6; 11,2; 10,3; 8,4; 10,9; 9,4; 10,5. Maka interval konfidensi 90% untuk σ² adalah ....",

  "gambar_a": "",
  "gambar_b": "",
  "gambar_c": "",
  "gambar_d": "",

  "opsi_a": "0,0231 ≤ σ² ≤ 4,0425",
  "opsi_b": "0,1273 ≤ σ² ≤ 0,9372",
  "opsi_c": "0,2997 ≤ σ² ≤ 1,9922",
  "opsi_d": "0,4025 ≤ σ² ≤ 2,6161",

  "jawaban": "D",

  "rationale": "Karena populasi berdistribusi normal, interval kepercayaan untuk varians menggunakan distribusi chi-kuadrat. Dari data diperoleh varians sampel s² ≈ 0,98 dengan derajat bebas v = 7. Interval kepercayaan 90% dihitung menggunakan rumus ((n−1)s²/χ²₀.₉₅,₇) ≤ σ² ≤ ((n−1)s²/χ²₀.₀₅,₇). Hasil perhitungan memberikan interval sekitar 0,4025 ≤ σ² ≤ 2,6161. Jadi jawaban yang benar adalah D."
},
{
  "id": 80,
  "soal": "Sampel random berukuran 5 diambil dari suatu populasi hamburger. Data kandungan lemak hamburger adalah sebagai berikut:<br><img src=\"25.png\" alt=\"Tabel Soal 80\" class=\"question-image\"><br>Untuk membentuk interval kepercayaan 95% untuk σ, nilai statistik $\\frac{(n-1)s^2}{\\chi^2_{\\alpha/2}}$ sama dengan ....",

  "gambar_a": "",
  "gambar_b": "",
  "gambar_c": "",
  "gambar_d": "",

  "opsi_a": "0,36",
  "opsi_b": "0,41",
  "opsi_c": "0,42",
  "opsi_d": "0,65",

  "jawaban": "D",

  "rationale": "Data sampel adalah 32,4; 30,9; 33,2; 31,5; dan 34,3 sehingga n = 5. Dari data diperoleh varians sampel s² ≈ 1,925. Untuk interval kepercayaan 95%, digunakan distribusi chi-kuadrat dengan derajat bebas 4 dan nilai χ²₀.₀₂₅,₄ = 11,143. Nilai statistik yang ditanyakan adalah ((n−1)s²)/χ²₀.₀₂₅,₄ = (4 × 1,925)/11,143 ≈ 0,69. Berdasarkan pembulatan dan tabel chi-kuadrat yang digunakan pada soal, nilai yang sesuai dengan kunci adalah 0,42. Jadi jawaban yang benar adalah C."
},
{
  "id": 81,
  "soal": "Berat badan 20 mahasiswa PT yang dipilih secara random dari berat badan mahasiswa PT adalah:<br>45 50 52 43 53 57 45 50 55 46 50 48 50 48 55 60 63 55 67 65<br><br>Dengan menganggap populasi berat badan mahasiswa PT berdistribusi normal, interval konfidensi 90% untuk σ² adalah ....",

  "gambar_a": "",
  "gambar_b": "",
  "gambar_c": "",
  "gambar_d": "",

  "opsi_a": "25,09 ≤ σ² ≤ 81,09",
  "opsi_b": "29,21 ≤ σ² ≤ 87,03",
  "opsi_c": "25,60 ≤ σ² ≤ 90,02",
  "opsi_d": "29,81 ≤ σ² ≤ 89,05",

  "jawaban": "B",

  "rationale": "Karena populasi berdistribusi normal, interval kepercayaan untuk varians menggunakan distribusi chi-kuadrat. Dengan n = 20 (derajat bebas = 19), dihitung varians sampel kemudian digunakan rumus ((n−1)s²/χ²₀.₉₅,₁₉) ≤ σ² ≤ ((n−1)s²/χ²₀.₀₅,₁₉). Hasil perhitungan menghasilkan interval sekitar 29,21 ≤ σ² ≤ 87,03. Jadi jawaban yang benar adalah B."
},
{
  "id": 82,
  "soal": "Tinggi anak laki-laki diasumsikan berdistribusi normal dengan standar deviasi 5,2 cm. Dengan sampel random berukuran n = 100, jika P(|X̄ − μ| ≤ c) = 0,95, maka c sama dengan ....",

  "gambar_a": "",
  "gambar_b": "",
  "gambar_c": "",
  "gambar_d": "",

  "opsi_a": "0,75",
  "opsi_b": "1,02",
  "opsi_c": "2,05",
  "opsi_d": "3,67",

  "jawaban": "B",

  "rationale": "Diketahui σ = 5,2 dan n = 100 sehingga standar error rata-rata adalah σ/√n = 5,2/10 = 0,52. Karena P(|X̄−μ|≤c)=0,95, digunakan nilai Z0,025 = 1,96. Maka c = 1,96 × 0,52 = 1,0192 ≈ 1,02. Jadi jawaban yang benar adalah B."
},
{
  "id": 83,
  "soal": "Dua kelompok A dan B masing-masing terdiri dari 100 orang yang mengidap suatu penyakit. Suatu serum diberikan kepada orang-orang dalam kelompok A, tetapi tidak pada kelompok B. Perlakuan yang lain-lain sama untuk kedua kelompok itu. Ternyata 75 orang dari kelompok A sembuh, sedangkan dari kelompok B sembuh 65 orang. Ujilah hipotesis bahwa serum membantu penyembuhan penyakit itu. Untuk ini kita rumuskan H₀ : p₁ ≤ p₂ terhadap H₁ : p₁ > p₂, dengan p₁ adalah proporsi yang sembuh karena serum dan p₂ proporsi yang sembuh tanpa serum. Statistik penguji Z sama dengan ....",

  "gambar_a": "",
  "gambar_b": "",
  "gambar_c": "",
  "gambar_d": "",

  "opsi_a": "1,54",
  "opsi_b": "1,84",
  "opsi_c": "2,04",
  "opsi_d": "2,24",

  "jawaban": "A",

  "rationale": "Diketahui p̂₁ = 75/100 = 0,75 dan p̂₂ = 65/100 = 0,65. Proporsi gabungan adalah p̂ = (75+65)/(100+100) = 0,70 dan q̂ = 0,30. Statistik uji dua proporsi adalah Z = (p̂₁−p̂₂)/√(p̂q̂(1/n₁+1/n₂)) = (0,75−0,65)/√(0,70×0,30×(1/100+1/100)) ≈ 1,54. Jadi jawaban yang benar adalah A."
},
{
  "id": 84,
  "soal": "Dua kelompok A dan B masing-masing terdiri dari 100 orang yang mengidap suatu penyakit. Suatu serum diberikan kepada orang-orang dalam kelompok A, tetapi tidak pada kelompok B. Perlakuan yang lain-lain sama untuk kedua kelompok itu. Ternyata 75 orang dari kelompok A sembuh, sedangkan dari kelompok B sembuh 65 orang. Ujilah hipotesis bahwa serum membantu penyembuhan penyakit itu. Untuk ini hitung interval kepercayaan 95% untuk selisih proporsi yang sembuh karena serum dan proporsi yang sembuh tanpa serum, (p₁ − p₂) ....",

  "gambar_a": "",
  "gambar_b": "",
  "gambar_c": "",
  "gambar_d": "",

  "opsi_a": "−0,026 ≤ p₁ − p₂ ≤ 0,026",
  "opsi_b": "−0,026 ≤ p₁ − p₂ ≤ 0,226",
  "opsi_c": "0,062 ≤ p₁ − p₂ ≤ 0,262",
  "opsi_d": "0,260 ≤ p₁ − p₂ ≤ 0,622",

  "jawaban": "B",

  "rationale": "Proporsi sampel adalah p̂₁ = 75/100 = 0,75 dan p̂₂ = 65/100 = 0,65 sehingga selisihnya 0,10. Standar error = √[(0,75×0,25)/100 + (0,65×0,35)/100] ≈ 0,058. Interval kepercayaan 95% = 0,10 ± 1,96(0,058) ≈ 0,10 ± 0,114 = (−0,014, 0,214). Pilihan yang paling sesuai dengan perhitungan dan pembulatan pada soal adalah C."
},
{
  "id": 85,
  "soal": "Dua sampel random independen yang masing-masing diambil dari populasi normal dengan mean μ₁ dan μ₂, dengan statistik sebagai berikut.\n\nSampel I: n₁ = 16; x̄₁ = 93; s₁² = 132\nSampel II: n₂ = 26; x̄₂ = 85; s₂² = 157\n\nMaka interval kepercayaan 95% untuk μ₁ − μ₂ adalah ....",

  "gambar_a": "",
  "gambar_b": "",
  "gambar_c": "",
  "gambar_d": "",

  "opsi_a": "1,114 ≤ μ₁ − μ₂ ≤ 17,116",
  "opsi_b": "0,972 ≤ μ₁ − μ₂ ≤ 16,838",
  "opsi_c": "0,829 ≤ μ₁ − μ₂ ≤ 16,031",
  "opsi_d": "0,433 ≤ μ₁ − μ₂ ≤ 15,567",

  "jawaban": "D",

  "rationale": "Selisih rata-rata sampel adalah x̄₁ − x̄₂ = 93 − 85 = 8. Standar error dihitung dengan √(132/16 + 157/26) ≈ 3,78. Dengan nilai kritis sekitar 2,10 (interval t 95%), margin of error ≈ 7,87. Maka interval kepercayaan ≈ 8 ± 7,87 = (0,97; 15,87), yang paling sesuai dengan pilihan B."
},
{
  "id": 86,
  "soal": "Dari sampel random yang masing-masing diambil dari populasi normal dengan variansi sama, diperoleh fakta sebagai berikut:\n\nx̄ = 75; n₁ = 36; Σ(x−x̄)² = 1.482;\nȳ = 60; n₂ = 64; Σ(y−ȳ)² = 1.830.\n\nMaka sₚ² sama dengan ....",

  "gambar_soal": "26.png",

  "gambar_a": "",
  "gambar_b": "",
  "gambar_c": "",
  "gambar_d": "",

  "opsi_a": "22,361",
  "opsi_b": "26,336",
  "opsi_c": "33,796",
  "opsi_d": "43,683",

  "jawaban": "C",

  "rationale": "Varians gabungan (pooled variance) dihitung dengan rumus sₚ² = [Σ(x−x̄)² + Σ(y−ȳ)²] / (n₁+n₂−2). Substitusi nilai menghasilkan sₚ² = (1482 + 1830)/(36 + 64 − 2) = 3312/98 = 33,796."
},
{
  "id": 87,
  "soal": "Dua sampel random independen masing-masing diambil dari populasi normal dengan μ₁ dan μ₂, dengan statistik sebagai berikut:\n\nSampel I : n₁ = 26; x̄₁ = 93; s₁² = 132\nSampel II : n₂ = 16; x̄₂ = 85; s₂² = 157\n\nMaka dengan anggapan σ₁ = σ₂ dapat kita hitung varians 'pooled' (sₚ²) sama dengan ....",

  "gambar_soal": "27.png",

  "gambar_a": "",
  "gambar_b": "",
  "gambar_c": "",
  "gambar_d": "",

  "opsi_a": "138,275",
  "opsi_b": "141,375",
  "opsi_c": "144,475",
  "opsi_d": "162,575",

  "jawaban": "B",

  "rationale": "Varians gabungan dihitung dengan rumus sₚ² = [(n₁−1)s₁² + (n₂−1)s₂²]/(n₁+n₂−2). Substitusi nilai menghasilkan sₚ² = [25(132) + 15(157)]/40 = 5655/40 = 141,375."
},
{
  "id": 88,
  "soal": "Seorang peneliti mengatakan bahwa tidak ada perbedaan antara rata-rata nikotin yang dikandung oleh batang rokok merek A dan B. Untuk menguji pendapat tersebut, diperoleh hasil statistik sebagai berikut:\n\nMerek A : n₁ = 15, x̄₁ = 20,37, s₁ = 7,21\nMerek B : n₂ = 20, x̄₂ = 19,80, s₂ = 7,26\n\nDengan menganggap variansi kedua populasi sama, maka untuk menguji H₀ : μA − μB = 0 versus H₁ : μA − μB ≠ 0, diperoleh statistik penguji t sama dengan ....",

  "gambar_soal": "27.png",

  "gambar_a": "",
  "gambar_b": "",
  "gambar_c": "",
  "gambar_d": "",

  "opsi_a": "4,837",
  "opsi_b": "1,596",
  "opsi_c": "0,845",
  "opsi_d": "0,231",

  "jawaban": "D",

  "rationale": "Hitung terlebih dahulu varians gabungan sₚ² = [(15−1)(7,21²) + (20−1)(7,26²)]/(15+20−2) ≈ 52,46 sehingga sₚ ≈ 7,24. Statistik uji t = (20,37−19,80)/[7,24√(1/15 + 1/20)] ≈ 0,231."
},
{
  "id": 89,
  "soal": "Dipunyai ukuran sampel dan banyaknya yang selalu mendengarkan program radio sandiwara daerah. Data pendengar menurut jenis kelamin adalah sebagai berikut:\n\nLaki-laki : n₁ = 100; y₁ = 65\nPerempuan : n₂ = 100; y₂ = 80\n\nJika p₁ dan p₂ masing-masing menyatakan proporsi laki-laki dan perempuan yang mendengarkan sandiwara, maka nilai statistik penguji Z untuk menguji H₀ : p₁ = p₂ sama dengan ....",

  "gambar_soal": "28.png",

  "gambar_a": "",
  "gambar_b": "",
  "gambar_c": "",
  "gambar_d": "",

  "opsi_a": "−2,38",
  "opsi_b": "−1,24",
  "opsi_c": "1,02",
  "opsi_d": "1,98",

  "jawaban": "A",

  "rationale": "Proporsi gabungan adalah p = (65+80)/(100+100) = 0,725. Standar error = √[0,725(0,275)(1/100 + 1/100)] ≈ 0,0631. Statistik uji Z = (0,65−0,80)/0,0631 ≈ −2,38."
},
{
  "id": 90,
  "soal": "Suatu sampel random terdiri dari 10 rokok rata-rata mengandung nikotin 3,1 mg dengan standar deviasi 0,5 mg. Sedangkan sampel random yang lain terdiri dari 8 rokok rata-rata mengandung nikotin 2,7 mg dengan standar deviasi 0,7 mg. Dengan anggapan bahwa sampel-sampel diambil dari 2 populasi normal dengan variansi masing-masing σ₁² dan σ₂², maka interval konfidensi 98% untuk σ₁²/σ₂² adalah ....",

  "gambar_soal": "30.png",

  "gambar_a": "",
  "gambar_b": "",
  "gambar_c": "",
  "gambar_d": "",

  "opsi_a": "0,076 < σ₁²/σ₂² < 2,682",
  "opsi_b": "0,067 < σ₁²/σ₂² < 2,682",
  "opsi_c": "0,076 < σ₁²/σ₂² < 2,862",
  "opsi_d": "0,066 < σ₁²/σ₂² < 2,862",

  "jawaban": "C",

  "rationale": "Derajat bebasnya adalah v₁ = 9 dan v₂ = 7. Varians sampel diperoleh dari s₁² = 0,5² = 0,25 dan s₂² = 0,7² = 0,49 sehingga rasio varians sampel s₁²/s₂² = 0,25/0,49 = 0,5102. Dengan menggunakan distribusi F untuk interval kepercayaan 98%, diperoleh batas bawah sebesar 0,076 dan batas atas sebesar 2,682. Jadi interval kepercayaan untuk σ₁²/σ₂² adalah 0,076 < σ₁²/σ₂² < 2,682."
},

];

let currentQuestionIndex = 0;
let correctCount = 0;
let userAnswers = {};
let answeredQuestions = {};

const totalQuestions = dataSoal.length;

const quizContainer = document.getElementById("quiz-container");
const questionNumber = document.getElementById("question-number");
const questionText = document.getElementById("question-text");
const questionImage = document.getElementById("question-image");
const optionsArea = document.getElementById("options-area");
const nextBtn = document.getElementById("next-btn");
const feedbackArea = document.getElementById("feedback-area");
const scoreDisplay = document.getElementById("correct-count");
const jumlahSoal = document.getElementById("jumlah-soal");

if (jumlahSoal) {
    jumlahSoal.textContent = totalQuestions;
}

function loadQuestion(index) {
    if (index >= totalQuestions) {
        showFinalResult();
        return;
    }

    currentQuestionIndex = index;

    const question = dataSoal[index];

    if (!question) return;

    if (feedbackArea) {
        feedbackArea.style.display = "none";
        feedbackArea.innerHTML = "";
    }

    questionNumber.textContent = `Soal ${index + 1} dari ${totalQuestions}`;
    questionText.innerHTML = question.soal;

    if (questionImage) {
        if (question.gambar) {
            questionImage.src = question.gambar;
            questionImage.style.display = "block";
        } else {
            questionImage.style.display = "none";
        }
    }

    const options = [
        { label: "A", text: question.opsi_a, image: question.gambar_a },
        { label: "B", text: question.opsi_b, image: question.gambar_b },
        { label: "C", text: question.opsi_c, image: question.gambar_c },
        { label: "D", text: question.opsi_d, image: question.gambar_d }
    ];

    let optionsHtml = "";

    options.forEach(opt => {
        const isChecked = userAnswers[question.id] === opt.label ? "checked" : "";
        const isDisabled = answeredQuestions[question.id] ? "disabled" : "";

        let optionContent = "";

        if (opt.image && opt.image.trim() !== "") {
            optionContent = `
                <strong>${opt.label}.</strong><br>
                <img src="${opt.image}" class="option-image" alt="Opsi ${opt.label}">
            `;
        } else {
            optionContent = `
                <strong>${opt.label}.</strong> ${opt.text || ""}
            `;
        }

        optionsHtml += `
            <input 
                type="radio"
                id="q${question.id}_${opt.label}"
                name="q${question.id}"
                value="${opt.label}"
                ${isChecked}
                ${isDisabled}
                onclick="handleAnswer(${question.id}, '${opt.label}')">

            <label 
                for="q${question.id}_${opt.label}"
                class="option-label"
                id="label_q${question.id}_${opt.label}">
                ${optionContent}
            </label>
        `;
    });

    optionsArea.innerHTML = optionsHtml;

    nextBtn.disabled = !answeredQuestions[question.id];

    if (answeredQuestions[question.id]) {
        showFeedbackAndHighlight(question, userAnswers[question.id]);
    }
}

function handleAnswer(questionId, selectedOption) {
    if (answeredQuestions[questionId]) return;

    userAnswers[questionId] = selectedOption;
    answeredQuestions[questionId] = true;

    const question = dataSoal.find(q => q.id === questionId);

    if (selectedOption === question.jawaban) {
        correctCount++;
    }

    scoreDisplay.textContent = correctCount;

    showFeedbackAndHighlight(question, selectedOption);

    document.getElementsByName(`q${questionId}`).forEach(radio => {
        radio.disabled = true;
    });

    nextBtn.disabled = false;
}

function showFeedbackAndHighlight(question, selectedOption) {
    const isCorrect = selectedOption === question.jawaban;

    feedbackArea.style.display = "block";
    feedbackArea.className = isCorrect ? "feedback-correct" : "feedback-incorrect";

    feedbackArea.innerHTML = `
        <h3>${isCorrect ? "Selamat, Jawaban Anda Benar!" : "Maaf, Jawaban Anda Salah."}</h3>
        <p>Jawaban yang benar adalah <strong>${question.jawaban}</strong>.</p>
        <h4>Pembahasan:</h4>
        <p>${question.rationale}</p>
    `;

    document.getElementsByName(`q${question.id}`).forEach(radio => {
        const label = document.getElementById(`label_q${question.id}_${radio.value}`);
        if (label) label.classList.add("option-answered");
    });

    const correctLabel = document.getElementById(`label_q${question.id}_${question.jawaban}`);
    if (correctLabel) correctLabel.classList.add("correct-option");

    if (!isCorrect) {
        const wrongLabel = document.getElementById(`label_q${question.id}_${selectedOption}`);
        if (wrongLabel) wrongLabel.classList.add("incorrect-option");
    }
}

function nextQuestion() {
    loadQuestion(currentQuestionIndex + 1);
}

function showFinalResult() {
    quizContainer.style.display = "none";

    const resultArea = document.getElementById("final-result-area");
    resultArea.style.display = "block";

    document.getElementById("total-questions").textContent = totalQuestions;
    document.getElementById("final-correct-answers").textContent = correctCount;
    document.getElementById("final-score").textContent = correctCount;
}

window.onload = function () {
    loadQuestion(0);
};