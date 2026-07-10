// Wrapper reutilizável que anima a entrada de uma seção durante o scroll.
import { motion } from 'framer-motion'

const VARIANTES = {
  oculto: { opacity: 0, y: 28 },
  visivel: { opacity: 1, y: 0 },
}

export default function SectionReveal({ children, as = 'div', className = '', delay = 0, ...props }) {
  const MotionTag = motion[as] ?? motion.div

  return (
    <MotionTag
      className={className}
      variants={VARIANTES}
      initial="oculto"
      whileInView="visivel"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay }}
      {...props}
    >
      {children}
    </MotionTag>
  )
}
