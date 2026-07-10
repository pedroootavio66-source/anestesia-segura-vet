import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Check } from 'lucide-react'
import SectionReveal from './SectionReveal'
import { CRONOGRAMA } from '../data/content'

export default function Cronograma() {
  const [abaAtiva, setAbaAtiva] = useState(CRONOGRAMA[0].id)
  const dia = CRONOGRAMA.find((d) => d.id === abaAtiva)

  return (
    <section id="cronograma" className="bg-navy py-24 lg:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <SectionReveal className="mx-auto max-w-2xl text-center">
          <p className="font-display text-xs font-semibold uppercase tracking-[0.32em] text-teal">
            Cronograma
          </p>
          <h2 className="mt-6 font-display text-3xl font-semibold uppercase leading-tight tracking-wide text-ink sm:text-4xl">
            3 dias presenciais e intensivos
          </h2>
        </SectionReveal>

        <SectionReveal delay={0.1} className="mt-14">
          <div
            role="tablist"
            aria-label="Cronograma do curso"
            className="grid grid-cols-1 gap-3 sm:grid-cols-3"
          >
            {CRONOGRAMA.map((d) => {
              const ativa = d.id === abaAtiva
              return (
                <button
                  key={d.id}
                  id={`tab-${d.id}`}
                  role="tab"
                  aria-selected={ativa}
                  aria-controls={`painel-${d.id}`}
                  onClick={() => setAbaAtiva(d.id)}
                  className={`rounded-2xl border px-5 py-4 text-left transition-colors ${
                    ativa
                      ? 'border-teal bg-navy-3 shadow-[0_0_28px_-10px_rgba(43,179,179,0.55)]'
                      : 'border-line bg-navy-2 hover:border-teal/40'
                  }`}
                >
                  <span className="block font-display text-xs font-medium tracking-widest text-teal">
                    {d.dia}
                  </span>
                  <span className="mt-1 block font-display text-lg font-semibold tracking-wide text-ink">
                    {d.label}
                  </span>
                  <span className="mt-0.5 block text-xs text-mute">{d.selo}</span>
                </button>
              )
            })}
          </div>

          <div
            id={`painel-${dia.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${dia.id}`}
            tabIndex={0}
            className="relative mt-4 min-h-[280px] overflow-hidden rounded-2xl border border-line bg-navy-3 p-8 sm:p-10"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={dia.id}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              >
                <span className="font-display text-4xl font-bold text-line" aria-hidden="true">
                  {dia.dia.split('/')[0]}
                </span>
                <h3 className="mt-2 font-display text-2xl font-semibold uppercase tracking-wide text-ink">
                  {dia.titulo}
                </h3>
                <p className="mt-1 text-sm text-mute">{dia.data}</p>
                <ul className="mt-6 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
                  {dia.topicos.map((topico) => (
                    <li key={topico} className="flex items-start gap-3 text-sm leading-relaxed text-mute sm:text-base">
                      <Check size={18} className="mt-0.5 shrink-0 text-teal" strokeWidth={2.5} />
                      <span>{topico}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
