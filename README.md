# Anestesia Segura VET (ASV) — Site institucional

Landing page em **Vite + React** para o Curso Avançado de Anestesiologia
Veterinária da ASV. Vídeo em background no hero, animações com
`framer-motion`, ícones com `lucide-react`, estilização com Tailwind CSS.

> O site anterior (HTML/CSS/JS puro) foi preservado em
> `legacy-vanilla-site/` como backup, caso seja necessário consultá-lo.

## Como rodar

```bash
npm install
npm run dev
```

Acesse `http://localhost:5173`.

Para gerar a build de produção:

```bash
npm run build
npm run preview   # opcional: testa a build localmente
```

## Estrutura do projeto

```
public/
  favicon.svg
  og-image.jpg
  video/hero.mp4        <- vídeo de fundo do hero
  img/                   <- fotos reais (instrutor, monitor, etc.)
src/
  data/content.js        <- TODO o conteúdo editável do site
  utils/lote.js           <- lógica de preço/lote e fallback de WhatsApp
  components/             <- um componente por seção
```

## O que editar no dia a dia — `src/data/content.js`

Este é o único arquivo que você deve editar para atualizar textos, preços,
datas e contatos. Nenhum componente precisa ser tocado.

### Trocar de lote

```js
export const LOTES = {
  loteAtivo: 1, // <-- MUDE AQUI: 1, 2 ou 3
  itens: { ... }
}
```

Quando o Lote 1 esgotar, mude para `2`; quando o Lote 2 esgotar, mude para
`3`. O site inteiro (hero, navbar, card de investimento, footer, CTA final)
atualiza sozinho: o lote anterior aparece riscado com o selo **ESGOTADO**, o
lote ativo aparece em destaque com o selo **LOTE ATUAL**, e o próximo lote
aparece com o selo **EM BREVE**.

### Colar os links de pagamento

Ainda em `LOTES.itens`, cada lote tem um campo `linkPagamento`:

```js
1: {
  nome: 'Lote 1 · 5 primeiras vagas',
  preco: 'R$ 2.199',
  linkPagamento: '[EDITAR: link de pagamento do Lote 1]',
},
```

Cole ali o link gerado pela sua plataforma de pagamento (Mercado Pago,
InfinitePay, PagSeguro ou qualquer link de checkout direto). **Enquanto o
campo começar com `[EDITAR`, os botões de compra caem automaticamente para o
WhatsApp** (ver `src/utils/lote.js`), então o site nunca fica com um botão
quebrado — você pode publicar antes mesmo de ter o link de pagamento pronto.

### Outros campos importantes

Todos em `src/data/content.js`:

- `CONTATO.email` — e-mail da ASV para o rodapé (`mailto:`).
- `CURSO.local` — endereço exato do curso em Belo Horizonte.
- `DEPOIMENTOS` — troque pelos depoimentos reais de ex-alunos assim que
  disponíveis (nome, cargo/clínica e a frase).
- `FAQ` — respostas de carga horária/entidade emissora do certificado.
- `CONTATO.whatsappUrl`, `instagramMarca`, `instagramInstrutor` — já
  preenchidos, ajuste se os links mudarem.

Campos ainda não preenchidos estão marcados com `[EDITAR: ...]` no próprio
arquivo — procure por `EDITAR` para achar todos de uma vez.

## Onde colocar as mídias

- **Vídeo do hero**: `public/video/hero.mp4` (já está lá — para trocar,
  substitua o arquivo mantendo o mesmo nome).
- **Foto do instrutor**: `public/img/instrutor-retrato.jpg`.
- **Imagens gerais**: `public/img/` — para trocar qualquer imagem, substitua
  o arquivo mantendo o nome, ou aponte o `src` no componente correspondente
  para um novo arquivo.
- **Imagem de Open Graph** (preview ao compartilhar o link):
  `public/og-image.jpg`.

## Regra de título do instrutor (não alterar)

O nome do instrutor deve **sempre** aparecer como "MV. Rafael Sobrinho de
Araújo" com a credencial "Pós-graduado em Anestesiologia Veterinária".
**Nunca** usar "Dr." nem "Esp.". Isso está centralizado em
`INSTRUTOR` dentro de `content.js`.

## Deploy (Vercel ou Netlify)

Este é um projeto Vite padrão — qualquer uma das duas plataformas detecta a
configuração automaticamente.

### Vercel

1. Suba o projeto para um repositório Git (GitHub/GitLab/Bitbucket).
2. Em [vercel.com](https://vercel.com), clique em "Add New… → Project" e
   importe o repositório.
3. Framework preset: **Vite**. Build command: `npm run build`. Output
   directory: `dist`. (A Vercel já preenche isso automaticamente.)
4. Deploy.

### Netlify

1. Suba o projeto para um repositório Git.
2. Em [app.netlify.com](https://app.netlify.com), "Add new site → Import an
   existing project" e selecione o repositório.
3. Build command: `npm run build`. Publish directory: `dist`.
4. Deploy.

Em ambas, cada novo `git push` na branch principal gera um novo deploy
automaticamente.

## Observação sobre o vídeo do hero

O arquivo de vídeo fornecido já contém, em si, uma marca d'água/texto
"Anestesia Segura VET" sobreposto na filmagem. Como o headline em HTML é
renderizado por cima do vídeo, pode haver sobreposição visual entre o texto
do vídeo e o texto do site em telas maiores. Vale revisar visualmente após o
deploy e, se necessário, usar uma versão do vídeo sem texto embutido.
