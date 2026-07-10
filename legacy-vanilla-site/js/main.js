/**
 * ============================================================================
 * ANESTESIA SEGURA VET — MAIN.JS
 * Lê o objeto CONFIG (js/config.js) e monta preços, selos, botões e cards de
 * lote. Também controla menu mobile, tabs do cronograma, accordion do FAQ e
 * o scroll reveal das seções.
 * ============================================================================
 */

(function () {
  "use strict";

  /* --------------------------------------------------------------------
     Helpers de link de pagamento (com fallback para WhatsApp)
  -------------------------------------------------------------------- */
  function isPlaceholderLink(link) {
    return !link || link.indexOf("COLE_") === 0;
  }

  function getLoteAtual() {
    return CONFIG.lotes[CONFIG.loteAtivo];
  }

  function getCheckoutLink() {
    const lote = getLoteAtual();
    return isPlaceholderLink(lote.linkPagamento) ? CONFIG.whatsapp : lote.linkPagamento;
  }

  function wireCheckoutLink(el, label) {
    if (!el) return;
    el.href = getCheckoutLink();
    el.target = "_blank";
    el.rel = "noopener";
    if (label) el.textContent = label;
  }

  /* --------------------------------------------------------------------
     Preenche preços, selos e botões a partir do CONFIG
  -------------------------------------------------------------------- */
  function renderPricingUI() {
    const lote = getLoteAtual();

    // Hero badge
    const heroBadge = document.getElementById("heroBadge");
    if (heroBadge) {
      heroBadge.innerHTML =
        "A partir de <strong>" + lote.preco + "</strong> · " + lote.nome +
        " · " + CONFIG.totalVagas + " vagas no total";
    }

    // Botões de CTA que abrem o checkout do lote ativo
    wireCheckoutLink(document.getElementById("heroCta"), "Garantir minha vaga — " + lote.preco);
    wireCheckoutLink(document.getElementById("investCta"), "Garantir minha vaga — " + lote.preco);
    wireCheckoutLink(document.getElementById("footerCta"), "Garantir minha vaga — " + lote.preco);

    // Nav / mentoria / conteúdo usam o WhatsApp diretamente
    const navCta = document.getElementById("navCta");
    if (navCta) { navCta.href = getCheckoutLink(); navCta.target = "_blank"; navCta.rel = "noopener"; }

    const mentoriaCta = document.getElementById("mentoriaCta");
    if (mentoriaCta) { mentoriaCta.href = CONFIG.whatsapp; mentoriaCta.target = "_blank"; mentoriaCta.rel = "noopener"; }

    // Redes sociais
    const instaCurso = document.getElementById("instaCursoLink");
    if (instaCurso) instaCurso.href = CONFIG.instagramCurso;
    const instaInstrutor = document.getElementById("instaInstrutorLink");
    if (instaInstrutor) instaInstrutor.href = CONFIG.instagramInstrutor;

    const footerInstaCurso = document.getElementById("footerInstaCurso");
    if (footerInstaCurso) footerInstaCurso.href = CONFIG.instagramCurso;
    const footerInstaInstrutor = document.getElementById("footerInstaInstrutor");
    if (footerInstaInstrutor) footerInstaInstrutor.href = CONFIG.instagramInstrutor;

    const footerWhats = document.getElementById("footerWhats");
    if (footerWhats) footerWhats.href = CONFIG.whatsapp;

    // Botão flutuante de WhatsApp
    const whatsappFloat = document.getElementById("whatsappFloat");
    if (whatsappFloat) whatsappFloat.href = CONFIG.whatsapp;

    // Datas / local / vagas na seção "sobre o curso"
    const courseDates = document.getElementById("courseDates");
    if (courseDates) courseDates.textContent = CONFIG.datas;
    const courseLocation = document.getElementById("courseLocation");
    if (courseLocation) courseLocation.textContent = CONFIG.local;
    const courseVagas = document.getElementById("courseVagas");
    if (courseVagas) courseVagas.textContent = CONFIG.totalVagas + " vagas (3 lotes progressivos)";

    // Ano do rodapé
    const footerYear = document.getElementById("footerYear");
    if (footerYear) footerYear.textContent = new Date().getFullYear();
  }

  /* --------------------------------------------------------------------
     Monta os 3 cards de lote (atual / esgotado / em breve)
  -------------------------------------------------------------------- */
  function renderLotesCards() {
    const container = document.getElementById("lotesContainer");
    if (!container) return;

    const loteIds = Object.keys(CONFIG.lotes).map(Number).sort((a, b) => a - b);

    container.innerHTML = loteIds.map(function (id) {
      const lote = CONFIG.lotes[id];
      let statusClass = "lote-card--futuro";
      let badgeLabel = "EM BREVE";

      if (id < CONFIG.loteAtivo) {
        statusClass = "lote-card--esgotado";
        badgeLabel = "ESGOTADO";
      } else if (id === CONFIG.loteAtivo) {
        statusClass = "lote-card--atual";
        badgeLabel = "LOTE ATUAL";
      }

      return (
        '<div class="lote-card ' + statusClass + '">' +
          '<span class="lote-card__badge">' + badgeLabel + '</span>' +
          '<div class="lote-card__nome">' + lote.nome + '</div>' +
          '<div class="lote-card__preco">' + lote.preco + '</div>' +
        '</div>'
      );
    }).join("");
  }

  /* --------------------------------------------------------------------
     Menu hambúrguer (mobile)
  -------------------------------------------------------------------- */
  function initNavToggle() {
    const burger = document.getElementById("navBurger");
    const links = document.getElementById("navLinks");
    if (!burger || !links) return;

    burger.addEventListener("click", function () {
      const isOpen = links.classList.toggle("is-open");
      burger.setAttribute("aria-expanded", isOpen ? "true" : "false");
      burger.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
    });

    links.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        links.classList.remove("is-open");
        burger.setAttribute("aria-expanded", "false");
        burger.setAttribute("aria-label", "Abrir menu");
      });
    });
  }

  /* --------------------------------------------------------------------
     Tabs do cronograma
  -------------------------------------------------------------------- */
  function initScheduleTabs() {
    const wrap = document.getElementById("scheduleTabs");
    if (!wrap) return;

    const buttons = wrap.querySelectorAll(".tabs__btn");
    const panels = wrap.querySelectorAll(".tabs__panel");

    buttons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        const target = btn.getAttribute("data-tab");

        buttons.forEach(function (b) {
          b.classList.toggle("is-active", b === btn);
          b.setAttribute("aria-selected", b === btn ? "true" : "false");
        });

        panels.forEach(function (panel) {
          const match = panel.id === "tab-" + target;
          panel.classList.toggle("is-active", match);
          panel.hidden = !match;
        });
      });
    });
  }

  /* --------------------------------------------------------------------
     FAQ Accordion
  -------------------------------------------------------------------- */
  function initFaqAccordion() {
    const accordion = document.getElementById("faqAccordion");
    if (!accordion) return;

    const triggers = accordion.querySelectorAll(".accordion__trigger");

    triggers.forEach(function (trigger) {
      trigger.addEventListener("click", function () {
        const panel = document.getElementById(trigger.getAttribute("aria-controls"));
        const isOpen = trigger.getAttribute("aria-expanded") === "true";

        trigger.setAttribute("aria-expanded", isOpen ? "false" : "true");
        if (panel) panel.hidden = isOpen;
      });
    });
  }

  /* --------------------------------------------------------------------
     Scroll reveal (IntersectionObserver)
  -------------------------------------------------------------------- */
  function initScrollReveal() {
    const items = document.querySelectorAll(".reveal");
    if (!items.length) return;

    if (!("IntersectionObserver" in window)) {
      items.forEach(function (el) { el.classList.add("is-visible"); });
      return;
    }

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    items.forEach(function (el) { observer.observe(el); });
  }

  /* --------------------------------------------------------------------
     Init
  -------------------------------------------------------------------- */
  document.addEventListener("DOMContentLoaded", function () {
    renderPricingUI();
    renderLotesCards();
    initNavToggle();
    initScheduleTabs();
    initFaqAccordion();
    initScrollReveal();
  });
})();
