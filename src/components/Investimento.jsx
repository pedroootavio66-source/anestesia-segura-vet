import { Check } from 'lucide-react'
import SectionReveal from './SectionReveal'
import { LOTES, INVESTIMENTO } from '../data/content'
import { getCheckoutLink, getLoteAtual, getLoteStatus } from '../utils/lote'

const ROTULO_STATUS = {
  esgotado: 'ESGOTADO',
  atual: 'LOTE ATUAL',
  futuro: 'EM BREVE',
}

export default function Investimento() {
  const loteAtual = getLoteAtual()
  const idsLotes = Object.keys(LOTES.itens)
    .map(Number)
    .sort((a, b) => a - b)

  return (
    <section id="investimento" className="bg-navy py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        <SectionReveal className="text-center">
          <p className="font-display text-xs font-semibold uppercase tracking-[0.32em] text-teal">
            {INVESTIMENTO.eyebrow}
          </p>
          <h2 className="mt-6 font-display text-3xl font-semibold uppercase leading-tight tracking-wide text-ink sm:text-4xl">
            {INVESTIMENTO.titulo}
          </h2>
          <p className="mt-3 text-sm text-mute sm:text-base">{INVESTIMENTO.subtitulo}</p>
        </SectionReveal>

        <SectionReveal delay={0.1} className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3">
          {idsLotes.map((id) => {
            const lote = LOTES.itens[id]
            const status = getLoteStatus(id)
            return (
              <div
                key={id}
                className={`rounded-xl border px-4 py-4 text-center ${
                  status === 'atual'
                    ? 'border-teal bg-navy-3'
                    : status === 'esgotado'
                      ? 'border-line bg-navy-2 opacity-60'
                      : 'border-line bg-navy-2'
                }`}
              >
                <span
                  className={`font-display text-[10px] font-semibold tracking-widest ${
                    status === 'atual' ? 'text-teal' : 'text-mute'
                  }`}
                >
                  {ROTULO_STATUS[status]}
                </span>
                <p className="mt-1.5 text-xs text-mute">{lote.nome}</p>
                <p
                  className={`mt-1 font-display text-lg font-semibold ${
                    status === 'esgotado' ? 'text-mute line-through' : 'text-ink'
                  }`}
                >
                  {lote.preco}
                </p>
              </div>
            )
          })}
        </SectionReveal>

        <SectionReveal
          delay={0.18}
          className="relative mt-8 overflow-hidden rounded-3xl border border-teal/40 bg-navy-3 p-8 text-center shadow-[0_0_60px_-16px_rgba(43,179,179,0.5)] sm:p-12"
        >
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-teal/10 via-transparent to-transparent" />
          <div className="relative">
            <span className="inline-block rounded-full border border-teal/40 bg-teal/10 px-4 py-1.5 font-display text-[11px] font-semibold tracking-widest text-teal">
              VAGAS LIMITADAS · {loteAtual.nome.toUpperCase()}
            </span>

            <p className="mt-6 font-display text-5xl font-bold text-ink sm:text-6xl">{loteAtual.preco}</p>

            <ul className="mx-auto mt-8 max-w-sm space-y-3 text-left">
              {INVESTIMENTO.incluso.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-mute sm:text-base">
                  <Check size={18} className="mt-0.5 shrink-0 text-teal" strokeWidth={2.5} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <a
              href={getCheckoutLink()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Garantir minha vaga agora"
              className="mt-9 inline-block w-full rounded-full bg-teal px-10 py-4 font-display text-sm font-semibold tracking-widest text-navy transition-transform hover:scale-[1.02] hover:bg-teal-dk sm:w-auto"
            >
              QUERO GARANTIR MINHA VAGA
            </a>
            <p className="mt-4 text-xs text-mute">{INVESTIMENTO.microTexto}</p>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
