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
        {/* Glowing Heart centerpiece (refined) */}
        <div className="relative mt-4 h-64 w-64 sm:h-80 sm:w-80">
          {/* Outer glow halo */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-pink-400/50 via-rose-400/45 to-fuchsia-400/55 blur-2xl" />

          {/* Heart SVG */}
          <svg
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 drop-shadow-[0_10px_35px_rgba(236,72,153,0.45)]"
            width="100%"
            height="100%"
            viewBox="0 0 200 200"
            role="img"
            aria-label="Love heart"
            shapeRendering="geometricPrecision"
          >
            <defs>
              {/* main fill */}
              <linearGradient id="heartGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#fb7185" />
                <stop offset="50%" stopColor="#ec4899" />
                <stop offset="100%" stopColor="#db2777" />
              </linearGradient>
              {/* glossy highlight */}
              <radialGradient id="heartHighlight" cx="34%" cy="32%" r="60%">
                <stop offset="0%" stopColor="rgba(255,255,255,0.95)" />
                <stop offset="12%" stopColor="rgba(255,255,255,0.75)" />
                <stop offset="46%" stopColor="rgba(244,114,182,0.3)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0)" />
              </radialGradient>
              {/* gradient stroke around border */}
              <linearGradient id="heartStroke" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#ffe4e6" />
                <stop offset="45%" stopColor="#f9a8d4" />
                <stop offset="100%" stopColor="#f472b6" />
              </linearGradient>
              {/* inner light rim */}
              <linearGradient id="innerStroke" x1="0.2" y1="0" x2="0.8" y2="1">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
              </linearGradient>
              {/* soft outer glow following path */}
              <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              {/* subtle inner shadow to tidy edge */}
              <filter id="innerShadow" x="-50%" y="-50%" width="200%" height="200%">
                <feOffset dx="0" dy="1" />
                <feGaussianBlur stdDeviation="1.4" result="offBlur" />
                <feComposite in="offBlur" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="innerShadow" />
                <feColorMatrix in="innerShadow" type="matrix" values="0 0 0 0 0.9  0 0 0 0 0.2  0 0 0 0 0.4  0 0 0 0.35 0" />
                <feComposite in2="SourceGraphic" operator="over" />
              </filter>
            </defs>

            {/* Smooth, symmetric heart path */}
            <g className="origin-center animate-pulse-heart" filter="url(#softGlow)">
              {/* Base */}
              <path
                d="M100 175 C 70 155, 28 125, 18 85 C 14 68, 18 48, 34 34 C 51 20, 76 22, 90 36 L 100 46 L 110 36 C 124 22, 149 20, 166 34 C 182 48, 186 68, 182 85 C 172 125, 130 155, 100 175 Z"
                fill="url(#heartGrad)"
                style={{ paintOrder: 'stroke fill markers' }}
                filter="url(#innerShadow)"
              />
              {/* Highlight overlay */}
              <path
                d="M100 168 C 74 150, 32 122, 24 88 C 21 74, 23 57, 36 46 C 51 34, 72 36, 85 50 L 100 66 L 115 50 C 128 36, 149 34, 164 46 C 177 57, 179 74, 176 88 C 168 122, 126 150, 100 168 Z"
                fill="url(#heartHighlight)"
              />
              {/* Outer gradient border */}
              <path
                d="M100 175 C 70 155, 28 125, 18 85 C 14 68, 18 48, 34 34 C 51 20, 76 22, 90 36 L 100 46 L 110 36 C 124 22, 149 20, 166 34 C 182 48, 186 68, 182 85 C 172 125, 130 155, 100 175 Z"
                fill="none"
                stroke="url(#heartStroke)"
                strokeWidth="4.5"
                strokeLinejoin="round"
                strokeLinecap="round"
                vectorEffect="non-scaling-stroke"
                opacity="0.95"
              />
              {/* Inner light rim */}
              <path
                d="M100 167 C 74 149, 32 121, 24 87 C 21 73, 23 56, 36 45 C 51 33, 72 35, 85 49 L 100 65 L 115 49 C 128 35, 149 33, 164 45 C 177 56, 179 73, 176 87 C 168 121, 126 149, 100 167 Z"
                fill="none"
                stroke="url(#innerStroke)"
                strokeWidth="2"
                strokeLinejoin="round"
                strokeLinecap="round"
                vectorEffect="non-scaling-stroke"
                opacity="0.8"
              />
            </g>
          </svg>

          {/* Sparkles (tidier layout, fewer, avoid border) */}
          <div className="absolute inset-0">
            {[{l:18,t:22},{l:72,t:18},{l:30,t:70},{l:80,t:64},{l:56,t:34},{l:40,t:28},{l:66,t:78},{l:22,t:56},{l:86,t:42},{l:14,t:38}].map((p, i) => (
              <span
                key={i}
                className="sparkle absolute h-1.5 w-1.5 rounded-full bg-white/90 shadow-[0_0_12px_2px_rgba(255,255,255,0.85)]"
                style={{ left: `${p.l}%`, top: `${p.t}%`, animationDelay: `${(i % 5) * 0.25}s` }}
              />
            ))}
          </div>

          {/* Floating mini hearts */}
          <div className="pointer-events-none absolute inset-0" aria-hidden>
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="float-heart absolute opacity-80"
                style={{
                  left: `${12 + i * 16}%`,
                  bottom: `${(i * 8) % 12}%`,
                  animationDelay: `${i * 0.6}s`,
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

      {/* Component-scoped styles for animations and responsiveness */}
      <style>{`
        @keyframes pulseGlowSvg {
          0%, 100% { transform: scale(1); filter: drop-shadow(0 0 10px rgba(244,63,94,0.45)) drop-shadow(0 0 22px rgba(236,72,153,0.35)); }
          50% { transform: scale(1.05); filter: drop-shadow(0 0 22px rgba(244,63,94,0.85)) drop-shadow(0 0 44px rgba(236,72,153,0.65)); }
        }
        .animate-pulse-heart { animation: pulseGlowSvg 2.8s ease-in-out infinite; transform-origin: 50% 50%; }

        @keyframes floatUp {
          0% { transform: translateY(0) scale(1); opacity: 0.9; }
          60% { opacity: 1; }
          100% { transform: translateY(-120px) scale(1.1); opacity: 0; }
        }
        @keyframes twinkle {
          0%, 100% { transform: scale(1); opacity: .8; }
          50% { transform: scale(1.45); opacity: 1; }
        }

        .float-heart { animation: floatUp 5.4s ease-in infinite; }
        .sparkle { animation: twinkle 1.6s ease-in-out infinite; }

        /* Scale stroke thickness slightly on small screens for tidy edges */
        @media (max-width: 640px) {
          svg [stroke-width="4.5"] { stroke-width: 3.8; }
          svg [stroke-width="2"] { stroke-width: 1.6; }
        }
      `}</style>
    </div>
  )
}

export default App
