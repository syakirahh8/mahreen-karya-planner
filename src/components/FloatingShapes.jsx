export function YellowCube({ className = '' }) {
  return (
    <div className={`relative inline-block ${className}`}>
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Isometric Cube */}
        <path d="M16 3L28 9.5V22.5L16 29L4 22.5V9.5L16 3Z" fill="#FCE762" stroke="#1A1D26" strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M16 16L28 9.5M16 16V29M16 16L4 9.5" stroke="#1A1D26" strokeWidth="2.5" strokeLinejoin="round" />
      </svg>
    </div>
  )
}

export function LavenderDot({ className = '' }) {
  return (
    <div className={`w-4 h-4 rounded-full bg-brand-lavender border-2 border-brand-dark shadow-brutal-sm ${className}`} />
  )
}

export function SparkIcon({ className = '' }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
    </svg>
  )
}
