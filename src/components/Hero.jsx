import { motion } from 'framer-motion'
import ECGLine from './ECGLine'
import { CURSO, CONTATO } from '../data/content'
import { getCheckoutLink, getLoteAtual } from '../utils/lote'

const CONTAINER = {
  oculto: {},
  visivel: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
}

const ITEM = {
  oculto: { opacity: 0, y: 22 },
  visivel: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } },
}

export default function Hero() {
  const lote = getLoteAtual()

  return (
    <section id="hero" className="relative flex min-h-[100svh] items-center overflow-hidden bg-navy pt-20">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/img/monitor-vitais.jpg"
      >
        <source src="/video/hero.mp4" type="video/mp4" />
      </video>

      {/* Overlay para legibilidade + fusão com a próxima seção */}
      <div className="absolute inset-0 bg-navy/70" />
      <div className="absolute inset-0 bg-gradient-to-b from-navy/20 via-transparent to-navy" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy/60 via-transparent to-navy/60" />

      <motion.div
        variants={CONTAINER}
        initial="oculto"
        animate="visivel"
        className="relative z-10 mx-auto w-full max-w-4xl px-6 py-10 text-center lg:px-10"
      >
        <motion.p
          variants={ITEM}
          className="font-display text-xs font-semibold uppercase tracking-[0.32em] text-teal"
        >
          Curso presencial de anestesiologia veterinária
        </motion.p>

        <motion.h1
          variants={ITEM}
          className="mt-6 font-display text-4xl font-semibold uppercase leading-[1.08] tracking-wide text-ink sm:text-5xl lg:text-6xl"
        >
          Anestesia com segurança
          <br />
          <span className="text-teal">da teoria ao paciente vivo</span>
        </motion.h1>

        <motion.p variants={ITEM} className="mx-auto mt-6 max-w-2xl text-balance text-base leading-relaxed text-mute sm:text-lg">
          3 dias intensivos: teoria, prática em cadáver e procedimentos em pacientes vivos. Conteúdo
          ancorado nas diretrizes internacionais mais atuais.
        </motion.p>

        <motion.div
          variants={ITEM}
          className="mx-auto mt-7 inline-flex items-center gap-2.5 rounded-full border border-line bg-navy-3/60 px-4 py-2 text-xs font-medium uppercase tracking-wide text-mute"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-pulse-dot rounded-full bg-teal" />
          </span>
          Vagas limitadas · {CURSO.datasLongo} · {CONTATO.cidade}
        </motion.div>

        <motion.div variants={ITEM} className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={getCheckoutLink()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Garantir minha vaga no curso"
            className="w-full rounded-full bg-teal px-8 py-4 font-display text-sm font-semibold tracking-widest text-navy shadow-[0_0_40px_-8px_rgba(43,179,179,0.6)] transition-transform hover:scale-[1.03] hover:bg-teal-dk sm:w-auto"
          >
            GARANTIR MINHA VAGA — {lote.preco}
          </a>
          <a
            href="#cronograma"
            className="w-full rounded-full border border-teal/50 px-8 py-4 font-display text-sm font-semibold tracking-widest text-ink transition-colors hover:border-teal hover:bg-teal/10 sm:w-auto"
          >
            VER O CRONOGRAMA
          </a>
        </motion.div>
      </motion.div>

      <div className="absolute inset-x-0 bottom-0 z-10">
        <ECGLine height="h-16" opacity="opacity-60" duration="5s" />
      </div>
    </section>
  )
}
