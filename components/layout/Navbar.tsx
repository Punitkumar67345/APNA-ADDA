import Link from "next/link";

const navLinks = [
  {
    name: "Our Story",
    href: "/about",
  },
  {
    name: "The Menu",
    href: "/menu",
  },
  {
    name: "Adda Vibes",
    href: "/gallery",
  },
  {
    name: "Events",
    href: "/events",
  },
];

export default function Navbar() {
  return (
    <header className="absolute left-0 top-0 z-50 w-full">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
        
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold tracking-wide text-slate-900"
        >
          APNA ADDA
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-700 transition-colors hover:text-slate-950"
            >
              {link.name}
            </Link>
          ))}

          {/* Book a Table */}
          <Link
            href="/reservations"
            className="rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-slate-800"
          >
            Book a Table
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label="Open menu"
          className="rounded-lg border border-slate-300 px-3 py-2 text-sm font-medium text-slate-900 md:hidden"
        >
          ☰
        </button>
      </div>
    </header>
  );
}