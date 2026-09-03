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

## Antes de publicar — checklist

Substitua os placeholders abaixo pelo conteúdo real:

- [ ] `SEU-DOMINIO-AQUI.com.br` — no `<head>` do `index.html`, no `robots.txt` e no `sitemap.xml`, pelo domínio real
- [ ] `og-image.jpg` — criar uma imagem 1200×630px e salvar em `assets/images/`; depois ajuste o caminho nas tags `og:image` e `twitter:image` no `<head>` do `index.html`
- [ ] Número de WhatsApp (`5511981029372`) — trocar em `assets/javascript/script.js` (`WHATSAPP_NUMBER`), único lugar que precisa mudar
- [ ] Links de Instagram, GitHub e LinkedIn (`seu-usuario`) no rodapé
- [ ] Links `#` no Portfólio — trocar pelas URLs reais dos próximos projetos
- [ ] Seção de Depoimentos — preencher com avaliações reais de clientes (evite depoimentos genéricos ou duplicados)

## Como rodar localmente

Não precisa de servidor nem instalação. Duas opções:

1. Dar duplo clique no `index.html` (abre direto no navegador)
2. Ou, com Python instalado, rodar um servidor local para testar como ficaria publicado:
   ```bash
   python3 -m http.server 8000
   ```
   e acessar `http://localhost:8000`

## Deploy

Como é HTML/CSS/JS puro, funciona em qualquer hospedagem estática gratuita:
- **GitHub Pages** — bom para o portfólio, já que reforça seu perfil de dev
- **Vercel** ou **Netlify** — deploy automático a cada `git push`, inclui HTTPS grátis

Depois de publicar, envie a URL para o [Google Search Console](https://search.google.com/search-console) para acelerar a indexação.

---

Feito por Carlos Ambrizi.
