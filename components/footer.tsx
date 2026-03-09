"use client"

export default function Footer() {
  return (
    <footer className="border-t border-amber-900/30 py-12 px-4 relative z-10 bg-black/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <p className="text-gray-400 text-sm mb-6">© 2025 Heaven Gambler. All rights reserved.</p>

          <p className="text-gray-500 text-xs leading-relaxed max-w-2xl mx-auto mb-6">
            <span className="font-semibold">Gamble responsibly (18+).</span> Do not spend or gambling in a way to make
            money only. Gamble for fun and entertainment. Gambling can be addictive, please play responsibly and only
            gamble what you can afford to lose. If you or someone you know has a gambling problem, please seek help at{" "}
            <a href="https://www.gambleaware.org" className="text-amber-400 hover:underline">
              gambleaware.org
            </a>
          </p>

          <div className="mt-6 text-center">
          <p className="text-gray-500 text-xs">
            Made with <span className="text-red-500">❤️</span> by{' '}
            <a href="http://superwotec.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-gray-300 font-medium hover:text-red-600 transition-colors">superwotec</a>
          </p>
        </div>
        </div>
      </div>
    </footer>
  )
}
