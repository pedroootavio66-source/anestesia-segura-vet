// ============================================================================
// CONTEÚDO CENTRALIZADO — ANESTESIA SEGURA VET (ASV)
// Edite este arquivo para atualizar preço, datas, contatos, tópicos e FAQ.
// Nenhum outro arquivo precisa ser tocado para ajustes de conteúdo.
// ============================================================================

// Campos marcados com "[EDITAR]" ainda precisam ser preenchidos pelo Rafael.
export const CONTATO = {
  whatsappNumero: '5531987497152',
  whatsappUrl:
    'https://wa.me/5531987497152?text=Ol%C3%A1!%20Tenho%20interesse%20no%20curso%20Anestesia%20Segura%20VET%20(13%2C%2014%20e%2015%20de%20novembro%2C%20em%20BH).%20Pode%20me%20enviar%20mais%20informa%C3%A7%C3%B5es%3F',
  email: 'anestesiaseguravet@gmail.com',
  instagramMarca: 'https://www.instagram.com/anestesiaseguravet/',
  instagramMarcaHandle: '@anestesiaseguravet',
  instagramInstrutor: 'https://www.instagram.com/rafaelsobrinho.a/',
  instagramInstrutorHandle: '@rafaelsobrinho.a',
  cidade: 'Belo Horizonte – MG',
};

export const CURSO = {
  nome: 'Anestesia Segura VET',
  nomeCurso: 'Curso Avançado de Anestesiologia Veterinária',
  datas: '13, 14 e 15 de novembro',
  datasLongo: '13, 14 e 15 de novembro (sexta, sábado e domingo)',
  local: '[EDITAR: endereço exato] · Belo Horizonte – MG',
  totalVagas: 18,
};

// ── Lotes progressivos ──────────────────────────────────────────────────
// Mude "loteAtivo" (1, 2 ou 3) quando um lote esgotar. O resto da página
// (hero, selo, botões, card de investimento) atualiza sozinho.
export const LOTES = {
  loteAtivo: 1,
  itens: {
    1: {
      nome: 'Lote 1 · 5 primeiras vagas',
      preco: 'R$ 2.199',
      linkPagamento: 'https://link.infinitepay.io/larissa-paola-4p5/VC1DLTEtSQ-yTJ1wNUwIc-2199,00',
    },
    2: {
      nome: 'Lote 2 · vagas 6 a 10',
      preco: 'R$ 2.349',
      linkPagamento: '[EDITAR: link de pagamento do Lote 2]',
    },
    3: {
      nome: 'Lote 3 · vagas restantes',
      preco: 'R$ 2.499',
      linkPagamento: '[EDITAR: link de pagamento do Lote 3]',
    },
  },
};

export const NAV_LINKS = [
  { href: '#sobre-asv', label: 'Sobre' },
  { href: '#diferenciais', label: 'Diferenciais' },
  { href: '#cronograma', label: 'Cronograma' },
  { href: '#instrutor', label: 'Instrutor' },
  { href: '#investimento', label: 'Investimento' },
  { href: '#faq', label: 'FAQ' },
];

export const DIRETRIZES = ['WSAVA', 'RECOVER', 'ACVAA / ECVAA', 'AAHA', 'ACVIM'];

export const MISSAO = {
  eyebrow: 'POR QUE ESTE CURSO EXISTE',
  titulo: 'A anestesia é o momento de maior risco evitável na rotina clínica',
  paragrafos: [
    'Grande parte das intercorrências anestésicas em pequenos animais é evitável — depende de base teórica sólida, monitorização atenta e decisão treinada sob pressão, não de sorte.',
    'A ASV existe para formar veterinários seguros e confiantes diante da mesa cirúrgica, unindo ciência atual à prática real: você sai daqui operando, não apenas assistindo.',
  ],
};

