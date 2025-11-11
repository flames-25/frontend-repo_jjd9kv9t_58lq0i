import React from 'react'

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-pink-100 via-rose-100 to-fuchsia-100">
      {/* Soft vignette */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -top-20 -left-20 h-80 w-80 rounded-full bg-pink-300/30 blur-3xl" />
        <div className="absolute top-40 -right-10 h-96 w-96 rounded-full bg-rose-300/30 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-72 w-[36rem] rounded-full bg-fuchsia-300/30 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0)_20%,rgba(244,114,182,0.08)_55%,rgba(190,24,93,0.14)_100%)]" />
      </div>

      {/* Navigation (simple brand) */}
      <header className="relative z-10 mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-pink-400 to-rose-500 shadow-lg shadow-rose-300/40">
            <span className="sr-only">Cinta</span>
          </span>
          <p className="text-xl font-semibold tracking-wide text-rose-700">Cinta Indah</p>
        </div>
      </header>

      {/* Hero Section (no title text) */}
      <main className="relative z-10 mx-auto flex min-h-[70vh] w-full max-w-6xl flex-col items-center justify-center px-6 text-center">
        {/* Glowing Heart centerpiece (SVG for perfect geometry) */}
        <div className="relative mt-4 h-64 w-64 sm:h-80 sm:w-80">
          {/* Outer glow halo */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-pink-400/50 via-rose-400/45 to-fuchsia-400/55 blur-2xl" />

          {/* Heart SVG */}
          <svg
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 drop-shadow-[0_10px_35px_rgba(236,72,153,0.45)]"
            width="100%"
            height="100%"
            viewBox="0 0 200 180"
            role="img"
            aria-label="Love heart"
          >
            <defs>
              <linearGradient id="heartGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#fb7185" />
                <stop offset="50%" stopColor="#ec4899" />
                <stop offset="100%" stopColor="#db2777" />
              </linearGradient>
              <radialGradient id="heartHighlight" cx="35%" cy="30%" r="60%">
                <stop offset="0%" stopColor="rgba(255,255,255,0.95)" />
                <stop offset="10%" stopColor="rgba(255,255,255,0.75)" />
                <stop offset="45%" stopColor="rgba(244,114,182,0.35)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0)" />
              </radialGradient>
              <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="6" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <g filter="url(#softGlow)" className="origin-center animate-pulse-heart">
              {/* Base heart */}
              <path
                d="M100 168 C 70 148, 22 120, 12 82 C 8 66, 12 46, 28 34 C 46 20, 72 22, 86 36 L 100 50 L 114 36 C 128 22, 154 20, 172 34 C 188 46, 192 66, 188 82 C 178 120, 130 148, 100 168 Z"
                fill="url(#heartGrad)"
              />
              {/* Inner shading */}
              <path
                d="M100 160 C 74 142, 30 116, 22 82 C 19 69, 21 53, 34 43 C 49 31, 70 33, 83 47 L 100 64 L 117 47 C 130 33, 151 31, 166 43 C 179 53, 181 69, 178 82 C 170 116, 126 142, 100 160 Z"
                fill="url(#heartHighlight)"
              />
            </g>
          </svg>

          {/* Sparkles */}
          <div className="absolute inset-0">
            {Array.from({ length: 18 }).map((_, i) => (
              <span
                key={i}
                className="sparkle absolute h-1.5 w-1.5 rounded-full bg-white/90 shadow-[0_0_12px_2px_rgba(255,255,255,0.85)]"
                style={{
                  left: `${(i * 37) % 100}%`,
                  top: `${(i * 23) % 100}%`,
                  animationDelay: `${(i % 7) * 0.25}s`,
                }}
              />
            ))}
          </div>

          {/* Floating mini hearts */}
          <div className="pointer-events-none absolute inset-0" aria-hidden>
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="float-heart absolute opacity-80"
                style={{
                  left: `${10 + i * 14}%`,
                  bottom: `${(i * 9) % 12}%`,
                  animationDelay: `${i * 0.55}s`,
                }}
              >
                <svg width="26" height="24" viewBox="0 0 50 46" className="drop-shadow-[0_6px_14px_rgba(244,63,94,0.35)]">
                  <defs>
                    <linearGradient id={`mini-${i}`} x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#fb7185" />
                      <stop offset="100%" stopColor="#ec4899" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M25 44 C 18 39, 6 32, 4 22 C 3 18, 4 13, 9 9 C 14 5, 21 6, 24 10 L 25 12 L 26 10 C 29 6, 36 5, 41 9 C 46 13, 47 18, 46 22 C 44 32, 32 39, 25 44 Z"
                    fill={`url(#mini-${i})`}
                  />
                </svg>
              </div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#cinta"
            className="group rounded-full bg-gradient-to-r from-rose-500 to-pink-500 px-7 py-3 text-white shadow-lg shadow-rose-300/50 transition-transform hover:scale-[1.03] focus:outline-none focus:ring-2 focus:ring-rose-400"
          >
            Untukmu, Wanita Hebat
            <span className="ml-2 inline-block transition-transform group-hover:translate-x-0.5">❤</span>
          </a>
          <a
            href="/test"
            className="rounded-full bg-white/70 px-7 py-3 text-rose-700 shadow-md backdrop-blur-md transition-colors hover:bg-white"
          >
            Cek Koneksi Backend
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 mx-auto w-full max-w-6xl px-6 py-10 text-center text-sm text-rose-700/70">
        Dibuat dengan cinta — semoga harimu dipenuhi kebahagiaan ✨
      </footer>

      {/* Component-scoped styles for animations */}
      <style>{`
        @keyframes pulseGlowSvg {
          0%, 100% { transform: scale(1); filter: drop-shadow(0 0 10px rgba(244,63,94,0.45)) drop-shadow(0 0 22px rgba(236,72,153,0.35)); }
          50% { transform: scale(1.06); filter: drop-shadow(0 0 22px rgba(244,63,94,0.85)) drop-shadow(0 0 44px rgba(236,72,153,0.65)); }
        }
        .animate-pulse-heart { animation: pulseGlowSvg 2.8s ease-in-out infinite; transform-origin: 50% 50%; }

        @keyframes floatUp {
          0% { transform: translateY(0) scale(1); opacity: 0.9; }
          60% { opacity: 1; }
          100% { transform: translateY(-120px) scale(1.1); opacity: 0; }
        }
        @keyframes twinkle {
          0%, 100% { transform: scale(1); opacity: .8; }
          50% { transform: scale(1.5); opacity: 1; }
        }

        .float-heart { animation: floatUp 5.2s ease-in infinite; }
        .sparkle { animation: twinkle 1.6s ease-in-out infinite; }
      `}</style>
    </div>
  )
}

export default App
