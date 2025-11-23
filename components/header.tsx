import Link from "next/link"

export function Header() {
  return (
    <header className="h-[200px] md:h-[361px] relative w-full bg-muted">
      {/* Navigation Menu */}
      <nav className="absolute left-4 md:left-[108px] top-4 md:top-[20px] flex gap-4 md:gap-8 text-sm md:text-base">
        <Link href="/" className="text-foreground hover:opacity-70 transition-opacity">
          home
        </Link>
        <Link href="/products" className="text-foreground hover:opacity-70 transition-opacity">
          make
        </Link>
      </nav>

      {/* Logo/Title */}
      <h1 className="absolute font-title leading-normal left-4 md:left-[108px] text-5xl md:text-[128px] text-foreground top-12 md:top-[66px] whitespace-nowrap">
        ioarts
      </h1>

      {/* Decorative line 1 */}
      <div className="hidden md:block absolute h-0 left-[108px] top-[221px] w-[1072px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1072 1">
            <line stroke="currentColor" className="text-foreground" x2="1072" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>

      {/* Decorative line 2 */}
      <div className="hidden md:block absolute left-[108px] top-[280px] w-[1558px] h-0">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1558 1">
            <line stroke="currentColor" className="text-foreground" x2="1558" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </header>
  )
}
