'use client'

import { useLanguage } from '@/contexts/LanguageContext'

const palette = ['bg-pink-600', 'bg-pink-600', 'bg-indigo-600', 'bg-cyan-700', 'bg-purple-600', 'bg-amber-600', 'bg-fuchsia-600', 'bg-rose-600']

type Bi = { id: string; en: string }

const projects: { number: string; title: Bi; description: Bi; framework: Bi; techStack: string[] }[] = [
  {
    number: '01',
    title: { id: "KKN Tematik di Lapas Kelas IIB Amuntai", en: "Thematic KKN at Amuntai Class IIB Correctional Institution" },
    description: {
      id: "Mewawancarai sekitar 50 warga binaan, membina keterampilan dan mengaji, serta memperbarui pencatatan data warga binaan.",
      en: "Interviewed about 50 inmates, guided crafts and Quran learning, and updated inmate records.",
    },
    framework: { id: "PENGALAMAN — LAPAS KELAS IIB AMUNTAI", en: "EXPERIENCE — AMUNTAI CLASS IIB CORRECTIONAL INSTITUTION" },
    techStack: ['Wawancara', 'Pembinaan', 'Nilai 92 (A)'],
  },
  {
    number: '02',
    title: { id: "Magang di Bidang Pengembangan, Kompetensi ASN & SDM", en: "Internship in the ASN Development, Competency & HR Division" },
    description: {
      id: "Menyusun laporan evaluasi orientasi PPPK dari hasil pretest dan posttest serta membantu administrasi peserta.",
      en: "Wrote the PPPK orientation evaluation report from pretest and posttest results and helped with participant administration.",
    },
    framework: { id: "PENGALAMAN — BKD DIKLAT KOTA BANJARMASIN", en: "EXPERIENCE — BKD DIKLAT BANJARMASIN" },
    techStack: ['Pengembangan SDM', 'Laporan Evaluasi', 'Amat Baik'],
  },
  {
    number: '03',
    title: { id: "Sekretaris Umum HMJ Psikologi Islam", en: "General Secretary, Islamic Psychology Student Association" },
    description: {
      id: "Mewawancarai 10 calon anggota, mengelola surat-menyurat, proposal, laporan pertanggungjawaban, dan arsip organisasi.",
      en: "Interviewed 10 prospective members and managed correspondence, proposals, accountability reports, and the organization’s archive.",
    },
    framework: { id: "ORGANISASI — HMJ PSIKOLOGI ISLAM UIN ANTASARI", en: "ORGANIZATION — ISLAMIC PSYCHOLOGY ASSOCIATION, UIN ANTASARI" },
    techStack: ['Sekretaris Umum', 'Rekrutmen Pengurus', 'Administrasi'],
  },
  {
    number: '04',
    title: { id: "Sekretaris Komisi Pemilihan Mahasiswa", en: "Secretary, Student Election Commission" },
    description: {
      id: "Memverifikasi berkas 6 pasangan calon, membuat berita acara, dan menyusun tata tertib pemilihan.",
      en: "Verified the files of 6 candidate pairs, wrote minutes, and drafted the election rules.",
    },
    framework: { id: "ORGANISASI — KPM FAKULTAS USHULUDDIN DAN HUMANIORA", en: "ORGANIZATION — STUDENT ELECTION COMMISSION, FACULTY OF USHULUDDIN AND HUMANITIES" },
    techStack: ['Sekretaris', 'Verifikasi Berkas', 'Berita Acara'],
  },
  {
    number: '05',
    title: { id: "Tugas Akhir: Grit, Kepuasan Kerja, dan Job Hopping", en: "Final Project: Grit, Job Satisfaction, and Job Hopping" },
    description: {
      id: "Penelitian tugas akhir tentang pengaruh grit dan kepuasan kerja terhadap job hopping pada Generasi Z di Kota Banjarbaru.",
      en: "Final project on the influence of grit and job satisfaction on job hopping among Generation Z in Banjarbaru.",
    },
    framework: { id: "KARYA — S1 PSIKOLOGI ISLAM UIN ANTASARI", en: "WORK — B.A. ISLAMIC PSYCHOLOGY, UIN ANTASARI" },
    techStack: ['Psikologi Industri & Organisasi', 'Tugas Akhir'],
  },
  {
    number: '06',
    title: { id: "Sertifikat Kompetensi Staf SDM (BNSP)", en: "HR Staff Competency Certificate (BNSP)" },
    description: {
      id: "Dinyatakan kompeten sebagai Staf Sumber Daya Manusia dengan 4 unit kompetensi, berlaku 3 tahun sejak September 2024.",
      en: "Declared competent as Human Resources Staff across 4 competency units, valid for 3 years from September 2024.",
    },
    framework: { id: "SERTIFIKASI — BNSP, LSP MANAJEMEN SDM TRANSFORMASI INDONESIA", en: "CERTIFICATION — BNSP, TRANSFORMASI INDONESIA HR CERTIFICATION INSTITUTE" },
    techStack: ['BNSP', 'Staf SDM', '2024'],
  },
  {
    number: '07',
    title: { id: "Pelatihan Staf SDM & Mock Up Interview", en: "HR Staff Training & Mock Up Interview" },
    description: {
      id: "Mengikuti pelatihan Staf SDM berbasis SKKNI (Oktober 2024) dan Mock Up Interview UPT Kewirausahaan dan Karier (April 2024).",
      en: "Joined HR Staff training based on SKKNI (October 2024) and the Mock Up Interview by the UPT Entrepreneurship and Career Development (April 2024).",
    },
    framework: { id: "PELATIHAN — DUTA AKSARA WEDAR & UIN ANTASARI", en: "TRAINING — DUTA AKSARA WEDAR & UIN ANTASARI" },
    techStack: ['Pelatihan SDM', 'Mock Up Interview'],
  },
  {
    number: '08',
    title: { id: "TOEFL Prediction Score 403", en: "TOEFL Prediction Score 403" },
    description: {
      id: "Skor TOEFL prediksi 403 dari Unit Pengembangan Bahasa UIN Antasari (Desember 2025).",
      en: "A TOEFL prediction score of 403 from the UIN Antasari Language Development Unit (December 2025).",
    },
    framework: { id: "SERTIFIKASI — UPB UIN ANTASARI", en: "CERTIFICATION — UPB UIN ANTASARI" },
    techStack: ['TOEFL', 'Bahasa Inggris'],
  },
]

