# Carlos Ambrizi — Portfólio & Cartão de Visitas Digital

[![Vercel](https://shields.io)](INSIRA_O_LINK_DO_VERCEL_AQUI)

Site pessoal e comercial desenvolvido com o objetivo de demonstrar sólida base em desenvolvimento front-end com tecnologia nativa da web, além de funcionar como ferramenta de captação de clientes para pequenos negócios locais.

## 🎯 Proposta do Projeto
O projeto foi desenhado sob duas perspectivas estratégicas:
1. **Recrutadores (Validação Técnica):** Demonstração de arquitetura limpa, lógica de programação pura, manipulação de API gráfica nativa e boas práticas de SEO/Acessibilidade sem dependência de frameworks.
2. **Clientes Freelancer (Conversão):** Estrutura de copy persuasiva com quebra de objeções tradicionais de contratação e CTA focado em conversão direta via WhatsApp.

---

## 🛠️ Stack Tecnológica
*   **Estrutura:** HTML5 semântico
*   **Estilização:** CSS3 nativo (Layouts com Flexbox/Grid, variáveis CSS, animações customizadas e responsividade completa)
*   **Interatividade:** JavaScript Vanilla (ES6+) — *Zero frameworks, zero build steps, zero dependências.*

---

## ⚡ Diferenciais Técnicos e Funcionalidades

### 🏎️ Mini-Game de Corrida (Canvas API)
Uma seção interativa com um jogo 2D desenvolvido inteiramente em `<canvas>`.
*   Controle de loop de renderização otimizado com `requestAnimationFrame`.
*   Lógica pura de detecção de colisão por caixas delimitadoras (Bounding Boxes).
*   Persistência de recordes local utilizando a API de `localStorage`.

### 📈 SEO Técnico & Performance
*   **SEO Avançado:** Implementação de Microdados e Dados Estruturados utilizando o vocabulário `schema.org/ProfessionalService` para melhor rankeamento local.
*   Presença de tags Open Graph e Twitter Cards para compartilhamento enriquecido em redes sociais.
*   Arquivos `robots.txt` e `sitemap.xml` estruturados manualmente.

### ♿ Acessibilidade e UX
*   **Animações Inteligentes:** Utilização da media query `prefers-reduced-motion` para desativar ou suavizar animações para usuários com sensibilidades visuais.
*   **Efeito Reveal:** Elementos surgem de forma fluida na tela utilizando a API nativa `IntersectionObserver`, garantindo performance superior em relação aos eventos tradicionais de scroll.

### 📱 Automação Comercial
*   Script inteligente em JS que intercepta o atributo customizado `data-wa-msg` em links e converte automaticamente em URLs dinâmicas codificadas para a API do WhatsApp, centralizando a gestão de mensagens em um único arquivo.

---

## 📁 Estrutura de Pastas
```text
.
├── index.html          # Estrutura semântica e conteúdo da aplicação
├── assets/
│   ├── css/
│   │   └── style.css   # Variáveis, tema dark/tech, responsividade e animações
│   ├── javascript/
│   │   └── script.js  # Lógica do jogo, IntersectionObserver e automação de links
│   └── images/         # Recursos visuais, og-image e capturas de projetos
├── robots.txt          # Regras para crawlers de busca
└── sitemap.xml         # Mapa do site otimizado para motores de busca
```

---
Feito com 💻 por [Carlos Ambrizi](https://github.com/ambriizi).
