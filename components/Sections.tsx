'use client'
import { useState, useRef, useEffect } from 'react'
import TypewriterTitle from './TypewriterTitle'
import { useLanguage } from '@/contexts/LanguageContext'


export function ExcelLogo({ className = 'w-7 h-7' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="excel-grad" x1="4.494" y1="7.914" x2="13.832" y2="24.086" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#18884f" />
          <stop offset="0.5" stopColor="#117e43" />
          <stop offset="1" stopColor="#0b6631" />
        </linearGradient>
      </defs>
      <path d="M19.581 15.35L8.512 13.4V27.809A1.192 1.192 0 009.705 29h19.1A1.192 1.192 0 0030 27.809V22.5h-10.419z" fill="#185c37" />
      <path d="M19.581 3H9.705A1.192 1.192 0 008.512 4.191V9.5l11.069 6.5 5.861 1.95L30 16V9.5L19.581 3z" fill="#21a366" />
      <path d="M8.512 9.5h11.069V16H8.512z" fill="#107c41" />
      <path d="M28.806 3h-9.225v6.5H30V4.191A1.192 1.192 0 0028.806 3z" fill="#33c481" />
      <path d="M19.581 16H30v6.5H19.581z" fill="#107c41" />
      <path d="M3.194 8.85h11.938a1.193 1.193 0 011.194 1.191v11.918a1.193 1.193 0 01-1.194 1.191H3.194A1.192 1.192 0 012 21.959V10.041A1.192 1.192 0 013.194 8.85z" fill="url(#excel-grad)" />
      <path d="M5.7 19.873l2.511-3.884-2.3-3.862h1.847l1.255 2.473c.116.234.2.408.238.524h.017c.082-.188.169-.369.26-.546l1.342-2.447h1.7l-2.359 3.84 2.419 3.905h-1.709l-1.45-2.711a2.355 2.355 0 01-.17-.28h-.024a1.688 1.688 0 01-.168.351L7.515 19.873H5.7z" fill="#ffffff" />
    </svg>
  )
}

export function WordLogo({ className = 'w-7 h-7' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="word-grad" x1="4.494" y1="7.914" x2="13.832" y2="24.086" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#2368c4" />
          <stop offset="0.5" stopColor="#1a5dbe" />
          <stop offset="1" stopColor="#1146ac" />
        </linearGradient>
      </defs>
      <path d="M28.806 3H9.705A1.192 1.192 0 008.512 4.191V9.5l11.069 3.25L30 9.5V4.191A1.192 1.192 0 0028.806 3z" fill="#41a5ee" />
      <path d="M30 9.5H8.512V16l11.069 1.95L30 16z" fill="#2b7cd3" />
      <path d="M8.512 16v6.5l10.418 1.3L30 22.5V16z" fill="#185abd" />
      <path d="M9.705 29h19.1A1.192 1.192 0 0030 27.809V22.5H8.512v5.309A1.192 1.192 0 009.705 29z" fill="#103f91" />
      <path d="M3.194 8.85h11.938a1.193 1.193 0 011.194 1.191v11.918a1.193 1.193 0 01-1.194 1.191H3.194A1.192 1.192 0 012 21.959V10.041A1.192 1.192 0 013.194 8.85z" fill="url(#word-grad)" />
      <path d="M6.9 17.988c.023.184.039.344.046.481h.028c.01-.13.032-.287.065-.47s.062-.338.089-.465l1.255-5.407h1.624l1.3 5.326a7.761 7.761 0 01.162 1h.022a7.6 7.6 0 01.135-.975l1.039-5.358h1.477l-1.824 7.748H10.591L9.354 14.742a3.78 3.78 0 01-.122-.578 3.32 3.32 0 01-.084-.52H9.127a3.46 3.46 0 01-.084.561c-.042.249-.075.432-.1.552L7.78 19.871H6.024L4.19 12.127h1.5l1.131 5.418c.038.188.064.336.079.443z" fill="#ffffff" />
    </svg>
  )
}


export function OfficeLogo({ className = 'w-7 h-7' }: { className?: string }) {
  // gabungan tiga aplikasi Microsoft Office: Word (biru), Excel (hijau), PowerPoint (oranye)
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Microsoft Office">
      <rect x="1" y="9" width="14" height="14" rx="3" fill="#185abd" />
      <text x="8" y="19.6" fill="#ffffff" fontSize="9" fontWeight="800" textAnchor="middle" fontFamily="system-ui, -apple-system, sans-serif">W</text>
      <rect x="17" y="2" width="14" height="14" rx="3" fill="#107c41" />
      <text x="24" y="12.6" fill="#ffffff" fontSize="9" fontWeight="800" textAnchor="middle" fontFamily="system-ui, -apple-system, sans-serif">X</text>
      <rect x="17" y="17" width="14" height="14" rx="3" fill="#c43e1c" />
      <text x="24" y="27.6" fill="#ffffff" fontSize="9" fontWeight="800" textAnchor="middle" fontFamily="system-ui, -apple-system, sans-serif">P</text>
    </svg>
  )
}

