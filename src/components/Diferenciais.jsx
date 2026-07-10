import { Activity, Crosshair, HandHeart, Layers, ShieldCheck, Users } from 'lucide-react'
import SectionReveal from './SectionReveal'
import { DIFERENCIAIS } from '../data/content'

const ICONES = { Layers, ShieldCheck, HandHeart, Users, Activity, Crosshair }

export default function Diferenciais() {
  return (
    <section id="diferenciais" className="bg-navy-2 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <SectionReveal className="mx-auto max-w-2xl text-center">
          <p className="font-display text-xs font-semibold uppercase tracking-[0.32em] text-teal">
            Diferenciais
          </p>
          <h2 className="mt-6 font-display text-3xl font-semibold uppercase leading-tight tracking-wide text-ink sm:text-4xl">
            Como a ASV te forma
          </h2>
        </SectionReveal>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {DIFERENCIAIS.map((item, i) => {
            const Icone = ICONES[item.icon]
            return (
              <SectionReveal
                key={item.titulo}
                delay={(i % 3) * 0.08}
                className="group rounded-2xl border border-line bg-navy-3 p-7 transition-shadow duration-300 hover:shadow-[0_0_32px_-10px_rgba(43,179,179,0.45)]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-teal/30 bg-teal/10 text-teal">
                  <Icone size={20} strokeWidth={1.75} />
                </div>
                <h3 className="mt-5 font-display text-base font-semibold uppercase tracking-wide text-ink">
                  {item.titulo}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-mute">{item.descricao}</p>
              </SectionReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
