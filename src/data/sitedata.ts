/**
 * Conteúdo editável do site.
 * Alterar os textos aqui reflete direto nas páginas — não é preciso mexer nos componentes.
 */

export const siteData = {
  /** Endereço final do site. Usado no canonical, no Open Graph e no sitemap. */
  url: "https://ftwo.com.br",

  /**
   * Libera o site para o Google. Enquanto estiver false, a página sai com
   * noindex e o robots.txt bloqueia tudo: o link funciona para mostrar ao
   * cliente, mas nada é indexado. Virar para true é o único passo para
   * publicar de vez.
   */
  indexavel: false,

  meta: {
    title: "FTWO Digital: marca, presença digital e tecnologia",
    description:
      "Marca, presença digital e tecnologia em um só parceiro. A FTWO existe para transformar esforço em crescimento sólido.",
    themeColor: "#000000",
  },

  hero: {
    logoAlt: "ftwo Digital",
    /** Cada item é uma linha da headline — a quebra é essa, não a da tela. */
    welcome: ["Bem-vindo", "ao futuro"],
  },

  problema: {
    etiqueta: "O ponto de virada",
    dado: ["6 em cada 10", "empresas brasileiras", "não sobrevivem 5 anos."],
    destaque: "Não é falta de ideia. É falta de estrutura.",
    apoio:
      "Você não precisa de mais um fornecedor, precisa de um parceiro que una marca, presença e tecnologia.",
  },

  manifesto: {
    etiqueta: "Quem é a FTWO",
    /**
     * Um texto corrido só, com três níveis de ênfase por trecho:
     * "conectivo" (apagado), "forte" (branco, peso alto) e "destaque"
     * (gradiente da marca). É isso que cria a hierarquia, não o tamanho.
     */
    texto: [
      { valor: "A FTWO existe para mudar essa equação: ", enfase: "conectivo" },
      { valor: "unir marca, presença digital e tecnologia", enfase: "forte" },
      {
        valor: " para que cada empresa não apenas sobreviva ao seu momento mais difícil, ",
        enfase: "conectivo",
      },
      { valor: "mas conquiste o futuro que veio buscar.", enfase: "destaque" },
    ],
    assinatura: "Reagir é futuro.",
    assinaturaApoio: "Vamos construí-lo juntos.",
  },

  servicos: {
    etiqueta: "O que fazemos",
    titulo: "Conheça nossos serviços",
    apoio:
      "Marca, presença e tecnologia sob o mesmo teto. A estrutura não depende de quatro fornecedores que não conversam entre si.",
    familias: [
      {
        id: "marca",
        nome: "Marca & Comunicação",
        itens: [
          {
            id: "branding",
            nome: "Marca & Branding",
            resumo: "Da estratégia de mercado ao brandbook, com a marca aplicada em tudo que o cliente toca.",
            /** Peças reais de portfólio. A ordem da lista é a ordem em que elas entram. */
            colagem: [
              { id: "banner", src: "/pecas/muzie-banner.webp", w: 852, h: 479, alt: "Campanha Muzie Essence" },
              { id: "cracha", src: "/pecas/cracha.webp", w: 210, h: 1003, alt: "Crachá Comercial Nordestino" },
              { id: "tubo", src: "/pecas/muzie-tubo.webp", w: 374, h: 363, alt: "Sérum Muzie Essence" },
              { id: "camisa", src: "/pecas/camisa.webp", w: 565, h: 473, alt: "Uniforme Comercial Nordestino" },
              { id: "sobreira", src: "/pecas/sobreira.webp", w: 375, h: 297, alt: "Identidade Sobreira Advogados" },
            ],
            lista: [
              "Mercado e estratégia",
              "Benchmarking",
              "Naming",
              "Identidade visual",
              "Rebranding",
              "Lançamento de produto",
              "Desenvolvimento de embalagens",
              "Desenvolvimento de papelaria",
              "Assets",
              "Site institucional",
              "Vídeo institucional",
              "Brandbook",
              "PDV",
              "Sinalização",
              "Mídia OFF",
            ],
          },
          {
            id: "social",
            nome: "Redes Sociais & Growth",
            resumo: "Planejamento, produção e mídia paga, com relatório de resultados. Não só postagem.",
            imagem: { src: "/mockups/social-celular.webp", w: 761, h: 1345, alt: "Perfil Muzie Essence no Instagram" },
            lista: [
              "Planejamento estratégico",
              "Cronograma mensal",
              "Social ads, META e LinkedIn",
              "Influencer marketing",
              "Business intelligence",
              "Data analytics",
              "Funil de vendas",
              "Produção de vídeo",
              "Edição",
              "Google Ads",
              "Blog",
              "Live, transmissões e Live Shop",
              "TikTok",
              "Relatório de resultados",
            ],
          },
          {
            id: "crm",
            nome: "CRM, Vendas & Campanhas",
            resumo: "A ponte entre a campanha e o time comercial: prospecção, CRM estruturado e analytics.",
            lista: [
              "Prospecção",
              "Estratégia de CRM",
              "Estruturação do CRM",
              "Campanhas de vendas",
              "Campanhas integradas ON e OFF",
              "Inbound",
              "Configuração de plataformas",
              "Analytics",
              "Social listening",
              "E-mail marketing",
            ],
          },
          {
            id: "seo",
            nome: "SEO",
            resumo: "Estrutura técnica e conteúdo para o site aparecer quando o cliente procura.",
            imagem: { src: "/mockups/seo-laptop.webp", w: 1201, h: 1145, alt: "Site institucional desenvolvido pela FTWO" },
            lista: [
              "Pesquisa de palavras-chave",
              "Planejamento da estrutura do site",
              "SEO técnico",
              "Otimização de páginas e conteúdos",
              "Configuração do Google Search Console",
              "Integração com Google Analytics",
              "SEO local e Perfil da Empresa no Google",
              "Melhorias de velocidade e experiência do usuário",
              "Correção de problemas de indexação",
              "Produção ou orientação de conteúdo",
              "Relatórios de desempenho e acompanhamento mensal",
            ],
          },
        ],
      },
      {
        id: "tecnologia",
        nome: "Tecnologia",
        itens: [
          {
            id: "sistemas",
            nome: "Sistemas sob medida",
            resumo: "Quando a operação não cabe mais em planilha e nenhum sistema de prateleira serve.",
            lista: [
              "Gestão de usuários, equipes e permissões",
              "Cadastros e fluxos operacionais",
              "Controle financeiro e cobranças",
              "Contratos, documentos e checklists",
              "Dashboards e indicadores",
              "Portais para clientes, colaboradores e fornecedores",
              "Sistemas administrativos e operacionais",
              "Plataformas de gestão específicas para cada segmento",
            ],
          },
          {
            id: "sites",
            nome: "Sites e presença digital",
            resumo: "Do institucional à página de campanha, com domínio, hospedagem e manutenção inclusos.",
            lista: [
              "Sites institucionais",
              "Landing pages",
              "Páginas de vendas",
              "Portais corporativos",
              "Catálogos digitais",
              "Sites para campanhas e eventos",
              "Integração com WhatsApp, formulários e ferramentas comerciais",
              "Hospedagem, domínio, segurança e manutenção",
            ],
          },
          {
            id: "plataformas",
            nome: "Plataformas e produtos digitais",
            resumo: "Para quem tem um produto digital a lançar, inclusive o MVP para validar antes.",
            lista: [
              "Plataformas SaaS",
              "Sistemas por assinatura",
              "Marketplaces",
              "Ambientes de membros",
              "Portais personalizados",
              "Plataformas de eventos",
              "Sistemas de reservas, inscrições ou atendimento",
              "MVPs para validar novas ideias de negócio",
            ],
          },
          {
            id: "mobile",
            nome: "Aplicativos e soluções mobile",
            resumo: "Android e iOS, para o cliente final ou para o time em campo.",
            lista: [
              "Aplicativos Android e iOS",
              "Aplicativos internos para equipes",
              "Versões mobile de sistemas",
              "Aplicativos para clientes",
              "Checklists e registros em campo",
              "Notificações e acompanhamento de solicitações",
              "Aplicativos integrados a sistemas web",
            ],
          },
          {
            id: "integracoes",
            nome: "Integrações e automações",
            resumo: "Tirar da mão o que hoje é copiar e colar entre sistemas.",
            lista: [
              "Integração com sistemas de pagamento",
              "Emissão e acompanhamento de cobranças",
              "Integração com WhatsApp, e-mail e APIs",
              "Sincronização de informações entre sistemas",
              "Automação de tarefas administrativas",
              "Geração automática de documentos e relatórios",
              "Alertas e notificações",
              "Digitalização de processos antes realizados em planilhas",
            ],
          },
          {
            id: "ia",
            nome: "Inteligência artificial aplicada aos negócios",
            resumo: "IA onde ela resolve um problema real da operação, integrada aos sistemas que construímos.",
            lista: [
              "Assistentes internos",
              "Agentes de atendimento",
              "Consulta inteligente a documentos e manuais",
              "Análise de históricos e ocorrências",
              "Apoio à tomada de decisão",
              "Geração e classificação de informações",
              "Automação de atividades repetitivas",
              "IA integrada aos sistemas desenvolvidos pela FTWO",
            ],
          },
          {
            id: "hardware",
            nome: "Digitalização de operações com hardware",
            resumo: "Quando o dado precisa sair do mundo físico: sensores, dispositivos e painéis.",
            lista: [
              "Sensores e dispositivos conectados",
              "Coleta automática de dados",
              "Controle de abastecimento e consumo",
              "Monitoramento de equipamentos",
              "Painéis de acompanhamento",
              "Integração entre hardware, sistema e aplicativo",
              "Desenvolvimento de protótipos e provas de conceito",
            ],
          },
        ],
      },
      {
        id: "suporte",
        nome: "Consultoria & Suporte",
        itens: [
          {
            id: "consultoria",
            nome: "Consultoria e planejamento de soluções",
            resumo: "Antes de construir, entender: diagnóstico, escopo e estimativa antes do primeiro código.",
            lista: [
              "Diagnóstico do problema",
              "Mapeamento de processos",
              "Levantamento de requisitos",
              "Definição do escopo",
              "Planejamento das funcionalidades",
              "Criação de protótipos",
              "Arquitetura da solução",
              "Estimativa de investimento e cronograma",
            ],
          },
          {
            id: "suporte",
            nome: "Suporte, evolução e infraestrutura",
            resumo: "O que mantém de pé, e evoluindo, tudo que foi entregue.",
            lista: [
              "Correções e suporte técnico",
              "Atualizações",
              "Novas funcionalidades",
              "Monitoramento dos sistemas",
              "Hospedagem e publicação",
              "Backups",
              "Segurança",
              "Manutenção preventiva",
              "Acompanhamento mensal",
            ],
          },
        ],
      },
    ],
  },

  cronograma: {
    etiqueta: "Como trabalhamos",
    titulo: "Crono_grama",
    etapas: [
      { nome: "Imersão Técnica", apoio: "empresa | produto | serviço | equipe" },
      { nome: "Diagnóstico", apoio: "empresa | produto | serviço | equipe" },
      { nome: "FTWO DO", apoio: "nossas entregas" },
      { nome: "Follow", apoio: "nossas entregas" },
      { nome: "Análise de Resultados", apoio: "nossas entregas" },
    ],
  },

  time: {
    /** Desligada por enquanto. Virar para true religa a seção no site. */
    ativo: false,
    etiqueta: "Quem faz",
    titulo: "Gente, não fornecedor",
    pessoas: [
      {
        nome: "Carlos Henrique F.",
        cargo: "Diretor de Tecnologia e Inovação",
        foto: "/mockups/time-carlos.webp",
        fotoW: 720,
        fotoH: 720,
        bio: [
          "Meu propósito é claro: estruturar empresa. Através de soluções digitais completas, unindo marketing e programação em um só lugar.",
          "Especialista em linguagens como Java, Kotlin, Python e JavaScript, e já atuei em projetos que vão desde integração com APIs até a criação de interfaces pensadas para a experiência do usuário final.",
        ],
      },
      {
        nome: "Barbara F.",
        cargo: "Diretora Criativa | Especialista em mercado",
        foto: "/mockups/time-barbara.webp",
        fotoW: 720,
        fotoH: 720,
        bio: [
          "Meu papel é conectar a visão de negócio dos nossos clientes às soluções certas, seja uma campanha, uma identidade visual ou um sistema sob medida.",
          "Sempre com o compromisso de ser a consistência que ajuda pequenas e médias empresas a atravessarem essa fase mais difícil e chegarem mais fortes do outro lado.",
        ],
      },
    ],
  },

  planos: {
    etiqueta: "Condição de lançamento",
    titulo: "Comece pelas redes sociais",
    apoio:
      "Não sabe por onde começar, não compreende o universo do marketing, ou quer testar nosso serviço.",
    itens: [
      {
        nome: "Spark",
        para: "Empresa em fase de estruturação, ainda validando marca e presença digital. São 12 peças.",
        inclui: [
          "Planejamento estratégico",
          "Gestão de redes sociais (1-2 plataformas)",
          "8 posts feed",
          "4 stories",
          "Relatório de resultados",
        ],
      },
      {
        nome: "Flame",
        destaque: true,
        para: "Empresa em fase de estruturação, ainda validando marca e presença digital. São 16 peças.",
        inclui: [
          "Planejamento estratégico",
          "Gestão de redes sociais (1-2 plataformas)",
          "12 posts feed",
          "4 stories",
          "Relatório de resultados",
        ],
      },
      {
        nome: "Fire",
        para: "Empresa em fase de estruturação, ainda validando marca e presença digital. São 16 peças mais vídeo.",
        inclui: [
          "Planejamento estratégico",
          "Gestão de redes sociais (1-2 plataformas)",
          "12 posts feed",
          "4 stories",
          "2 vídeos",
          "Relatório de resultados",
        ],
      },
    ],
    nota: "Condição válida somente para redes sociais.",
  },

  contato: {
    etiqueta: "Vamos conversar?",
    titulo: ["Reagir é futuro.", "Vamos construí-lo juntos."],
    apoio: "Preencha seus dados e fale agora com a gente. Sem compromisso, sem enrolação.",
    telefone: "27 999601.1084",
    whatsapp: "5527999601084",
    /** Mensagem do botão flutuante de WhatsApp, presente em todo o site. */
    mensagemFlutuante: "Olá! Vim pelo site da FTWO e quero conversar sobre um projeto.",
    site: "ftwo.com.br",
    botao: "Falar com a FTWO",
    disclaimer: "Ao enviar, você será direcionado ao WhatsApp da FTWO com seus dados preenchidos.",
    campos: [
      { name: "nome", label: "Nome", placeholder: "Seu nome completo", type: "text", autocomplete: "name" },
      { name: "telefone", label: "Telefone", placeholder: "(00) 00000-0000", type: "tel", autocomplete: "tel" },
      { name: "email", label: "E-mail", placeholder: "voce@empresa.com", type: "email", autocomplete: "email" },
      { name: "cnpj", label: "CNPJ", placeholder: "00.000.000/0000-00", type: "text", autocomplete: "off" },
    ],
  },
} as const;

export type SiteData = typeof siteData;