export function PowerPointLogo({ className = 'w-7 h-7' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Microsoft PowerPoint">
      <rect x="2" y="3" width="28" height="26" rx="4" fill="#c43e1c" />
      <circle cx="12" cy="16" r="6.5" fill="#ffffff" opacity="0.25" />
      <path d="M12 9.5a6.5 6.5 0 1 1-6.5 6.5H12z" fill="#ffffff" />
      <path d="M19 11h6M19 16h6M19 21h6" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

const lineIcon = (children: React.ReactNode) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 text-[var(--foreground)]">
    {children}
  </svg>
)

const icons = {
  doc: lineIcon(<><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /></>),
  chart: lineIcon(<><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></>),
  trend: lineIcon(<><polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" /></>),
  clipboard: lineIcon(<><rect x="8" y="2" width="8" height="4" rx="1" /><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" /><path d="m9 14 2 2 4-4" /></>),
  calc: lineIcon(<><rect x="4" y="2" width="16" height="20" rx="2" /><line x1="8" y1="6" x2="16" y2="6" /><path d="M8 11h.01M12 11h.01M16 11h.01M8 15h.01M12 15h.01M16 15h.01M8 19h.01M12 19h.01M16 19h.01" /></>),
  megaphone: lineIcon(<><path d="m3 11 18-5v12L3 14v-3z" /><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" /></>),
  search: lineIcon(<><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></>),
  chat: lineIcon(<path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8z" />),
  pen: lineIcon(<><path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4z" /></>),
  users: lineIcon(<><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></>),
  leaf: lineIcon(<><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.5 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" /><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" /></>),
  folder: lineIcon(<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />),
  book: lineIcon(<><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></>),
  tag: lineIcon(<><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" /><line x1="7" y1="7" x2="7.01" y2="7" /></>),
  heart: lineIcon(<><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /><path d="M5 12h3l2-3 3 6 2-3h4" /></>),
  drop: lineIcon(<><path d="M12 2.7c3.5 4 6 7.2 6 10.3a6 6 0 0 1-12 0c0-3.1 2.5-6.3 6-10.3z" /><path d="M12 11v4M10 13h4" /></>),
}

const techIcons = [
  { id: 'excel', name: 'Microsoft Excel', icon: <ExcelLogo className="w-7 h-7" /> },
  { id: 'word', name: 'Microsoft Word', icon: <WordLogo className="w-7 h-7" /> },
  { id: 'ppt', name: 'Microsoft PowerPoint', icon: <PowerPointLogo className="w-7 h-7" /> },
  { id: 'gsheet', name: 'Google Spreadsheet', icon: icons.chart },
  { id: 'spss', name: 'IBM SPSS Statistics', icon: icons.calc },
  { id: 'interview', name: 'Wawancara Psikologi', icon: icons.chat },
  { id: 'test', name: 'Pelaksanaan Tes Psikologi', icon: icons.clipboard },
  { id: 'recruit', name: 'Seleksi & Rekrutmen', icon: icons.users },
  { id: 'assess', name: 'Asesmen', icon: icons.search },
  { id: 'admin', name: 'Administrasi & Pengarsipan', icon: icons.folder },
  { id: 'report', name: 'Penyusunan Laporan', icon: icons.doc },
  { id: 'time', name: 'Manajemen Waktu', icon: icons.trend },
]

export function SkillsSection() {
  const { t } = useLanguage()
  const skillTags1 = t('skills.card1.tags').split('|')
  const skillTags2 = t('skills.card2.tags').split('|')
  return (
    <section id="skills" className="relative py-24 px-4 md:px-8 overflow-hidden">
      {/* Background Waves */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.1] z-0">
        <svg className="w-full h-full" viewBox="0 0 1440 800" preserveAspectRatio="none" fill="none" stroke="currentColor">
          <path d="M0 200C300 100 400 300 720 200C1040 100 1140 300 1440 200" strokeWidth="2" />
          <path d="M0 400C300 300 400 500 720 400C1040 300 1140 500 1440 400" strokeWidth="2" />
          <path d="M0 600C300 500 400 700 720 600C1040 500 1140 700 1440 600" strokeWidth="2" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">

        {/* Left Side: Title & Icons */}
        <div className="lg:col-span-4 flex flex-col justify-center">
          <p className="text-[10px] tracking-[0.3em] uppercase text-[var(--muted)] mb-4 font-semibold">{t('skills.label')}</p>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            <TypewriterTitle text={t('skills.title')} />
          </h2>
          <p className="text-[var(--muted)] text-sm leading-relaxed mb-10 max-w-sm">
            <span className="text-pink-500 font-medium">{t('skills.desc').split(' ')[0]}</span>{' '}
            {t('skills.desc').split(' ').slice(1).join(' ')}
          </p>

          <div className="grid grid-cols-4 gap-3 max-w-[240px]">
            {techIcons.map((tech) => (
              <div
                key={tech.id}
                title={tech.name}
                className="w-12 h-12 rounded-2xl flex items-center justify-center bg-[var(--card-bg)] border border-[var(--card-border)] shadow-sm hover:scale-110 hover:border-pink-500/50 hover:shadow-md transition-all duration-200 cursor-pointer p-1.5"
              >
                {tech.icon}
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: 2 Cards */}
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Card 1 */}
          <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-3xl p-8 md:p-10 flex flex-col hover:border-[var(--muted)] transition-colors">
            <div className="flex justify-between items-start mb-10">
              <span className="text-5xl md:text-6xl font-light text-[var(--muted)]">01</span>
              <span className="text-right text-[10px] tracking-[0.2em] uppercase max-w-[140px] text-[var(--muted)] font-semibold leading-relaxed">{t('skills.card1.tag')}</span>
            </div>
            <div className="w-14 h-14 rounded-2xl bg-[var(--background)] border border-[var(--card-border)] flex items-center justify-center mb-8 shrink-0">
              {icons.doc}
            </div>
            <p className="text-[var(--muted)] text-sm leading-loose mb-10 grow">
              {t('skills.card1.desc')}
            </p>
            <div className="flex flex-wrap gap-2">
              {skillTags1.map(badge => (
                <span key={badge} className="px-3 py-1.5 rounded-lg bg-[var(--background)] border border-[var(--card-border)] text-[10px] font-medium text-[var(--muted)] whitespace-nowrap">
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-3xl p-8 md:p-10 flex flex-col hover:border-[var(--muted)] transition-colors">
            <div className="flex justify-between items-start mb-10">
              <span className="text-5xl md:text-6xl font-light text-[var(--muted)]">02</span>
              <span className="text-right text-[10px] tracking-[0.2em] uppercase max-w-[140px] text-[var(--muted)] font-semibold leading-relaxed">{t('skills.card2.tag')}</span>
            </div>
            <div className="w-14 h-14 rounded-2xl bg-[var(--background)] border border-[var(--card-border)] flex items-center justify-center mb-8 shrink-0">
              {icons.megaphone}
            </div>
            <p className="text-[var(--muted)] text-sm leading-loose mb-10 grow">
              {t('skills.card2.desc')}
            </p>
            <div className="flex flex-wrap gap-2">
              {skillTags2.map(badge => (
                <span key={badge} className="px-3 py-1.5 rounded-lg bg-[var(--background)] border border-[var(--card-border)] text-[10px] font-medium text-[var(--muted)] whitespace-nowrap">
                  {badge}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

function AnimatedCounter({
  end,
  decimals = 0,
  suffix = '',
  duration = 1800,
}: {
  end: number
  decimals?: number
  suffix?: string
  duration?: number
}) {
  const [count, setCount] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)
  const elementRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true)
        }
      },
      { threshold: 0.2 }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => observer.disconnect()
  }, [hasStarted])

  useEffect(() => {
    if (!hasStarted) return

    let startTime: number | null = null
    let animationFrameId: number

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const easeOut = 1 - Math.pow(1 - progress, 3)
      setCount(easeOut * end)

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step)
      } else {
        setCount(end)
      }
    }

    animationFrameId = requestAnimationFrame(step)
    return () => cancelAnimationFrame(animationFrameId)
  }, [hasStarted, end, duration])

  return (
    <span ref={elementRef} className="tabular-nums">
      {count.toFixed(decimals)}
      <span className="text-pink-500 font-bold ml-0.5">{suffix}</span>
    </span>
  )
}

export function AboutSection() {
  const { t } = useLanguage()

  const traitsData = [
    {
      id: '01',
      title: t('trait.1.title'),
      subtitle: t('trait.1.sub'),
      tag: t('trait.1.tag'),
      desc: t('trait.1.desc'),
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      ),
      glow: 'rgba(236, 72, 153, 0.28)',
    },
    {
      id: '02',
      title: t('trait.2.title'),
      subtitle: t('trait.2.sub'),
      tag: t('trait.2.tag'),
      desc: t('trait.2.desc'),
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
      glow: 'rgba(6, 182, 212, 0.28)',
    },
    {
      id: '03',
      title: t('trait.3.title'),
      subtitle: t('trait.3.sub'),
      tag: t('trait.3.tag'),
      desc: t('trait.3.desc'),
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
        </svg>
      ),
      glow: 'rgba(245, 158, 11, 0.28)',
    },
    {
      id: '04',
      title: t('trait.4.title'),
      subtitle: t('trait.4.sub'),
      tag: t('trait.4.tag'),
      desc: t('trait.4.desc'),
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
        </svg>
      ),
      glow: 'rgba(168, 85, 247, 0.28)',
    },
  ];

  const [activeTraitIndex, setActiveTraitIndex] = useState(0);
  // kartu depan dibuang (terlempar + memudar) sebagai lapisan sendiri, sementara kartu berikutnya naik ke depan
  const [leavingTrait, setLeavingTrait] = useState<number | null>(null);

  const handleCardClick = () => {
    if (leavingTrait !== null) return;
    setLeavingTrait(activeTraitIndex);
    setActiveTraitIndex((prev) => (prev + 1) % traitsData.length);
    setTimeout(() => setLeavingTrait(null), 460);
  };

  const currentTrait = traitsData[activeTraitIndex];
  const renderTraitCard = (trait: (typeof traitsData)[number], dotIdx: number, animation?: string) => (
              <div 
                className="relative w-full min-h-[350px] bg-gradient-to-b from-zinc-800 via-zinc-900 to-zinc-950 dark:from-[#22242B] dark:via-[#1B1D23] dark:to-[#14151A] rounded-3xl border border-white/15 shadow-2xl p-6 sm:p-7 flex flex-col justify-between overflow-hidden will-change-transform transition-colors duration-300 group-hover:border-pink-500/40"
                style={{
                  boxShadow: `0 20px 40px -10px ${trait.glow}, 0 10px 20px -5px rgba(0,0,0,0.5)`,
                  animation,
                }}
              >
                {/* Header: ID + Badge + Icon */}
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/10 border border-white/10 text-[10px] font-mono tracking-widest text-white/70">
                      <span>{trait.id}</span>
                      <span>/</span>
                      <span>04</span>
                    </span>
                    <div className="w-10 h-10 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center text-white shrink-0 group-hover:scale-110 group-hover:bg-white/15 transition-all">
                      {trait.icon}
                    </div>
                  </div>

                  <p className="text-[9px] tracking-[0.25em] uppercase text-white/50 mb-1.5 font-semibold">
                    {t('trait.card.label')}
                  </p>
                  <h3 className="text-3xl font-extrabold text-white tracking-tight mb-1">
                    {trait.title}
                  </h3>
                  <p className="text-xs font-semibold text-pink-400 mb-4 tracking-wide">
                    {trait.subtitle}
                  </p>

                  <p className="text-xs text-white/70 leading-relaxed">
                    {trait.desc}
                  </p>
                </div>

                {/* Footer: Pagination dots & Click hint */}
                <div className="pt-4 border-t border-white/10 mt-5 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    {traitsData.map((_, idx) => (
                      <span
                        key={idx}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          idx === dotIdx
                            ? 'w-5 bg-pink-400'
                            : 'w-1.5 bg-white/20'
                        }`}
                      />
                    ))}
                  </div>

                  <div className="flex items-center gap-1 text-[10px] tracking-wider uppercase font-semibold text-white/50 group-hover:text-pink-400 transition-colors">
                    <span>{t('trait.change')}</span>
                    <span className="text-xs">↻</span>
                  </div>
                </div>
              </div>
  );
  const nextTrait = traitsData[(activeTraitIndex + 1) % traitsData.length];

  return (
    <section id="about" className="relative py-24 px-4 md:px-8 overflow-hidden">
      {/* Background Waves */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.1] z-0">
        <svg className="w-full h-full" viewBox="0 0 1440 800" preserveAspectRatio="none" fill="none" stroke="currentColor">
          <path d="M0 200C300 100 400 300 720 200C1040 100 1140 300 1440 200" strokeWidth="2" />
          <path d="M0 400C300 300 400 500 720 400C1040 300 1140 500 1440 400" strokeWidth="2" />
          <path d="M0 600C300 500 400 700 720 600C1040 500 1140 700 1440 600" strokeWidth="2" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <p className="text-[10px] tracking-[0.3em] uppercase text-[var(--muted)] mb-4 font-semibold">{t('about.label')}</p>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-16 tracking-tight">
          <TypewriterTitle text={t('about.title')} />
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 relative">
          
          {/* Main Info Column */}
          <div className="lg:col-span-8 flex flex-col">
            
            {/* Header: Photo + Name + Stats */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-10">
              <img src="/profile.png" alt="Putri Rahayu" className="w-24 h-24 object-[50%_8%] rounded-full object-cover object-top border-[3px] border-[var(--card-border)] bg-[var(--card-bg)] shrink-0 shadow-lg" />
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <h3 className="text-xl md:text-2xl font-bold tracking-wide">PUTRI RAHAYU</h3>
                  <svg width="20" height="20" viewBox="0 0 24 24" className="text-pink-500 fill-current">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
                  </svg>
                </div>
                <div className="flex flex-wrap gap-x-8 gap-y-4">
                  <div>
                    <p className="text-[10px] tracking-widest text-[var(--muted)] uppercase mb-1 font-semibold">{t('about.ipk')}</p>
                    <p className="text-sm font-bold">{t('about.v1')}</p>
                  </div>
                  <div>
                    <p className="text-[10px] tracking-widest text-[var(--muted)] uppercase mb-1 font-semibold">{t('about.honors')}</p>
                    <p className="text-sm font-bold">{t('about.v2')}</p>
                  </div>
                  <div>
                    <p className="text-[10px] tracking-widest text-[var(--muted)] uppercase mb-1 font-semibold">{t('about.year')}</p>
                    <p className="text-sm font-bold">{t('about.v3')}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bio */}
            <p className="text-[var(--muted)] text-sm md:text-base leading-loose mb-12 text-justify">
              {t('about.bio1')}
            </p>

            {/* Currently */}
            <div>
              <p className="text-[10px] tracking-[0.3em] uppercase text-[var(--muted)] mb-6 font-semibold">{t('about.current.label')}</p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[var(--card-bg)] border border-[var(--card-border)] flex items-center justify-center shrink-0 text-[var(--muted)] shadow-sm">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
                  </div>
                  <div>
                    <p className="text-sm font-bold">{t('about.current.1.title')}</p>
                    <p className="text-xs text-[var(--muted)]">{t('about.current.1.sub')}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[var(--card-bg)] border border-[var(--card-border)] flex items-center justify-center shrink-0 text-[var(--muted)] shadow-sm">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
                  </div>
                  <div>
                    <p className="text-sm font-bold">{t('about.current.2.title')}</p>
                    <p className="text-xs text-[var(--muted)]">{t('about.current.2.sub')}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[var(--card-bg)] border border-[var(--card-border)] flex items-center justify-center shrink-0 text-[var(--muted)] shadow-sm">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>
                  </div>
                  <div>
                    <p className="text-sm font-bold">{t('about.current.3.title')}</p>
                    <p className="text-xs text-[var(--muted)]">{t('about.current.3.sub')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Interactive Trait Deck */}
          <div 
            className="flex lg:col-span-4 justify-center lg:justify-end items-center relative pr-0 lg:pr-6 select-none mt-10 lg:mt-0"
          >
            <div 
              className="relative w-64 sm:w-72 min-h-[350px] cursor-pointer group"
              onClick={handleCardClick}
              title={t('trait.hint')}
            >
              {/* Back Card 2 (Layer 3) */}
              <div 
                className="absolute inset-0 bg-zinc-900/90 dark:bg-[#121316] rounded-3xl border border-white/5 shadow-xl pointer-events-none"
                style={{
                  transform: 'translate(20px, 16px) rotate(10deg) scale(0.92)',
                  opacity: 0.35,
                }}
              />

              {/* Middle Card (Layer 2) */}
              <div 
                className="absolute inset-0 bg-zinc-800/95 dark:bg-[#1A1C22] rounded-3xl border border-white/10 shadow-2xl pointer-events-none p-6 flex flex-col justify-between"
                style={{
                  transform: 'translate(10px, 8px) rotate(5deg) scale(0.96)',
                  opacity: 0.7,
                  animation: leavingTrait !== null ? 'deckFade 0.5s ease both' : undefined,
                }}
              >
                <div className="flex items-center justify-between opacity-50">
                  <span className="text-[9px] tracking-widest uppercase font-mono text-white/70">{nextTrait.id}</span>
                  <span className="text-[10px] tracking-wider uppercase text-white/70">{nextTrait.title}</span>
                </div>
                <div className="opacity-25 text-center font-bold text-base text-white">
                  {nextTrait.subtitle}
                </div>
              </div>

              {/* Front Card (Active Card): kartu baru naik ke depan dari posisi kartu tengah */}
              <div key={`front-${activeTraitIndex}`}>
                {renderTraitCard(currentTrait, activeTraitIndex, leavingTrait !== null ? 'deckRise 0.5s cubic-bezier(0.25, 1, 0.5, 1) both' : undefined)}
              </div>
              {/* Kartu yang dibuang: terlempar ke kanan-atas sambil memudar */}
              {leavingTrait !== null && (
                <div className="absolute inset-0 pointer-events-none z-30" aria-hidden="true">
                  {renderTraitCard(traitsData[leavingTrait], leavingTrait, 'deckThrow 0.46s cubic-bezier(0.25, 0.8, 0.3, 1) both')}
                </div>
              )}
            </div>
          </div>

        </div>

        {/* Moto Hidup - Interactive Quote with Shimmer & Emblem */}
        <div className="mt-16 sm:mt-24 text-center max-w-4xl mx-auto px-4 relative group cursor-default">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-pink-500/10 text-pink-500 mb-6 group-hover:scale-110 group-hover:bg-pink-500/20 group-hover:shadow-lg group-hover:shadow-pink-500/10 transition-all duration-300 border border-pink-500/20">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>
          <blockquote className="text-xl sm:text-2xl md:text-3xl font-serif italic tracking-wide text-[var(--foreground)] leading-relaxed group-hover:text-pink-400 transition-colors duration-300">
            {t('about.quote')}
          </blockquote>
          <div className="w-16 h-1 bg-gradient-to-r from-pink-500 to-rose-400 mx-auto mt-6 rounded-full group-hover:w-36 transition-all duration-500"></div>
        </div>

        {/* Angka Kunci / Key Metrics with Animated Count-Up Counters */}
        <div className="mt-14 sm:mt-20 pt-10 border-t border-[var(--card-border)]/60 grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-8 font-sans">
          {/* Item 1: IPK */}
          <div className="group p-5 sm:p-6 rounded-3xl bg-[var(--card-bg)]/40 hover:bg-[var(--card-bg)] border border-[var(--card-border)]/50 hover:border-pink-500/40 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer">
            <div>
              <div className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[var(--foreground)] mb-2 font-sans group-hover:text-pink-500 transition-colors duration-300">
                <AnimatedCounter end={3.75} decimals={2} suffix="" duration={1500} />
              </div>
              <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-[var(--muted)] group-hover:text-[var(--foreground)] transition-colors block">
                {t('metric.1')}
              </span>
            </div>
            <p className="text-[11px] text-[var(--muted)] mt-3 pt-3 border-t border-[var(--card-border)]/40 opacity-80 group-hover:opacity-100 transition-opacity">
              {t('metric.1.sub')}
            </p>
          </div>

          {/* Item 2: Pengalaman */}
          <div className="group p-5 sm:p-6 rounded-3xl bg-[var(--card-bg)]/40 hover:bg-[var(--card-bg)] border border-[var(--card-border)]/50 hover:border-pink-500/40 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer">
            <div>
              <div className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[var(--foreground)] mb-2 font-sans group-hover:text-pink-500 transition-colors duration-300">
                <AnimatedCounter end={2} decimals={0} suffix="" duration={1200} />
              </div>
              <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-[var(--muted)] group-hover:text-[var(--foreground)] transition-colors block">
                {t('metric.2')}
              </span>
            </div>
            <p className="text-[11px] text-[var(--muted)] mt-3 pt-3 border-t border-[var(--card-border)]/40 opacity-80 group-hover:opacity-100 transition-opacity">
              {t('metric.2.sub')}
            </p>
          </div>

          {/* Item 3: Organisasi & relawan */}
          <div className="group p-5 sm:p-6 rounded-3xl bg-[var(--card-bg)]/40 hover:bg-[var(--card-bg)] border border-[var(--card-border)]/50 hover:border-pink-500/40 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer">
            <div>
              <div className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[var(--foreground)] mb-2 font-sans group-hover:text-pink-500 transition-colors duration-300">
                <AnimatedCounter end={2} decimals={0} suffix="" duration={1400} />
              </div>
              <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-[var(--muted)] group-hover:text-[var(--foreground)] transition-colors block">
                {t('metric.3')}
              </span>
            </div>
            <p className="text-[11px] text-[var(--muted)] mt-3 pt-3 border-t border-[var(--card-border)]/40 opacity-80 group-hover:opacity-100 transition-opacity">
              {t('metric.3.sub')}
            </p>
          </div>

          {/* Item 4: Sertifikat */}
          <div className="group p-5 sm:p-6 rounded-3xl bg-[var(--card-bg)]/40 hover:bg-[var(--card-bg)] border border-[var(--card-border)]/50 hover:border-pink-500/40 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer">
            <div>
              <div className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[var(--foreground)] mb-2 font-sans group-hover:text-pink-500 transition-colors duration-300">
                <AnimatedCounter end={6} decimals={0} suffix="" duration={1200} />
              </div>
              <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-[var(--muted)] group-hover:text-[var(--foreground)] transition-colors block">
                {t('metric.4')}
              </span>
            </div>
            <p className="text-[11px] text-[var(--muted)] mt-3 pt-3 border-t border-[var(--card-border)]/40 opacity-80 group-hover:opacity-100 transition-opacity">
              {t('metric.4.sub')}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
export function EducationSection() {
  const { t } = useLanguage()

  const [photo, setPhoto] = useState(0)

  const educationList = [
    {
      number: '01',
      institution: t('education.1.institution'),
      program: t('education.1.program'),
      degree: t('education.1.degree'),
      period: t('education.1.period'),
      gpa: t('education.1.gpa'),
      gpaLabel: t('education.1.gpaLabel'),
      status: t('education.1.status'),
      description: t('education.1.desc'),
      images: ['/projects/edu-s1.jpg', '/projects/edu-s1-2.jpg', '/projects/edu-s1-3.jpg', '/projects/foto-putri-4.jpg'],
      contain: false,
      imageTag: t('education.1.tag'),
      imageCaption: t('education.1.caption'),
      uni: t('education.1.uni'),
      footer: t('education.1.footer'),
      highlights: [
        t('education.1.h1'),
        t('education.1.h2'),
        t('education.1.h3'),
        t('education.1.h4'),
      ].filter(Boolean),
    },
  ]

  return (
    <section id="education" className="relative py-24 px-4 md:px-8 overflow-hidden font-sans">
      {/* Background Waves */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.1] z-0">
        <svg className="w-full h-full" viewBox="0 0 1440 800" preserveAspectRatio="none" fill="none" stroke="currentColor">
          <path d="M0 200C300 100 400 300 720 200C1040 100 1140 300 1440 200" strokeWidth="2" />
          <path d="M0 400C300 300 400 500 720 400C1040 300 1140 500 1440 400" strokeWidth="2" />
          <path d="M0 600C300 500 400 700 720 600C1040 500 1140 700 1440 600" strokeWidth="2" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="mb-12 md:mb-16">
          <p className="text-[10px] tracking-[0.3em] uppercase text-[var(--muted)] mb-4 font-semibold font-sans">{t('education.label')}</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight font-sans">
            <TypewriterTitle text={t('education.title')} />
          </h2>
        </div>

        <div className="flex flex-col gap-10 md:gap-14">
          {educationList.map((edu, idx) => (
            <div
              key={idx}
              className="bg-[var(--card-bg)] border border-[var(--card-border)] hover:border-[var(--muted)] rounded-3xl p-6 sm:p-8 md:p-10 transition-all duration-300 shadow-sm hover:shadow-xl font-sans"
            >
              <div
                className={`flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch ${
                  idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Text Content inside the single card */}
                <div className="w-full lg:w-7/12 flex flex-col justify-between">
                  <div>
                    {/* Top Bar: UI Logo + Period + GPA */}
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                      <div className="flex items-center gap-3.5">
                        <div className="w-11 h-11 rounded-xl bg-pink-500/10 border border-pink-500/25 flex items-center justify-center text-pink-500 shrink-0">
                          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 10 12 5 2 10l10 5 10-5z" />
                            <path d="M6 12v5c3 2.5 9 2.5 12 0v-5" />
                            <path d="M22 10v6" />
                          </svg>
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] font-sans tracking-widest uppercase text-pink-500 font-semibold">
                              {edu.period}
                            </span>
                            <span className="text-xs text-[var(--muted)]">•</span>
                            <span className="text-[10px] font-sans tracking-wider uppercase text-[var(--muted)] font-semibold">
                              NO. {edu.number}
                            </span>
                          </div>
                          <h4 className="text-sm font-bold text-[var(--foreground)] font-sans">
                            {edu.institution}
                          </h4>
                        </div>
                      </div>

                      <div className="text-right bg-[var(--background)] border border-[var(--card-border)] rounded-2xl px-4 py-2 shrink-0 shadow-sm">
                        <p className="text-[10px] uppercase font-sans tracking-wider text-[var(--muted)] font-semibold">{edu.gpaLabel}</p>
                        <p className="text-xl md:text-2xl font-black font-sans text-pink-500">{edu.gpa}</p>
                      </div>
                    </div>

                    {/* Program Title & Degree */}
                    <div className="mb-4">
                      <h3 className="text-2xl md:text-3xl font-bold font-sans text-[var(--foreground)] tracking-tight">
                        {edu.program}
                      </h3>
                      <p className="text-xs md:text-sm font-semibold font-sans text-[var(--muted)] mt-1">
                        {t('education.degreeLabel')}: <span className="text-[var(--foreground)] font-bold">{edu.degree}</span>
                      </p>
                    </div>

                    <p className="text-sm font-sans text-[var(--muted)] leading-relaxed mb-6 text-justify">
                      {edu.description}
                    </p>

                    {/* Competency Highlights */}
                    <div className="space-y-2.5 pt-5 border-t border-[var(--card-border)]">
                      <p className="text-[10px] font-sans tracking-widest uppercase font-semibold text-[var(--muted)] mb-3">
                        {t('education.highlights.label')}
                      </p>
                      {edu.highlights.map((item, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2.5 text-xs md:text-sm font-sans text-[var(--foreground)] opacity-90">
                          <svg className="w-4 h-4 text-pink-500 shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-5 border-t border-[var(--card-border)]/60 flex items-center justify-between">
                    <span className="text-[10px] font-sans tracking-widest uppercase text-[var(--muted)] font-semibold">
                      {edu.footer}
                    </span>
                    <span className="text-xs font-semibold font-sans text-pink-500">
                      {edu.status}
                    </span>
                  </div>
                </div>

                {/* Photo Column inside the SAME single card */}
                <div className="w-full lg:w-5/12 flex">
                  <div
                    onClick={() => setPhoto((v) => v + 1)}
                    title={t('ui.changePhoto')}
                    className="relative w-full aspect-[3/4] sm:aspect-[4/3] lg:aspect-auto lg:h-full min-h-[260px] rounded-2xl overflow-hidden shadow-md border border-[var(--card-border)] bg-[var(--background)] group cursor-pointer"
                  >
                    <img
                      src={edu.images[photo % edu.images.length]}
                      alt={edu.program}
                      className={`w-full h-full group-hover:scale-105 transition-transform duration-500 ${edu.contain ? 'object-contain p-10 sm:p-14 bg-white' : 'object-cover object-[50%_65%]'}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    {/* University badge top-left */}
                    <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white text-xs font-semibold shadow-lg font-sans">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-pink-400">
                        <path d="M22 10 12 5 2 10l10 5 10-5z" />
                        <path d="M6 12v5c3 2.5 9 2.5 12 0v-5" />
                        <path d="M22 10v6" />
                      </svg>
                      <span>{edu.uni}</span>
                    </div>

                    {/* Penghitung foto (klik untuk ganti) */}
                    <div className="absolute top-14 right-4 px-2.5 py-1 rounded-full bg-black/65 backdrop-blur-md border border-white/20 text-white text-[10px] font-medium pointer-events-none">
                      {(photo % edu.images.length) + 1}/{edu.images.length}
                    </div>

                    {/* Period pill top-right */}
                    <div className="absolute top-4 right-4 hidden sm:inline-flex items-center px-3 py-1.5 rounded-full bg-pink-500/90 backdrop-blur-md text-white text-[11px] font-sans font-bold shadow-lg">
                      {edu.period}
                    </div>

                    {/* Bottom caption */}
                    <div className="absolute bottom-5 left-5 right-5 text-white">
                      <span className="text-[10px] uppercase font-sans tracking-widest text-pink-400 font-semibold block mb-1">
                        {edu.imageTag}
                      </span>
                      <p className="text-sm md:text-base font-bold font-sans drop-shadow-md">
                        {edu.imageCaption}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function AwardsSection() {
  const { t } = useLanguage()
  const [activeAwardIndex, setActiveAwardIndex] = useState(0)

  const certificationsList = [
    {
      id: 1,
      title: t('award.1.title'),
      issuer: t('award.1.issuer'),
      year: t('award.1.year'),
      category: t('award.1.cat'),
      description: t('award.1.desc'),
      image: '/projects/cert-bnsp.jpg',
      doc: '/projects/cert-bnsp-full.jpg',
    },
    {
      id: 2,
      title: t('award.2.title'),
      issuer: t('award.2.issuer'),
      year: t('award.2.year'),
      category: t('award.2.cat'),
      description: t('award.2.desc'),
      image: '/projects/cert-staf-sdm.jpg',
      doc: '/projects/cert-staf-sdm-full.jpg',
    },
    {
      id: 3,
      title: t('award.3.title'),
      issuer: t('award.3.issuer'),
      year: t('award.3.year'),
      category: t('award.3.cat'),
      description: t('award.3.desc'),
      image: '/projects/cert-toefl.jpg',
      doc: '/projects/cert-toefl-full.jpg',
    },
    {
      id: 4,
      title: t('award.4.title'),
      issuer: t('award.4.issuer'),
      year: t('award.4.year'),
      category: t('award.4.cat'),
      description: t('award.4.desc'),
      image: '/projects/cert-mockup.jpg',
      doc: '/projects/cert-mockup-full.jpg',
    },
    {
      id: 5,
      title: t('award.5.title'),
      issuer: t('award.5.issuer'),
      year: t('award.5.year'),
      category: t('award.5.cat'),
      description: t('award.5.desc'),
      image: '/projects/cert-kkn.jpg',
      doc: '/projects/cert-kkn-full.jpg',
    },
    {
      id: 6,
      title: t('award.6.title'),
      issuer: t('award.6.issuer'),
      year: t('award.6.year'),
      category: t('award.6.cat'),
      description: t('award.6.desc'),
      image: '/projects/cert-magang.jpg',
      doc: '/projects/cert-magang-full.jpg',
    },
  ]

  const getCardStyle = (offset: number) => {
    if (offset === 0) {
      return {
        transform: 'translate(-50%, -50%) scale(1)',
        zIndex: 30,
        opacity: 1,
        filter: 'brightness(1)',
        cursor: 'default',
      }
    }
    if (offset === 1) {
      return {
        transform: 'translate(calc(-50% + 42%), -50%) scale(0.85)',
        zIndex: 20,
        opacity: 0.75,
        filter: 'brightness(0.72)',
        cursor: 'pointer',
      }
    }
    if (offset === -1) {
      return {
        transform: 'translate(calc(-50% - 42%), -50%) scale(0.85)',
        zIndex: 20,
        opacity: 0.75,
        filter: 'brightness(0.72)',
        cursor: 'pointer',
      }
    }
    if (offset === 2) {
      return {
        transform: 'translate(calc(-50% + 76%), -50%) scale(0.72)',
        zIndex: 10,
        opacity: 0.45,
        filter: 'brightness(0.52)',
        cursor: 'pointer',
      }
    }
    if (offset === -2) {
      return {
        transform: 'translate(calc(-50% - 76%), -50%) scale(0.72)',
        zIndex: 10,
        opacity: 0.45,
        filter: 'brightness(0.52)',
        cursor: 'pointer',
      }
    }
    return {
      transform: 'translate(-50%, -50%) scale(0.5)',
      zIndex: 0,
      opacity: 0,
      filter: 'brightness(0.3)',
      cursor: 'pointer',
    }
  }

  return (
    <section id="awards" className="relative py-20 px-4 md:px-8 overflow-hidden font-sans">
      {/* Background Waves */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.1] z-0">
        <svg className="w-full h-full" viewBox="0 0 1440 800" preserveAspectRatio="none" fill="none" stroke="currentColor">
          <path d="M0 200C300 100 400 300 720 200C1040 100 1140 300 1440 200" strokeWidth="2" />
          <path d="M0 400C300 300 400 500 720 400C1040 300 1140 500 1440 400" strokeWidth="2" />
          <path d="M0 600C300 500 400 700 720 600C1040 500 1140 700 1440 600" strokeWidth="2" />
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header - Identik dengan susunan Work Gallery */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-8 gap-4">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-[var(--muted)] mb-3 font-semibold font-sans">
              {t('awards.label')}
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-3 font-sans">
              <TypewriterTitle text={t('awards.title')} />
            </h2>
            <p className="text-[var(--muted)] text-sm max-w-md font-sans">
              {t('awards.sub')}
            </p>
          </div>
          <a
            href={certificationsList[activeAwardIndex].doc}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--foreground)] text-[var(--background)] text-sm font-medium hover:opacity-90 transition-colors shrink-0"
          >
            {t('awards.openDoc')}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
        </div>

        {/* 3D Cover Flow Carousel - Lurus Sempurna Tanpa Miring, Jarak Rapat */}
        <div className="relative w-full h-[200px] sm:h-[250px] md:h-[290px] lg:h-[325px] flex items-center justify-center overflow-visible mt-4 mb-2 select-none">
          {certificationsList.map((item, index) => {
            let offset = index - activeAwardIndex
            const total = certificationsList.length
            while (offset > total / 2) offset -= total
            while (offset < -total / 2) offset += total

            const isActive = offset === 0
            const style = getCardStyle(offset)

            return (
              <div
                key={item.id}
                onClick={() => setActiveAwardIndex(index)}
                className="absolute top-1/2 left-1/2 w-[70%] sm:w-[56%] md:w-[48%] lg:w-[42%] max-w-[490px] transition-all duration-500 ease-out select-none"
                style={style}
              >
                <div
                  className={`rounded-2xl sm:rounded-3xl overflow-hidden border transition-all duration-300 ${
                    isActive
                      ? 'border-[var(--card-border)] ring-1 ring-[var(--card-border)] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.6)]'
                      : 'border-white/10 hover:brightness-125 shadow-xl'
                  }`}
                >
                  <div className="aspect-[16/10] flex items-center justify-center overflow-hidden bg-zinc-100 dark:bg-zinc-900">
                    <img
                      src={item.image}
                      alt={item.title}
                      draggable={false}
                      className="w-full h-full select-none object-center object-contain"
                    />
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Active certificate info - Berjarak Pas & Rapat di Bawah Foto */}
        <div className="text-center mt-3 sm:mt-4 max-w-3xl mx-auto px-4 font-sans">
          <p className="text-[11px] font-sans tracking-widest uppercase text-pink-500 font-semibold mb-1.5">
            {certificationsList[activeAwardIndex].category} • {certificationsList[activeAwardIndex].year}
          </p>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 font-sans text-[var(--foreground)]">
            {certificationsList[activeAwardIndex].title}
          </h3>
          <p className="text-xs md:text-sm font-semibold text-[var(--muted)] mb-2 font-sans">
            {t('awards.issuer')}: {certificationsList[activeAwardIndex].issuer}
          </p>
          <p className="text-[var(--muted)] text-sm md:text-base leading-relaxed mb-4 max-w-2xl mx-auto font-sans">
            {certificationsList[activeAwardIndex].description}
          </p>
          <a
            href={certificationsList[activeAwardIndex].doc}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold underline underline-offset-4 hover:opacity-75 transition-opacity font-sans text-[var(--foreground)]"
          >
            {t('awards.viewOriginal')}
          </a>
        </div>
      </div>
    </section>
  )
}

const orgIcon = (type: string) => {
  const common = { width: 20, height: 20, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }
  if (type === 'event')
    return (
      <svg {...common}>
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    )
  if (type === 'competition')
    return (
      <svg {...common}>
        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
        <line x1="4" y1="22" x2="4" y2="15" />
      </svg>
    )
  if (type === 'volunteer')
    return (
      <svg {...common}>
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    )
  if (type === 'program')
    return (
      <svg {...common}>
        <circle cx="12" cy="8" r="6" />
        <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
      </svg>
    )
  return (
    <svg {...common}>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}

export function TrainingsSection() {
  const { t } = useLanguage()

  const organizations = [
    { id: 1, type: 'program' },
    { id: 2, type: 'event' },
  ]

  return (
    <section id="trainings" className="relative py-24 px-4 md:px-8 overflow-x-clip font-sans">
      {/* Background Waves */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.1] z-0">
        <svg className="w-full h-full" viewBox="0 0 1440 800" preserveAspectRatio="none" fill="none" stroke="currentColor">
          <path d="M0 200C300 100 400 300 720 200C1040 100 1140 300 1440 200" strokeWidth="2" />
          <path d="M0 400C300 300 400 500 720 400C1040 300 1140 500 1440 400" strokeWidth="2" />
          <path d="M0 600C300 500 400 700 720 600C1040 500 1140 700 1440 600" strokeWidth="2" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase text-[var(--muted)] mb-4 font-semibold font-sans">
              {t('trainings.label')}
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight font-sans">
              <TypewriterTitle text={t('trainings.title')} />
            </h2>
          </div>
          <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--card-bg)] border border-[var(--card-border)] text-xs font-semibold tracking-wider text-[var(--muted)] shrink-0 w-max font-sans">
            {t('trainings.campus')}
          </span>
        </div>

        {/* Kartu organisasi (CV tidak menyertakan foto organisasi) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 font-sans">
          {organizations.map((item) => (
            <div
              key={item.id}
              data-org-card={item.id}
              className="group p-6 sm:p-8 rounded-3xl bg-[var(--card-bg)] border border-[var(--card-border)] hover:border-pink-500/60 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 shadow-sm flex flex-col font-sans"
            >
              <div className="flex items-start justify-between gap-4 mb-5">
                <div className="w-11 h-11 rounded-xl bg-pink-500/10 border border-pink-500/25 text-pink-500 flex items-center justify-center shrink-0">
                  {orgIcon(item.type)}
                </div>
                <span className="text-[10px] font-sans tracking-wider px-2.5 py-1 rounded-full border bg-[var(--background)] border-[var(--card-border)] text-[var(--muted)] font-medium shrink-0">
                  {t(`org.${item.id}.period`)}
                </span>
              </div>

              <h3 className="font-bold text-lg sm:text-xl leading-snug text-[var(--foreground)] group-hover:text-pink-500 transition-colors mb-1">
                {t(`org.${item.id}.inst`)}
              </h3>
              <p className="text-xs font-semibold text-[var(--muted)] mb-4">
                {t(`org.${item.id}.role`)} • <span className="opacity-75">{t(`org.${item.id}.loc`)}</span>
              </p>

              <p className="text-[var(--muted)] text-sm leading-relaxed mb-5">{t(`org.${item.id}.desc`)}</p>

              <div className="flex flex-wrap gap-1.5 pt-3 mt-auto border-t border-[var(--card-border)]/50">
                {t(`org.${item.id}.tags`).split('|').map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] px-2 py-0.5 rounded-md border font-medium bg-[var(--background)] border-[var(--card-border)] text-[var(--muted)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function PersonalSkillsSection() {
  const { t } = useLanguage()

  const softSkills = Array.from({ length: 8 }, (_, i) => ({
    title: t(`personal.soft.${i + 1}.t`),
    desc: t(`personal.soft.${i + 1}.d`),
  }))

  const technicalSkills = [
    { id: 1, Icon: OfficeLogo },
    { id: 2, Icon: null, icon: icons.chart },
    { id: 3, Icon: null, icon: icons.calc },
    { id: 4, Icon: null, icon: icons.clipboard },
  ]

  const languages = [{ id: 1 }]

  return (
    <section id="personal-skills" className="relative py-24 px-4 md:px-8 overflow-hidden">
      {/* Background Waves */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.1] z-0">
        <svg className="w-full h-full" viewBox="0 0 1440 800" preserveAspectRatio="none" fill="none" stroke="currentColor">
          <path d="M0 200C300 100 400 300 720 200C1040 100 1140 300 1440 200" strokeWidth="2" />
          <path d="M0 400C300 300 400 500 720 400C1040 300 1140 500 1440 400" strokeWidth="2" />
          <path d="M0 600C300 500 400 700 720 600C1040 500 1140 700 1440 600" strokeWidth="2" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="text-[10px] tracking-[0.3em] uppercase text-[var(--muted)] mb-4 font-semibold">{t('personal.label')}</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            <TypewriterTitle text={t('personal.title')} />
          </h2>
          <p className="text-[var(--muted)] text-sm md:text-base max-w-xl">
            {t('personal.sub')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Soft Skills */}
          <div className="lg:col-span-7 bg-[var(--card-bg)] border border-[var(--card-border)] rounded-3xl p-8 md:p-10 shadow-sm flex flex-col justify-between">
            <div>
              <div className="mb-8 pb-4 border-b border-[var(--card-border)]">
                <div>
                  <span className="text-[10px] font-sans tracking-widest uppercase text-pink-500 font-semibold block mb-1">
                    {t('personal.soft.label')}
                  </span>
                  <h3 className="text-2xl font-bold">{t('personal.soft.title')}</h3>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {softSkills.map((skill, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-[var(--background)] border border-[var(--card-border)] hover:border-[var(--muted)] transition-colors">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="w-2 h-2 rounded-full bg-pink-500 shrink-0"></span>
                      <h4 className="font-bold text-sm text-[var(--foreground)]">{skill.title}</h4>
                    </div>
                    <p className="text-xs text-[var(--muted)] leading-relaxed">{skill.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[var(--card-border)] flex items-center justify-between gap-4 text-xs text-[var(--muted)]">
              <span>{t('personal.orientation')}</span>
              <span className="font-sans text-pink-500 font-semibold text-right">{t('personal.quality')}</span>
            </div>
          </div>

          {/* Right Column: Technical Skills & Languages */}
          <div className="lg:col-span-5 bg-[var(--card-bg)] border border-[var(--card-border)] rounded-3xl p-8 md:p-10 shadow-sm flex flex-col justify-between">
            <div>
              <div className="mb-8 pb-4 border-b border-[var(--card-border)]">
                <div>
                  <span className="text-[10px] font-sans tracking-widest uppercase text-pink-500 font-semibold block mb-1">
                    {t('personal.hard.label')}
                  </span>
                  <h3 className="text-2xl font-bold">{t('personal.hard.title')}</h3>
                </div>
              </div>

              <div className="space-y-4">
                {technicalSkills.map((sw) => (
                  <div key={sw.id} className="p-4 rounded-2xl bg-[var(--background)] border border-[var(--card-border)] hover:border-[var(--muted)] transition-colors flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 border border-[var(--card-border)] bg-[var(--card-bg)] shadow-sm p-2">
                      {sw.Icon ? <sw.Icon className="w-7 h-7 shrink-0" /> : sw.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="mb-1">
                        <h4 className="font-bold text-sm md:text-base text-[var(--foreground)]">{t(`personal.hard.${sw.id}.t`)}</h4>
                      </div>
                      <p className="text-xs text-[var(--muted)] leading-relaxed">{t(`personal.hard.${sw.id}.d`)}</p>
                    </div>
                  </div>
                ))}

                <div className="grid grid-cols-1 gap-4 pt-2">
                  {languages.map((lg) => (
                    <div key={lg.id} className="p-4 rounded-2xl bg-[var(--background)] border border-[var(--card-border)] hover:border-[var(--muted)] transition-colors">
                      <h4 className="font-bold text-sm text-[var(--foreground)] mb-1">{t(`personal.lang.${lg.id}.t`)}</h4>
                      <p className="text-xs text-pink-500 font-semibold">{t(`personal.lang.${lg.id}.l`)}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[var(--card-border)] flex items-center justify-between gap-4 text-xs text-[var(--muted)]">
              <span>{t('personal.app')}</span>
              <span className="font-sans text-pink-500 font-semibold text-right">{t('personal.ready')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
