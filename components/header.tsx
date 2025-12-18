import Link from "next/link"
export function Header() {
  return (
    <header className="h-[200px] md:h-[300px] relative w-full overflow-hidden bg-gradient-to-br from-lime-200 via-pink-200 to-lime-100">
      {/* Background gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-tr from-pink-300/40 via-transparent to-lime-300/40"></div>
      <div className="absolute inset-0 bg-gradient-to-bl from-lime-400/20 via-pink-300/20 to-transparent"></div>

      {/* Logo/Title */}
      <h1 className="absolute font-title leading-normal left-4 md:left-[108px] md:text-[128px] text-foreground top-12 md:top-[50px] whitespace-nowrap text-3xl z-10">
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
        <Link href="/" className="text-foreground hover:opacity-70 transition-opacity">
          home
        </Link>
        <Link href="/" className="text-foreground hover:opacity-70 transition-opacity">
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
