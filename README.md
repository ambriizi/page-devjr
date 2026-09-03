# Carlos Ambrizi — Portfólio & Cartão de Visitas Digital

Site pessoal de Carlos Ambrizi, desenvolvedor front-end. Funciona como portfólio (para recrutadores) e como cartão de visitas para captar clientes de pequenos negócios locais.

**Stack:** HTML5, CSS3 e JavaScript puro — sem frameworks, sem build step. Abra o `index.html` e está rodando.

---

## Estrutura do projeto

```
.
├── index.html                    # estrutura e conteúdo da página
├── assets/
│   ├── css/
│   │   └── style.css             # todo o visual (tema dark/tech, animações, responsividade)
│   ├── javascript/
│   │   └── script.js             # interatividade (menu, animações, jogo, WhatsApp)
│   └── images/                   # imagens do site (ex: og-image, fotos de projetos)
├── robots.txt                    # indexação para buscadores
└── sitemap.xml                   # mapa do site para SEO
```

## Seções da página

| Seção | O que faz |
|---|---|
| Hero | Nome com animação de onda letra a letra + CTA duplo (orçamento / portfólio) |
| Sobre Mim | Copy persuasivo, chips de credibilidade e CTA direto |
| Corrida no Circuito | Mini-game em `<canvas>` (desvie dos obstáculos) — demonstra domínio de Canvas API, `requestAnimationFrame` e detecção de colisão |
| Serviços | O que está incluso em um projeto, com CTA de fechamento |
| Como Funciona | Processo em 3 passos para reduzir a objeção de quem nunca contratou um freelancer |
| Portfólio | Projetos reais entregues, links abrem em nova aba |
| Depoimentos | Avaliações de clientes (aguardando conteúdo real) |
| Rodapé | Redes sociais (Instagram, GitHub, LinkedIn) |

## Funcionalidades técnicas

- **Menu mobile** com toggle hambúrguer (`@media max-width: 768px`)
- **Animação de revelo ao rolar** via `IntersectionObserver`, com fallback para navegadores antigos
- **Nome animado** — cada letra vira um `<span>` com `animation-delay` escalonado
- **Mini-game de corrida** — canvas 2D, faixas, obstáculos, pontuação e recorde salvo em `localStorage`
- **WhatsApp com mensagem pronta** — todo link com atributo `data-wa-msg` é transformado em `https://wa.me/NUMERO?text=mensagem-codificada` pelo `script.js`
- **`prefers-reduced-motion`** respeitado nas animações
- **SEO técnico**: meta description, Open Graph, Twitter Card, dados estruturados (`schema.org/ProfessionalService`), `robots.txt` e `sitemap.xml`

---

Feito por Carlos Ambrizi.
