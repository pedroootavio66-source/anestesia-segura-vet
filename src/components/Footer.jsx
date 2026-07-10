import { Mail, MapPin, MessageCircle } from 'lucide-react'
import Logo from './Logo'
import IconInstagram from './IconInstagram'
import { NAV_LINKS, CONTATO, INSTRUTOR } from '../data/content'
import { getCheckoutLink } from '../utils/lote'

export default function Footer() {
  const ano = new Date().getFullYear()

  return (
    <footer className="border-t border-line bg-navy-2">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-8 border-b border-line pb-10 sm:flex-row sm:items-center">
          <div>
            <Logo />
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-mute">
              Educação e prática em anestesiologia veterinária para quem anestesia todos os dias.
            </p>
          </div>
          <a
            href={getCheckoutLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-teal px-7 py-3 font-display text-xs font-semibold tracking-widest text-navy transition-colors hover:bg-teal-dk"
          >
            GARANTIR MINHA VAGA
          </a>
        </div>

        <div className="grid grid-cols-1 gap-10 py-10 sm:grid-cols-3">
          <div>
            <h3 className="font-display text-xs font-semibold uppercase tracking-widest text-mute">
              Contato
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-mute">
              <li className="flex items-center gap-2.5">
                <MapPin size={16} className="text-teal" /> {CONTATO.cidade}
              </li>
              <li className="flex items-center gap-2.5">
                <MessageCircle size={16} className="text-teal" />
                <a href={CONTATO.whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-teal">
                  WhatsApp
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={16} className="text-teal" />
                <a href={`mailto:${CONTATO.email}`} className="hover:text-teal">
                  {CONTATO.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-xs font-semibold uppercase tracking-widest text-mute">
              Redes sociais
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-mute">
              <li>
                <a
                  href={CONTATO.instagramMarca}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 hover:text-teal"
                >
                  <IconInstagram size={16} className="text-teal" /> {CONTATO.instagramMarcaHandle}
                </a>
              </li>
              <li>
                <a
                  href={CONTATO.instagramInstrutor}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 hover:text-teal"
                >
                  <IconInstagram size={16} className="text-teal" /> {CONTATO.instagramInstrutorHandle}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-xs font-semibold uppercase tracking-widest text-mute">
              Navegação
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-mute">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-teal">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-line pt-8 text-center text-xs text-mute sm:text-left">
          <p>
            {INSTRUTOR.nome} — {INSTRUTOR.credencial} · {INSTRUTOR.crmv}
          </p>
          <p className="mt-1.5">© {ano} Anestesia Segura VET. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
