import { MessageCircle } from 'lucide-react'
import { CONTATO } from '../data/content'

export default function WhatsAppFloat() {
  return (
    <a
      href={CONTATO.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-teal text-navy shadow-[0_8px_24px_-6px_rgba(43,179,179,0.7)] transition-transform hover:scale-110"
    >
      <MessageCircle size={26} strokeWidth={2} />
    </a>
  )
}
