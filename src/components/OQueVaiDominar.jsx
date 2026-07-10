import SectionReveal from './SectionReveal'
import { O_QUE_VAI_DOMINAR, DIRETRIZES } from '../data/content'

export default function OQueVaiDominar() {
  return (
    <section id="dominar" className="bg-navy py-24 lg:py-32">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:px-10">
        <SectionReveal>
          <p className="font-display text-xs font-semibold uppercase tracking-[0.32em] text-teal">
            O que você vai dominar
          </p>
          <h2 className="mt-6 font-display text-3xl font-semibold uppercase leading-tight tracking-wide text-ink sm:text-4xl">
            Da teoria à decisão clínica em tempo real
          </h2>

          <div className="mt-8 flex flex-wrap gap-3">
            {O_QUE_VAI_DOMINAR.map((topico) => (
              <span
                key={topico}
                className="rounded-full border border-line bg-navy-3 px-4 py-2 text-sm font-medium text-mute transition-colors hover:border-teal/50 hover:text-ink"
              >
                {topico}
              </span>
            ))}
          </div>

          <p className="mt-8 text-sm leading-relaxed text-mute">
            Conteúdo ancorado em diretrizes atuais e baseado em evidências:{' '}
            <strong className="text-ink">{DIRETRIZES.join(' · ')}</strong>
          </p>
        </SectionReveal>

        <SectionReveal delay={0.15} className="relative">
          <div className="overflow-hidden rounded-2xl border border-teal/25">
            <img
              src="/img/monitor-vitais.jpg"
              alt="Monitor multiparamétrico exibindo frequência cardíaca, oxigenação e capnografia em ambiente cirúrgico"
              loading="lazy"
              width={800}
              height={1067}
              className="h-full w-full object-cover"
            />
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
