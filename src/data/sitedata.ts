/**
 * Conteúdo editável do site.
 * Alterar os textos aqui reflete direto nas páginas — não é preciso mexer nos componentes.
 */

export const siteData = {
  meta: {
    title: "ftwo",
    description: "ftwo Digital — criatividade em movimento.",
    themeColor: "#000000",
  },

  hero: {
    logoAlt: "ftwo Digital",
    /** Cada item é uma linha da headline — a quebra é essa, não a da tela. */
    welcome: ["Bem-vindo", "ao futuro"],
  },

  contato: {
    telefone: "27 999601.1084",
    whatsapp: "5527999601084",
    site: "ftwo.com.br",
  },
} as const;

export type SiteData = typeof siteData;
