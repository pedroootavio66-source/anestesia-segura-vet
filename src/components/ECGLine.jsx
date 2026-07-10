// Linha de ECG animada — elemento de assinatura visual da ASV.
// Gera um traçado periódico (linha de base + complexo QRS) e faz duas cópias
// correrem lado a lado em loop, simulando um monitor cardíaco em tempo real.

const UNIDADE_LARGURA = 280
const REPETICOES = 3
const LARGURA_TOTAL = UNIDADE_LARGURA * REPETICOES

function gerarPontos() {
  const pontos = ['0,100']
  for (let i = 0; i < REPETICOES; i++) {
    const base = i * UNIDADE_LARGURA
    pontos.push(
      `${base + 30},100`,
      `${base + 55},100`,
      `${base + 80},40`,
      `${base + 105},160`,
      `${base + 130},20`,
      `${base + 155},100`,
      `${base + 185},100`,
    )
  }
  pontos.push(`${LARGURA_TOTAL},100`)
  return pontos.join(' ')
}

const PONTOS = gerarPontos()

export default function ECGLine({ className = '', height = 'h-12', opacity = 'opacity-70', duration = '6s' }) {
  return (
    <div
      className={`relative w-full overflow-hidden ${height} ${opacity} ${className}`}
      aria-hidden="true"
    >
      <div
        className="absolute inset-y-0 left-0 flex w-max motion-safe:animate-marquee"
        style={{ animationDuration: duration }}
      >
        {[0, 1].map((copia) => (
          <svg
            key={copia}
            viewBox={`0 0 ${LARGURA_TOTAL} 200`}
            preserveAspectRatio="none"
            className="h-full w-[420px]"
          >
            <polyline
              points={PONTOS}
              fill="none"
              stroke="#2BB3B3"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-navy via-transparent to-navy" />
    </div>
  )
}