// ── Diferenciais: como a ASV forma o aluno ─────────────────────────────
// icon: nome de um ícone da lib lucide-react (mapeado nos componentes)
export const DIFERENCIAIS = [
  {
    icon: 'Layers',
    titulo: 'Progressão única',
    descricao: 'Teoria → prática em cadáver → paciente vivo. Cada etapa prepara você para a próxima.',
  },
  {
    icon: 'ShieldCheck',
    titulo: 'Diretrizes atuais',
    descricao: 'Conteúdo ancorado em WSAVA, RECOVER, ACVAA/ECVAA, AAHA e ACVIM — nada de protocolo defasado.',
  },
  {
    icon: 'HandHeart',
    titulo: 'Prática hands-on real',
    descricao: 'Você aplica bloqueios, monitora e conduz casos. Ninguém aprende anestesia só assistindo.',
  },
  {
    icon: 'Users',
    titulo: 'Turmas reduzidas',
    descricao: 'Acompanhamento próximo do instrutor em cada etapa prática, do cadáver ao paciente vivo.',
  },
  {
    icon: 'Activity',
    titulo: 'Monitorização & emergências',
    descricao: 'Hemodinâmica, manejo de choque e RCCP segundo o protocolo RECOVER.',
  },
  {
    icon: 'Crosshair',
    titulo: 'Bloqueios locorregionais',
    descricao: 'Técnicas guiadas por ultrassom, com reconhecimento anatômico e repetição de gesto técnico.',
  },
];

// ── Cronograma dos 3 dias ───────────────────────────────────────────────
export const CRONOGRAMA = [
  {
    id: 'sexta',
    dia: '01/03',
    label: 'Sexta',
    data: `13/11 · ${CURSO.local.includes('EDITAR') ? 'Belo Horizonte – MG' : CURSO.local}`,
    titulo: 'Teórico',
    selo: 'Dia 1 · Teoria',
    topicos: [
      'Fisiologia cardiorrespiratória',
      'Farmacologia na anestesiologia',
      'Exames e monitorização',
      'Equipamentos anestésicos',
      'Medicação pré-anestésica',
      'Indução anestésica',
      'Manutenção anestésica',
      'Controle de dor perioperatório',
      'Anestesia inalatória',
      'Anestesia total intravenosa',
      'Bloqueios ecoguiados e bloqueios às cegas',
      'Manejo anestésico por tipos de procedimentos cirúrgicos',
      'Manejo do paciente hipotenso',
      'Reanimação cérebro-cardiopulmonar (RCCP)',
      'Ventilação mecânica',
      'Anestesia em pacientes especiais (cardiopatas, nefropatas, endocrinopatas, hepatopatas)',
      'Sedação ambulatorial',
      'Cateter venoso central',
      'Complicações anestésicas e suas reintervenções',
    ],
  },
  {
    id: 'sabado',
    dia: '02/03',
    label: 'Sábado',
    data: '14/11 · Prática em cadáver',
    titulo: 'Prática em cadáver',
    selo: 'Dia 2 · Cadáver',
    topicos: [
      'Conhecendo os equipamentos anestésicos',
      'Manuseio de bomba de infusão',
      'Interpretando o monitor e o ventilador',
      'Desmistificando as contas de infusão contínua',
      'Técnicas de intubação (orotraqueal, punção cricotireoidea, cricotireoidostomia)',
      'Punção venosa e arterial',
      'Drenos e sondas',
      'Bloqueio de face',
      'Bloqueios ecoguiados',
      'Bloqueio peridural',
      'RCCP',
    ],
  },
  {
    id: 'domingo',
    dia: '03/03',
    label: 'Domingo',
    data: '15/11 · Paciente vivo',
    titulo: 'Prática em pacientes vivos',
    selo: 'Dia 3 · Paciente vivo',
    topicos: [
      'Separação em grupos, com discussão de exames, condutas e manuseio perioperatório do paciente',
      'Realização de todo o processo anestésico do paciente sob supervisão',
      'Prática com ventilação mecânica e ventilação espontânea',
      'Monitorização do paciente vivo',
    ],
  },
];

