const siteData = {
  stats: [
    { label: "Hari", value: "5" },
    { label: "Destinasi", value: "7" },
    { label: "Anggota", value: "11" }
  ],

  about: {
    text: "Kuliah Kerja Lapangan (KKL) Informatika FTI Universitas PGRI Semarang membawa kami ke Bali selama lima hari. Perjalanan ini memadukan kunjungan industri, kuliah umum, dan wisata budaya, agar kami belajar dari dunia kerja nyata sekaligus mengenal kekayaan alam dan seni Nusantara.",
    chips: ["Bali", "Kunjungan Industri", "Kuliah Umum", "Wisata Budaya", "UPGRIS"]
  },

  highlights: [
    { icon: "🏭", title: "Kunjungan Industri", text: "Melihat alur kerja nyata di perusahaan, dari proses produksi, pengemasan, hingga pengolahan limbah." },
    { icon: "🎓", title: "Kuliah Umum", text: "Sesi bersama praktisi yang membuka perspektif soal teknologi kreatif, karier, dan etika kerja." },
    { icon: "🤝", title: "Kolaborasi Tim", text: "Dokumentasi, observasi, dan diskusi kelompok yang mempererat kebersamaan Kelompok 8 di lapangan." },
    { icon: "🌿", title: "Wisata Alam & Budaya", text: "Menjelajahi Danau Beratan, Pantai Pandawa, Devdan Show, dan Tari Kecak untuk mencintai alam dan budaya Indonesia." }
  ],

  timeline: [
    {day:"Day 1",date:"18 Agustus 2026",title:"Briefing & Keberangkatan",place:"Semarang → Bali",
      description:"Perjalanan KKL dimulai dengan persiapan administrasi, briefing teknis dari dosen pembimbing, dan pembagian peran kelompok. Semua anggota berkumpul dengan semangat tinggi sebelum berangkat menuju Bali.",
      fact:"Momen awal yang menyatukan seluruh anggota Kelompok 8.",
      tags:["Persiapan","Perjalanan"],
      images:[{src:"https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=900&q=80",alt:"Briefing tim sebelum keberangkatan"},{src:"https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=900&q=80",alt:"Diskusi persiapan dokumen KKL"}]},
    {day:"Day 1",date:"18 Agustus 2026",title:"Kunjungan Industri ke PT. Victoria Care Indonesia",place:"PT. Victoria Care Indonesia",
      description:"Bersama pemandu tur, kami menyusuri fasilitas produksi: mulai dari pembuatan dan pengemasan produk kesehatan, pengolahan air limbah, hingga berbelanja produk hasil Victoria Care Indonesia. Kunjungan ini memberi gambaran nyata bagaimana industri menjaga kualitas dan tanggung jawab lingkungan.",
      fact:"Belajar bahwa proses produksi yang baik harus disertai pengolahan limbah yang bertanggung jawab.",
      tags:["Industri","Produksi"],
      images:[{src:"https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80",alt:"Ruang kerja perusahaan"},{src:"https://images.unsplash.com/photo-1553877522-43269d4ea984?w=900&q=80",alt:"Presentasi tim"},{src:"https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&q=80",alt:"Sesi tanya jawab"}]},
    {day:"Day 2",date:"19 Agustus 2026",title:"Wisata Candi Kuning & Pura Ulun Danu Beratan",place:"Candi Kuning, Bedugul",
      description:"Pura Ulun Danu Beratan berdiri anggun di tepi Danau Beratan dengan meru bertingkat beratap hitam yang menjadi ikon Bali. Udara sejuk pegunungan, taman bunga warna-warni, dan suasana tenang membuat kami belajar menghargai harmoni alam dan budaya Bali.",
      fact:"Pura ini dikenal sebagai tempat pemujaan Dewi Danu, dewi air dan kesuburan.",
      tags:["Wisata","Budaya","Alam"],
      images:[{src:"assets/pura_ulun_danu_beratan.jpeg",alt:"Pura Ulun Danu Beratan dengan meru bertingkat di tepi danau"}]},
    {day:"Day 2",date:"19 Agustus 2026",title:"Eksplorasi Pabrik Kata-kata Joger & Danau Beratan",place:"Joger Luwus & Danau Beratan",
      description:"Kami mampir ke Joger, toko yang terkenal dengan kaos dan suvenir berkata-kata jenaka, lalu menikmati taman tepi Danau Beratan. Hamparan rumput hijau, bunga warna-warni, dan perbukitan di seberang danau jadi tempat istirahat yang menyegarkan.",
      fact:"Kreativitas kata-kata bisa jadi identitas merek yang kuat.",
      tags:["Wisata","Alam","Kreatif"],
      images:[{src:"assets/pemandangan_bedugul.jpeg",alt:"Taman tepi Danau Beratan dengan perbukitan hijau"}]},
    {day:"Day 2",date:"19 Agustus 2026",title:"Menyaksikan Pertunjukan Devdan Show",place:"Nusa Dua, Bali",
      description:"Malam harinya kami menyaksikan Devdan Show, pertunjukan seni yang memadukan tari, musik, dan tata panggung megah yang menampilkan kekayaan budaya Nusantara. Setelah pertunjukan, kami berfoto bersama para penari di atas panggung.",
      fact:"Satu panggung merangkum keragaman budaya dari berbagai daerah di Indonesia.",
      tags:["Tari","Devdan","Budaya"],
      images:[{src:"assets/tari_devdan_1.jpeg",alt:"Para penari Devdan Show di atas panggung"},{src:"assets/tari_devdan_2.jpeg",alt:"Foto bersama UPGRIS dan para artis Devdan Show"},{src:"assets/devdan_malam.jpeg",alt:"Papan neon di area pertunjukan pada malam hari"}]},
    {day:"Day 3",date:"20 Agustus 2026",title:"Kuliah Umum Balai Diklat Industri Denpasar",place:"Balai Diklat Industri Denpasar",
      description:"Kuliah umum membahas sistem kerja dan pemanfaatan teknologi di Balai Diklat Industri Denpasar. Materi utama berfokus pada penggunaan Adobe Lightroom untuk editing foto, mulai dari pengaturan warna hingga alur kerja pengolahan gambar.",
      fact:"Teknologi kreatif bisa menjadi bekal keterampilan bagi mahasiswa Informatika.",
      tags:["Kuliah Umum","Teknologi"],
      images:[{src:"https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=900&q=80",alt:"Suasana kuliah umum"},{src:"https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=900&q=80",alt:"Pembicara di podium"}]},
    {day:"Day 4",date:"21 Agustus 2026",title:"Pantai Pandawa & Pertunjukan Tari Kecak",place:"Pantai Pandawa, Badung",
      description:"Kami menikmati senja di Pantai Pandawa, dengan pasir lembut, perahu nelayan, dan tebing kapur di sekelilingnya. Sore harinya kami menonton Tari Kecak: puluhan penari bersuara serempak membentuk lingkaran di panggung dengan latar laut dan langit senja.",
      fact:"Kecak ditampilkan tanpa alat musik, iramanya berasal dari suara para penari.",
      tags:["Pantai","Kecak","Budaya"],
      images:[{src:"assets/tari_kecak.jpeg",alt:"Tari Kecak di panggung tepi pantai saat senja"},{src:"assets/pantai_pandawa.jpeg",alt:"Perahu nelayan di Pantai Pandawa"},{src:"assets/foto_bersama_pandawa.jpeg",alt:"Foto bersama peserta KKL di Pantai Pandawa"}]},
    {day:"Day 5",date:"22 Agustus 2026",title:"Refleksi, Dokumentasi & Pulang",place:"Perjalanan pulang",
      description:"Rangkaian KKL ditutup dengan sesi refleksi kelompok, pengumpulan dokumentasi, dan foto bersama. Banyak pelajaran yang dibawa pulang, baik teknis maupun non-teknis, ditambah kenangan kebersamaan yang berharga.",
      fact:"Pulang membawa ilmu, cerita, dan persahabatan.",
      tags:["Refleksi","Moments"],
      images:[{src:"https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=900&q=80",alt:"Foto kebersamaan tim"},{src:"https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=900&q=80",alt:"Sesi refleksi penutup"}]}
  ],

  galleryFilters: [
    { id: "all", label: "Semua" },
    { id: "alam", label: "Alam" },
    { id: "budaya", label: "Budaya" },
    { id: "kebersamaan", label: "Kebersamaan" }
  ],

  gallery: [
    {id:"g1",category:"alam",src:"assets/pura_ulun_danu_beratan.jpeg",caption:"Meru Pura Ulun Danu Beratan di tepi danau"},
    {id:"g2",category:"kebersamaan",src:"assets/foto_bersama_pandawa.jpeg",caption:"Kebersamaan peserta KKL di Pantai Pandawa"},
    {id:"g3",category:"budaya",src:"assets/tari_kecak.jpeg",caption:"Tari Kecak saat senja"},
    {id:"g4",category:"alam",src:"assets/pemandangan_bedugul.jpeg",caption:"Taman tepi Danau Beratan, Bedugul"},
    {id:"g5",category:"budaya",src:"assets/tari_devdan_1.jpeg",caption:"Penari Devdan Show di atas panggung"},
    {id:"g6",category:"kebersamaan",src:"assets/tari_devdan_2.jpeg",caption:"Foto bersama artis Devdan Show"},
    {id:"g7",category:"alam",src:"assets/pantai_pandawa.jpeg",caption:"Perahu nelayan di Pantai Pandawa"},
    {id:"g8",category:"budaya",src:"assets/devdan_malam.jpeg",caption:"Neon malam di area Devdan Show"}
  ],

  team: [
    {
      name: "Azzam Darius",
      nim: "24670089",
      role: "Koordinator & Dokumentasi",
      note: "Menjaga ritme kelompok tetap sinkron dari briefing hingga laporan akhir.",
      avatar: "AD",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com"
    },
    {
      name: "Muhammad Josi Pratama",
      nim: "24670056",
      role: "Notulen & Riset",
      note: "Catatan lapangan yang rapi jadi bahan utama jurnal harian kami.",
      avatar: "SP",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com"
    },
    {
      name: "Dionisius Kristian Rionaldo",
      nim: "24670124",
      role: "Fotografer",
      note: "Menangkap detail ruang, ekspresi, dan momen yang sulit ditulis kata.",
      avatar: "RN",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com"
    },
    {
      name: "Dhini Aulia",
      nim: "24670060",
      role: "Liaison & Presentasi",
      note: "Jembatan komunikasi dengan mentor dan pembawa materi presentasi kelompok.",
      avatar: "ML",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com"
    },
    {
      name: "Dimas Subekti",
      nim: "24670058",
      role: "Teknis & Observasi",
      note: "Fokus pada alur sistem, arsitektur, dan pertanyaan teknis di setiap kunjungan.",
      avatar: "DP",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com"
    },
    {
      name: "Aufa Sascha Muhammad",
      nim: "24670050",
      role: "Editor Jurnal",
      note: "Merapikan narasi harian agar dokumentasi mudah dibaca ulang nanti.",
      avatar: "NA",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com"
    },
    {
      name: "Syalna Kurnia Putri",
      nim: "24670083",
      role: "Teknis & Observasi",
      note: "Fokus pada alur sistem, arsitektur, dan pertanyaan teknis di setiap kunjungan.",
      avatar: "DP",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com"
    },
    {
      name: "Putra Inang Setiawan",
      nim: "24670033",
      role: "Teknis & Observasi",
      note: "Fokus pada alur sistem, arsitektur, dan pertanyaan teknis di setiap kunjungan.",
      avatar: "DP",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com"
    },
    {
      name: "Ahmad Firdan Faiz",
      nim: "24670030",
      role: "Teknis & Observasi",
      note: "Fokus pada alur sistem, arsitektur, dan pertanyaan teknis di setiap kunjungan.",
      avatar: "DP",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com"
    },
    {
      name: "Putra Ramadani",
      nim: "24670088",
      role: "Teknis & Observasi",
      note: "Fokus pada alur sistem, arsitektur, dan pertanyaan teknis di setiap kunjungan.",
      avatar: "DP",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com"
    },
    {
      name: "Shandy Mahendra Ananta",
      nim: "246700135",
      role: "Teknis & Observasi",
      note: "Fokus pada alur sistem, arsitektur, dan pertanyaan teknis di setiap kunjungan.",
      avatar: "DP",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com"
    },
  ]
};
