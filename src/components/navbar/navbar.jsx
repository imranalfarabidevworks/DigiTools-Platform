import { FiLogIn, FiMenu, FiShoppingCart } from 'react-icons/fi'

const Navbar = ({ cartCount, onOpenCart }) => {
  return (
    <header className="sticky top-0 z-50 border-b border-[#ece8f7] bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 w-[min(1120px,calc(100%-1.5rem))] items-center justify-between gap-3">
        <a className="text-[1.45rem] font-extrabold leading-none tracking-[-0.04em] text-[#7a38f5] sm:text-[1.7rem] md:text-[2rem]" href="#hero">
          DigiTools
        </a>

        <nav className="hidden items-center gap-8 text-md font-medium text-slate-700 lg:flex">
          <a href="#products" className="transition hover:text-[#7a38f5]">Products</a>
          <a href="#steps" className="transition hover:text-[#7a38f5]">Features</a>
          <a href="#pricing" className="transition hover:text-[#7a38f5]">Pricing</a>
          <a href="#footer" className="transition hover:text-[#7a38f5]">Testimonials</a>
          <a href="#footer" className="transition hover:text-[#7a38f5]">FAQ</a>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={onOpenCart}
            aria-label={`Cart with ${cartCount} items`}
            className="relative inline-flex h-9 w-9 items-center justify-center rounded-full border border-transparent text-slate-700 transition hover:border-[#ece8f7] hover:bg-[#faf8ff] sm:h-10 sm:w-10"
          >
            <FiShoppingCart className="text-md" />
            <span className="absolute -right-1 -top-1 inline-flex h-4 min-w-4 items-center justify-center rounded-full bg-[#7a38f5] px-1 text-[10px] font-semibold text-white">
              {cartCount}
            </span>
          </button>
          <a
            href="#footer"
            className="hidden items-center gap-2 text-md font-medium text-slate-700 transition hover:text-[#7a38f5] md:inline-flex"
          >
            <FiLogIn className="text-md" />
            Login
          </a>
          <a
            href="#products"
            className="hidden rounded-full bg-linear-to-r from-[#6f3df4] to-[#9c16f7] px-4 py-2.5 text-md font-semibold text-white shadow-[0_10px_30px_rgba(122,56,245,0.22)] transition hover:translate-y-[-1px] md:inline-flex lg:px-5"
          >
            Get Started
          </a>
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#ece8f7] text-slate-700 sm:h-10 sm:w-10 lg:hidden"
            aria-label="Open menu"
          >
            <FiMenu />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar