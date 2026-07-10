// Helpers de precificação por lote — leem o objeto LOTES em data/content.js.
// Se o link de pagamento do lote ativo ainda não foi colado, os CTAs caem
// automaticamente para o WhatsApp, então o site nunca fica com botão quebrado.
import { LOTES, CONTATO } from '../data/content'

// Se "loteAtivo" for editado para um número que não existe em LOTES.itens
// (typo, ou todos os lotes esgotados), cai para o último lote cadastrado em
// vez de derrubar o site inteiro com uma tela em branco.
export function getLoteAtual() {
  const idsLotes = Object.keys(LOTES.itens)
    .map(Number)
    .sort((a, b) => a - b)
  const ultimoId = idsLotes[idsLotes.length - 1]
  return LOTES.itens[LOTES.loteAtivo] ?? LOTES.itens[ultimoId]
}

function isLinkPlaceholder(link) {
  return !link || link.startsWith('[EDITAR')
}

export function getCheckoutLink() {
  const lote = getLoteAtual()
  return isLinkPlaceholder(lote.linkPagamento) ? CONTATO.whatsappUrl : lote.linkPagamento
}

export function getLoteStatus(id) {
  if (id < LOTES.loteAtivo) return 'esgotado'
  if (id === LOTES.loteAtivo) return 'atual'
  return 'futuro'
}