export default function ProjectList() {
  const { lang } = useLanguage()
  const copy = {
    label: { id: 'PORTOFOLIO PSIKOLOGI ISLAM & SDM', en: 'ISLAMIC PSYCHOLOGY & HR PORTFOLIO' },
    title: { id: 'Pengalaman, Organisasi & Sertifikasi', en: 'Experience, Organizations & Certifications' },
    sub: {
      id: 'Rekam jejak pengalaman lapangan, organisasi, karya, dan sertifikasi di bidang psikologi dan sumber daya manusia.',
      en: 'A record of fieldwork, organizational experience, works, and certifications in psychology and human resources.',
    },
  }

  return (
    <section id="technical" className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--muted)] mb-3">{copy.label[lang]}</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-3">{copy.title[lang]}</h2>
          <p className="text-[var(--muted)] text-sm max-w-lg">{copy.sub[lang]}</p>
        </div>

        <div className="divide-y divide-[var(--card-border)]">
          {projects.map((project) => (
            <div
              key={project.number}
              className="group flex items-start gap-4 md:gap-8 py-6 hover:bg-[var(--card-bg)] hover:px-4 rounded-lg transition-all duration-300 cursor-pointer"
            >
              {/* Number */}
              <span className="text-[var(--muted)] text-sm font-semibold mt-1 shrink-0 w-8 font-sans">
                {project.number}
              </span>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-base mb-1 group-hover:text-[var(--foreground)] transition-colors">
                  {project.title[lang]}
                </h3>
                <p className="text-[var(--muted)] text-sm mb-2 leading-relaxed">
                  {project.description[lang]}
                </p>
                <p className="text-[var(--muted)] text-xs tracking-wider uppercase mb-3 font-semibold">
                  {project.framework[lang]}
                </p>
                {/* Tag badges */}
                <div className="flex flex-wrap items-center gap-2">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={tech}
                      className={`px-2.5 py-1 rounded-md text-white text-[10px] font-semibold tracking-wide ${palette[(Number(project.number) + i) % palette.length]}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Status icon */}
              <div className="text-[var(--muted)] group-hover:text-[var(--foreground)] transition-colors mt-1 shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12l5 5l10 -10" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
