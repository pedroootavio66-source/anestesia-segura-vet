import { BookOpen, GraduationCap, HeartPulse, Stethoscope } from 'lucide-react'
import SectionReveal from './SectionReveal'
import { PARA_QUEM } from '../data/content'

const ICONES = { Stethoscope, GraduationCap, BookOpen, HeartPulse }

export default function ParaQuem() {
  return (
    <section id="para-quem" className="bg-navy-2 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <SectionReveal className="mx-auto max-w-2xl text-center">
          <p className="font-display text-xs font-semibold uppercase tracking-[0.32em] text-teal">
            Para quem é
          </p>
          <h2 className="mt-6 font-display text-3xl font-semibold uppercase leading-tight tracking-wide text-ink sm:text-4xl">
            Feito para colegas que atendem pequenos animais
          </h2>
        </SectionReveal>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PARA_QUEM.map((item, i) => {
            const Icone = ICONES[item.icon]
            return (
              <SectionReveal
                key={item.titulo}
                delay={(i % 4) * 0.07}
                className="rounded-2xl border border-line bg-navy-3 p-6 text-center"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-teal/30 bg-teal/10 text-teal">
                  <Icone size={22} strokeWidth={1.75} />
                </div>
                <h3 className="mt-4 font-display text-sm font-semibold uppercase tracking-wide text-ink">
                  {item.titulo}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-mute">{item.descricao}</p>
              </SectionReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
