import SectionReveal from './SectionReveal'
import ECGLine from './ECGLine'
import { MISSAO } from '../data/content'

export default function Missao() {
  return (
    <section id="sobre-asv" className="bg-navy py-24 lg:py-32">
      <SectionReveal className="mx-auto max-w-4xl px-6 text-center lg:px-10">
        <p className="font-display text-xs font-semibold uppercase tracking-[0.32em] text-teal">
          {MISSAO.eyebrow}
        </p>
        <h2 className="mt-6 font-display text-3xl font-semibold uppercase leading-tight tracking-wide text-ink sm:text-4xl lg:text-5xl">
          {MISSAO.titulo}
        </h2>
        <div className="mx-auto mt-8 max-w-2xl space-y-5">
          {MISSAO.paragrafos.map((p) => (
            <p key={p} className="text-balance text-base leading-relaxed text-mute sm:text-lg">
              {p}
            </p>
          ))}
        </div>
      </SectionReveal>

      <div className="mt-16">
        <ECGLine height="h-10" opacity="opacity-30" duration="7s" />
      </div>
    </section>
  )
}
