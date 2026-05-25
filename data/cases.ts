export interface CaseData {
  slug: string;
  title: string;
  location: string;
  category: string;
  area: string;
  phase: string;
  software: string;
  headline: string;
  challenge: string;
  solution: string;
  result: string;
  activities: string[];
  gallery: string[];

  coverImage: string;
}

export const cases: CaseData[] = [
  {
    slug: "santa-casa-marilia",

    title: "Santa Casa de Misericórdia de Marília",

    coverImage: "/projeto2.png",

    location: "Marília/SP",

    category: "Hospitalar",

    area: "1.894 m²",

    phase: "Projeto Executivo",

    software: "QiBuilder",

    headline:
      "Projetos elétricos, hidrossanitários e compatibilização BIM.",

    challenge:
      "O empreendimento hospitalar possuía elevada densidade de instalações elétricas e hidrossanitárias distribuídas em áreas técnicas e assistenciais. A coexistência de múltiplas disciplinas exigiu coordenação rigorosa para evitar interferências, reduzir retrabalho em obra e garantir a compatibilidade entre os sistemas previstos em projeto.",

    solution:
      "Desenvolvimento integrado dos projetos em ambiente BIM, permitindo a identificação antecipada de interferências, otimização dos espaços técnicos e geração de documentação executiva compatibilizada para a fase de obra.",

    result:
      "A compatibilização antecipada reduziu conflitos entre instalações,aumentou a confiabilidade das informações executivas e proporcionou maior eficiência durante a fase de execução, contribuindo para uma obra mais organizada e com menor necessidade de ajustes em campo.",

    activities: [
      "Modelagem BIM",
      "Compatibilização",
      "Coordenação técnica",
      "Documentação executiva"
    ],

    gallery: [
  "/eltscm.png",
  "/elt2scm.png",
  "/sntscm.png"
]
  },
  {
  slug: "residencia-alto-padrao",

  title: "Residência Alto Padrão",

  location: "Indaiatuba/SP",

  coverImage: "/projeto1.png",

  category: "Residencial Alto Padrão",

  area: "350 m²",

  phase: "Projeto Executivo",

  software: "QiBuilder",

  headline:
    "Projetos complementares desenvolvidos em ambiente BIM para garantir integração entre disciplinas, organização executiva e previsibilidade durante a construção.",

  challenge:
    "A residência apresentava elevado nível de detalhamento arquitetônico, múltiplos ambientes molhados, áreas de lazer e infraestrutura para equipamentos especiais. O principal desafio consistiu na coordenação entre sistemas elétricos, hidrossanitários e elementos arquitetônicos, garantindo compatibilidade técnica sem interferir na proposta estética do projeto.",

  solution:
    "Os projetos foram desenvolvidos integralmente em ambiente BIM, permitindo a modelagem coordenada das instalações, verificação antecipada de interferências e organização dos espaços técnicos. A compatibilização entre disciplinas possibilitou soluções mais eficientes para passagem de redes, posicionamento de equipamentos e definição da documentação executiva.",

  result:
    "A integração entre os projetos proporcionou maior previsibilidade durante a execução da obra, redução de ajustes em campo e documentação técnica organizada para apoio às equipes executoras. O processo contribuiu para uma construção mais eficiente, com melhor controle das instalações e menor ocorrência de interferências entre disciplinas.",

  activities: [
    "Projeto elétrico",
    "Projeto hidrossanitário",
    "Compatibilização BIM",
    "Modelagem 3D",
    "Documentação executiva"
  ],

  gallery: [
    "/residencialelt.png",
    "/residenciasnt.png",
    "/residenciahid.png"
  ]
},

{
  slug: "galpao-comercial",

  title: "Galpão Comercial",

  location: "Ribeirão Preto/SP",

  coverImage: "/projeto3.png",

  category: "Comercial",

  area: "540,24 m²",

  phase: "Projeto Executivo",

  software: "QiBuilder",

  headline:
    "Projetos complementares desenvolvidos em ambiente BIM para garantir integração entre disciplinas, organização executiva e maior previsibilidade durante a implantação da edificação.",

  challenge:
    "O empreendimento comercial apresentava grandes vãos estruturais, múltiplos pontos de atendimento e extensa infraestrutura de instalações elétricas e hidrossanitárias. O principal desafio consistiu na coordenação das redes técnicas, definição dos trajetos de distribuição e compatibilização entre sistemas para garantir funcionalidade, organização executiva e facilidade de manutenção futura.",

  solution:
    "Os projetos foram desenvolvidos integralmente em ambiente BIM, permitindo a modelagem coordenada das instalações, análise preventiva de interferências e organização estratégica das redes elétricas e hidrossanitárias. A compatibilização entre disciplinas proporcionou melhor aproveitamento dos espaços técnicos e documentação executiva mais clara para a fase de obra.",

  result:
    "A integração dos projetos permitiu maior previsibilidade durante a execução, redução de ajustes em campo e melhor coordenação entre as equipes envolvidas. O processo contribuiu para uma implantação mais eficiente das instalações, com documentação compatibilizada e maior confiabilidade das informações executivas.",

  activities: [
    "Projeto elétrico",
    "Projeto hidrossanitário",
    "Compatibilização BIM",
    "Modelagem 3D",
    "Documentação executiva"
  ],

  gallery: [
    "/galpao-eletrico.png",
    "/galpao-hidro.png",
    "/galpao-sanit.png"
  ]
}
];