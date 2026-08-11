export const ext_id = {
  experienceUI: {
    aboutRole: "Tentang Peran",
    mainActivities: "Aktivitas Utama",
    competencies: "Kompetensi",
    proofAndWorkflow: "Bukti & Alur Kerja Analis (BA & PM)",
    docsAndRealContribution: "Dokumentasi & Ringkasan Kontribusi Real",
    workflowAndRoleFocus: "Alur Kerja & Fokus Peran",
    authenticDocsAndLogs: "Bukti Otentik Dokumentasi & Log Instansi",
    detailButton: "Detail",
    openPortfolioButton: "Buka Portofolio",
  },
  beaCukaiProof: {
    metrics: ["Rotasi Bidang", "Sistem Dikembangkan", "Laporan MBKM", "Durasi Rotasi"],
    workflow: [
      { phase: "Elicitation Kebutuhan Gudang & Design SIMIRA", desc: "Wawancara pengelola gudang rumah tangga, merancang database MySQL, & membangun prototipe PHP Laravel.", roleFocus: "IT Business Analyst & System Analyst" },
      { phase: "Audit Data Kepegawaian & Cross-Check", desc: "Verifikasi silang integritas data >1.000 pegawai Kanwil DJBC Sulbagsel pada Subbagian Kepegawaian.", roleFocus: "Data Quality Analyst" },
      { phase: "Media Monitoring (NALIKA) & Public Relations", desc: "Pemantauan isu berita harian kepabeanan serta merancang materi publikasi di Subbag Humas.", roleFocus: "Media & Communications Analyst" },
      { phase: "Analisis Kepatuhan Internal & Pencacahan P2", desc: "Evaluasi alur pengaduan/banding serta pendataan fisik barang penindakan (rokok/miras ilegal).", roleFocus: "Compliance & Field Auditor" }
    ],
    proofs: [
      { title: "Pengembangan & Prototipe System SIMIRA", caption: "Merancang database MySQL dan membangun antarmuka web SIMIRA berbasis PHP Laravel untuk pencatatan stok gudang rumah tangga.", tag: "Laravel & MySQL" },
      { title: "Analisis Alur Sistem & Mapping Proses Bisnis", caption: "Pemetaan diagram alur proses bisnis (As-Is to To-Be) untuk perancangan fitur hak akses berbasis peran (RBAC).", tag: "System Analysis" },
      { title: "Validasi & Cross-Check Data Kepegawaian DJBC", caption: "Verifikasi silang integritas data ribuan pegawai di wilayah Sulawesi Bagian Selatan berbasis spreadsheet & database.", tag: "Data Quality" },
      { title: "Analisis Sistem Pengaduan & Banding (KI)", caption: "Mengkaji alur penanganan pengaduan publik serta tata kelola berkas keberatan dan banding kepabeanan.", tag: "Compliance Analysis" },
      { title: "Media Monitoring NALIKA & Design Humas", caption: "Pelaksanaan monitoring berita harian kepabeanan (NALIKA) serta perancangan materi publikasi digital instansi.", tag: "Media Monitoring" },
      { title: "Pencacahan Barang Hasil Penindakan (Bidang P2)", caption: "Pencacahan fisik dan pendataan Berita Acara barang hasil penindakan rokok & minuman mengandung etil alkohol (MMEA) ilegal.", tag: "Field Audit & P2" },
      { title: "Layanan Frontdesk & Stakeholder Relations", caption: "Pelayanan administrasi publik dan penerimaan tamu/pengguna jasa kepabeanan di area frontdesk Kanwil DJBC.", tag: "Public Service" },
      { title: "Validasi Logbook MBKM SIAKAD Nobel Indonesia", caption: "Rekap logbook harian aktivitas magang yang telah disetujui dan tervalidasi secara akademik di portal SIAKAD Nobel.", tag: "Academic Validation" }
    ]
  },
  bpjsProof: {
    metrics: ["Integritas Data", "Kolektabilitas Iuran", "Verifikasi OSS", "Sosialisasi BPU"],
    workflow: [
      { phase: "Validasi & Pembersihan Data Kepesertaan", desc: "Verifikasi kualitas IGI dan koreksi inkonsistensi data >5.000 peserta secara sistematis.", roleFocus: "Data Analyst" },
      { phase: "Otomatisasi Penagihan & Follow-Up", desc: "Menjalankan kampanye penagihan iuran via email & WA blasting bagi perusahaan menunggak.", roleFocus: "Account Representative" },
      { phase: "Sinkronisasi Portal OSS Kemeninves", desc: "Cross-check data pendaftaran entitas bisnis baru pada portal OSS untuk akuisisi.", roleFocus: "Compliance Support" },
      { phase: "Edukasi & Sosialisasi Program", desc: "Terjun langsung memberi pemahaman program BPU kepada pekerja sektor informal.", roleFocus: "Public Relations" }
    ],
    proofs: [
      { title: "Verifikasi Data Kualitas IGI (>5.000 Data)", caption: "Pengecekan anomali data peserta, nomor identitas (NIK), dan kelengkapan profil pada sistem BPJAMSOSTEK.", tag: "Data Validation" },
      { title: "Kampanye WA Blasting Penagihan Iuran", caption: "Otomatisasi pengiriman pesan penagihan & pengingat tunggakan ke perusahaan binaan.", tag: "Automation" },
      { title: "Cross-Check Portal OSS Terintegrasi", caption: "Verifikasi pendaftaran badan usaha baru yang terintegrasi dari sistem Kemeninves/BKPM.", tag: "System Verification" },
      { title: "Sosialisasi Jaminan Sosial Tenaga Kerja", caption: "Pendampingan dan edukasi langsung kepada komunitas pekerja sektor informal/BPU.", tag: "Public Service" },
      { title: "Rekapitulasi Akuisisi Kepesertaan", caption: "Pelaporan bulanan progres akuisisi dan retensi perusahaan binaan wilayah Makassar.", tag: "Reporting" },
      { title: "Pelayanan Terpadu BPJS Ketenagakerjaan", caption: "Mendukung pelayanan administratif dasar bagi peserta dan perwakilan perusahaan di kantor cabang.", tag: "Administration" }
    ]
  },
  portfolioList: [
    { title: "Sistem Informasi Terpadu Desa Cenrana", desc: "Platform digital end-to-end dengan 3 modul utama: transparansi anggaran, e-Surat, dan manajemen data. Memimpin siklus pengembangan dari analisis kebutuhan hingga peluncuran, mencatatkan tingkat keberhasilan UAT 93,8% dan skor kemudahan penggunaan (SUS) 75,6." },
    { title: "Prototipe SIMIRA (Kanwil Bea Cukai Sulbagsel)", desc: "Sistem Informasi Manajemen Rumah Tangga & Gudang berbasis web (PHP Laravel & MySQL) untuk Kanwil DJBC Sulbagsel. Merancang alur bisnis dari requirement gathering hingga fitur pencatatan stok real-time, manajemen barang masuk/keluar, dan autentikasi user." },
    { title: "Sistem Pendukung Keputusan (Metode TOPSIS)", desc: "Sistem analisis data berbasis web (makassarauto.my.id) untuk mengoptimalkan pemilihan kendaraan bekas berdasarkan 7 kriteria kompleks. Menerjemahkan kebutuhan riset menjadi logika algoritma yang fungsional dan dapat diakses publik." },
    { title: "Sistem Prediksi Kelulusan Mahasiswa", desc: "Model machine learning berbasis Python untuk memprediksi ketepatan waktu kelulusan mahasiswa — menganalisis data historis akademik multi-variabel dengan akurasi 93% pada data uji." },
    { title: "Landing Page & Web Profil", desc: "Halaman promosi dan personal branding yang dirancang dengan pendekatan visual elegan untuk menyampaikan informasi secara ringkas, jelas, dan memikat." },
    { title: "Desain Feed Instagram UKM Pencinta Pasar Modal", desc: "Kumpulan desain media sosial yang mendukung branding organisasi dan komunikasi publikasi digital untuk kepengurusan periode 2024-2025." },
    { title: "Desain Media Sosial POSKO KKN Desa Cenrana", desc: "Kumpulan desain konten media sosial yang mendukung publikasi kegiatan dan program kerja Posko KKN selama periode pengabdian di Desa Cenrana." },
    { title: "Kolaborasi Freelance & Project-Based", desc: "Berbagai bentuk kerja sama dengan individu dan kebutuhan proyek digital secara fleksibel." },
    { title: "Eksplorasi Solusi Digital Lainnya", desc: "Ruang untuk karya tambahan dan pengembangan baru yang akan terus bertambah." }
  ],
  projectsList: [
    { title: "Sistem Informasi Desa Cenrana", roleAndDate: "Project Lead | Nov 2025 – Apr 2026", desc: "Website desa yang dirancang untuk mendukung informasi publik, transparansi anggaran, layanan administrasi (e-Surat), dan kebutuhan digital masyarakat desa.", tags: ["Website Desa", "Sistem Informasi", "E-Surat"] },
    { title: "Sistem Layanan Aspirasi Digital", roleAndDate: "Koordinator & Developer | Jul 2025 – Sep 2025", desc: "Platform pelaporan warga untuk menyampaikan keluhan atau aspirasi terkait kondisi infrastruktur secara lebih cepat dan terdokumentasi.", tags: ["Layanan Aspirasi", "Pelaporan Warga", "Digital Service"] },
    { title: "Prototipe SIM Rumah Tangga", roleAndDate: "Kanwil Bea Cukai Sulbagsel | 2025", desc: "Prototipe sistem informasi yang dikembangkan untuk membantu kebutuhan administrasi internal kantor agar proses pengelolaan informasi lebih efisien.", tags: ["Sistem Administrasi", "Pengelolaan Data", "Prototipe"] },
    { title: "Desain Visual & Branding", roleAndDate: "Graphic Design & Digital Comm", desc: "Pembuatan konten media sosial, infografis, feed, Reels, dan materi publikasi untuk kebutuhan organisasi maupun instansi.", tags: ["Desain Feed & Reels", "Infografis", "Canva & Figma"] }
  ],
  blueprintNodes: [
    { title: "Business Analysis & PRD", summary: "Menerjemahkan kebutuhan stakeholder yang abu-abu menjadi dokumen spesifikasi teknis (PRD/BRD), standar operasional (SOP), dan skenario pengujian UAT." },
    { title: "Data Integrity & Validation", summary: "Eksekusi pembersihan data berskala massal (5.000+ entri), pencocokan integritas, dan pengarsipan digital ke sistem instansi." },
    { title: "SDLC & Project Coordination", summary: "Memimpin siklus hidup pengembangan perangkat lunak dari perencanaan hingga peluncuran live berbasis kesepakatan formal." },
    { title: "GenAI Working Agent Operations", summary: "Memanfaatkan AI sebagai agent kerja untuk mempercepat penyusunan draf awal dokumentasi dan diagram alur dengan validasi manual presisi." }
  ],
  cenranaExtended: {
    diagrams: [
      { title: "Cetak Biru Arsitektur Sistem Full-Stack" },
      { title: "Entity Relationship Diagram (ERD 20+ Tabel)" },
      { title: "Struktur Basis Data MySQL (20+ Tabel Data)" },
      { title: "Cloud Media Storage (Supabase Storage Buckets)" },
      { title: "Laporan Evaluasi Sistem (Skor UAT 93.8% & SUS)" },
      { title: "Infrastruktur Production Hosting (Hostinger VPS)" },
      { title: "Sequence Diagram — Validasi & Hashing NIK" },
      { title: "Flowchart Metode Pengembangan SDLC" }
    ],
    screenshots: [
      { title: "Beranda Utama (Homepage)", category: "1. Beranda", desc: "Portal utama informasi terpadu & pintu masuk seluruh layanan desa." },
      { title: "Portal Profil & Identitas Desa", category: "2. Profil Desa", desc: "Informasi demografi, wilayah, struktur organisasi, dan sejarah desa." },
      { title: "Pusat Informasi Publik", category: "3. Informasi", desc: "Portal transparansi berita desa, pengumuman resmi, dan agenda kegiatan." },
      { title: "Hub Layanan Digital Warga", category: "4. Layanan Warga", desc: "Portal pusat akses layanan mandiri bagi seluruh masyarakat desa." },
      { title: "Layanan Aspirasi Warga", category: "4. Layanan Warga", desc: "Formulir pengaduan publik dengan proteksi enkripsi NIK SHA-256." },
      { title: "Layanan e-Surat Digital", category: "4. Layanan Warga", desc: "Permohonan surat keterangan administrasi online otomatis." },
      { title: "Lapak Warga (Ekonomi UMKM)", category: "4. Layanan Warga", desc: "Etalase pemasaran digital UMKM desa terhubung WhatsApp pengrajin." },
      { title: "Dashboard Ringkasan Admin", category: "5. Admin & Panel", desc: "Ringkasan statistik data warga, aspirasi, bansos, dan aktivitas." },
      { title: "Panel Kontrol Admin (CMS)", category: "5. Admin & Panel", desc: "Pusat pengelolaan 18 modul operasional sistem secara mandiri." }
    ],
    fieldPhotos: [
      { title: "Penandatanganan Kerjasama Mitra", category: "1. Inisiasi & Kerja Sama", desc: "Proses penandatanganan dokumen kerja sama pengembangan sistem bersama mitra desa." },
      { title: "Kesepakatan Inisiasi Proyek", category: "1. Inisiasi & Kerja Sama", desc: "Diskusi alur inisiasi proyek & penetapan komitmen bersama mitra pemerintah desa." },
      { title: "Observasi & Analisis Kebutuhan", category: "2. Elicitation & Analisis", desc: "Wawancara langsung & observasi alur kerja manual bersama perangkat desa." },
      { title: "Implementasi Kode & Development", category: "3. Development", desc: "Pengembangan kode kustom 18 modul admin & portal publik terintegrasi PWA." },
      { title: "Deployment & Konfigurasi Hosting", category: "3. Deployment", desc: "Penyetelan domain desacenrana.id, konfigurasi server, & enkripsi SSL." },
      { title: "Pengujian UAT Langsung Warga", category: "4. Testing & UAT", desc: "Uji coba langsung skenario pengajuan pengaduan oleh sampel warga desa." },
      { title: "Evaluasi UAT & SUS Score", category: "4. Testing & UAT", desc: "Pengisian kuesioner kelayakan sistem & validasi fitur oleh aparatur desa." },
      { title: "Sosialisasi & Pelatihan Desa", category: "5. Pelatihan & Handover", desc: "Sosialisasi & pelatihan pengoperasian sistem mandiri untuk perangkat desa." },
      { title: "Bimbingan Teknis Admin Dashboard", category: "5. Pelatihan & Handover", desc: "Pelatihan mendalam pengelolaan modul CMS, data bansos, & e-Surat." },
      { title: "Surat Pernyataan Website Diterima", category: "6. Legalitas & Acceptance", desc: "Dokumen resmi Surat Pernyataan Penerimaan Sistem & Berita Acara (BAST)." },
      { title: "Serah Terima Resmi Platform Desa", category: "6. Serah Terima Resmi", desc: "Penyerahan simbolis sistem informasi desa & Buku Panduan ke Kepala Desa." }
    ]
  },
  topsisExtended: {
    diagrams: [
      { title: "Kerangka Dasar Metode Pemeringkatan" },
      { title: "Alur Perhitungan TOPSIS" },
      { title: "Visualisasi Nilai Bobot Kriteria" },
      { title: "Matriks Keputusan Normalisasi" }
    ],
    screenshots: [
      { title: "Portal Rekomendasi Motor", category: "1. Beranda", desc: "Antarmuka publik untuk calon pembeli memilih kriteria." },
      { title: "Panel Input Kriteria", category: "2. Input Preferensi", desc: "Form pembobotan dinamis sesuai kebutuhan user." },
      { title: "Hasil Analisis TOPSIS", category: "3. Output Keputusan", desc: "Tabel rekomendasi 5 motor terbaik dari kalkulasi sistem." },
      { title: "Dashboard Manajemen Data", category: "4. Admin Area", desc: "Modul pengelolaan 53 data motor riil dari 3 dealer." }
    ]
  }
};
