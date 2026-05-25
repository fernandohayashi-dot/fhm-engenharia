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

    gallery: []
  },
  {
  slug: "residencia-alto-padrao",

  title: "Residência Alto Padrão",

  location: "São Paulo/SP",

  coverImage: "/projeto1.png",

  category: "Residencial",

  area: "850 m²",

  phase: "Projeto Executivo",

  software: "QiBuilder",

  headline:
    "Projetos hidrossanitários e compatibilização BIM.",

  challenge:
    "Coordenação entre arquitetura e instalações.",

  solution:
    "Modelagem BIM integrada.",

  result:
    "Maior previsibilidade de execução.",

  activities: [
    "Projeto hidrossanitário",
    "Compatibilização BIM"
  ],

  gallery: []
},

{
  slug: "galpao-comercial",

  title: "Galpão Comercial",

  location: "Ribeirão Preto/SP",

  coverImage: "/projeto3.png",

  category: "Comercial",

  area: "2.500 m²",

  phase: "Projeto Executivo",

  software: "QiBuilder",

  headline:
    "Projetos elétricos e coordenação multidisciplinar.",

  challenge:
    "Grande extensão de instalações.",

  solution:
    "Desenvolvimento integrado em BIM.",

  result:
    "Redução de interferências.",

  activities: [
    "Projeto elétrico",
    "Compatibilização BIM"
  ],

  gallery: []
}
];