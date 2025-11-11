import React from 'react'

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-pink-100 via-rose-100 to-fuchsia-100">
      {/* Soft vignette */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -top-20 -left-20 h-80 w-80 rounded-full bg-pink-300/30 blur-3xl" />
        <div className="absolute top-40 -right-10 h-96 w-96 rounded-full bg-rose-300/30 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-72 w-[36rem] rounded-full bg-fuchsia-300/30 blur-3xl" />
      </div>

      {/* Navigation (simple brand) */}
      <header className="relative z-10 mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-pink-400 to-rose-500 shadow-lg shadow-rose-300/40">
            <span className="i-heart" />
          </span>
          <p className="text-xl font-semibold tracking-wide text-rose-700">Cinta Indah</p>
        </div>
      </header>

      {/* Hero Section */}
      <main className="relative z-10 mx-auto flex min-h-[70vh] w-full max-w-6xl flex-col items-center justify-center px-6 text-center">
        <p className="mb-3 inline-flex items-center rounded-full bg-white/70 px-4 py-1 text-sm font-medium text-rose-600 shadow-sm backdrop-blur-md">
          Dibuat dengan kelembutan dan kasih
        </p>
        <h1 className="mt-2 bg-gradient-to-br from-rose-700 via-fuchsia-700 to-pink-700 bg-clip-text text-5xl font-extrabold leading-tight text-transparent sm:text-6xl">
          Website bernuansa pink, hangat, dan penuh cinta
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-rose-700/80">
          Untuk wanita yang istimewa — kilau hati yang menyala lembut, bunga-bunga
          berpendar, dan nuansa romantis yang menenangkan.
        </p>

        {/* Glowing Heart centerpiece */}
        <div className="relative mt-10 h-64 w-64 sm:h-80 sm:w-80">
          {/* Outer glow */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-pink-400/60 via-rose-400/50 to-fuchsia-400/60 blur-2xl" />

          {/* Heart Shape */}
          <div className="heart absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 sm:h-56 sm:w-56" />

          {/* Sparkles */}
          <div className="absolute inset-0">
            {Array.from({ length: 18 }).map((_, i) => (
              <span
                key={i}
                className="sparkle absolute h-1.5 w-1.5 rounded-full bg-white/90 shadow-[0_0_12px_2px_rgba(255,255,255,0.85)]"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                }}
              />
            ))}
          </div>

          {/* Floating hearts */}
          <div className="pointer-events-none absolute inset-0" aria-hidden>
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="float-heart absolute opacity-80"
                style={{
                  left: `${10 + i * 14}%`,
                  bottom: `${Math.random() * 10}%`,
                  animationDelay: `${i * 0.6}s`,
                }}
              >
                <div className="heart tiny" />
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

      {/* Component-scoped styles for heart + animations */}
      <style>{`
        @keyframes pulseGlow {
          0%, 100% { filter: drop-shadow(0 0 12px rgba(244, 63, 94, 0.55)) drop-shadow(0 0 28px rgba(236, 72, 153, 0.45)); transform: translate(-50%, -50%) scale(1); }
          50% { filter: drop-shadow(0 0 22px rgba(244, 63, 94, 0.8)) drop-shadow(0 0 42px rgba(236, 72, 153, 0.7)); transform: translate(-50%, -50%) scale(1.06); }
        }
        @keyframes floatUp {
          0% { transform: translateY(0) scale(1); opacity: 0.9; }
          60% { opacity: 1; }
          100% { transform: translateY(-120px) scale(1.1); opacity: 0; }
        }
        @keyframes twinkle {
          0%, 100% { transform: scale(1); opacity: .8; }
          50% { transform: scale(1.5); opacity: 1; }
        }
        .heart {
          position: absolute;
          transform: translate(-50%, -50%);
          animation: pulseGlow 2.8s ease-in-out infinite;
        }
        .heart::before,
        .heart::after {
          content: '';
          position: absolute;
          width: 50%;
          height: 80%;
          background: radial-gradient(80% 90% at 50% 20%, rgba(255,255,255,.9), rgba(244,114,182,.6) 40%, rgba(244,63,94,.9) 80%);
          border-radius: 50% 50% 0 0;
          box-shadow: 0 18px 40px rgba(244, 63, 94, .35), inset 0 4px 14px rgba(255,255,255,.55);
        }
        .heart::before { left: 0; transform: rotate(-45deg) translateX(18%); transform-origin: 100% 100%; }
        .heart::after { right: 0; transform: rotate(45deg) translateX(-18%); transform-origin: 0 100%; }
        .heart.tiny { width: 24px; height: 24px; animation: none; }
        .heart.tiny::before,
        .heart.tiny::after { box-shadow: 0 8px 20px rgba(244, 63, 94, .25), inset 0 3px 8px rgba(255,255,255,.55); background: radial-gradient(80% 90% at 50% 20%, rgba(255,255,255,.9), rgba(244,114,182,.7) 45%, rgba(244,63,94,.95) 85%); }
        .float-heart { animation: floatUp 5s ease-in infinite; }
        .sparkle { animation: twinkle 1.6s ease-in-out infinite; }
      `}</style>
    </div>
  )
}

export default App
