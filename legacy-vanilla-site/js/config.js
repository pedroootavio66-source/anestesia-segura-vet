/**
 * ============================================================================
 * CONFIGURAÇÃO DO SITE — ANESTESIA SEGURA VET (ASV)
 * ============================================================================
 * Este é o ÚNICO lugar que você precisa editar para:
 *   1. Trocar o lote ativo quando as vagas de um lote esgotarem
 *   2. Colar os links de pagamento (Mercado Pago, InfinitePay, PagSeguro, etc.)
 *   3. Atualizar o número de vagas totais
 *   4. Atualizar o link de WhatsApp
 *
 * Depois de editar este arquivo, o site inteiro (hero, selo, botões, card de
 * investimento) atualiza sozinho. Não é preciso mexer em nenhum outro arquivo.
 *
 * Veja o README.md na raiz do projeto para o passo a passo completo.
 * ============================================================================
 */

const CONFIG = {
  // ── MUDE AQUI quando um lote esgotar: 1, 2 ou 3 ──────────────────────────
  loteAtivo: 1,

  // ── Lotes progressivos (18 vagas no total) ──────────────────────────────
  lotes: {
    1: {
      nome: "Lote 1 · 5 primeiras vagas",
      preco: "R$ 2.199",
      precoNum: 2199,
      // Cole aqui o link de pagamento do Lote 1 (Mercado Pago / InfinitePay / PagSeguro)
      linkPagamento: "COLE_O_LINK_LOTE_1_AQUI"
    },
    2: {
      nome: "Lote 2 · vagas 6 a 10",
      preco: "R$ 2.349",
      precoNum: 2349,
      // Cole aqui o link de pagamento do Lote 2
      linkPagamento: "COLE_O_LINK_LOTE_2_AQUI"
    },
    3: {
      nome: "Lote 3 · vagas restantes",
      preco: "R$ 2.499",
      precoNum: 2499,
      // Cole aqui o link de pagamento do Lote 3
      linkPagamento: "COLE_O_LINK_LOTE_3_AQUI"
    }
  },

  // ── Total de vagas do curso ──────────────────────────────────────────────
  totalVagas: 18,

  // ── WhatsApp: usado no botão flutuante e como fallback de pagamento ─────
  whatsapp: "https://wa.me/5531987497152?text=Ol%C3%A1!%20Tenho%20interesse%20no%20curso%20de%20Anestesiologia%20da%20ASV",

  // ── Redes sociais ────────────────────────────────────────────────────────
  instagramCurso: "https://instagram.com/anestesiaseguravet",
  instagramInstrutor: "https://instagram.com/rafaelsobrinho.a",

  // ── Datas e local do curso (edite conforme definido) ────────────────────
  datas: "13, 14 e 15 de novembro (sexta, sábado e domingo)",
  local: "A definir — em breve"
};
