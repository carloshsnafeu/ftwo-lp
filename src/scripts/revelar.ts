import { animate, stagger } from "motion";

/**
 * Mecanismo único de entrada por scroll. Cada seção marca os elementos com
 * `data-revelar`; irmãos com o mesmo valor entram em cascata.
 *
 * Mola criticamente amortecida: entrada de conteúdo não carrega momento de
 * gesto, então repique aqui seria enfeite — e cada bloco anima uma vez só,
 * porque repetir na rolagem de volta vira ruído.
 */

const ENTRADA = { type: "spring", bounce: 0, visualDuration: 0.7 } as const;
const CASCATA = 0.1;
const DESLOCAMENTO = 26;

export function iniciarRevelacoes(raiz: ParentNode = document) {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const grupos = new Map<Element, HTMLElement[]>();

  raiz.querySelectorAll<HTMLElement>("[data-revelar]").forEach((el) => {
    const gatilho = el.closest<HTMLElement>("[data-revelar-grupo]") ?? el;
    const lista = grupos.get(gatilho);
    if (lista) lista.push(el);
    else grupos.set(gatilho, [el]);
  });

  const observador = new IntersectionObserver(
    (entradas) => {
      entradas.forEach((entrada) => {
        if (!entrada.isIntersecting) return;
        observador.unobserve(entrada.target);

        const alvos = grupos.get(entrada.target) ?? [];
        if (!alvos.length) return;

        animate(
          alvos,
          { opacity: [0, 1], y: [DESLOCAMENTO, 0] },
          { ...ENTRADA, delay: alvos.length > 1 ? stagger(CASCATA) : 0 }
        );
      });
    },
    { threshold: 0.2, rootMargin: "0px 0px -8% 0px" }
  );

  grupos.forEach((_, gatilho) => observador.observe(gatilho));
}
