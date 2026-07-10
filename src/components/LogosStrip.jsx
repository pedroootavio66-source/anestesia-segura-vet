import { DIRETRIZES } from '../data/content'

// Esteira horizontal com as diretrizes científicas de referência do curso.
export default function LogosStrip() {
  const linha = [...DIRETRIZES, ...DIRETRIZES]

  return (
    <div className="border-y border-line bg-navy-2 py-8">
      <p className="mb-5 text-center font-display text-[11px] font-semibold uppercase tracking-[0.28em] text-mute">
        Conteúdo baseado em
      </p>
      <div className="overflow-hidden">
        <div className="marquee-track flex w-max items-center gap-16">
          {[0, 1].map((copia) => (
            <div key={copia} className="flex items-center gap-16 pr-16">
              {linha.map((nome, i) => (
                <span
                  key={`${copia}-${i}`}
                  className="whitespace-nowrap font-display text-lg font-semibold tracking-wide text-mute/70 transition-colors hover:text-teal"
                >
                  {nome}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
