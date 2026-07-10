# Anestesia Segura VET (ASV) — Site institucional

Site estático (HTML + CSS + JavaScript vanilla, sem frameworks) para o Curso
Avançado de Anestesiologia Veterinária da ASV.

## Estrutura de arquivos

```
index.html
css/styles.css
js/config.js     <- ÚNICO arquivo que você precisa editar no dia a dia
js/main.js       <- lógica que lê config.js e monta a página (não precisa mexer)
assets/
  favicon.svg
  img/           <- fotos reais (logo, instrutor, ambiente clínico)
```

## Como trocar de lote (o mais importante)

Abra `js/config.js` e mude apenas esta linha:

```js
loteAtivo: 1, // <-- MUDE AQUI: 1, 2 ou 3
```

Quando o Lote 1 esgotar, troque para `2`. Quando o Lote 2 esgotar, troque para
`3`. Salve o arquivo e o site inteiro atualiza sozinho:

- O preço do hero, do rodapé e do card de investimento passa a mostrar o preço
  do novo lote ativo.
- O botão principal ("Garantir minha vaga") passa a abrir o link de pagamento
  do novo lote.
- No card de investimento, o lote anterior aparece riscado com o selo
  **ESGOTADO**, o novo lote ativo aparece em destaque (borda teal) com o selo
  **LOTE ATUAL**, e o próximo lote aparece em cinza com o selo **EM BREVE**.

Não é preciso editar `index.html`, `main.js` nem `styles.css` para isso.

## Onde colar os links de pagamento

Ainda em `js/config.js`, dentro do objeto `lotes`, cada lote tem um campo
`linkPagamento`:

```js
1: {
  nome: "Lote 1 · 5 primeiras vagas",
  preco: "R$ 2.199",
  precoNum: 2199,
  linkPagamento: "COLE_O_LINK_LOTE_1_AQUI"   // <- cole aqui o link de checkout
},
```

Cole ali o link gerado pela sua plataforma de pagamento — funciona com
**Mercado Pago**, **InfinitePay**, **PagSeguro** ou qualquer outro link de
checkout direto (link de pagamento único, sem necessidade de integração via
API). Repita para os 3 lotes.

## Como funciona o fallback de WhatsApp

Se o campo `linkPagamento` de um lote ainda estiver com o valor padrão
(qualquer texto que comece com `"COLE_"`), o botão de compra daquele lote
**não vai abrir um link quebrado**: ele automaticamente abre o WhatsApp
configurado em `CONFIG.whatsapp`, com a mensagem pré-preenchida.

Isso significa que você pode publicar o site antes mesmo de ter o link de
pagamento pronto — o botão sempre funciona, seja para pagamento direto, seja
para atendimento manual via WhatsApp.

## Como editar datas, local e o que está incluso

- **Datas do curso**: campo `datas` em `js/config.js`.
- **Local do curso**: campo `local` em `js/config.js` (mostra "A definir" até
  você preencher).
- **O que está incluso**: lista fixa na seção "Investimento" do
  `index.html`, dentro da `<div class="included">` — edite os itens da lista
  diretamente ali.
- **Cronograma (abas Sexta/Sábado/Domingo)**: seção `#curso` do
  `index.html`, dentro de `<div class="tabs" id="scheduleTabs">`.
- **Perguntas do FAQ**: seção `#faq` do `index.html`, dentro de
  `<div class="accordion" id="faqAccordion">` — cada pergunta é um
  `.accordion__item` com um botão e um painel de resposta.

## WhatsApp e Instagram

Todos os links de contato também vêm do `js/config.js`:

```js
whatsapp: "https://wa.me/5531987497152?text=...",
instagramCurso: "https://instagram.com/anestesiaseguravet",
instagramInstrutor: "https://instagram.com/rafaelsobrinho.a",
```

## Imagens

As imagens reais usadas no site estão em `assets/img/` (logo, foto do
instrutor em ambiente clínico e em retrato, monitor de sinais vitais, etc.).
Para trocar qualquer imagem, basta substituir o arquivo correspondente
mantendo o mesmo nome, ou apontar o `src` da tag `<img>` no `index.html` para
um novo arquivo.

## Deploy

Este é um site 100% estático — não depende de build, servidor ou banco de
dados. Basta subir a pasta inteira para qualquer serviço de hospedagem
estática (Netlify, Vercel, GitHub Pages, Cloudflare Pages, ou até um servidor
comum via FTP).

Para testar localmente, qualquer servidor HTTP simples funciona, por exemplo:

```bash
python3 -m http.server 8000
```

E acesse `http://localhost:8000`.
