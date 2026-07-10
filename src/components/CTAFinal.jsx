import SectionReveal from './SectionReveal'
import ECGLine from './ECGLine'
import { getCheckoutLink } from '../utils/lote'

export default function CTAFinal() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-teal-dk/25 via-navy to-navy py-24 lg:py-32">
      <div className="absolute inset-x-0 top-0">
        <ECGLine height="h-12" opacity="opacity-50" duration="6.5s" />
      </div>

      <SectionReveal className="relative mx-auto max-w-3xl px-6 text-center lg:px-10">
        <h2 className="font-display text-3xl font-semibold uppercase leading-tight tracking-wide text-ink sm:text-4xl lg:text-5xl">
          Garanta sua vaga antes que esgotem
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-mute sm:text-lg">
          Vagas limitadas por lote e turma reduzida — quanto antes você garantir a sua, menor o
          investimento.
        </p>
        <a
          href={getCheckoutLink()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Falar no WhatsApp agora"
          className="mt-9 inline-block rounded-full bg-teal px-10 py-4 font-display text-sm font-semibold tracking-widest text-navy shadow-[0_0_50px_-10px_rgba(43,179,179,0.65)] transition-transform hover:scale-[1.03] hover:bg-teal-dk"
        >
          FALAR NO WHATSAPP AGORA
        </a>
      </SectionReveal>

      <div className="absolute inset-x-0 bottom-0">
        <ECGLine height="h-12" opacity="opacity-20" duration="7.5s" />
      </div>
    </section>
  )
}
