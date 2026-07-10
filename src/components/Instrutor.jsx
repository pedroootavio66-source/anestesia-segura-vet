import SectionReveal from './SectionReveal'
import IconInstagram from './IconInstagram'
import { INSTRUTOR, CONTATO } from '../data/content'

// Regra obrigatória de título: usar apenas "MV." e "Pós-graduado em
// Anestesiologia Veterinária". Nunca "Dr." nem "Esp.".
export default function Instrutor() {
  return (
    <section id="instrutor" className="bg-navy-2 py-24 lg:py-32">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:px-10">
        <SectionReveal className="mx-auto w-full max-w-xs lg:max-w-none">
          <div className="overflow-hidden rounded-2xl border-2 border-teal/40">
            <img
              src={INSTRUTOR.foto}
              alt={`${INSTRUTOR.nome}, instrutor do curso`}
              loading="lazy"
              width={1200}
              height={1600}
              className="h-full w-full object-cover"
            />
          </div>
        </SectionReveal>

        <SectionReveal delay={0.12}>
          <p className="font-display text-xs font-semibold uppercase tracking-[0.32em] text-teal">
            Sobre o instrutor
          </p>
          <h2 className="mt-5 font-display text-2xl font-semibold tracking-wide text-ink sm:text-3xl">
            {INSTRUTOR.nome}
          </h2>
          <p className="mt-1.5 text-sm font-medium text-teal">{INSTRUTOR.credencial}</p>
          <p className="text-sm text-mute">{INSTRUTOR.crmv}</p>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-mute">{INSTRUTOR.bio}</p>

          <div className="mt-6 flex flex-wrap gap-2.5">
            {INSTRUTOR.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-line bg-navy-3 px-3.5 py-1.5 text-xs font-medium text-mute"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-7 flex flex-wrap gap-5">
            <a
              href={CONTATO.instagramMarca}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-ink transition-colors hover:text-teal"
            >
              <IconInstagram size={17} /> {CONTATO.instagramMarcaHandle}
            </a>
            <a
              href={CONTATO.instagramInstrutor}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-ink transition-colors hover:text-teal"
            >
              <IconInstagram size={17} /> {CONTATO.instagramInstrutorHandle}
            </a>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
