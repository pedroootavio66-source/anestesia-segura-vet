// Logo ASV: monitor de sinais vitais com traçado de ECG em teal.
// Reaproveitado no Navbar e no Footer.
export default function Logo({ withWordmark = true, size = 34, className = '' }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg viewBox="0 0 64 64" width={size} height={size} aria-hidden="true">
        <rect x="8" y="10" width="48" height="32" rx="4" fill="none" stroke="#B8C4CC" strokeWidth="3" />
        <rect x="26" y="42" width="12" height="6" fill="#B8C4CC" />
        <rect x="20" y="49" width="24" height="4" rx="2" fill="#B8C4CC" />
        <polyline
          points="12,27 20,27 23,19 28,35 32,14 36,27 52,27"
          fill="none"
          stroke="#2BB3B3"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {withWordmark && (
        <span className="font-display text-sm font-semibold tracking-[0.2em] text-ink">
          ANESTESIA<span className="text-teal"> SEGURA VET</span>
        </span>
      )}
    </span>
  )
}
