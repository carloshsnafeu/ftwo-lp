import type { APIRoute } from "astro";
import { siteData } from "../data/sitedata";

// Gerado a partir de siteData.indexavel para não existirem duas fontes de verdade.
export const GET: APIRoute = () => {
  const corpo = siteData.indexavel
    ? `User-agent: *\nAllow: /\n\nSitemap: ${siteData.url}/sitemap.xml\n`
    : `User-agent: *\nDisallow: /\n`;

  return new Response(corpo, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
