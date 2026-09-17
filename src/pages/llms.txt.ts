import type { APIRoute } from "astro";
import { siteData } from "../data/sitedata";

// Resumo em texto simples para rastreadores de IA (padrão llms.txt). Gerado
// a partir do mesmo siteData que a página usa, então nunca fica desatualizado
// nem diz nada que não esteja visível no site.
export const GET: APIRoute = () => {
  if (!siteData.indexavel) {
    const corpo = `# ${siteData.meta.title}\n\nEste site ainda não foi publicado.\n`;
    return new Response(corpo, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
  }

  const servicos = siteData.servicos.familias
    .map((familia) => {
      const itens = familia.itens.map((item) => `- ${item.nome}: ${item.resumo}`).join("\n");
      return `## ${familia.nome}\n${itens}`;
    })
    .join("\n\n");

  const etapas = siteData.cronograma.etapas.map((etapa, i) => `${i + 1}. ${etapa.nome}`).join("\n");

  const corpo = `# ${siteData.meta.title}

> ${siteData.meta.description}

${siteData.manifesto.texto.map((t) => t.valor).join("")}

${siteData.manifesto.assinatura} ${siteData.manifesto.assinaturaApoio}

## Serviços

${servicos}

## Como a FTWO trabalha

${etapas}

## Contato

- WhatsApp: https://wa.me/${siteData.contato.whatsapp}
- E-mail: ${siteData.contato.email}
- Site: ${siteData.url}
`;

  return new Response(corpo, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
