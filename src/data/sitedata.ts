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
    /** Peças do portfólio. A ordem da lista é a ordem em que elas entram. */
    pecas: [
      { id: "banner", src: "/pecas/muzie-banner.webp", alt: "Campanha Muzie Essence" },
      { id: "cracha", src: "/pecas/cracha.webp", alt: "Crachá Comercial Nordestino" },
      { id: "tubo", src: "/pecas/muzie-tubo.webp", alt: "Sérum Muzie Essence" },
      { id: "camisa", src: "/pecas/camisa.webp", alt: "Uniforme Comercial Nordestino" },
      { id: "sobreira", src: "/pecas/sobreira.webp", alt: "Identidade Sobreira Advogados" },
    ],
  },

  contato: {
    telefone: "27 999601.1084",
    whatsapp: "5527999601084",
    site: "ftwo.com.br",
  },
} as const;

export type SiteData = typeof siteData;
