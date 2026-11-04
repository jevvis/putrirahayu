'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

export type Language = 'id' | 'en'

interface LanguageContextType {
  lang: Language
  setLang: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'id',
  setLang: () => {},
  t: (key) => key,
})

export function useLanguage() {
  return useContext(LanguageContext)
}

// ─── KAMUS DWIBAHASA: Putri Rahayu ───
// Sumber isi: CV Putri Rahayu.pdf, sertifikat, dan foto klien. Terjemahan EN ditulis oleh pembuat situs.
const translations: Record<Language, Record<string, string>> = {
  id: {
    // ── Navbar
    'nav.about': "TENTANG SAYA",
    'nav.education': "PENDIDIKAN",
    'nav.work': "PENGALAMAN",
    'nav.projects': "KARYA",
    'nav.org': "ORGANISASI",
    'nav.awards': "SERTIFIKASI",
    'nav.skills': "KEAHLIAN",
    'nav.contact': "HUBUNGI SAYA",
    'ui.changePhoto': "Ganti foto",
    'ui.viewPhoto': "Lihat foto",
    'ui.photo': "foto",

    // ── Hero
    'hero.scroll': "GULIR KE BAWAH",
    'hero.hey': "Hai, saya",
    'hero.tagline': "Lulusan S1 Psikologi Islam UIN Antasari yang memahami dasar alat tes psikologi dan teknik wawancara, dengan minat pada seleksi, rekrutmen, asesmen, dan administrasi SDM.",
    'hero.based1': "LULUSAN PSIKOLOGI ISLAM",
    'hero.based2': "UIN ANTASARI BANJARMASIN",
    'hero.role1': "Staf SDM Bersertifikat",
    'hero.role2': "BNSP · 2024",
    'hero.badge.major': "Psikologi Islam",
    'hero.badge.medal': "IPK S1 3,75",
    'hero.badge.event': "Peminatan Psikologi Industri & Organisasi",

    // ── About Section
    'about.label': "TENTANG SAYA",
    'about.title': "Teliti. Komunikatif. Bertanggung Jawab.",
    'about.ipk': "IPK S1",
    'about.honors': "SKOR TOEFL",
    'about.year': "LULUS S1",
    'about.v1': "3,75",
    'about.v2': "403",
    'about.v3': "2026",
    'about.bio1': "Lulusan S1 Psikologi Islam UIN Antasari dengan IPK 3,75. Memahami dasar-dasar alat tes psikologi dan teknik wawancara, serta berpengalaman dalam pelaksanaan tes psikologi. Terbiasa mengelola dokumen, menyusun laporan, dan menjaga kerahasiaan data melalui pengalaman organisasi, magang di instansi pemerintah, dan kegiatan lapangan. Teliti, komunikatif, bertanggung jawab, cepat beradaptasi, serta dapat bekerja secara mandiri maupun dalam tim. Berminat mengembangkan karier di bidang psikologi dan memiliki ketertarikan pada bidang sumber daya manusia, khususnya seleksi, rekrutmen, asesmen, dan administrasi.",
    'about.current.label': "BIDANG FOKUS",
    'about.current.1.title': "Seleksi & Asesmen",
    'about.current.1.sub': "Wawancara psikologi, tes psikologi, dan rekrutmen",
    'about.current.2.title': "Administrasi SDM",
    'about.current.2.sub': "Pendataan, pengarsipan, dan penyusunan laporan",
    'about.current.3.title': "Pelayanan & Pembinaan",
    'about.current.3.sub': "Magang di instansi pemerintah dan KKN di lapas",

    // ── Trait Deck
    'trait.card.label': "KARAKTER KERJA",
    'trait.change': "Ganti",
    'trait.hint': "Klik untuk melihat karakter kerja lainnya",
    'trait.1.title': "Teliti",
    'trait.1.sub': "Detail-Oriented",
    'trait.1.tag': "Ketelitian",
    'trait.1.desc': "Memverifikasi berkas 6 pasangan calon sesuai persyaratan dan mengelola arsip dokumen secara sistematis.",
    'trait.2.title': "Komunikatif",
    'trait.2.sub': "Interview Skills",
    'trait.2.tag': "Wawancara",
    'trait.2.desc': "Mewawancarai sekitar 50 warga binaan dan 10 calon anggota HMJ untuk menggali latar belakang dan kesesuaian.",
    'trait.3.title': "Bertanggung Jawab",
    'trait.3.sub': "Accountability",
    'trait.3.tag': "Kerahasiaan Data",
    'trait.3.desc': "Menjaga kerahasiaan data dan menyusun laporan pertanggungjawaban untuk setiap kegiatan yang dijalankan.",
    'trait.4.title': "Adaptif",
    'trait.4.sub': "Fast Learner",
    'trait.4.tag': "Mandiri & Tim",
    'trait.4.desc': "Cepat beradaptasi di lapas, instansi pemerintah, dan organisasi mahasiswa, baik secara mandiri maupun dalam tim.",

    // ── Quote
    'about.quote': "“Memahami manusia lewat wawancara, melayani lewat administrasi yang rapi dan terjaga kerahasiaannya.”",

    // ── Metrics
    'metric.1': "IPK S1",
    'metric.1.sub': "Sarjana Psikologi Islam, UIN Antasari (2022 — 2026)",
    'metric.2': "PENGALAMAN KERJA",
    'metric.2.sub': "KKN di lapas dan magang di BKD Diklat Banjarmasin",
    'metric.3': "ORGANISASI",
    'metric.3.sub': "Sekretaris Umum HMJ dan Sekretaris KPM",
    'metric.4': "SERTIFIKAT & PELATIHAN",
    'metric.4.sub': "BNSP, pelatihan SDM, TOEFL, KKN, dan magang",

    // ── Education Section
    'education.label': "RIWAYAT AKADEMIK",
    'education.title': "Pendidikan",
    'education.degreeLabel': "Jenjang",
    'education.highlights.label': "Capaian & Kompetensi Utama",
    'education.1.institution': "Universitas Islam Negeri Antasari Banjarmasin",
    'education.1.program': "Psikologi Islam",
    'education.1.degree': "Sarjana Psikologi Islam (S1)",
    'education.1.period': "Sep 2022 — Jul 2026",
    'education.1.gpaLabel': "IPK",
    'education.1.gpa': "3,75",
    'education.1.status': "Lulus",
    'education.1.desc': "Menempuh pendidikan sarjana Psikologi Islam dengan peminatan Psikologi Industri dan Organisasi di UIN Antasari Banjarmasin, sambil aktif di organisasi mahasiswa, magang, dan kegiatan lapangan.",
    'education.1.tag': "Pendidikan Sarjana",
    'education.1.caption': "S1 Psikologi Islam, UIN Antasari Banjarmasin",
    'education.1.h1': "IPK 3,75 dari 4,00 dengan peminatan Psikologi Industri dan Organisasi",
    'education.1.h2': "Mata kuliah relevan: Wawancara Psikologi, Sistem Seleksi dan Rekrutmen, Pengembangan Sumber Daya Manusia, Tes Proyektif, serta Tes Intelegensi, Minat dan Bakat",
    'education.1.h3': "Tugas akhir: Pengaruh Grit dan Kepuasan Kerja terhadap Tingkat Job Hopping pada Generasi Z di Kota Banjarbaru",
    'education.1.h4': "",
    'education.1.uni': "UIN Antasari Banjarmasin",
    'education.1.footer': "S1 PSIKOLOGI ISLAM · UIN ANTASARI",

    // ── Work Section
    'work.label': "PENGALAMAN",
    'work.title': "Pengalaman",
    'work.subtitle': "Pengalaman lapangan di lembaga pemasyarakatan dan instansi pemerintah: wawancara, administrasi, dan penyusunan laporan.",
    'work.cta': "Lihat Semua Pengalaman",
    'work.1.role': "Mahasiswa KKN Tematik",
    'work.1.inst': "LAPAS KELAS IIB AMUNTAI",
    'work.1.loc': "Amuntai, Kalimantan Selatan",
    'work.1.period': "Sep 2025 — Okt 2025",
    'work.1.sub': "KKN Tematik UIN Antasari · Nilai 92 (A)",
    'work.1.desc': "Mewawancarai sekitar 50 warga binaan untuk menggali latar belakang dan kondisi psikologis sebagai identifikasi awal pemeriksaan kesehatan mental. Membina warga binaan melalui pelatihan keterampilan kerajinan tangan, pengajaran mengaji, dan pembelajaran ilmu agama. Memperbarui pencatatan data warga binaan yang masuk dan keluar, termasuk pemasangan foto pada berkas agar pencarian data lebih cepat dan akurat, serta membantu pemeriksaan identitas dan barang bawaan saat kunjungan keluarga sesuai prosedur. Menyusun laporan kegiatan KKN secara sistematis.",
    'work.1.tags': "Wawancara|Pembinaan|Administrasi Data|Laporan KKN",
    'work.2.role': "Peserta Magang (Praktik Kerja Lapangan)",
    'work.2.inst': "BKD DIKLAT KOTA BANJARMASIN — BIDANG PENGEMBANGAN, KOMPETENSI ASN & SDM",
    'work.2.loc': "Banjarmasin, Kalimantan Selatan",
    'work.2.period': "Apr 2025 — Jun 2025",
    'work.2.sub': "Hasil Amat Baik · Orientasi PPPK",
    'work.2.desc': "Mendukung pelaksanaan program pelatihan dan pengembangan pegawai di lingkungan instansi pemerintah. Menyusun laporan evaluasi kegiatan orientasi PPPK berdasarkan hasil pretest dan posttest untuk mengukur peningkatan pemahaman peserta. Membantu administrasi peserta orientasi PPPK, mulai dari pendataan hingga pengelolaan berkas kegiatan, dan mengamati pelaksanaan wawancara mutasi pegawai untuk memahami alur mutasi ASN.",
    'work.2.tags': "Pengembangan SDM|Laporan Evaluasi|Administrasi PPPK|Observasi Wawancara Mutasi",

    // ── Karya & Proyek
    'projects.label': "KARYA & DOKUMEN",
    'projects.title': "Karya & Dokumen",
    'projects.sub': "Tugas akhir, laporan, dan dokumen organisasi yang disusun selama kuliah, magang, dan KKN.",
    'projects.open': "Lihat Gambar",
    'proj.1.cat': "TUGAS AKHIR · S1 PSIKOLOGI ISLAM",
    'proj.1.title': "Pengaruh Grit dan Kepuasan Kerja terhadap Tingkat Job Hopping pada Generasi Z di Kota Banjarbaru",
    'proj.1.desc': "Tugas akhir sarjana pada peminatan Psikologi Industri dan Organisasi.",
    'proj.2.cat': "LAPORAN EVALUASI · APR 2025 — JUN 2025",
    'proj.2.title': "Laporan Evaluasi Orientasi PPPK",
    'proj.2.desc': "Menyusun laporan evaluasi berdasarkan hasil pretest dan posttest untuk mengukur peningkatan pemahaman peserta orientasi PPPK.",
    'proj.3.cat': "LAPORAN KEGIATAN · SEP 2025 — OKT 2025",
    'proj.3.title': "Laporan Kegiatan KKN Lapas Kelas IIB Amuntai",
    'proj.3.desc': "Menyusun laporan kegiatan KKN secara sistematis sebagai bentuk pertanggungjawaban program.",
    'proj.4.cat': "DOKUMEN ORGANISASI · JAN 2024 — APR 2024",
    'proj.4.title': "Tata Tertib Pemilihan Mahasiswa",
    'proj.4.desc': "Menyusun tata tertib pemilihan ketua dan wakil ketua sebagai pedoman yang adil dan transparan, beserta berita acara setiap tahapan.",

    // ── Organisasi
    'trainings.label': "PENGALAMAN ORGANISASI",
    'trainings.title': "Pengalaman Organisasi",
    'trainings.campus': "UIN ANTASARI BANJARMASIN",
    'org.1.role': "Sekretaris Umum",
    'org.1.inst': "Himpunan Mahasiswa Jurusan (HMJ) Psikologi Islam",
    'org.1.period': "Apr 2024 — Mar 2025",
    'org.1.loc': "UIN Antasari Banjarmasin",
    'org.1.desc': "Mewawancarai 10 calon anggota HMJ sebagai bagian dari proses seleksi dan rekrutmen pengurus. Mengelola administrasi organisasi, meliputi surat-menyurat, proposal kegiatan, dan laporan pertanggungjawaban. Memantau pelaksanaan program kerja setiap divisi agar berjalan sesuai rencana, dan mengelola arsip dokumen organisasi secara sistematis.",
    'org.1.tags': "Sekretaris Umum|Rekrutmen Pengurus|Administrasi|Pengarsipan",
    'org.2.role': "Sekretaris",
    'org.2.inst': "Komisi Pemilihan Mahasiswa (KPM) Fakultas Ushuluddin dan Humaniora",
    'org.2.period': "Jan 2024 — Apr 2024",
    'org.2.loc': "UIN Antasari Banjarmasin",
    'org.2.desc': "Mengelola administrasi pendaftaran calon ketua dan wakil ketua, dari penerimaan hingga pengarsipan berkas. Memverifikasi berkas 6 pasangan calon sesuai persyaratan agar akurat dan sesuai prosedur, membuat berita acara setiap tahapan kegiatan, menyusun tata tertib pemilihan, dan membuat surat-menyurat resmi untuk koordinasi antarpihak.",
    'org.2.tags': "Sekretaris|Verifikasi Berkas|Berita Acara|Tata Tertib",

    // ── Awards Section
    'awards.label': "SERTIFIKASI",
    'awards.title': "Sertifikasi, Pelatihan & Dokumen",
    'awards.sub': "Sertifikat kompetensi SDM, pelatihan, kemampuan bahasa Inggris, serta sertifikat KKN dan magang.",
    'awards.openDoc': "Buka Sertifikat",
    'awards.issuer': "Penerbit",
    'awards.viewOriginal': "Lihat Dokumen Asli →",
    'award.1.title': "Sertifikat Kompetensi: Staf Sumber Daya Manusia",
    'award.1.issuer': "BNSP, melalui LSP Manajemen SDM Transformasi Indonesia",
    'award.1.cat': "SERTIFIKASI PROFESI",
    'award.1.year': "2024",
    'award.1.desc': "Dinyatakan kompeten pada bidang Manajemen Sumber Daya Manusia dengan kualifikasi Staf SDM (4 unit kompetensi), berlaku 3 tahun sejak 12 September 2024.",
    'award.2.title': "Pelatihan Staf SDM berbasis SKKNI 149/2020",
    'award.2.issuer': "Duta Aksara Wedar, Banjarmasin",
    'award.2.cat': "PELATIHAN",
    'award.2.year': "2024",
    'award.2.desc': "Pelatihan pada 20 Oktober 2024 dengan 4 unit kompetensi: Menyusun Uraian Jabatan, Administrasi Jaminan Sosial, Administrasi Pengupahan, dan Administrasi Penerapan Kebijakan MSDM.",
    'award.3.title': "TOEFL Prediction Score 403",
    'award.3.issuer': "Unit Pengembangan Bahasa (UPB) UIN Antasari",
    'award.3.cat': "BAHASA INGGRIS",
    'award.3.year': "2025",
    'award.3.desc': "Listening 41, Structure and Written Expression 41, Reading 39. Tes pada 17 Desember 2025, berlaku hingga 19 Desember 2027.",
    'award.4.title': "Mock Up Interview: Success Finding The Perfect Fit Job in an Interview",
    'award.4.issuer': "UPT Pengembangan Kewirausahaan dan Karier UIN Antasari",
    'award.4.cat': "PELATIHAN",
    'award.4.year': "2024",
    'award.4.desc': "Peserta kegiatan Mock Up Interview yang diadakan di Banjarmasin pada 25 April 2024.",
    'award.5.title': "Sertifikat KKN Tematik UIN Antasari Angkatan XIII Tahap I",
    'award.5.issuer': "LPK-PPTA Lapas Kelas IIB Amuntai",
    'award.5.cat': "KKN",
    'award.5.year': "2025",
    'award.5.desc': "KKN tematik pada 11 September — 11 Oktober 2025 dengan nilai 92 (A, Sangat Baik).",
    'award.6.title': "Sertifikat Praktik Kerja Lapangan (Magang)",
    'award.6.issuer': "Badan Kepegawaian Daerah, Pendidikan dan Pelatihan Kota Banjarmasin",
    'award.6.cat': "MAGANG",
    'award.6.year': "2025",
    'award.6.desc': "Praktik kerja lapangan pada 14 April — 14 Juni 2025 dengan hasil Amat Baik (nilai 84 dari 100).",

    // ── Skills Section
    'skills.label': "KOMPETENSI",
    'skills.title': "Kemampuan Utama",
    'skills.desc': "Menggabungkan pemahaman dasar tes psikologi dan wawancara dengan administrasi yang teliti dan penjagaan kerahasiaan data.",
    'skills.card1.tag': "PSIKOLOGI & SDM",
    'skills.card1.desc': "Memahami dasar alat tes psikologi dan teknik wawancara, serta berpengalaman dalam pelaksanaan tes, seleksi dan rekrutmen, asesmen, dan administrasi SDM.",
    'skills.card2.tag': "ADMINISTRASI & KERJA SAMA",
    'skills.card2.desc': "Mengelola dokumen, menyusun laporan, dan menjaga kerahasiaan data, dengan kerja mandiri maupun dalam tim.",
    'skills.card1.tags': "Wawancara Psikologi|Pelaksanaan Tes Psikologi|Seleksi & Rekrutmen|Asesmen|Administrasi SDM|Pengembangan SDM|IBM SPSS Statistics",
    'skills.card2.tags': "Administrasi|Surat-Menyurat|Pengarsipan|Penyusunan Laporan|Kerahasiaan Data|Manajemen Waktu|Komunikasi|Kerja Sama Tim|Teliti dan Detail|Integritas|Microsoft Word|Microsoft Excel|Microsoft PowerPoint|Google Spreadsheet",

    // ── Personal Skills Section
    'personal.label': "KEMAMPUAN PERSONAL & PERANGKAT",
    'personal.title': "Soft Skills & Perangkat Kerja",
    'personal.sub': "Kemampuan personal yang mendukung pekerjaan administrasi dan SDM, serta perangkat lunak dan bahasa.",
    'personal.soft.label': "KEMAMPUAN PERSONAL",
    'personal.soft.title': "Soft Skills",
    'personal.hard.label': "PERANGKAT & BAHASA",
    'personal.hard.title': "Perangkat Lunak & Bahasa",
    'personal.orientation': "Pendekatan Kerja:",
    'personal.quality': "Teliti, Komunikatif & Bertanggung Jawab",
    'personal.app': "Bahasa:",
    'personal.ready': "Indonesia · Inggris (TOEFL 403)",
    'personal.soft.1.t': "Manajemen Waktu",
    'personal.soft.1.d': "Membagi waktu antara kuliah, organisasi, magang, dan kegiatan lapangan.",
    'personal.soft.2.t': "Komunikasi",
    'personal.soft.2.d': "Berkomunikasi dalam wawancara, koordinasi antarpihak, dan surat-menyurat resmi.",
    'personal.soft.3.t': "Kerja Sama Tim",
    'personal.soft.3.d': "Bekerja sama dalam tim organisasi, KKN, dan magang.",
    'personal.soft.4.t': "Teliti dan Detail",
    'personal.soft.4.d': "Memverifikasi berkas dan memperbarui data agar akurat.",
    'personal.soft.5.t': "Integritas",
    'personal.soft.5.d': "Menjaga transparansi dokumen dan prosedur yang berlaku.",
    'personal.soft.6.t': "Bertanggung Jawab",
    'personal.soft.6.d': "Menyusun laporan pertanggungjawaban untuk setiap kegiatan.",
    'personal.soft.7.t': "Cepat Beradaptasi",
    'personal.soft.7.d': "Menyesuaikan diri di lapas, instansi pemerintah, dan organisasi mahasiswa.",
    'personal.soft.8.t': "Kerahasiaan Data",
    'personal.soft.8.d': "Menjaga kerahasiaan data warga binaan, pegawai, dan organisasi.",
    'personal.hard.1.t': "Microsoft Office",
    'personal.hard.1.d': "Microsoft Word, PowerPoint, dan Excel.",
    'personal.hard.2.t': "Google Spreadsheet",
    'personal.hard.2.d': "Pengolahan dan pencatatan data berbasis spreadsheet.",
    'personal.hard.3.t': "IBM SPSS Statistics",
    'personal.hard.3.d': "Pengolahan data statistik untuk penelitian.",
    'personal.hard.4.t': "Dasar Alat Tes & Wawancara",
    'personal.hard.4.d': "Memahami dasar alat tes psikologi dan teknik wawancara.",
    'personal.lang.1.t': "Bahasa Inggris",
    'personal.lang.1.l': "TOEFL 403",

    // ── Contact Section
    'contact.label': "KONTAK",
    'contact.title': "Hubungi Saya",
    'contact.tagline': "Lulusan Psikologi Islam yang siap berkontribusi di bidang psikologi dan sumber daya manusia.",
    'contact.subtitle': "Terbuka untuk peluang di bidang psikologi, seleksi dan rekrutmen, asesmen, serta administrasi SDM. Mari terhubung melalui email atau WhatsApp.",
    'contact.location': "LOKASI",
    'contact.phone': "TELEPON / WHATSAPP",
  },

  en: {
    // ── Navbar
    'nav.about': "ABOUT ME",
    'nav.education': "EDUCATION",
    'nav.work': "EXPERIENCE",
    'nav.projects': "WORKS",
    'nav.org': "ORGANIZATIONS",
    'nav.awards': "CERTIFICATIONS",
    'nav.skills': "SKILLS",
    'nav.contact': "CONTACT ME",
    'ui.changePhoto': "Change photo",
    'ui.viewPhoto': "View photo",
    'ui.photo': "photo",

    // ── Hero
    'hero.scroll': "SCROLL DOWN",
    'hero.hey': "Hi, I am",
    'hero.tagline': "A graduate of Islamic Psychology (bachelor’s) at UIN Antasari who understands the basics of psychological tests and interview techniques, with an interest in selection, recruitment, assessment, and HR administration.",
    'hero.based1': "ISLAMIC PSYCHOLOGY GRADUATE",
    'hero.based2': "UIN ANTASARI BANJARMASIN",
    'hero.role1': "Certified HR Staff",
    'hero.role2': "BNSP · 2024",
    'hero.badge.major': "Islamic Psychology",
    'hero.badge.medal': "Bachelor GPA 3.75",
    'hero.badge.event': "Industrial & Organizational Psychology",

    // ── About Section
    'about.label': "ABOUT ME",
    'about.title': "Meticulous. Communicative. Responsible.",
    'about.ipk': "BACHELOR GPA",
    'about.honors': "TOEFL SCORE",
    'about.year': "BACHELOR GRADUATED",
    'about.v1': "3.75",
    'about.v2': "403",
    'about.v3': "2026",
    'about.bio1': "A graduate of Islamic Psychology (bachelor’s) at UIN Antasari with a GPA of 3.75. Understands the basics of psychological tests and interview techniques, and has experience administering psychological tests. Used to managing documents, writing reports, and keeping data confidential through organizational experience, an internship at a government agency, and fieldwork. Meticulous, communicative, responsible, quick to adapt, and able to work both independently and in a team. Wants to build a career in psychology and is interested in human resources, especially selection, recruitment, assessment, and administration.",
    'about.current.label': "FOCUS AREAS",
    'about.current.1.title': "Selection & Assessment",
    'about.current.1.sub': "Psychological interviews, psychological tests, and recruitment",
    'about.current.2.title': "HR Administration",
    'about.current.2.sub': "Data entry, archiving, and report writing",
    'about.current.3.title': "Service & Guidance",
    'about.current.3.sub': "Internship at a government agency and community service at a prison",

    // ── Trait Deck
    'trait.card.label': "WORK CHARACTER",
    'trait.change': "Next",
    'trait.hint': "Click to see more work traits",
    'trait.1.title': "Meticulous",
    'trait.1.sub': "Detail-Oriented",
    'trait.1.tag': "Accuracy",
    'trait.1.desc': "Verified the files of 6 candidate pairs against the requirements and managed document archives systematically.",
    'trait.2.title': "Communicative",
    'trait.2.sub': "Interview Skills",
    'trait.2.tag': "Interviewing",
    'trait.2.desc': "Interviewed about 50 inmates (warga binaan) and 10 prospective student-association members to explore their backgrounds and fit.",
    'trait.3.title': "Responsible",
    'trait.3.sub': "Accountability",
    'trait.3.tag': "Data Confidentiality",
    'trait.3.desc': "Keeps data confidential and writes accountability reports for every activity carried out.",
    'trait.4.title': "Adaptable",
    'trait.4.sub': "Fast Learner",
    'trait.4.tag': "Independent & Team",
    'trait.4.desc': "Adapts quickly in a prison, a government agency, and student organizations, both independently and in a team.",

    // ── Quote
    'about.quote': "“Understanding people through interviews, and serving through neat administration that keeps data confidential.”",

    // ── Metrics
    'metric.1': "BACHELOR GPA",
    'metric.1.sub': "Bachelor of Islamic Psychology, UIN Antasari (2022 — 2026)",
    'metric.2': "WORK EXPERIENCES",
    'metric.2.sub': "Community service at a prison and an internship at BKD Diklat Banjarmasin",
    'metric.3': "ORGANIZATIONS",
    'metric.3.sub': "General Secretary of the student association and Secretary of the election commission",
    'metric.4': "CERTIFICATES & TRAINING",
    'metric.4.sub': "BNSP, HR training, TOEFL, community service, and internship",

    // ── Education Section
    'education.label': "ACADEMIC BACKGROUND",
    'education.title': "Education",
    'education.degreeLabel': "Level",
    'education.highlights.label': "Key Achievements & Competencies",
    'education.1.institution': "Universitas Islam Negeri Antasari Banjarmasin",
    'education.1.program': "Islamic Psychology",
    'education.1.degree': "Bachelor of Islamic Psychology (S1)",
    'education.1.period': "Sep 2022 — Jul 2026",
    'education.1.gpaLabel': "GPA",
    'education.1.gpa': "3.75",
    'education.1.status': "Graduated",
    'education.1.desc': "Completed the Islamic Psychology bachelor’s program with a concentration in Industrial and Organizational Psychology at UIN Antasari Banjarmasin, while active in student organizations, an internship, and fieldwork.",
    'education.1.tag': "Undergraduate Education",
    'education.1.caption': "Bachelor of Islamic Psychology, UIN Antasari Banjarmasin",
    'education.1.h1': "GPA of 3.75 out of 4.00 with a concentration in Industrial and Organizational Psychology",
    'education.1.h2': "Relevant courses: Psychological Interviewing, Selection and Recruitment Systems, Human Resource Development, Projective Tests, and Intelligence, Interest and Aptitude Tests",
    'education.1.h3': "Final project: The Influence of Grit and Job Satisfaction on Job Hopping among Generation Z in Banjarbaru",
    'education.1.h4': "",
    'education.1.uni': "UIN Antasari Banjarmasin",
    'education.1.footer': "B.A. ISLAMIC PSYCHOLOGY · UIN ANTASARI",

    // ── Work Section
    'work.label': "EXPERIENCE",
    'work.title': "Experience",
    'work.subtitle': "Fieldwork at a correctional institution and a government agency: interviews, administration, and report writing.",
    'work.cta': "View All Experience",
    'work.1.role': "Thematic Community Service Student (KKN)",
    'work.1.inst': "AMUNTAI CLASS IIB CORRECTIONAL INSTITUTION",
    'work.1.loc': "Amuntai, South Kalimantan",
    'work.1.period': "Sep 2025 — Oct 2025",
    'work.1.sub': "UIN Antasari Thematic KKN · Score 92 (A)",
    'work.1.desc': "Interviewed about 50 inmates (warga binaan) to explore their backgrounds and psychological conditions as an initial identification for mental health screening. Guided inmates through handicraft skills training, Quran recitation lessons, and religious learning. Updated records of inmates entering and leaving, including attaching photos to files so data could be found faster and more accurately, and helped check identities and belongings during family visits according to procedure. Wrote the KKN activity report systematically.",
    'work.1.tags': "Interviews|Guidance|Data Administration|KKN Report",
    'work.2.role': "Intern (Field Work Practice)",
    'work.2.inst': "BKD DIKLAT BANJARMASIN — ASN DEVELOPMENT, COMPETENCY & HR DIVISION",
    'work.2.loc': "Banjarmasin, South Kalimantan",
    'work.2.period': "Apr 2025 — Jun 2025",
    'work.2.sub': "Result: Very Good · PPPK orientation",
    'work.2.desc': "Supported training and employee development programs at a government agency. Wrote the evaluation report of the PPPK orientation based on pretest and posttest results to measure participants’ improved understanding. Helped with participant administration for the PPPK orientation, from data collection to managing activity files, and observed employee transfer interviews to understand the ASN transfer flow.",
    'work.2.tags': "HR Development|Evaluation Report|PPPK Administration|Transfer Interview Observation",

    // ── Karya & Proyek
    'projects.label': "WORKS & DOCUMENTS",
    'projects.title': "Works & Documents",
    'projects.sub': "The final project, reports, and organizational documents written during university, the internship, and KKN.",
    'projects.open': "View Image",
    'proj.1.cat': "FINAL PROJECT · B.A. ISLAMIC PSYCHOLOGY",
    'proj.1.title': "The Influence of Grit and Job Satisfaction on Job Hopping among Generation Z in Banjarbaru",
    'proj.1.desc': "Bachelor’s final project in the Industrial and Organizational Psychology concentration.",
    'proj.2.cat': "EVALUATION REPORT · APR 2025 — JUN 2025",
    'proj.2.title': "PPPK Orientation Evaluation Report",
    'proj.2.desc': "Wrote an evaluation report based on pretest and posttest results to measure the improvement in PPPK orientation participants’ understanding.",
    'proj.3.cat': "ACTIVITY REPORT · SEP 2025 — OCT 2025",
    'proj.3.title': "KKN Activity Report, Amuntai Class IIB Correctional Institution",
    'proj.3.desc': "Wrote the KKN activity report systematically as the program’s accountability.",
    'proj.4.cat': "ORGANIZATIONAL DOCUMENT · JAN 2024 — APR 2024",
    'proj.4.title': "Student Election Rules",
    'proj.4.desc': "Wrote the rules for the chair and vice-chair election as a fair and transparent guideline, along with minutes for every stage.",

    // ── Organisasi
    'trainings.label': "ORGANIZATIONAL EXPERIENCE",
    'trainings.title': "Organizational Experience",
    'trainings.campus': "UIN ANTASARI BANJARMASIN",
    'org.1.role': "General Secretary",
    'org.1.inst': "Islamic Psychology Student Association (HMJ)",
    'org.1.period': "Apr 2024 — Mar 2025",
    'org.1.loc': "UIN Antasari Banjarmasin",
    'org.1.desc': "Interviewed 10 prospective HMJ members as part of the board selection and recruitment process. Managed organizational administration, including correspondence, activity proposals, and accountability reports. Monitored each division’s work programs to make sure they ran as planned, and managed the organization’s document archive systematically.",
    'org.1.tags': "General Secretary|Board Recruitment|Administration|Archiving",
    'org.2.role': "Secretary",
    'org.2.inst': "Student Election Commission (KPM), Faculty of Ushuluddin and Humanities",
    'org.2.period': "Jan 2024 — Apr 2024",
    'org.2.loc': "UIN Antasari Banjarmasin",
    'org.2.desc': "Managed registration administration for chair and vice-chair candidates, from receiving to archiving files. Verified the files of 6 candidate pairs against the requirements to ensure accuracy and compliance, wrote minutes for every stage, drafted the election rules, and prepared official letters for coordination between parties.",
    'org.2.tags': "Secretary|File Verification|Minutes|Election Rules",

    // ── Awards Section
    'awards.label': "CERTIFICATIONS",
    'awards.title': "Certifications, Training & Documents",
    'awards.sub': "HR competency certificate, training, English proficiency, and the KKN and internship certificates.",
    'awards.openDoc': "Open Certificate",
    'awards.issuer': "Issuer",
    'awards.viewOriginal': "View Original Document →",
    'award.1.title': "Certificate of Competence: Human Resources Staff",
    'award.1.issuer': "BNSP, through the Transformasi Indonesia HR Management Professional Certification Institute",
    'award.1.cat': "PROFESSIONAL CERTIFICATION",
    'award.1.year': "2024",
    'award.1.desc': "Declared competent in Human Resource Management with the Human Resources Staff qualification (4 competency units), valid for 3 years from 12 September 2024.",
    'award.2.title': "HR Staff Training based on SKKNI 149/2020",
    'award.2.issuer': "Duta Aksara Wedar, Banjarmasin",
    'award.2.cat': "TRAINING",
    'award.2.year': "2024",
    'award.2.desc': "Training on 20 October 2024 covering 4 competency units: Compiling Job Descriptions, Social Security Administration, Wage Administration, and HRM Policy Implementation Administration.",
    'award.3.title': "TOEFL Prediction Score 403",
    'award.3.issuer': "Language Development Unit (UPB), UIN Antasari",
    'award.3.cat': "ENGLISH",
    'award.3.year': "2025",
    'award.3.desc': "Listening 41, Structure and Written Expression 41, Reading 39. Tested on 17 December 2025, valid until 19 December 2027.",
    'award.4.title': "Mock Up Interview: Success Finding The Perfect Fit Job in an Interview",
    'award.4.issuer': "UPT Entrepreneurship and Career Development, UIN Antasari",
    'award.4.cat': "TRAINING",
    'award.4.year': "2024",
    'award.4.desc': "Participant of the Mock Up Interview held in Banjarmasin on 25 April 2024.",
    'award.5.title': "Thematic KKN Certificate, UIN Antasari Cohort XIII Phase I",
    'award.5.issuer': "LPK-PPTA, Amuntai Class IIB Correctional Institution",
    'award.5.cat': "COMMUNITY SERVICE",
    'award.5.year': "2025",
    'award.5.desc': "Thematic KKN from 11 September to 11 October 2025 with a score of 92 (A, Very Good).",
    'award.6.title': "Field Work Practice Certificate (Internship)",
    'award.6.issuer': "Regional Civil Service, Education and Training Agency of Banjarmasin",
    'award.6.cat': "INTERNSHIP",
    'award.6.year': "2025",
    'award.6.desc': "Field work practice from 14 April to 14 June 2025 with a result of Very Good (score 84 out of 100).",

    // ── Skills Section
    'skills.label': "COMPETENCIES",
    'skills.title': "Core Skills",
    'skills.desc': "Combines a basic understanding of psychological tests and interviewing with careful administration and data confidentiality.",
    'skills.card1.tag': "PSYCHOLOGY & HR",
    'skills.card1.desc': "Understands the basics of psychological tests and interview techniques, with experience in test administration, selection and recruitment, assessment, and HR administration.",
    'skills.card2.tag': "ADMINISTRATION & TEAMWORK",
    'skills.card2.desc': "Manages documents, writes reports, and keeps data confidential, working independently or in a team.",
    'skills.card1.tags': "Psychological Interviewing|Psychological Test Administration|Selection & Recruitment|Assessment|HR Administration|HR Development|IBM SPSS Statistics",
    'skills.card2.tags': "Administration|Correspondence|Archiving|Report Writing|Data Confidentiality|Time Management|Communication|Teamwork|Meticulousness|Integrity|Microsoft Word|Microsoft Excel|Microsoft PowerPoint|Google Spreadsheet",

    // ── Personal Skills Section
    'personal.label': "PERSONAL SKILLS & TOOLS",
    'personal.title': "Soft Skills & Work Tools",
    'personal.sub': "Personal skills that support administrative and HR work, plus software and language.",
    'personal.soft.label': "PERSONAL SKILLS",
    'personal.soft.title': "Soft Skills",
    'personal.hard.label': "TOOLS & LANGUAGE",
    'personal.hard.title': "Software & Language",
    'personal.orientation': "Work Approach:",
    'personal.quality': "Meticulous, Communicative & Responsible",
    'personal.app': "Language:",
    'personal.ready': "Indonesian · English (TOEFL 403)",
    'personal.soft.1.t': "Time Management",
    'personal.soft.1.d': "Balancing study, organizations, an internship, and fieldwork.",
    'personal.soft.2.t': "Communication",
    'personal.soft.2.d': "Communicating in interviews, coordination between parties, and official correspondence.",
    'personal.soft.3.t': "Teamwork",
    'personal.soft.3.d': "Working together in organization, KKN, and internship teams.",
    'personal.soft.4.t': "Meticulousness",
    'personal.soft.4.d': "Verifying files and updating data accurately.",
    'personal.soft.5.t': "Integrity",
    'personal.soft.5.d': "Keeping documents transparent and following procedures.",
    'personal.soft.6.t': "Responsibility",
    'personal.soft.6.d': "Writing accountability reports for every activity.",
    'personal.soft.7.t': "Quick Adaptation",
    'personal.soft.7.d': "Adjusting to a prison, a government agency, and student organizations.",
    'personal.soft.8.t': "Data Confidentiality",
    'personal.soft.8.d': "Keeping inmate, employee, and organizational data confidential.",
    'personal.hard.1.t': "Microsoft Office",
    'personal.hard.1.d': "Microsoft Word, PowerPoint, and Excel.",
    'personal.hard.2.t': "Google Spreadsheet",
    'personal.hard.2.d': "Spreadsheet-based data processing and recording.",
    'personal.hard.3.t': "IBM SPSS Statistics",
    'personal.hard.3.d': "Statistical data processing for research.",
    'personal.hard.4.t': "Test & Interview Basics",
    'personal.hard.4.d': "Understanding the basics of psychological tests and interview techniques.",
    'personal.lang.1.t': "English",
    'personal.lang.1.l': "TOEFL 403",

    // ── Contact Section
    'contact.label': "CONTACT",
    'contact.title': "Contact Me",
    'contact.tagline': "An Islamic Psychology graduate ready to contribute in psychology and human resources.",
    'contact.subtitle': "Open to opportunities in psychology, selection and recruitment, assessment, and HR administration. Let’s connect by email or WhatsApp.",
    'contact.location': "LOCATION",
    'contact.phone': "PHONE / WHATSAPP",
  },
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>('id')

  useEffect(() => {
    try {
      const savedLang = localStorage.getItem('site_language') as Language
      if (savedLang === 'id' || savedLang === 'en') {
        setLangState(savedLang)
        return
      }
      const userLang = navigator.language || (navigator as any).userLanguage || ''
      if (userLang.toLowerCase().startsWith('id')) {
        setLangState('id')
      } else {
        setLangState('en')
      }
    } catch {
      setLangState('id')
    }
  }, [])

  const setLang = (newLang: Language) => {
    setLangState(newLang)
    try {
      localStorage.setItem('site_language', newLang)
    } catch {}
  }

  const t = (key: string): string => {
    return translations[lang]?.[key] ?? translations['id']?.[key] ?? key
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}
