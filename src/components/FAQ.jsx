import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import SectionReveal from './SectionReveal'
import { FAQ as PERGUNTAS } from '../data/content'

export default function FAQ() {
  const [abertoIndex, setAbertoIndex] = useState(0)

  return (
    <section id="faq" className="bg-navy py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <SectionReveal className="text-center">
          <p className="font-display text-xs font-semibold uppercase tracking-[0.32em] text-teal">FAQ</p>
          <h2 className="mt-6 font-display text-3xl font-semibold uppercase leading-tight tracking-wide text-ink sm:text-4xl">
            Perguntas frequentes
          </h2>
        </SectionReveal>

        <SectionReveal delay={0.1} className="mt-12 divide-y divide-line rounded-2xl border border-line bg-navy-3">
          {PERGUNTAS.map((item, i) => {
            const aberto = abertoIndex === i
            return (
              <div key={item.pergunta}>
                <button
                  type="button"
                  aria-expanded={aberto}
                  aria-controls={`faq-painel-${i}`}
                  onClick={() => setAbertoIndex(aberto ? -1 : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-display text-sm font-medium tracking-wide text-ink sm:text-base">
                    {item.pergunta}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 text-teal transition-transform duration-300 ${aberto ? 'rotate-180' : ''}`}
                  />
                </button>
                <div
                  id={`faq-painel-${i}`}
                  hidden={!aberto}
                  className="px-6 pb-5 text-sm leading-relaxed text-mute sm:text-base"
                >
                  {item.resposta}
                </div>
              </div>
            )
          })}
        </SectionReveal>
      </div>
    </section>
  )
}
