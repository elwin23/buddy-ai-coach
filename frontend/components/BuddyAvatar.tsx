'use client'

interface BuddyAvatarProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export default function BuddyAvatar({ size = 'md', className = '' }: BuddyAvatarProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  }

  return (
    <div className={`${sizeClasses[size]} ${className} flex-shrink-0`}>
      <svg 
        viewBox="0 0 120 120" 
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Badeend lichaam (geel) */}
        <ellipse cx="60" cy="75" rx="35" ry="30" fill="#FFD700" stroke="#FFA500" strokeWidth="2"/>
        
        {/* Badeend kop (geel) */}
        <ellipse cx="60" cy="45" rx="28" ry="32" fill="#FFD700" stroke="#FFA500" strokeWidth="2"/>
        
        {/* Hippe pet (achter bril) */}
        <path d="M 35 35 Q 60 25 85 35 L 80 45 Q 60 40 40 45 Z" fill="#1a1a1a"/>
        <path d="M 40 38 Q 60 30 80 38" stroke="#333" strokeWidth="1.5" fill="none"/>
        
        {/* Bril */}
        <circle cx="50" cy="50" r="8" fill="none" stroke="#2c3e50" strokeWidth="2.5"/>
        <circle cx="70" cy="50" r="8" fill="none" stroke="#2c3e50" strokeWidth="2.5"/>
        <line x1="58" y1="50" x2="62" y2="50" stroke="#2c3e50" strokeWidth="2.5"/>
        <line x1="42" y1="50" x2="38" y2="48" stroke="#2c3e50" strokeWidth="2"/>
        <line x1="78" y1="50" x2="82" y2="48" stroke="#2c3e50" strokeWidth="2"/>
        
        {/* Baard */}
        <path d="M 45 60 Q 50 65 55 60 Q 60 65 65 60 Q 70 65 75 60 Q 70 70 65 68 Q 60 72 55 68 Q 50 72 45 68 Q 40 70 45 60" fill="#8B4513" opacity="0.8"/>
        <path d="M 48 62 Q 52 66 56 62" stroke="#654321" strokeWidth="1" fill="none"/>
        <path d="M 64 62 Q 68 66 72 62" stroke="#654321" strokeWidth="1" fill="none"/>
        
        {/* Snavel (oranje) */}
        <ellipse cx="60" cy="58" rx="12" ry="6" fill="#FF8C00"/>
        <line x1="52" y1="58" x2="48" y2="58" stroke="#FF6600" strokeWidth="1"/>
        
        {/* Oog (achter bril) */}
        <circle cx="50" cy="50" r="3" fill="#000"/>
        <circle cx="70" cy="50" r="3" fill="#000"/>
        <circle cx="51" cy="49" r="1" fill="#fff"/>
        <circle cx="71" cy="49" r="1" fill="#fff"/>
        
        {/* Water golven onderaan */}
        <path d="M 25 95 Q 35 90 45 95 T 65 95 T 85 95 T 105 95" stroke="#4A90E2" strokeWidth="2" fill="none" opacity="0.6"/>
        <path d="M 30 100 Q 40 95 50 100 T 70 100 T 90 100" stroke="#4A90E2" strokeWidth="2" fill="none" opacity="0.4"/>
      </svg>
    </div>
  )
}