// ── Para quem é ──────────────────────────────────────────────────────────
export const PARA_QUEM = [
  {
    icon: 'Stethoscope',
    titulo: 'Clínico geral',
    descricao: 'Quer mais segurança e autonomia na hora de anestesiar.',
  },
  {
    icon: 'GraduationCap',
    titulo: 'Residente / recém-formado',
    descricao: 'Busca consolidar fundamentos com prática supervisionada real.',
  },
  {
    icon: 'BookOpen',
    titulo: 'Especialista',
    descricao: 'Quer atualização com diretrizes internacionais e evidências atuais.',
  },
  {
    icon: 'HeartPulse',
    titulo: 'Foco em monitorização',
    descricao: 'Quer dominar monitorização hemodinâmica e emergências anestésicas.',
  },
];

// ── O que você vai dominar ──────────────────────────────────────────────
export const O_QUE_VAI_DOMINAR = [
  'Monitorização hemodinâmica avançada',
  'Manejo de choque no paciente anestesiado',
  'Escalas de dor: CMPS-SF e UFEPS-SF',
  'TIVA (anestesia total intravenosa) em gatos',
  'Ventilação mecânica',
  'Bloqueios locorregionais guiados por ultrassom',
  'Emergências anestésicas',
  'RCCP / protocolo RECOVER',
];

export const INSTRUTOR = {
  nome: 'MV. Rafael Sobrinho de Araújo',
  credencial: 'Pós-graduado em Anestesiologia Veterinária',
  crmv: 'CRMV-MG 28077',
  bio: 'Especialista em anestesia de pequenos animais (cães e gatos), com atuação dividida entre a rotina clínica e a educação veterinária através da ASV.',
  tags: ['Clínica', 'Educação (ASV)'],
  foto: '/img/instrutor-retrato.jpg',
};

export const INVESTIMENTO = {
  eyebrow: 'INVESTIMENTO',
  titulo: 'Garanta sua vaga no lote atual',
  subtitulo: `${CURSO.totalVagas} vagas no total, divididas em 3 lotes progressivos.`,
  incluso: [
    'Material didático completo',
    'Certificado de participação',
    'Prática hands-on em cadáver e pacientes vivos',
    'Coffee break nos 3 dias',
  ],
  microTexto: 'Atendimento direto pelo WhatsApp',
};

// ── FAQ ──────────────────────────────────────────────────────────────────
export const FAQ = [
  {
    pergunta: 'Onde será o curso?',
    resposta:
      'Em Belo Horizonte – MG. O endereço exato ainda está sendo definido e será divulgado em breve nos canais oficiais da ASV e no próprio site.',
  },
  {
    pergunta: 'Quais são as datas do curso?',
    resposta: `O curso acontece nos dias ${CURSO.datasLongo}, em formato presencial e intensivo.`,
  },
  {
    pergunta: 'Preciso de pré-requisito?',
    resposta:
      'O curso é voltado a médicos-veterinários formados e estudantes avançados de Medicina Veterinária. Não é necessário ser especialista em anestesiologia para participar.',
  },
  {
    pergunta: 'O que está incluso?',
    resposta:
      'Material didático completo, certificado de participação, prática hands-on em cadáver e em pacientes vivos, e coffee break nos 3 dias.',
  },
  {
    pergunta: 'Como recebo o certificado?',
    resposta:
      'Todos os participantes recebem certificado de participação ao final do curso. [EDITAR: carga horária total e entidade emissora, se aplicável.]',
  },
  {
    pergunta: 'O que devo levar?',
    resposta:
      'Você precisa trazer apenas sapato fechado. A roupa cirúrgica, as canetas, os blocos de anotações e os demais materiais ficam por nossa conta.',
  },
  {
    pergunta: 'Posso parcelar?',
    resposta:
      'Sim. O pagamento é feito online, com opções de parcelamento no cartão. Ao clicar em "Garantir minha vaga" você é direcionado para o link de pagamento do lote atual.',
  },
  {
    pergunta: 'Posso pagar com Pix?',
    resposta: 'Sim. Para pagamento via Pix, entre em contato diretamente pelo WhatsApp.',
  },
];
