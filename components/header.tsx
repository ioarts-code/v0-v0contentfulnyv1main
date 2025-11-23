import Link from "next/link"

export function Header() {
  return (
    <header className="h-[361px] relative w-full bg-muted">
      {/* Navigation Menu */}
      <nav className="absolute left-[108px] top-[20px] flex gap-8">
        <Link href="/" className="text-foreground hover:opacity-70 transition-opacity">
          home
        </Link>
        <Link href="/products" className="text-foreground hover:opacity-70 transition-opacity">
          All products
        </Link>
      </nav>

      {/* Logo/Title */}
      <h1 className="absolute font-title leading-normal left-[108px] text-[128px] text-foreground top-[66px] whitespace-nowrap">
        typeform
      </h1>

      {/* Decorative line 1 */}
      <div className="absolute h-0 left-[108px] top-[221px] w-[1072px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1072 1">
            <line stroke="currentColor" className="text-foreground" x2="1072" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>

      {/* Decorative line 2 */}
      <div className="absolute left-[108px] top-[280px] w-[1558px] h-0">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1558 1">
            <line stroke="currentColor" className="text-foreground" x2="1558" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </header>
  )
}
