import Link from "next/link"
export function Header() {
  return (
    <header className="h-[200px] md:h-[300px] relative w-full overflow-hidden bg-gradient-to-br from-lime-200 via-orange-200 to-lime-100">
      {/* Background gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-tr from-orange-300/40 via-transparent to-lime-300/40"></div>
      <div className="absolute inset-0 bg-gradient-to-bl from-lime-400/20 via-orange-300/20 to-transparent border-solid border-black border-8 border-l-0 border-r-0 border-t-0 bg-white border-b"></div>

      <div className="absolute top-4 right-4 md:top-6 md:right-8 flex gap-3 md:gap-4 z-10">
        <Link
          href="https://www.deviantart.com/ioartseu/gallery/all"
          target="_blank"
          rel="noopener noreferrer"
          className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-foreground/10 hover:bg-foreground/20 rounded-full transition-all hover:scale-110"
          aria-label="DeviantArt"
        >
          <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19.207 4.794l.23-.43V0H15.07l-.436.44-2.058 3.925-.646.436H7.618v5.993h2.742l.436.436-3.262 6.224-.24.435V24h4.364l.44-.44 2.058-3.925.646-.436h4.312v-5.993h-2.742l-.436-.436 3.262-6.224z" />
          </svg>
        </Link>

        <Link
          href="https://instagram.com/ioarts"
          target="_blank"
          rel="noopener noreferrer"
          className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-foreground/10 hover:bg-foreground/20 rounded-full transition-all hover:scale-110"
          aria-label="Instagram"
        >
          <svg
            className="w-5 h-5 md:w-6 md:h-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
        </Link>

        <Link
          href="https://twitter.com/ioarts"
          target="_blank"
          rel="noopener noreferrer"
          className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-foreground/10 hover:bg-foreground/20 rounded-full transition-all hover:scale-110"
          aria-label="Twitter/X"
        >
          <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </Link>
      </div>

      {/* Logo/Title */}
      <h1 className="absolute font-title leading-normal left-4 md:left-[108px] md:text-[128px] text-foreground top-12 md:top-[50px] whitespace-nowrap text-3xl z-20">
        ioarts
      </h1>

      {/* Decorative line 0 - above the title line */}
      <div className="hidden md:block absolute h-0 left-[108px] top-[120px] w-[800px] z-10">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block w-full h-full mt-2" fill="none" preserveAspectRatio="none" viewBox="0 0 800 1">
            <line stroke="currentColor" className="text-foreground" x2="800" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>

      {/* Decorative line 1 - shortened to 800px to fit navigation */}
      <div className="hidden md:block absolute h-0 left-[108px] top-[180px] w-[800px] z-10">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block w-full h-full mt-2" fill="none" preserveAspectRatio="none" viewBox="0 0 800 1">
            <line stroke="currentColor" className="text-foreground" x2="800" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>

      {/* Navigation Menu - moved after the line at x: 920px */}
      <nav className="absolute left-4 md:left-[920px] top-4 md:top-[174px] flex gap-4 md:gap-8 text-sm md:text-lg font-title items-center ml-11 mb-0 z-10">
        <Link
          href="https://www.deviantart.com/ioartseu/gallery/all"
          className="text-foreground hover:opacity-70 transition-opacity font-black"
        >
          home
        </Link>
        <Link href="/" className="text-foreground hover:opacity-70 transition-opacity font-black">
          make
        </Link>
      </nav>

      {/* Decorative line 2 */}
      <div className="hidden md:block absolute left-[108px] top-[240px] w-[1558px] h-0 z-10">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1558 1">
            <line stroke="currentColor" className="text-foreground" x2="1558" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </header>
  )
}
