import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'
import { NAV_LINKS } from '../data/content'
import { getCheckoutLink } from '../utils/lote'

export default function Navbar() {
  const [rolado, setRolado] = useState(false)
  const [menuAberto, setMenuAberto] = useState(false)

  useEffect(() => {
    function aoRolar() {
      setRolado(window.scrollY > 12)
    }
    aoRolar()
    window.addEventListener('scroll', aoRolar, { passive: true })
    return () => window.removeEventListener('scroll', aoRolar)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuAberto ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuAberto])

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          rolado ? 'border-b border-line bg-navy/85 backdrop-blur-md' : 'border-b border-transparent bg-transparent'
        }`}
      >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        <a href="#hero" aria-label="Anestesia Segura VET — início">
          <Logo />
        </a>

        <nav className="hidden items-center gap-9 lg:flex" aria-label="Navegação principal">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-sm font-medium text-mute transition-colors hover:text-teal"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href={getCheckoutLink()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Garantir vaga no curso"
            className="rounded-full bg-teal px-6 py-2.5 font-display text-xs font-semibold tracking-widest text-navy transition-colors hover:bg-teal-dk"
          >
            GARANTIR VAGA
          </a>
        </div>

        <button
          type="button"
          className="text-ink lg:hidden"
          aria-label={menuAberto ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuAberto}
          onClick={() => setMenuAberto((v) => !v)}
        >
          {menuAberto ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>
      </header>

      <AnimatePresence>
        {menuAberto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-20 z-40 bg-navy/98 backdrop-blur-lg lg:hidden"
          >
            <nav
              className="flex flex-col items-center gap-8 pt-16"
              aria-label="Navegação principal (mobile)"
            >
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuAberto(false)}
                  className="font-display text-lg font-medium tracking-wide text-ink hover:text-teal"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={getCheckoutLink()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuAberto(false)}
                className="mt-4 rounded-full bg-teal px-8 py-3 font-display text-sm font-semibold tracking-widest text-navy"
              >
                GARANTIR VAGA
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
